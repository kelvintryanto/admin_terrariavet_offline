import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

console.log('🚀 seed.ts mulai dijalankan');

async function main() {
  try {
    // Contoh data dummy user
    const user = await prisma.user.create({
      data: {
        id: '11111111-1111-1111-1111-111111111111', // contoh UUID v4 dummy
        name: 'superadmin',
        role: 'superadmin',
        password: 'hashed_password_dummy', // nanti diganti dengan hasil hash asli
        email: 'superadmin@example.com',
      },
    });

    console.log('✅ Dummy user superadmin created:', user);
  } catch (error) {
    console.error('❌ Error di main function:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
