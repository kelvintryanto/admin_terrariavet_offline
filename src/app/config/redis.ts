import Redis from 'ioredis';

/**
 * Redis connection manager that implements a singleton pattern
 * and handles auto-disconnection on idle and reconnection on demand
 */
class RedisConnectionManager {
  private static instance: RedisConnectionManager;
  private client: Redis | null = null;
  private idleTimer: NodeJS.Timeout | null = null;
  private idleTimeoutMs = 300000; // 5 minutes idle timeout

  private constructor() {}

  public static getInstance(): RedisConnectionManager {
    if (!RedisConnectionManager.instance) {
      RedisConnectionManager.instance = new RedisConnectionManager();
    }
    return RedisConnectionManager.instance;
  }

  /**
   * Get Redis client - creates a new connection if one doesn't exist
   */
  public getClient(): Redis {
    // Reset idle timer on each access
    this.resetIdleTimer();

    // Create new client if none exists
    if (!this.client) {
      console.log('[Redis] Creating new connection');
      this.client = new Redis({
        port: Number(process.env.REDIS_PORT),
        host: process.env.REDIS_HOST || 'localhost',
        username: process.env.REDIS_USERNAME || 'default',
        password: process.env.REDIS_PASSWORD || '',
        db: 0,
        lazyConnect: true,
        enableAutoPipelining: true,
        keepAlive: 1000,
        retryStrategy: (times) => {
          // Exponential backoff for reconnection attempts
          const delay = Math.min(times * 50, 2000);
          return delay;
        },
      });

      // Handle connection events
      this.client.on('connect', () => {
        console.log('[Redis] Connected successfully');
      });

      this.client.on('error', (err) => {
        console.error('[Redis] Connection error:', err);
      });

      this.client.on('end', () => {
        console.log('[Redis] Connection closed');
      });
    }

    return this.client;
  }

  /**
   * Reset the idle timer - called on each client access
   */
  private resetIdleTimer(): void {
    // Clear any existing timer
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }

    // Set new timer for auto-disconnection
    this.idleTimer = setTimeout(() => {
      this.disconnect();
    }, this.idleTimeoutMs);
  }

  /**
   * Disconnect client when idle
   */
  private disconnect(): void {
    if (this.client && this.client.status === 'ready') {
      console.log('[Redis] Disconnecting due to inactivity');
      this.client.quit().catch((err) => {
        console.error('[Redis] Error during disconnection:', err);
      });
      this.client = null;
    }
  }
}

// Create proxy to handle auto-connection
const redisManager = RedisConnectionManager.getInstance();
const redis = new Proxy({} as Redis, {
  get: (target, prop) => {
    const client = redisManager.getClient();
    const value = client[prop as keyof Redis];

    if (typeof value === 'function') {
      // Return a proxied function that will be executed on the client
      return function (...args: unknown[]) {
        return (value as (...args: unknown[]) => unknown).apply(client, args);
      };
    }

    return value;
  },
});

export default redis;
