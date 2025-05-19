
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Breed
 * 
 */
export type Breed = $Result.DefaultSelection<Prisma.$BreedPayload>
/**
 * Model Dog
 * 
 */
export type Dog = $Result.DefaultSelection<Prisma.$DogPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Diagnose
 * 
 */
export type Diagnose = $Result.DefaultSelection<Prisma.$DiagnosePayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model InvoiceService
 * 
 */
export type InvoiceService = $Result.DefaultSelection<Prisma.$InvoiceServicePayload>
/**
 * Model InvoiceProduct
 * 
 */
export type InvoiceProduct = $Result.DefaultSelection<Prisma.$InvoiceProductPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Sex: {
  male: 'male',
  female: 'female'
};

export type Sex = (typeof Sex)[keyof typeof Sex]


export const CategoryType: {
  product: 'product',
  service: 'service'
};

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType]


export const TreatmentType: {
  rawatInap: 'rawatInap',
  rawatJalan: 'rawatJalan'
};

export type TreatmentType = (typeof TreatmentType)[keyof typeof TreatmentType]


export const PaymentMethod: {
  Cash: 'Cash',
  Transfer: 'Transfer',
  KartuKredit: 'KartuKredit',
  Qris: 'Qris',
  Gopay: 'Gopay',
  Other: 'Other'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

}

export type Sex = $Enums.Sex

export const Sex: typeof $Enums.Sex

export type CategoryType = $Enums.CategoryType

export const CategoryType: typeof $Enums.CategoryType

export type TreatmentType = $Enums.TreatmentType

export const TreatmentType: typeof $Enums.TreatmentType

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.breed`: Exposes CRUD operations for the **Breed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Breeds
    * const breeds = await prisma.breed.findMany()
    * ```
    */
  get breed(): Prisma.BreedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dog`: Exposes CRUD operations for the **Dog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dogs
    * const dogs = await prisma.dog.findMany()
    * ```
    */
  get dog(): Prisma.DogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnose`: Exposes CRUD operations for the **Diagnose** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnoses
    * const diagnoses = await prisma.diagnose.findMany()
    * ```
    */
  get diagnose(): Prisma.DiagnoseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceService`: Exposes CRUD operations for the **InvoiceService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceServices
    * const invoiceServices = await prisma.invoiceService.findMany()
    * ```
    */
  get invoiceService(): Prisma.InvoiceServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceProduct`: Exposes CRUD operations for the **InvoiceProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceProducts
    * const invoiceProducts = await prisma.invoiceProduct.findMany()
    * ```
    */
  get invoiceProduct(): Prisma.InvoiceProductDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Customer: 'Customer',
    Breed: 'Breed',
    Dog: 'Dog',
    Category: 'Category',
    Service: 'Service',
    Product: 'Product',
    Diagnose: 'Diagnose',
    Invoice: 'Invoice',
    InvoiceService: 'InvoiceService',
    InvoiceProduct: 'InvoiceProduct'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "customer" | "breed" | "dog" | "category" | "service" | "product" | "diagnose" | "invoice" | "invoiceService" | "invoiceProduct"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Breed: {
        payload: Prisma.$BreedPayload<ExtArgs>
        fields: Prisma.BreedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BreedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BreedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedPayload>
          }
          findFirst: {
            args: Prisma.BreedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BreedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedPayload>
          }
          findMany: {
            args: Prisma.BreedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedPayload>[]
          }
          create: {
            args: Prisma.BreedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedPayload>
          }
          createMany: {
            args: Prisma.BreedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BreedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedPayload>[]
          }
          delete: {
            args: Prisma.BreedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedPayload>
          }
          update: {
            args: Prisma.BreedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedPayload>
          }
          deleteMany: {
            args: Prisma.BreedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BreedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BreedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedPayload>[]
          }
          upsert: {
            args: Prisma.BreedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreedPayload>
          }
          aggregate: {
            args: Prisma.BreedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBreed>
          }
          groupBy: {
            args: Prisma.BreedGroupByArgs<ExtArgs>
            result: $Utils.Optional<BreedGroupByOutputType>[]
          }
          count: {
            args: Prisma.BreedCountArgs<ExtArgs>
            result: $Utils.Optional<BreedCountAggregateOutputType> | number
          }
        }
      }
      Dog: {
        payload: Prisma.$DogPayload<ExtArgs>
        fields: Prisma.DogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>
          }
          findFirst: {
            args: Prisma.DogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>
          }
          findMany: {
            args: Prisma.DogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>[]
          }
          create: {
            args: Prisma.DogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>
          }
          createMany: {
            args: Prisma.DogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>[]
          }
          delete: {
            args: Prisma.DogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>
          }
          update: {
            args: Prisma.DogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>
          }
          deleteMany: {
            args: Prisma.DogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>[]
          }
          upsert: {
            args: Prisma.DogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>
          }
          aggregate: {
            args: Prisma.DogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDog>
          }
          groupBy: {
            args: Prisma.DogGroupByArgs<ExtArgs>
            result: $Utils.Optional<DogGroupByOutputType>[]
          }
          count: {
            args: Prisma.DogCountArgs<ExtArgs>
            result: $Utils.Optional<DogCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Diagnose: {
        payload: Prisma.$DiagnosePayload<ExtArgs>
        fields: Prisma.DiagnoseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnoseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnoseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosePayload>
          }
          findFirst: {
            args: Prisma.DiagnoseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnoseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosePayload>
          }
          findMany: {
            args: Prisma.DiagnoseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosePayload>[]
          }
          create: {
            args: Prisma.DiagnoseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosePayload>
          }
          createMany: {
            args: Prisma.DiagnoseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiagnoseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosePayload>[]
          }
          delete: {
            args: Prisma.DiagnoseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosePayload>
          }
          update: {
            args: Prisma.DiagnoseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosePayload>
          }
          deleteMany: {
            args: Prisma.DiagnoseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnoseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiagnoseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosePayload>[]
          }
          upsert: {
            args: Prisma.DiagnoseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosePayload>
          }
          aggregate: {
            args: Prisma.DiagnoseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnose>
          }
          groupBy: {
            args: Prisma.DiagnoseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnoseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnoseCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnoseCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      InvoiceService: {
        payload: Prisma.$InvoiceServicePayload<ExtArgs>
        fields: Prisma.InvoiceServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceServicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceServicePayload>
          }
          findMany: {
            args: Prisma.InvoiceServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceServicePayload>[]
          }
          create: {
            args: Prisma.InvoiceServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceServicePayload>
          }
          createMany: {
            args: Prisma.InvoiceServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceServicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceServicePayload>
          }
          update: {
            args: Prisma.InvoiceServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceServicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceServicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceServicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceService>
          }
          groupBy: {
            args: Prisma.InvoiceServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceServiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceServiceCountAggregateOutputType> | number
          }
        }
      }
      InvoiceProduct: {
        payload: Prisma.$InvoiceProductPayload<ExtArgs>
        fields: Prisma.InvoiceProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>
          }
          findFirst: {
            args: Prisma.InvoiceProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>
          }
          findMany: {
            args: Prisma.InvoiceProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>[]
          }
          create: {
            args: Prisma.InvoiceProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>
          }
          createMany: {
            args: Prisma.InvoiceProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>[]
          }
          delete: {
            args: Prisma.InvoiceProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>
          }
          update: {
            args: Prisma.InvoiceProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>[]
          }
          upsert: {
            args: Prisma.InvoiceProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceProductPayload>
          }
          aggregate: {
            args: Prisma.InvoiceProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceProduct>
          }
          groupBy: {
            args: Prisma.InvoiceProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceProductCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceProductCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    customer?: CustomerOmit
    breed?: BreedOmit
    dog?: DogOmit
    category?: CategoryOmit
    service?: ServiceOmit
    product?: ProductOmit
    diagnose?: DiagnoseOmit
    invoice?: InvoiceOmit
    invoiceService?: InvoiceServiceOmit
    invoiceProduct?: InvoiceProductOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    dog: number
    Diagnose: number
    invoice: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dog?: boolean | CustomerCountOutputTypeCountDogArgs
    Diagnose?: boolean | CustomerCountOutputTypeCountDiagnoseArgs
    invoice?: boolean | CustomerCountOutputTypeCountInvoiceArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DogWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountDiagnoseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnoseWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type BreedCountOutputType
   */

  export type BreedCountOutputType = {
    dog: number
  }

  export type BreedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dog?: boolean | BreedCountOutputTypeCountDogArgs
  }

  // Custom InputTypes
  /**
   * BreedCountOutputType without action
   */
  export type BreedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreedCountOutputType
     */
    select?: BreedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BreedCountOutputType without action
   */
  export type BreedCountOutputTypeCountDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DogWhereInput
  }


  /**
   * Count Type DogCountOutputType
   */

  export type DogCountOutputType = {
    diagnose: number
    invoice: number
  }

  export type DogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnose?: boolean | DogCountOutputTypeCountDiagnoseArgs
    invoice?: boolean | DogCountOutputTypeCountInvoiceArgs
  }

  // Custom InputTypes
  /**
   * DogCountOutputType without action
   */
  export type DogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DogCountOutputType
     */
    select?: DogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DogCountOutputType without action
   */
  export type DogCountOutputTypeCountDiagnoseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnoseWhereInput
  }

  /**
   * DogCountOutputType without action
   */
  export type DogCountOutputTypeCountInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    service: number
    product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | CategoryCountOutputTypeCountServiceArgs
    product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    invoice: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | ServiceCountOutputTypeCountInvoiceArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceServiceWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    invoice: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | ProductCountOutputTypeCountInvoiceArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceProductWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    invoiceService: number
    invoiceProduct: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoiceService?: boolean | InvoiceCountOutputTypeCountInvoiceServiceArgs
    invoiceProduct?: boolean | InvoiceCountOutputTypeCountInvoiceProductArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountInvoiceServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceServiceWhereInput
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountInvoiceProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: string | null
    password: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: string | null
    password: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    password: number
    profileImage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    password?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    name: string
    role: string
    password: string
    profileImage: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    password?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "password" | "profileImage" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      name: string
      role: string
      password: string
      profileImage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    joinDate: Date | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    joinDate: Date | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    joinDate: number
    profileImage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    joinDate?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    joinDate?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    joinDate?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string
    address: string
    joinDate: Date
    profileImage: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    joinDate?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dog?: boolean | Customer$dogArgs<ExtArgs>
    Diagnose?: boolean | Customer$DiagnoseArgs<ExtArgs>
    invoice?: boolean | Customer$invoiceArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    joinDate?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    joinDate?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    joinDate?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "joinDate" | "profileImage" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dog?: boolean | Customer$dogArgs<ExtArgs>
    Diagnose?: boolean | Customer$DiagnoseArgs<ExtArgs>
    invoice?: boolean | Customer$invoiceArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      dog: Prisma.$DogPayload<ExtArgs>[]
      Diagnose: Prisma.$DiagnosePayload<ExtArgs>[]
      invoice: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string
      address: string
      joinDate: Date
      profileImage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dog<T extends Customer$dogArgs<ExtArgs> = {}>(args?: Subset<T, Customer$dogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Diagnose<T extends Customer$DiagnoseArgs<ExtArgs> = {}>(args?: Subset<T, Customer$DiagnoseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoice<T extends Customer$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, Customer$invoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly joinDate: FieldRef<"Customer", 'DateTime'>
    readonly profileImage: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.dog
   */
  export type Customer$dogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    where?: DogWhereInput
    orderBy?: DogOrderByWithRelationInput | DogOrderByWithRelationInput[]
    cursor?: DogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DogScalarFieldEnum | DogScalarFieldEnum[]
  }

  /**
   * Customer.Diagnose
   */
  export type Customer$DiagnoseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseInclude<ExtArgs> | null
    where?: DiagnoseWhereInput
    orderBy?: DiagnoseOrderByWithRelationInput | DiagnoseOrderByWithRelationInput[]
    cursor?: DiagnoseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnoseScalarFieldEnum | DiagnoseScalarFieldEnum[]
  }

  /**
   * Customer.invoice
   */
  export type Customer$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Breed
   */

  export type AggregateBreed = {
    _count: BreedCountAggregateOutputType | null
    _min: BreedMinAggregateOutputType | null
    _max: BreedMaxAggregateOutputType | null
  }

  export type BreedMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BreedMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BreedCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BreedMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BreedMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BreedCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BreedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breed to aggregate.
     */
    where?: BreedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breeds to fetch.
     */
    orderBy?: BreedOrderByWithRelationInput | BreedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BreedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Breeds
    **/
    _count?: true | BreedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BreedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BreedMaxAggregateInputType
  }

  export type GetBreedAggregateType<T extends BreedAggregateArgs> = {
        [P in keyof T & keyof AggregateBreed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBreed[P]>
      : GetScalarType<T[P], AggregateBreed[P]>
  }




  export type BreedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreedWhereInput
    orderBy?: BreedOrderByWithAggregationInput | BreedOrderByWithAggregationInput[]
    by: BreedScalarFieldEnum[] | BreedScalarFieldEnum
    having?: BreedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BreedCountAggregateInputType | true
    _min?: BreedMinAggregateInputType
    _max?: BreedMaxAggregateInputType
  }

  export type BreedGroupByOutputType = {
    id: string
    name: string
    _count: BreedCountAggregateOutputType | null
    _min: BreedMinAggregateOutputType | null
    _max: BreedMaxAggregateOutputType | null
  }

  type GetBreedGroupByPayload<T extends BreedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BreedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BreedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BreedGroupByOutputType[P]>
            : GetScalarType<T[P], BreedGroupByOutputType[P]>
        }
      >
    >


  export type BreedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dog?: boolean | Breed$dogArgs<ExtArgs>
    _count?: boolean | BreedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breed"]>

  export type BreedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["breed"]>

  export type BreedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["breed"]>

  export type BreedSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BreedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["breed"]>
  export type BreedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dog?: boolean | Breed$dogArgs<ExtArgs>
    _count?: boolean | BreedCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BreedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BreedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BreedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Breed"
    objects: {
      dog: Prisma.$DogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["breed"]>
    composites: {}
  }

  type BreedGetPayload<S extends boolean | null | undefined | BreedDefaultArgs> = $Result.GetResult<Prisma.$BreedPayload, S>

  type BreedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BreedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BreedCountAggregateInputType | true
    }

  export interface BreedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Breed'], meta: { name: 'Breed' } }
    /**
     * Find zero or one Breed that matches the filter.
     * @param {BreedFindUniqueArgs} args - Arguments to find a Breed
     * @example
     * // Get one Breed
     * const breed = await prisma.breed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BreedFindUniqueArgs>(args: SelectSubset<T, BreedFindUniqueArgs<ExtArgs>>): Prisma__BreedClient<$Result.GetResult<Prisma.$BreedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Breed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BreedFindUniqueOrThrowArgs} args - Arguments to find a Breed
     * @example
     * // Get one Breed
     * const breed = await prisma.breed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BreedFindUniqueOrThrowArgs>(args: SelectSubset<T, BreedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BreedClient<$Result.GetResult<Prisma.$BreedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Breed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedFindFirstArgs} args - Arguments to find a Breed
     * @example
     * // Get one Breed
     * const breed = await prisma.breed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BreedFindFirstArgs>(args?: SelectSubset<T, BreedFindFirstArgs<ExtArgs>>): Prisma__BreedClient<$Result.GetResult<Prisma.$BreedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Breed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedFindFirstOrThrowArgs} args - Arguments to find a Breed
     * @example
     * // Get one Breed
     * const breed = await prisma.breed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BreedFindFirstOrThrowArgs>(args?: SelectSubset<T, BreedFindFirstOrThrowArgs<ExtArgs>>): Prisma__BreedClient<$Result.GetResult<Prisma.$BreedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Breeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Breeds
     * const breeds = await prisma.breed.findMany()
     * 
     * // Get first 10 Breeds
     * const breeds = await prisma.breed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const breedWithIdOnly = await prisma.breed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BreedFindManyArgs>(args?: SelectSubset<T, BreedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Breed.
     * @param {BreedCreateArgs} args - Arguments to create a Breed.
     * @example
     * // Create one Breed
     * const Breed = await prisma.breed.create({
     *   data: {
     *     // ... data to create a Breed
     *   }
     * })
     * 
     */
    create<T extends BreedCreateArgs>(args: SelectSubset<T, BreedCreateArgs<ExtArgs>>): Prisma__BreedClient<$Result.GetResult<Prisma.$BreedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Breeds.
     * @param {BreedCreateManyArgs} args - Arguments to create many Breeds.
     * @example
     * // Create many Breeds
     * const breed = await prisma.breed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BreedCreateManyArgs>(args?: SelectSubset<T, BreedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Breeds and returns the data saved in the database.
     * @param {BreedCreateManyAndReturnArgs} args - Arguments to create many Breeds.
     * @example
     * // Create many Breeds
     * const breed = await prisma.breed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Breeds and only return the `id`
     * const breedWithIdOnly = await prisma.breed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BreedCreateManyAndReturnArgs>(args?: SelectSubset<T, BreedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Breed.
     * @param {BreedDeleteArgs} args - Arguments to delete one Breed.
     * @example
     * // Delete one Breed
     * const Breed = await prisma.breed.delete({
     *   where: {
     *     // ... filter to delete one Breed
     *   }
     * })
     * 
     */
    delete<T extends BreedDeleteArgs>(args: SelectSubset<T, BreedDeleteArgs<ExtArgs>>): Prisma__BreedClient<$Result.GetResult<Prisma.$BreedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Breed.
     * @param {BreedUpdateArgs} args - Arguments to update one Breed.
     * @example
     * // Update one Breed
     * const breed = await prisma.breed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BreedUpdateArgs>(args: SelectSubset<T, BreedUpdateArgs<ExtArgs>>): Prisma__BreedClient<$Result.GetResult<Prisma.$BreedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Breeds.
     * @param {BreedDeleteManyArgs} args - Arguments to filter Breeds to delete.
     * @example
     * // Delete a few Breeds
     * const { count } = await prisma.breed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BreedDeleteManyArgs>(args?: SelectSubset<T, BreedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Breeds
     * const breed = await prisma.breed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BreedUpdateManyArgs>(args: SelectSubset<T, BreedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Breeds and returns the data updated in the database.
     * @param {BreedUpdateManyAndReturnArgs} args - Arguments to update many Breeds.
     * @example
     * // Update many Breeds
     * const breed = await prisma.breed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Breeds and only return the `id`
     * const breedWithIdOnly = await prisma.breed.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BreedUpdateManyAndReturnArgs>(args: SelectSubset<T, BreedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Breed.
     * @param {BreedUpsertArgs} args - Arguments to update or create a Breed.
     * @example
     * // Update or create a Breed
     * const breed = await prisma.breed.upsert({
     *   create: {
     *     // ... data to create a Breed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Breed we want to update
     *   }
     * })
     */
    upsert<T extends BreedUpsertArgs>(args: SelectSubset<T, BreedUpsertArgs<ExtArgs>>): Prisma__BreedClient<$Result.GetResult<Prisma.$BreedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Breeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedCountArgs} args - Arguments to filter Breeds to count.
     * @example
     * // Count the number of Breeds
     * const count = await prisma.breed.count({
     *   where: {
     *     // ... the filter for the Breeds we want to count
     *   }
     * })
    **/
    count<T extends BreedCountArgs>(
      args?: Subset<T, BreedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BreedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Breed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BreedAggregateArgs>(args: Subset<T, BreedAggregateArgs>): Prisma.PrismaPromise<GetBreedAggregateType<T>>

    /**
     * Group by Breed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BreedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BreedGroupByArgs['orderBy'] }
        : { orderBy?: BreedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BreedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Breed model
   */
  readonly fields: BreedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Breed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BreedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dog<T extends Breed$dogArgs<ExtArgs> = {}>(args?: Subset<T, Breed$dogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Breed model
   */
  interface BreedFieldRefs {
    readonly id: FieldRef<"Breed", 'String'>
    readonly name: FieldRef<"Breed", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Breed findUnique
   */
  export type BreedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breed
     */
    select?: BreedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breed
     */
    omit?: BreedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedInclude<ExtArgs> | null
    /**
     * Filter, which Breed to fetch.
     */
    where: BreedWhereUniqueInput
  }

  /**
   * Breed findUniqueOrThrow
   */
  export type BreedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breed
     */
    select?: BreedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breed
     */
    omit?: BreedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedInclude<ExtArgs> | null
    /**
     * Filter, which Breed to fetch.
     */
    where: BreedWhereUniqueInput
  }

  /**
   * Breed findFirst
   */
  export type BreedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breed
     */
    select?: BreedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breed
     */
    omit?: BreedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedInclude<ExtArgs> | null
    /**
     * Filter, which Breed to fetch.
     */
    where?: BreedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breeds to fetch.
     */
    orderBy?: BreedOrderByWithRelationInput | BreedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breeds.
     */
    cursor?: BreedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breeds.
     */
    distinct?: BreedScalarFieldEnum | BreedScalarFieldEnum[]
  }

  /**
   * Breed findFirstOrThrow
   */
  export type BreedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breed
     */
    select?: BreedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breed
     */
    omit?: BreedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedInclude<ExtArgs> | null
    /**
     * Filter, which Breed to fetch.
     */
    where?: BreedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breeds to fetch.
     */
    orderBy?: BreedOrderByWithRelationInput | BreedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Breeds.
     */
    cursor?: BreedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Breeds.
     */
    distinct?: BreedScalarFieldEnum | BreedScalarFieldEnum[]
  }

  /**
   * Breed findMany
   */
  export type BreedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breed
     */
    select?: BreedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breed
     */
    omit?: BreedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedInclude<ExtArgs> | null
    /**
     * Filter, which Breeds to fetch.
     */
    where?: BreedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Breeds to fetch.
     */
    orderBy?: BreedOrderByWithRelationInput | BreedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Breeds.
     */
    cursor?: BreedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Breeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Breeds.
     */
    skip?: number
    distinct?: BreedScalarFieldEnum | BreedScalarFieldEnum[]
  }

  /**
   * Breed create
   */
  export type BreedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breed
     */
    select?: BreedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breed
     */
    omit?: BreedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedInclude<ExtArgs> | null
    /**
     * The data needed to create a Breed.
     */
    data: XOR<BreedCreateInput, BreedUncheckedCreateInput>
  }

  /**
   * Breed createMany
   */
  export type BreedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Breeds.
     */
    data: BreedCreateManyInput | BreedCreateManyInput[]
  }

  /**
   * Breed createManyAndReturn
   */
  export type BreedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breed
     */
    select?: BreedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Breed
     */
    omit?: BreedOmit<ExtArgs> | null
    /**
     * The data used to create many Breeds.
     */
    data: BreedCreateManyInput | BreedCreateManyInput[]
  }

  /**
   * Breed update
   */
  export type BreedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breed
     */
    select?: BreedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breed
     */
    omit?: BreedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedInclude<ExtArgs> | null
    /**
     * The data needed to update a Breed.
     */
    data: XOR<BreedUpdateInput, BreedUncheckedUpdateInput>
    /**
     * Choose, which Breed to update.
     */
    where: BreedWhereUniqueInput
  }

  /**
   * Breed updateMany
   */
  export type BreedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Breeds.
     */
    data: XOR<BreedUpdateManyMutationInput, BreedUncheckedUpdateManyInput>
    /**
     * Filter which Breeds to update
     */
    where?: BreedWhereInput
    /**
     * Limit how many Breeds to update.
     */
    limit?: number
  }

  /**
   * Breed updateManyAndReturn
   */
  export type BreedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breed
     */
    select?: BreedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Breed
     */
    omit?: BreedOmit<ExtArgs> | null
    /**
     * The data used to update Breeds.
     */
    data: XOR<BreedUpdateManyMutationInput, BreedUncheckedUpdateManyInput>
    /**
     * Filter which Breeds to update
     */
    where?: BreedWhereInput
    /**
     * Limit how many Breeds to update.
     */
    limit?: number
  }

  /**
   * Breed upsert
   */
  export type BreedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breed
     */
    select?: BreedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breed
     */
    omit?: BreedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedInclude<ExtArgs> | null
    /**
     * The filter to search for the Breed to update in case it exists.
     */
    where: BreedWhereUniqueInput
    /**
     * In case the Breed found by the `where` argument doesn't exist, create a new Breed with this data.
     */
    create: XOR<BreedCreateInput, BreedUncheckedCreateInput>
    /**
     * In case the Breed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BreedUpdateInput, BreedUncheckedUpdateInput>
  }

  /**
   * Breed delete
   */
  export type BreedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breed
     */
    select?: BreedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breed
     */
    omit?: BreedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedInclude<ExtArgs> | null
    /**
     * Filter which Breed to delete.
     */
    where: BreedWhereUniqueInput
  }

  /**
   * Breed deleteMany
   */
  export type BreedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Breeds to delete
     */
    where?: BreedWhereInput
    /**
     * Limit how many Breeds to delete.
     */
    limit?: number
  }

  /**
   * Breed.dog
   */
  export type Breed$dogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    where?: DogWhereInput
    orderBy?: DogOrderByWithRelationInput | DogOrderByWithRelationInput[]
    cursor?: DogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DogScalarFieldEnum | DogScalarFieldEnum[]
  }

  /**
   * Breed without action
   */
  export type BreedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Breed
     */
    select?: BreedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Breed
     */
    omit?: BreedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreedInclude<ExtArgs> | null
  }


  /**
   * Model Dog
   */

  export type AggregateDog = {
    _count: DogCountAggregateOutputType | null
    _avg: DogAvgAggregateOutputType | null
    _sum: DogSumAggregateOutputType | null
    _min: DogMinAggregateOutputType | null
    _max: DogMaxAggregateOutputType | null
  }

  export type DogAvgAggregateOutputType = {
    birthYear: number | null
    birthMonth: number | null
    weight: number | null
  }

  export type DogSumAggregateOutputType = {
    birthYear: number | null
    birthMonth: number | null
    weight: number | null
  }

  export type DogMinAggregateOutputType = {
    id: string | null
    name: string | null
    breedId: string | null
    customBreed: string | null
    birthYear: number | null
    birthMonth: number | null
    color: string | null
    weight: number | null
    sex: $Enums.Sex | null
    lastVaccineDate: Date | null
    lastDewormDate: Date | null
    profileImage: string | null
    customerId: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DogMaxAggregateOutputType = {
    id: string | null
    name: string | null
    breedId: string | null
    customBreed: string | null
    birthYear: number | null
    birthMonth: number | null
    color: string | null
    weight: number | null
    sex: $Enums.Sex | null
    lastVaccineDate: Date | null
    lastDewormDate: Date | null
    profileImage: string | null
    customerId: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DogCountAggregateOutputType = {
    id: number
    name: number
    breedId: number
    customBreed: number
    birthYear: number
    birthMonth: number
    color: number
    weight: number
    sex: number
    lastVaccineDate: number
    lastDewormDate: number
    profileImage: number
    customerId: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DogAvgAggregateInputType = {
    birthYear?: true
    birthMonth?: true
    weight?: true
  }

  export type DogSumAggregateInputType = {
    birthYear?: true
    birthMonth?: true
    weight?: true
  }

  export type DogMinAggregateInputType = {
    id?: true
    name?: true
    breedId?: true
    customBreed?: true
    birthYear?: true
    birthMonth?: true
    color?: true
    weight?: true
    sex?: true
    lastVaccineDate?: true
    lastDewormDate?: true
    profileImage?: true
    customerId?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DogMaxAggregateInputType = {
    id?: true
    name?: true
    breedId?: true
    customBreed?: true
    birthYear?: true
    birthMonth?: true
    color?: true
    weight?: true
    sex?: true
    lastVaccineDate?: true
    lastDewormDate?: true
    profileImage?: true
    customerId?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DogCountAggregateInputType = {
    id?: true
    name?: true
    breedId?: true
    customBreed?: true
    birthYear?: true
    birthMonth?: true
    color?: true
    weight?: true
    sex?: true
    lastVaccineDate?: true
    lastDewormDate?: true
    profileImage?: true
    customerId?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dog to aggregate.
     */
    where?: DogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dogs to fetch.
     */
    orderBy?: DogOrderByWithRelationInput | DogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dogs
    **/
    _count?: true | DogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DogMaxAggregateInputType
  }

  export type GetDogAggregateType<T extends DogAggregateArgs> = {
        [P in keyof T & keyof AggregateDog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDog[P]>
      : GetScalarType<T[P], AggregateDog[P]>
  }




  export type DogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DogWhereInput
    orderBy?: DogOrderByWithAggregationInput | DogOrderByWithAggregationInput[]
    by: DogScalarFieldEnum[] | DogScalarFieldEnum
    having?: DogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DogCountAggregateInputType | true
    _avg?: DogAvgAggregateInputType
    _sum?: DogSumAggregateInputType
    _min?: DogMinAggregateInputType
    _max?: DogMaxAggregateInputType
  }

  export type DogGroupByOutputType = {
    id: string
    name: string
    breedId: string
    customBreed: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date
    lastDewormDate: Date
    profileImage: string | null
    customerId: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: DogCountAggregateOutputType | null
    _avg: DogAvgAggregateOutputType | null
    _sum: DogSumAggregateOutputType | null
    _min: DogMinAggregateOutputType | null
    _max: DogMaxAggregateOutputType | null
  }

  type GetDogGroupByPayload<T extends DogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DogGroupByOutputType[P]>
            : GetScalarType<T[P], DogGroupByOutputType[P]>
        }
      >
    >


  export type DogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    breedId?: boolean
    customBreed?: boolean
    birthYear?: boolean
    birthMonth?: boolean
    color?: boolean
    weight?: boolean
    sex?: boolean
    lastVaccineDate?: boolean
    lastDewormDate?: boolean
    profileImage?: boolean
    customerId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    breed?: boolean | BreedDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    diagnose?: boolean | Dog$diagnoseArgs<ExtArgs>
    invoice?: boolean | Dog$invoiceArgs<ExtArgs>
    _count?: boolean | DogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dog"]>

  export type DogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    breedId?: boolean
    customBreed?: boolean
    birthYear?: boolean
    birthMonth?: boolean
    color?: boolean
    weight?: boolean
    sex?: boolean
    lastVaccineDate?: boolean
    lastDewormDate?: boolean
    profileImage?: boolean
    customerId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    breed?: boolean | BreedDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dog"]>

  export type DogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    breedId?: boolean
    customBreed?: boolean
    birthYear?: boolean
    birthMonth?: boolean
    color?: boolean
    weight?: boolean
    sex?: boolean
    lastVaccineDate?: boolean
    lastDewormDate?: boolean
    profileImage?: boolean
    customerId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    breed?: boolean | BreedDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dog"]>

  export type DogSelectScalar = {
    id?: boolean
    name?: boolean
    breedId?: boolean
    customBreed?: boolean
    birthYear?: boolean
    birthMonth?: boolean
    color?: boolean
    weight?: boolean
    sex?: boolean
    lastVaccineDate?: boolean
    lastDewormDate?: boolean
    profileImage?: boolean
    customerId?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "breedId" | "customBreed" | "birthYear" | "birthMonth" | "color" | "weight" | "sex" | "lastVaccineDate" | "lastDewormDate" | "profileImage" | "customerId" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["dog"]>
  export type DogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    breed?: boolean | BreedDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    diagnose?: boolean | Dog$diagnoseArgs<ExtArgs>
    invoice?: boolean | Dog$invoiceArgs<ExtArgs>
    _count?: boolean | DogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    breed?: boolean | BreedDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type DogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    breed?: boolean | BreedDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $DogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dog"
    objects: {
      breed: Prisma.$BreedPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      diagnose: Prisma.$DiagnosePayload<ExtArgs>[]
      invoice: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      breedId: string
      customBreed: string | null
      birthYear: number
      birthMonth: number
      color: string
      weight: number
      sex: $Enums.Sex
      lastVaccineDate: Date
      lastDewormDate: Date
      profileImage: string | null
      customerId: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dog"]>
    composites: {}
  }

  type DogGetPayload<S extends boolean | null | undefined | DogDefaultArgs> = $Result.GetResult<Prisma.$DogPayload, S>

  type DogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DogCountAggregateInputType | true
    }

  export interface DogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dog'], meta: { name: 'Dog' } }
    /**
     * Find zero or one Dog that matches the filter.
     * @param {DogFindUniqueArgs} args - Arguments to find a Dog
     * @example
     * // Get one Dog
     * const dog = await prisma.dog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DogFindUniqueArgs>(args: SelectSubset<T, DogFindUniqueArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DogFindUniqueOrThrowArgs} args - Arguments to find a Dog
     * @example
     * // Get one Dog
     * const dog = await prisma.dog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DogFindUniqueOrThrowArgs>(args: SelectSubset<T, DogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogFindFirstArgs} args - Arguments to find a Dog
     * @example
     * // Get one Dog
     * const dog = await prisma.dog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DogFindFirstArgs>(args?: SelectSubset<T, DogFindFirstArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogFindFirstOrThrowArgs} args - Arguments to find a Dog
     * @example
     * // Get one Dog
     * const dog = await prisma.dog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DogFindFirstOrThrowArgs>(args?: SelectSubset<T, DogFindFirstOrThrowArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dogs
     * const dogs = await prisma.dog.findMany()
     * 
     * // Get first 10 Dogs
     * const dogs = await prisma.dog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dogWithIdOnly = await prisma.dog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DogFindManyArgs>(args?: SelectSubset<T, DogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dog.
     * @param {DogCreateArgs} args - Arguments to create a Dog.
     * @example
     * // Create one Dog
     * const Dog = await prisma.dog.create({
     *   data: {
     *     // ... data to create a Dog
     *   }
     * })
     * 
     */
    create<T extends DogCreateArgs>(args: SelectSubset<T, DogCreateArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dogs.
     * @param {DogCreateManyArgs} args - Arguments to create many Dogs.
     * @example
     * // Create many Dogs
     * const dog = await prisma.dog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DogCreateManyArgs>(args?: SelectSubset<T, DogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dogs and returns the data saved in the database.
     * @param {DogCreateManyAndReturnArgs} args - Arguments to create many Dogs.
     * @example
     * // Create many Dogs
     * const dog = await prisma.dog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dogs and only return the `id`
     * const dogWithIdOnly = await prisma.dog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DogCreateManyAndReturnArgs>(args?: SelectSubset<T, DogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dog.
     * @param {DogDeleteArgs} args - Arguments to delete one Dog.
     * @example
     * // Delete one Dog
     * const Dog = await prisma.dog.delete({
     *   where: {
     *     // ... filter to delete one Dog
     *   }
     * })
     * 
     */
    delete<T extends DogDeleteArgs>(args: SelectSubset<T, DogDeleteArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dog.
     * @param {DogUpdateArgs} args - Arguments to update one Dog.
     * @example
     * // Update one Dog
     * const dog = await prisma.dog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DogUpdateArgs>(args: SelectSubset<T, DogUpdateArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dogs.
     * @param {DogDeleteManyArgs} args - Arguments to filter Dogs to delete.
     * @example
     * // Delete a few Dogs
     * const { count } = await prisma.dog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DogDeleteManyArgs>(args?: SelectSubset<T, DogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dogs
     * const dog = await prisma.dog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DogUpdateManyArgs>(args: SelectSubset<T, DogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dogs and returns the data updated in the database.
     * @param {DogUpdateManyAndReturnArgs} args - Arguments to update many Dogs.
     * @example
     * // Update many Dogs
     * const dog = await prisma.dog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dogs and only return the `id`
     * const dogWithIdOnly = await prisma.dog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DogUpdateManyAndReturnArgs>(args: SelectSubset<T, DogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dog.
     * @param {DogUpsertArgs} args - Arguments to update or create a Dog.
     * @example
     * // Update or create a Dog
     * const dog = await prisma.dog.upsert({
     *   create: {
     *     // ... data to create a Dog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dog we want to update
     *   }
     * })
     */
    upsert<T extends DogUpsertArgs>(args: SelectSubset<T, DogUpsertArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogCountArgs} args - Arguments to filter Dogs to count.
     * @example
     * // Count the number of Dogs
     * const count = await prisma.dog.count({
     *   where: {
     *     // ... the filter for the Dogs we want to count
     *   }
     * })
    **/
    count<T extends DogCountArgs>(
      args?: Subset<T, DogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DogAggregateArgs>(args: Subset<T, DogAggregateArgs>): Prisma.PrismaPromise<GetDogAggregateType<T>>

    /**
     * Group by Dog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DogGroupByArgs['orderBy'] }
        : { orderBy?: DogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dog model
   */
  readonly fields: DogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    breed<T extends BreedDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BreedDefaultArgs<ExtArgs>>): Prisma__BreedClient<$Result.GetResult<Prisma.$BreedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    diagnose<T extends Dog$diagnoseArgs<ExtArgs> = {}>(args?: Subset<T, Dog$diagnoseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoice<T extends Dog$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, Dog$invoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dog model
   */
  interface DogFieldRefs {
    readonly id: FieldRef<"Dog", 'String'>
    readonly name: FieldRef<"Dog", 'String'>
    readonly breedId: FieldRef<"Dog", 'String'>
    readonly customBreed: FieldRef<"Dog", 'String'>
    readonly birthYear: FieldRef<"Dog", 'Int'>
    readonly birthMonth: FieldRef<"Dog", 'Int'>
    readonly color: FieldRef<"Dog", 'String'>
    readonly weight: FieldRef<"Dog", 'Float'>
    readonly sex: FieldRef<"Dog", 'Sex'>
    readonly lastVaccineDate: FieldRef<"Dog", 'DateTime'>
    readonly lastDewormDate: FieldRef<"Dog", 'DateTime'>
    readonly profileImage: FieldRef<"Dog", 'String'>
    readonly customerId: FieldRef<"Dog", 'String'>
    readonly notes: FieldRef<"Dog", 'String'>
    readonly createdAt: FieldRef<"Dog", 'DateTime'>
    readonly updatedAt: FieldRef<"Dog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dog findUnique
   */
  export type DogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * Filter, which Dog to fetch.
     */
    where: DogWhereUniqueInput
  }

  /**
   * Dog findUniqueOrThrow
   */
  export type DogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * Filter, which Dog to fetch.
     */
    where: DogWhereUniqueInput
  }

  /**
   * Dog findFirst
   */
  export type DogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * Filter, which Dog to fetch.
     */
    where?: DogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dogs to fetch.
     */
    orderBy?: DogOrderByWithRelationInput | DogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dogs.
     */
    cursor?: DogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dogs.
     */
    distinct?: DogScalarFieldEnum | DogScalarFieldEnum[]
  }

  /**
   * Dog findFirstOrThrow
   */
  export type DogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * Filter, which Dog to fetch.
     */
    where?: DogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dogs to fetch.
     */
    orderBy?: DogOrderByWithRelationInput | DogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dogs.
     */
    cursor?: DogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dogs.
     */
    distinct?: DogScalarFieldEnum | DogScalarFieldEnum[]
  }

  /**
   * Dog findMany
   */
  export type DogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * Filter, which Dogs to fetch.
     */
    where?: DogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dogs to fetch.
     */
    orderBy?: DogOrderByWithRelationInput | DogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dogs.
     */
    cursor?: DogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dogs.
     */
    skip?: number
    distinct?: DogScalarFieldEnum | DogScalarFieldEnum[]
  }

  /**
   * Dog create
   */
  export type DogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * The data needed to create a Dog.
     */
    data: XOR<DogCreateInput, DogUncheckedCreateInput>
  }

  /**
   * Dog createMany
   */
  export type DogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dogs.
     */
    data: DogCreateManyInput | DogCreateManyInput[]
  }

  /**
   * Dog createManyAndReturn
   */
  export type DogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * The data used to create many Dogs.
     */
    data: DogCreateManyInput | DogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dog update
   */
  export type DogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * The data needed to update a Dog.
     */
    data: XOR<DogUpdateInput, DogUncheckedUpdateInput>
    /**
     * Choose, which Dog to update.
     */
    where: DogWhereUniqueInput
  }

  /**
   * Dog updateMany
   */
  export type DogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dogs.
     */
    data: XOR<DogUpdateManyMutationInput, DogUncheckedUpdateManyInput>
    /**
     * Filter which Dogs to update
     */
    where?: DogWhereInput
    /**
     * Limit how many Dogs to update.
     */
    limit?: number
  }

  /**
   * Dog updateManyAndReturn
   */
  export type DogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * The data used to update Dogs.
     */
    data: XOR<DogUpdateManyMutationInput, DogUncheckedUpdateManyInput>
    /**
     * Filter which Dogs to update
     */
    where?: DogWhereInput
    /**
     * Limit how many Dogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dog upsert
   */
  export type DogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * The filter to search for the Dog to update in case it exists.
     */
    where: DogWhereUniqueInput
    /**
     * In case the Dog found by the `where` argument doesn't exist, create a new Dog with this data.
     */
    create: XOR<DogCreateInput, DogUncheckedCreateInput>
    /**
     * In case the Dog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DogUpdateInput, DogUncheckedUpdateInput>
  }

  /**
   * Dog delete
   */
  export type DogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * Filter which Dog to delete.
     */
    where: DogWhereUniqueInput
  }

  /**
   * Dog deleteMany
   */
  export type DogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dogs to delete
     */
    where?: DogWhereInput
    /**
     * Limit how many Dogs to delete.
     */
    limit?: number
  }

  /**
   * Dog.diagnose
   */
  export type Dog$diagnoseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseInclude<ExtArgs> | null
    where?: DiagnoseWhereInput
    orderBy?: DiagnoseOrderByWithRelationInput | DiagnoseOrderByWithRelationInput[]
    cursor?: DiagnoseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnoseScalarFieldEnum | DiagnoseScalarFieldEnum[]
  }

  /**
   * Dog.invoice
   */
  export type Dog$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Dog without action
   */
  export type DogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dog
     */
    omit?: DogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CategoryType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CategoryType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    type: $Enums.CategoryType
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | Category$serviceArgs<ExtArgs>
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | Category$serviceArgs<ExtArgs>
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>[]
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.CategoryType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends Category$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Category$serviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product<T extends Category$productArgs<ExtArgs> = {}>(args?: Subset<T, Category$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly type: FieldRef<"Category", 'CategoryType'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.service
   */
  export type Category$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Category.product
   */
  export type Category$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    price: number | null
  }

  export type ServiceSumAggregateOutputType = {
    price: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    categoryId: string | null
    price: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    categoryId: string | null
    price: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    code: number
    name: number
    categoryId: number
    price: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    price?: true
  }

  export type ServiceSumAggregateInputType = {
    price?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    categoryId?: true
    price?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    categoryId?: true
    price?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    categoryId?: true
    price?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    code: string
    name: string
    categoryId: string
    price: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    categoryId?: boolean
    price?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    invoice?: boolean | Service$invoiceArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    categoryId?: boolean
    price?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    categoryId?: boolean
    price?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    categoryId?: boolean
    price?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "categoryId" | "price" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    invoice?: boolean | Service$invoiceArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      invoice: Prisma.$InvoiceServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      categoryId: string
      price: number
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoice<T extends Service$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, Service$invoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly code: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly categoryId: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Int'>
    readonly description: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.invoice
   */
  export type Service$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceInclude<ExtArgs> | null
    where?: InvoiceServiceWhereInput
    orderBy?: InvoiceServiceOrderByWithRelationInput | InvoiceServiceOrderByWithRelationInput[]
    cursor?: InvoiceServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceServiceScalarFieldEnum | InvoiceServiceScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    amount: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    amount: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    categoryId: string | null
    description: string | null
    amount: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    categoryId: string | null
    description: string | null
    amount: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    code: number
    name: number
    categoryId: number
    description: number
    amount: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    amount?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    amount?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    categoryId?: true
    description?: true
    amount?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    categoryId?: true
    description?: true
    amount?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    categoryId?: true
    description?: true
    amount?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    code: string
    name: string
    categoryId: string
    description: string
    amount: number
    price: number
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    categoryId?: boolean
    description?: boolean
    amount?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    invoice?: boolean | Product$invoiceArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    categoryId?: boolean
    description?: boolean
    amount?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    categoryId?: boolean
    description?: boolean
    amount?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    categoryId?: boolean
    description?: boolean
    amount?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "categoryId" | "description" | "amount" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    invoice?: boolean | Product$invoiceArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      invoice: Prisma.$InvoiceProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      categoryId: string
      description: string
      amount: number
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoice<T extends Product$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, Product$invoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly code: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly amount: FieldRef<"Product", 'Int'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.invoice
   */
  export type Product$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
    where?: InvoiceProductWhereInput
    orderBy?: InvoiceProductOrderByWithRelationInput | InvoiceProductOrderByWithRelationInput[]
    cursor?: InvoiceProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceProductScalarFieldEnum | InvoiceProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Diagnose
   */

  export type AggregateDiagnose = {
    _count: DiagnoseCountAggregateOutputType | null
    _avg: DiagnoseAvgAggregateOutputType | null
    _sum: DiagnoseSumAggregateOutputType | null
    _min: DiagnoseMinAggregateOutputType | null
    _max: DiagnoseMaxAggregateOutputType | null
  }

  export type DiagnoseAvgAggregateOutputType = {
    temperature: number | null
    weight: number | null
  }

  export type DiagnoseSumAggregateOutputType = {
    temperature: number | null
    weight: number | null
  }

  export type DiagnoseMinAggregateOutputType = {
    id: string | null
    dxNumber: string | null
    dxDate: Date | null
    doctorName: string | null
    customerId: string | null
    dogId: string | null
    symptom: string | null
    description: string | null
    temperature: number | null
    weight: number | null
    bloodPressure: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiagnoseMaxAggregateOutputType = {
    id: string | null
    dxNumber: string | null
    dxDate: Date | null
    doctorName: string | null
    customerId: string | null
    dogId: string | null
    symptom: string | null
    description: string | null
    temperature: number | null
    weight: number | null
    bloodPressure: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiagnoseCountAggregateOutputType = {
    id: number
    dxNumber: number
    dxDate: number
    doctorName: number
    customerId: number
    dogId: number
    symptom: number
    description: number
    temperature: number
    weight: number
    bloodPressure: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DiagnoseAvgAggregateInputType = {
    temperature?: true
    weight?: true
  }

  export type DiagnoseSumAggregateInputType = {
    temperature?: true
    weight?: true
  }

  export type DiagnoseMinAggregateInputType = {
    id?: true
    dxNumber?: true
    dxDate?: true
    doctorName?: true
    customerId?: true
    dogId?: true
    symptom?: true
    description?: true
    temperature?: true
    weight?: true
    bloodPressure?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiagnoseMaxAggregateInputType = {
    id?: true
    dxNumber?: true
    dxDate?: true
    doctorName?: true
    customerId?: true
    dogId?: true
    symptom?: true
    description?: true
    temperature?: true
    weight?: true
    bloodPressure?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiagnoseCountAggregateInputType = {
    id?: true
    dxNumber?: true
    dxDate?: true
    doctorName?: true
    customerId?: true
    dogId?: true
    symptom?: true
    description?: true
    temperature?: true
    weight?: true
    bloodPressure?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DiagnoseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnose to aggregate.
     */
    where?: DiagnoseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnoseOrderByWithRelationInput | DiagnoseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnoseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagnoses
    **/
    _count?: true | DiagnoseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnoseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnoseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnoseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnoseMaxAggregateInputType
  }

  export type GetDiagnoseAggregateType<T extends DiagnoseAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnose]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnose[P]>
      : GetScalarType<T[P], AggregateDiagnose[P]>
  }




  export type DiagnoseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnoseWhereInput
    orderBy?: DiagnoseOrderByWithAggregationInput | DiagnoseOrderByWithAggregationInput[]
    by: DiagnoseScalarFieldEnum[] | DiagnoseScalarFieldEnum
    having?: DiagnoseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnoseCountAggregateInputType | true
    _avg?: DiagnoseAvgAggregateInputType
    _sum?: DiagnoseSumAggregateInputType
    _min?: DiagnoseMinAggregateInputType
    _max?: DiagnoseMaxAggregateInputType
  }

  export type DiagnoseGroupByOutputType = {
    id: string
    dxNumber: string
    dxDate: Date
    doctorName: string
    customerId: string
    dogId: string
    symptom: string
    description: string
    temperature: number
    weight: number
    bloodPressure: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: DiagnoseCountAggregateOutputType | null
    _avg: DiagnoseAvgAggregateOutputType | null
    _sum: DiagnoseSumAggregateOutputType | null
    _min: DiagnoseMinAggregateOutputType | null
    _max: DiagnoseMaxAggregateOutputType | null
  }

  type GetDiagnoseGroupByPayload<T extends DiagnoseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnoseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnoseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnoseGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnoseGroupByOutputType[P]>
        }
      >
    >


  export type DiagnoseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dxNumber?: boolean
    dxDate?: boolean
    doctorName?: boolean
    customerId?: boolean
    dogId?: boolean
    symptom?: boolean
    description?: boolean
    temperature?: boolean
    weight?: boolean
    bloodPressure?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dog?: boolean | DogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnose"]>

  export type DiagnoseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dxNumber?: boolean
    dxDate?: boolean
    doctorName?: boolean
    customerId?: boolean
    dogId?: boolean
    symptom?: boolean
    description?: boolean
    temperature?: boolean
    weight?: boolean
    bloodPressure?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dog?: boolean | DogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnose"]>

  export type DiagnoseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dxNumber?: boolean
    dxDate?: boolean
    doctorName?: boolean
    customerId?: boolean
    dogId?: boolean
    symptom?: boolean
    description?: boolean
    temperature?: boolean
    weight?: boolean
    bloodPressure?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dog?: boolean | DogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnose"]>

  export type DiagnoseSelectScalar = {
    id?: boolean
    dxNumber?: boolean
    dxDate?: boolean
    doctorName?: boolean
    customerId?: boolean
    dogId?: boolean
    symptom?: boolean
    description?: boolean
    temperature?: boolean
    weight?: boolean
    bloodPressure?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DiagnoseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dxNumber" | "dxDate" | "doctorName" | "customerId" | "dogId" | "symptom" | "description" | "temperature" | "weight" | "bloodPressure" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["diagnose"]>
  export type DiagnoseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dog?: boolean | DogDefaultArgs<ExtArgs>
  }
  export type DiagnoseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dog?: boolean | DogDefaultArgs<ExtArgs>
  }
  export type DiagnoseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dog?: boolean | DogDefaultArgs<ExtArgs>
  }

  export type $DiagnosePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diagnose"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      dog: Prisma.$DogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dxNumber: string
      dxDate: Date
      doctorName: string
      customerId: string
      dogId: string
      symptom: string
      description: string
      temperature: number
      weight: number
      bloodPressure: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["diagnose"]>
    composites: {}
  }

  type DiagnoseGetPayload<S extends boolean | null | undefined | DiagnoseDefaultArgs> = $Result.GetResult<Prisma.$DiagnosePayload, S>

  type DiagnoseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnoseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnoseCountAggregateInputType | true
    }

  export interface DiagnoseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diagnose'], meta: { name: 'Diagnose' } }
    /**
     * Find zero or one Diagnose that matches the filter.
     * @param {DiagnoseFindUniqueArgs} args - Arguments to find a Diagnose
     * @example
     * // Get one Diagnose
     * const diagnose = await prisma.diagnose.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnoseFindUniqueArgs>(args: SelectSubset<T, DiagnoseFindUniqueArgs<ExtArgs>>): Prisma__DiagnoseClient<$Result.GetResult<Prisma.$DiagnosePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnose that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnoseFindUniqueOrThrowArgs} args - Arguments to find a Diagnose
     * @example
     * // Get one Diagnose
     * const diagnose = await prisma.diagnose.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnoseFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnoseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnoseClient<$Result.GetResult<Prisma.$DiagnosePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnose that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseFindFirstArgs} args - Arguments to find a Diagnose
     * @example
     * // Get one Diagnose
     * const diagnose = await prisma.diagnose.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnoseFindFirstArgs>(args?: SelectSubset<T, DiagnoseFindFirstArgs<ExtArgs>>): Prisma__DiagnoseClient<$Result.GetResult<Prisma.$DiagnosePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnose that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseFindFirstOrThrowArgs} args - Arguments to find a Diagnose
     * @example
     * // Get one Diagnose
     * const diagnose = await prisma.diagnose.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnoseFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnoseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnoseClient<$Result.GetResult<Prisma.$DiagnosePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnoses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnoses
     * const diagnoses = await prisma.diagnose.findMany()
     * 
     * // Get first 10 Diagnoses
     * const diagnoses = await prisma.diagnose.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnoseWithIdOnly = await prisma.diagnose.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnoseFindManyArgs>(args?: SelectSubset<T, DiagnoseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnose.
     * @param {DiagnoseCreateArgs} args - Arguments to create a Diagnose.
     * @example
     * // Create one Diagnose
     * const Diagnose = await prisma.diagnose.create({
     *   data: {
     *     // ... data to create a Diagnose
     *   }
     * })
     * 
     */
    create<T extends DiagnoseCreateArgs>(args: SelectSubset<T, DiagnoseCreateArgs<ExtArgs>>): Prisma__DiagnoseClient<$Result.GetResult<Prisma.$DiagnosePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnoses.
     * @param {DiagnoseCreateManyArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnose = await prisma.diagnose.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnoseCreateManyArgs>(args?: SelectSubset<T, DiagnoseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diagnoses and returns the data saved in the database.
     * @param {DiagnoseCreateManyAndReturnArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnose = await prisma.diagnose.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diagnoses and only return the `id`
     * const diagnoseWithIdOnly = await prisma.diagnose.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiagnoseCreateManyAndReturnArgs>(args?: SelectSubset<T, DiagnoseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diagnose.
     * @param {DiagnoseDeleteArgs} args - Arguments to delete one Diagnose.
     * @example
     * // Delete one Diagnose
     * const Diagnose = await prisma.diagnose.delete({
     *   where: {
     *     // ... filter to delete one Diagnose
     *   }
     * })
     * 
     */
    delete<T extends DiagnoseDeleteArgs>(args: SelectSubset<T, DiagnoseDeleteArgs<ExtArgs>>): Prisma__DiagnoseClient<$Result.GetResult<Prisma.$DiagnosePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnose.
     * @param {DiagnoseUpdateArgs} args - Arguments to update one Diagnose.
     * @example
     * // Update one Diagnose
     * const diagnose = await prisma.diagnose.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnoseUpdateArgs>(args: SelectSubset<T, DiagnoseUpdateArgs<ExtArgs>>): Prisma__DiagnoseClient<$Result.GetResult<Prisma.$DiagnosePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnoses.
     * @param {DiagnoseDeleteManyArgs} args - Arguments to filter Diagnoses to delete.
     * @example
     * // Delete a few Diagnoses
     * const { count } = await prisma.diagnose.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnoseDeleteManyArgs>(args?: SelectSubset<T, DiagnoseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnoses
     * const diagnose = await prisma.diagnose.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnoseUpdateManyArgs>(args: SelectSubset<T, DiagnoseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnoses and returns the data updated in the database.
     * @param {DiagnoseUpdateManyAndReturnArgs} args - Arguments to update many Diagnoses.
     * @example
     * // Update many Diagnoses
     * const diagnose = await prisma.diagnose.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diagnoses and only return the `id`
     * const diagnoseWithIdOnly = await prisma.diagnose.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiagnoseUpdateManyAndReturnArgs>(args: SelectSubset<T, DiagnoseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diagnose.
     * @param {DiagnoseUpsertArgs} args - Arguments to update or create a Diagnose.
     * @example
     * // Update or create a Diagnose
     * const diagnose = await prisma.diagnose.upsert({
     *   create: {
     *     // ... data to create a Diagnose
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnose we want to update
     *   }
     * })
     */
    upsert<T extends DiagnoseUpsertArgs>(args: SelectSubset<T, DiagnoseUpsertArgs<ExtArgs>>): Prisma__DiagnoseClient<$Result.GetResult<Prisma.$DiagnosePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseCountArgs} args - Arguments to filter Diagnoses to count.
     * @example
     * // Count the number of Diagnoses
     * const count = await prisma.diagnose.count({
     *   where: {
     *     // ... the filter for the Diagnoses we want to count
     *   }
     * })
    **/
    count<T extends DiagnoseCountArgs>(
      args?: Subset<T, DiagnoseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnoseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnose.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiagnoseAggregateArgs>(args: Subset<T, DiagnoseAggregateArgs>): Prisma.PrismaPromise<GetDiagnoseAggregateType<T>>

    /**
     * Group by Diagnose.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnoseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiagnoseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnoseGroupByArgs['orderBy'] }
        : { orderBy?: DiagnoseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiagnoseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnoseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diagnose model
   */
  readonly fields: DiagnoseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagnose.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnoseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dog<T extends DogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DogDefaultArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Diagnose model
   */
  interface DiagnoseFieldRefs {
    readonly id: FieldRef<"Diagnose", 'String'>
    readonly dxNumber: FieldRef<"Diagnose", 'String'>
    readonly dxDate: FieldRef<"Diagnose", 'DateTime'>
    readonly doctorName: FieldRef<"Diagnose", 'String'>
    readonly customerId: FieldRef<"Diagnose", 'String'>
    readonly dogId: FieldRef<"Diagnose", 'String'>
    readonly symptom: FieldRef<"Diagnose", 'String'>
    readonly description: FieldRef<"Diagnose", 'String'>
    readonly temperature: FieldRef<"Diagnose", 'Float'>
    readonly weight: FieldRef<"Diagnose", 'Float'>
    readonly bloodPressure: FieldRef<"Diagnose", 'String'>
    readonly notes: FieldRef<"Diagnose", 'String'>
    readonly createdAt: FieldRef<"Diagnose", 'DateTime'>
    readonly updatedAt: FieldRef<"Diagnose", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Diagnose findUnique
   */
  export type DiagnoseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseInclude<ExtArgs> | null
    /**
     * Filter, which Diagnose to fetch.
     */
    where: DiagnoseWhereUniqueInput
  }

  /**
   * Diagnose findUniqueOrThrow
   */
  export type DiagnoseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseInclude<ExtArgs> | null
    /**
     * Filter, which Diagnose to fetch.
     */
    where: DiagnoseWhereUniqueInput
  }

  /**
   * Diagnose findFirst
   */
  export type DiagnoseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseInclude<ExtArgs> | null
    /**
     * Filter, which Diagnose to fetch.
     */
    where?: DiagnoseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnoseOrderByWithRelationInput | DiagnoseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnoses.
     */
    cursor?: DiagnoseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: DiagnoseScalarFieldEnum | DiagnoseScalarFieldEnum[]
  }

  /**
   * Diagnose findFirstOrThrow
   */
  export type DiagnoseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseInclude<ExtArgs> | null
    /**
     * Filter, which Diagnose to fetch.
     */
    where?: DiagnoseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnoseOrderByWithRelationInput | DiagnoseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnoses.
     */
    cursor?: DiagnoseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: DiagnoseScalarFieldEnum | DiagnoseScalarFieldEnum[]
  }

  /**
   * Diagnose findMany
   */
  export type DiagnoseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where?: DiagnoseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnoseOrderByWithRelationInput | DiagnoseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagnoses.
     */
    cursor?: DiagnoseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    distinct?: DiagnoseScalarFieldEnum | DiagnoseScalarFieldEnum[]
  }

  /**
   * Diagnose create
   */
  export type DiagnoseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseInclude<ExtArgs> | null
    /**
     * The data needed to create a Diagnose.
     */
    data: XOR<DiagnoseCreateInput, DiagnoseUncheckedCreateInput>
  }

  /**
   * Diagnose createMany
   */
  export type DiagnoseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagnoses.
     */
    data: DiagnoseCreateManyInput | DiagnoseCreateManyInput[]
  }

  /**
   * Diagnose createManyAndReturn
   */
  export type DiagnoseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * The data used to create many Diagnoses.
     */
    data: DiagnoseCreateManyInput | DiagnoseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnose update
   */
  export type DiagnoseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseInclude<ExtArgs> | null
    /**
     * The data needed to update a Diagnose.
     */
    data: XOR<DiagnoseUpdateInput, DiagnoseUncheckedUpdateInput>
    /**
     * Choose, which Diagnose to update.
     */
    where: DiagnoseWhereUniqueInput
  }

  /**
   * Diagnose updateMany
   */
  export type DiagnoseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagnoses.
     */
    data: XOR<DiagnoseUpdateManyMutationInput, DiagnoseUncheckedUpdateManyInput>
    /**
     * Filter which Diagnoses to update
     */
    where?: DiagnoseWhereInput
    /**
     * Limit how many Diagnoses to update.
     */
    limit?: number
  }

  /**
   * Diagnose updateManyAndReturn
   */
  export type DiagnoseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * The data used to update Diagnoses.
     */
    data: XOR<DiagnoseUpdateManyMutationInput, DiagnoseUncheckedUpdateManyInput>
    /**
     * Filter which Diagnoses to update
     */
    where?: DiagnoseWhereInput
    /**
     * Limit how many Diagnoses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnose upsert
   */
  export type DiagnoseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseInclude<ExtArgs> | null
    /**
     * The filter to search for the Diagnose to update in case it exists.
     */
    where: DiagnoseWhereUniqueInput
    /**
     * In case the Diagnose found by the `where` argument doesn't exist, create a new Diagnose with this data.
     */
    create: XOR<DiagnoseCreateInput, DiagnoseUncheckedCreateInput>
    /**
     * In case the Diagnose was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnoseUpdateInput, DiagnoseUncheckedUpdateInput>
  }

  /**
   * Diagnose delete
   */
  export type DiagnoseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseInclude<ExtArgs> | null
    /**
     * Filter which Diagnose to delete.
     */
    where: DiagnoseWhereUniqueInput
  }

  /**
   * Diagnose deleteMany
   */
  export type DiagnoseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnoses to delete
     */
    where?: DiagnoseWhereInput
    /**
     * Limit how many Diagnoses to delete.
     */
    limit?: number
  }

  /**
   * Diagnose without action
   */
  export type DiagnoseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnose
     */
    select?: DiagnoseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnose
     */
    omit?: DiagnoseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnoseInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    total: number | null
    deposit: number | null
    balance: number | null
    subtotal: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    total: number | null
    deposit: number | null
    balance: number | null
    subtotal: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    invoiceNo: string | null
    customerId: string | null
    dogId: string | null
    inpatientDate: string | null
    inpatientTime: string | null
    dischargeDate: string | null
    dischargeTime: string | null
    total: number | null
    deposit: number | null
    balance: number | null
    subtotal: number | null
    treatmentType: $Enums.TreatmentType | null
    paymentMethod: $Enums.PaymentMethod | null
    customPaymentMethod: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    invoiceNo: string | null
    customerId: string | null
    dogId: string | null
    inpatientDate: string | null
    inpatientTime: string | null
    dischargeDate: string | null
    dischargeTime: string | null
    total: number | null
    deposit: number | null
    balance: number | null
    subtotal: number | null
    treatmentType: $Enums.TreatmentType | null
    paymentMethod: $Enums.PaymentMethod | null
    customPaymentMethod: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    invoiceNo: number
    customerId: number
    dogId: number
    inpatientDate: number
    inpatientTime: number
    dischargeDate: number
    dischargeTime: number
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: number
    paymentMethod: number
    customPaymentMethod: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    total?: true
    deposit?: true
    balance?: true
    subtotal?: true
  }

  export type InvoiceSumAggregateInputType = {
    total?: true
    deposit?: true
    balance?: true
    subtotal?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    invoiceNo?: true
    customerId?: true
    dogId?: true
    inpatientDate?: true
    inpatientTime?: true
    dischargeDate?: true
    dischargeTime?: true
    total?: true
    deposit?: true
    balance?: true
    subtotal?: true
    treatmentType?: true
    paymentMethod?: true
    customPaymentMethod?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    invoiceNo?: true
    customerId?: true
    dogId?: true
    inpatientDate?: true
    inpatientTime?: true
    dischargeDate?: true
    dischargeTime?: true
    total?: true
    deposit?: true
    balance?: true
    subtotal?: true
    treatmentType?: true
    paymentMethod?: true
    customPaymentMethod?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    invoiceNo?: true
    customerId?: true
    dogId?: true
    inpatientDate?: true
    inpatientTime?: true
    dischargeDate?: true
    dischargeTime?: true
    total?: true
    deposit?: true
    balance?: true
    subtotal?: true
    treatmentType?: true
    paymentMethod?: true
    customPaymentMethod?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    invoiceNo: string
    customerId: string
    dogId: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNo?: boolean
    customerId?: boolean
    dogId?: boolean
    inpatientDate?: boolean
    inpatientTime?: boolean
    dischargeDate?: boolean
    dischargeTime?: boolean
    total?: boolean
    deposit?: boolean
    balance?: boolean
    subtotal?: boolean
    treatmentType?: boolean
    paymentMethod?: boolean
    customPaymentMethod?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dog?: boolean | DogDefaultArgs<ExtArgs>
    invoiceService?: boolean | Invoice$invoiceServiceArgs<ExtArgs>
    invoiceProduct?: boolean | Invoice$invoiceProductArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNo?: boolean
    customerId?: boolean
    dogId?: boolean
    inpatientDate?: boolean
    inpatientTime?: boolean
    dischargeDate?: boolean
    dischargeTime?: boolean
    total?: boolean
    deposit?: boolean
    balance?: boolean
    subtotal?: boolean
    treatmentType?: boolean
    paymentMethod?: boolean
    customPaymentMethod?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dog?: boolean | DogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNo?: boolean
    customerId?: boolean
    dogId?: boolean
    inpatientDate?: boolean
    inpatientTime?: boolean
    dischargeDate?: boolean
    dischargeTime?: boolean
    total?: boolean
    deposit?: boolean
    balance?: boolean
    subtotal?: boolean
    treatmentType?: boolean
    paymentMethod?: boolean
    customPaymentMethod?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dog?: boolean | DogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    invoiceNo?: boolean
    customerId?: boolean
    dogId?: boolean
    inpatientDate?: boolean
    inpatientTime?: boolean
    dischargeDate?: boolean
    dischargeTime?: boolean
    total?: boolean
    deposit?: boolean
    balance?: boolean
    subtotal?: boolean
    treatmentType?: boolean
    paymentMethod?: boolean
    customPaymentMethod?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceNo" | "customerId" | "dogId" | "inpatientDate" | "inpatientTime" | "dischargeDate" | "dischargeTime" | "total" | "deposit" | "balance" | "subtotal" | "treatmentType" | "paymentMethod" | "customPaymentMethod" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dog?: boolean | DogDefaultArgs<ExtArgs>
    invoiceService?: boolean | Invoice$invoiceServiceArgs<ExtArgs>
    invoiceProduct?: boolean | Invoice$invoiceProductArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dog?: boolean | DogDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dog?: boolean | DogDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      dog: Prisma.$DogPayload<ExtArgs>
      invoiceService: Prisma.$InvoiceServicePayload<ExtArgs>[]
      invoiceProduct: Prisma.$InvoiceProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceNo: string
      customerId: string
      dogId: string
      inpatientDate: string
      inpatientTime: string
      dischargeDate: string
      dischargeTime: string
      total: number
      deposit: number
      balance: number
      subtotal: number
      treatmentType: $Enums.TreatmentType
      paymentMethod: $Enums.PaymentMethod
      customPaymentMethod: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dog<T extends DogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DogDefaultArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoiceService<T extends Invoice$invoiceServiceArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$invoiceServiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoiceProduct<T extends Invoice$invoiceProductArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$invoiceProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly invoiceNo: FieldRef<"Invoice", 'String'>
    readonly customerId: FieldRef<"Invoice", 'String'>
    readonly dogId: FieldRef<"Invoice", 'String'>
    readonly inpatientDate: FieldRef<"Invoice", 'String'>
    readonly inpatientTime: FieldRef<"Invoice", 'String'>
    readonly dischargeDate: FieldRef<"Invoice", 'String'>
    readonly dischargeTime: FieldRef<"Invoice", 'String'>
    readonly total: FieldRef<"Invoice", 'Int'>
    readonly deposit: FieldRef<"Invoice", 'Int'>
    readonly balance: FieldRef<"Invoice", 'Int'>
    readonly subtotal: FieldRef<"Invoice", 'Int'>
    readonly treatmentType: FieldRef<"Invoice", 'TreatmentType'>
    readonly paymentMethod: FieldRef<"Invoice", 'PaymentMethod'>
    readonly customPaymentMethod: FieldRef<"Invoice", 'String'>
    readonly notes: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.invoiceService
   */
  export type Invoice$invoiceServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceInclude<ExtArgs> | null
    where?: InvoiceServiceWhereInput
    orderBy?: InvoiceServiceOrderByWithRelationInput | InvoiceServiceOrderByWithRelationInput[]
    cursor?: InvoiceServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceServiceScalarFieldEnum | InvoiceServiceScalarFieldEnum[]
  }

  /**
   * Invoice.invoiceProduct
   */
  export type Invoice$invoiceProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
    where?: InvoiceProductWhereInput
    orderBy?: InvoiceProductOrderByWithRelationInput | InvoiceProductOrderByWithRelationInput[]
    cursor?: InvoiceProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceProductScalarFieldEnum | InvoiceProductScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceService
   */

  export type AggregateInvoiceService = {
    _count: InvoiceServiceCountAggregateOutputType | null
    _avg: InvoiceServiceAvgAggregateOutputType | null
    _sum: InvoiceServiceSumAggregateOutputType | null
    _min: InvoiceServiceMinAggregateOutputType | null
    _max: InvoiceServiceMaxAggregateOutputType | null
  }

  export type InvoiceServiceAvgAggregateOutputType = {
    price: number | null
  }

  export type InvoiceServiceSumAggregateOutputType = {
    price: number | null
  }

  export type InvoiceServiceMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    serviceId: string | null
    name: string | null
    code: string | null
    datetime: Date | null
    duration: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceServiceMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    serviceId: string | null
    name: string | null
    code: string | null
    datetime: Date | null
    duration: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceServiceCountAggregateOutputType = {
    id: number
    invoiceId: number
    serviceId: number
    name: number
    code: number
    datetime: number
    duration: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceServiceAvgAggregateInputType = {
    price?: true
  }

  export type InvoiceServiceSumAggregateInputType = {
    price?: true
  }

  export type InvoiceServiceMinAggregateInputType = {
    id?: true
    invoiceId?: true
    serviceId?: true
    name?: true
    code?: true
    datetime?: true
    duration?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceServiceMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    serviceId?: true
    name?: true
    code?: true
    datetime?: true
    duration?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceServiceCountAggregateInputType = {
    id?: true
    invoiceId?: true
    serviceId?: true
    name?: true
    code?: true
    datetime?: true
    duration?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceService to aggregate.
     */
    where?: InvoiceServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceServices to fetch.
     */
    orderBy?: InvoiceServiceOrderByWithRelationInput | InvoiceServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceServices
    **/
    _count?: true | InvoiceServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceServiceMaxAggregateInputType
  }

  export type GetInvoiceServiceAggregateType<T extends InvoiceServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceService[P]>
      : GetScalarType<T[P], AggregateInvoiceService[P]>
  }




  export type InvoiceServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceServiceWhereInput
    orderBy?: InvoiceServiceOrderByWithAggregationInput | InvoiceServiceOrderByWithAggregationInput[]
    by: InvoiceServiceScalarFieldEnum[] | InvoiceServiceScalarFieldEnum
    having?: InvoiceServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceServiceCountAggregateInputType | true
    _avg?: InvoiceServiceAvgAggregateInputType
    _sum?: InvoiceServiceSumAggregateInputType
    _min?: InvoiceServiceMinAggregateInputType
    _max?: InvoiceServiceMaxAggregateInputType
  }

  export type InvoiceServiceGroupByOutputType = {
    id: string
    invoiceId: string
    serviceId: string
    name: string
    code: string
    datetime: Date
    duration: string
    price: number
    createdAt: Date
    updatedAt: Date
    _count: InvoiceServiceCountAggregateOutputType | null
    _avg: InvoiceServiceAvgAggregateOutputType | null
    _sum: InvoiceServiceSumAggregateOutputType | null
    _min: InvoiceServiceMinAggregateOutputType | null
    _max: InvoiceServiceMaxAggregateOutputType | null
  }

  type GetInvoiceServiceGroupByPayload<T extends InvoiceServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceServiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceServiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    serviceId?: boolean
    name?: boolean
    code?: boolean
    datetime?: boolean
    duration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceService"]>

  export type InvoiceServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    serviceId?: boolean
    name?: boolean
    code?: boolean
    datetime?: boolean
    duration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceService"]>

  export type InvoiceServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    serviceId?: boolean
    name?: boolean
    code?: boolean
    datetime?: boolean
    duration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceService"]>

  export type InvoiceServiceSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    serviceId?: boolean
    name?: boolean
    code?: boolean
    datetime?: boolean
    duration?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "serviceId" | "name" | "code" | "datetime" | "duration" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["invoiceService"]>
  export type InvoiceServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type InvoiceServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type InvoiceServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $InvoiceServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceService"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      serviceId: string
      name: string
      code: string
      datetime: Date
      duration: string
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoiceService"]>
    composites: {}
  }

  type InvoiceServiceGetPayload<S extends boolean | null | undefined | InvoiceServiceDefaultArgs> = $Result.GetResult<Prisma.$InvoiceServicePayload, S>

  type InvoiceServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceServiceCountAggregateInputType | true
    }

  export interface InvoiceServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceService'], meta: { name: 'InvoiceService' } }
    /**
     * Find zero or one InvoiceService that matches the filter.
     * @param {InvoiceServiceFindUniqueArgs} args - Arguments to find a InvoiceService
     * @example
     * // Get one InvoiceService
     * const invoiceService = await prisma.invoiceService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceServiceFindUniqueArgs>(args: SelectSubset<T, InvoiceServiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceServiceClient<$Result.GetResult<Prisma.$InvoiceServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceServiceFindUniqueOrThrowArgs} args - Arguments to find a InvoiceService
     * @example
     * // Get one InvoiceService
     * const invoiceService = await prisma.invoiceService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceServiceClient<$Result.GetResult<Prisma.$InvoiceServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceServiceFindFirstArgs} args - Arguments to find a InvoiceService
     * @example
     * // Get one InvoiceService
     * const invoiceService = await prisma.invoiceService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceServiceFindFirstArgs>(args?: SelectSubset<T, InvoiceServiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceServiceClient<$Result.GetResult<Prisma.$InvoiceServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceServiceFindFirstOrThrowArgs} args - Arguments to find a InvoiceService
     * @example
     * // Get one InvoiceService
     * const invoiceService = await prisma.invoiceService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceServiceClient<$Result.GetResult<Prisma.$InvoiceServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceServices
     * const invoiceServices = await prisma.invoiceService.findMany()
     * 
     * // Get first 10 InvoiceServices
     * const invoiceServices = await prisma.invoiceService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceServiceWithIdOnly = await prisma.invoiceService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceServiceFindManyArgs>(args?: SelectSubset<T, InvoiceServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceService.
     * @param {InvoiceServiceCreateArgs} args - Arguments to create a InvoiceService.
     * @example
     * // Create one InvoiceService
     * const InvoiceService = await prisma.invoiceService.create({
     *   data: {
     *     // ... data to create a InvoiceService
     *   }
     * })
     * 
     */
    create<T extends InvoiceServiceCreateArgs>(args: SelectSubset<T, InvoiceServiceCreateArgs<ExtArgs>>): Prisma__InvoiceServiceClient<$Result.GetResult<Prisma.$InvoiceServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceServices.
     * @param {InvoiceServiceCreateManyArgs} args - Arguments to create many InvoiceServices.
     * @example
     * // Create many InvoiceServices
     * const invoiceService = await prisma.invoiceService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceServiceCreateManyArgs>(args?: SelectSubset<T, InvoiceServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceServices and returns the data saved in the database.
     * @param {InvoiceServiceCreateManyAndReturnArgs} args - Arguments to create many InvoiceServices.
     * @example
     * // Create many InvoiceServices
     * const invoiceService = await prisma.invoiceService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceServices and only return the `id`
     * const invoiceServiceWithIdOnly = await prisma.invoiceService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceService.
     * @param {InvoiceServiceDeleteArgs} args - Arguments to delete one InvoiceService.
     * @example
     * // Delete one InvoiceService
     * const InvoiceService = await prisma.invoiceService.delete({
     *   where: {
     *     // ... filter to delete one InvoiceService
     *   }
     * })
     * 
     */
    delete<T extends InvoiceServiceDeleteArgs>(args: SelectSubset<T, InvoiceServiceDeleteArgs<ExtArgs>>): Prisma__InvoiceServiceClient<$Result.GetResult<Prisma.$InvoiceServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceService.
     * @param {InvoiceServiceUpdateArgs} args - Arguments to update one InvoiceService.
     * @example
     * // Update one InvoiceService
     * const invoiceService = await prisma.invoiceService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceServiceUpdateArgs>(args: SelectSubset<T, InvoiceServiceUpdateArgs<ExtArgs>>): Prisma__InvoiceServiceClient<$Result.GetResult<Prisma.$InvoiceServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceServices.
     * @param {InvoiceServiceDeleteManyArgs} args - Arguments to filter InvoiceServices to delete.
     * @example
     * // Delete a few InvoiceServices
     * const { count } = await prisma.invoiceService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceServiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceServices
     * const invoiceService = await prisma.invoiceService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceServiceUpdateManyArgs>(args: SelectSubset<T, InvoiceServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceServices and returns the data updated in the database.
     * @param {InvoiceServiceUpdateManyAndReturnArgs} args - Arguments to update many InvoiceServices.
     * @example
     * // Update many InvoiceServices
     * const invoiceService = await prisma.invoiceService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceServices and only return the `id`
     * const invoiceServiceWithIdOnly = await prisma.invoiceService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceService.
     * @param {InvoiceServiceUpsertArgs} args - Arguments to update or create a InvoiceService.
     * @example
     * // Update or create a InvoiceService
     * const invoiceService = await prisma.invoiceService.upsert({
     *   create: {
     *     // ... data to create a InvoiceService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceService we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceServiceUpsertArgs>(args: SelectSubset<T, InvoiceServiceUpsertArgs<ExtArgs>>): Prisma__InvoiceServiceClient<$Result.GetResult<Prisma.$InvoiceServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceServiceCountArgs} args - Arguments to filter InvoiceServices to count.
     * @example
     * // Count the number of InvoiceServices
     * const count = await prisma.invoiceService.count({
     *   where: {
     *     // ... the filter for the InvoiceServices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceServiceCountArgs>(
      args?: Subset<T, InvoiceServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceServiceAggregateArgs>(args: Subset<T, InvoiceServiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceServiceAggregateType<T>>

    /**
     * Group by InvoiceService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceServiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceService model
   */
  readonly fields: InvoiceServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvoiceService model
   */
  interface InvoiceServiceFieldRefs {
    readonly id: FieldRef<"InvoiceService", 'String'>
    readonly invoiceId: FieldRef<"InvoiceService", 'String'>
    readonly serviceId: FieldRef<"InvoiceService", 'String'>
    readonly name: FieldRef<"InvoiceService", 'String'>
    readonly code: FieldRef<"InvoiceService", 'String'>
    readonly datetime: FieldRef<"InvoiceService", 'DateTime'>
    readonly duration: FieldRef<"InvoiceService", 'String'>
    readonly price: FieldRef<"InvoiceService", 'Int'>
    readonly createdAt: FieldRef<"InvoiceService", 'DateTime'>
    readonly updatedAt: FieldRef<"InvoiceService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceService findUnique
   */
  export type InvoiceServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceService to fetch.
     */
    where: InvoiceServiceWhereUniqueInput
  }

  /**
   * InvoiceService findUniqueOrThrow
   */
  export type InvoiceServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceService to fetch.
     */
    where: InvoiceServiceWhereUniqueInput
  }

  /**
   * InvoiceService findFirst
   */
  export type InvoiceServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceService to fetch.
     */
    where?: InvoiceServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceServices to fetch.
     */
    orderBy?: InvoiceServiceOrderByWithRelationInput | InvoiceServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceServices.
     */
    cursor?: InvoiceServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceServices.
     */
    distinct?: InvoiceServiceScalarFieldEnum | InvoiceServiceScalarFieldEnum[]
  }

  /**
   * InvoiceService findFirstOrThrow
   */
  export type InvoiceServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceService to fetch.
     */
    where?: InvoiceServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceServices to fetch.
     */
    orderBy?: InvoiceServiceOrderByWithRelationInput | InvoiceServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceServices.
     */
    cursor?: InvoiceServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceServices.
     */
    distinct?: InvoiceServiceScalarFieldEnum | InvoiceServiceScalarFieldEnum[]
  }

  /**
   * InvoiceService findMany
   */
  export type InvoiceServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceServices to fetch.
     */
    where?: InvoiceServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceServices to fetch.
     */
    orderBy?: InvoiceServiceOrderByWithRelationInput | InvoiceServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceServices.
     */
    cursor?: InvoiceServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceServices.
     */
    skip?: number
    distinct?: InvoiceServiceScalarFieldEnum | InvoiceServiceScalarFieldEnum[]
  }

  /**
   * InvoiceService create
   */
  export type InvoiceServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceService.
     */
    data: XOR<InvoiceServiceCreateInput, InvoiceServiceUncheckedCreateInput>
  }

  /**
   * InvoiceService createMany
   */
  export type InvoiceServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceServices.
     */
    data: InvoiceServiceCreateManyInput | InvoiceServiceCreateManyInput[]
  }

  /**
   * InvoiceService createManyAndReturn
   */
  export type InvoiceServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceServices.
     */
    data: InvoiceServiceCreateManyInput | InvoiceServiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceService update
   */
  export type InvoiceServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceService.
     */
    data: XOR<InvoiceServiceUpdateInput, InvoiceServiceUncheckedUpdateInput>
    /**
     * Choose, which InvoiceService to update.
     */
    where: InvoiceServiceWhereUniqueInput
  }

  /**
   * InvoiceService updateMany
   */
  export type InvoiceServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceServices.
     */
    data: XOR<InvoiceServiceUpdateManyMutationInput, InvoiceServiceUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceServices to update
     */
    where?: InvoiceServiceWhereInput
    /**
     * Limit how many InvoiceServices to update.
     */
    limit?: number
  }

  /**
   * InvoiceService updateManyAndReturn
   */
  export type InvoiceServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceServices.
     */
    data: XOR<InvoiceServiceUpdateManyMutationInput, InvoiceServiceUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceServices to update
     */
    where?: InvoiceServiceWhereInput
    /**
     * Limit how many InvoiceServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceService upsert
   */
  export type InvoiceServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceService to update in case it exists.
     */
    where: InvoiceServiceWhereUniqueInput
    /**
     * In case the InvoiceService found by the `where` argument doesn't exist, create a new InvoiceService with this data.
     */
    create: XOR<InvoiceServiceCreateInput, InvoiceServiceUncheckedCreateInput>
    /**
     * In case the InvoiceService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceServiceUpdateInput, InvoiceServiceUncheckedUpdateInput>
  }

  /**
   * InvoiceService delete
   */
  export type InvoiceServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceInclude<ExtArgs> | null
    /**
     * Filter which InvoiceService to delete.
     */
    where: InvoiceServiceWhereUniqueInput
  }

  /**
   * InvoiceService deleteMany
   */
  export type InvoiceServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceServices to delete
     */
    where?: InvoiceServiceWhereInput
    /**
     * Limit how many InvoiceServices to delete.
     */
    limit?: number
  }

  /**
   * InvoiceService without action
   */
  export type InvoiceServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceService
     */
    select?: InvoiceServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceService
     */
    omit?: InvoiceServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceServiceInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceProduct
   */

  export type AggregateInvoiceProduct = {
    _count: InvoiceProductCountAggregateOutputType | null
    _avg: InvoiceProductAvgAggregateOutputType | null
    _sum: InvoiceProductSumAggregateOutputType | null
    _min: InvoiceProductMinAggregateOutputType | null
    _max: InvoiceProductMaxAggregateOutputType | null
  }

  export type InvoiceProductAvgAggregateOutputType = {
    amount: number | null
    price: number | null
  }

  export type InvoiceProductSumAggregateOutputType = {
    amount: number | null
    price: number | null
  }

  export type InvoiceProductMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    productId: string | null
    name: string | null
    code: string | null
    amount: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceProductMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    productId: string | null
    name: string | null
    code: string | null
    amount: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceProductCountAggregateOutputType = {
    id: number
    invoiceId: number
    productId: number
    name: number
    code: number
    amount: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceProductAvgAggregateInputType = {
    amount?: true
    price?: true
  }

  export type InvoiceProductSumAggregateInputType = {
    amount?: true
    price?: true
  }

  export type InvoiceProductMinAggregateInputType = {
    id?: true
    invoiceId?: true
    productId?: true
    name?: true
    code?: true
    amount?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceProductMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    productId?: true
    name?: true
    code?: true
    amount?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceProductCountAggregateInputType = {
    id?: true
    invoiceId?: true
    productId?: true
    name?: true
    code?: true
    amount?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceProduct to aggregate.
     */
    where?: InvoiceProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceProducts to fetch.
     */
    orderBy?: InvoiceProductOrderByWithRelationInput | InvoiceProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceProducts
    **/
    _count?: true | InvoiceProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceProductMaxAggregateInputType
  }

  export type GetInvoiceProductAggregateType<T extends InvoiceProductAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceProduct[P]>
      : GetScalarType<T[P], AggregateInvoiceProduct[P]>
  }




  export type InvoiceProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceProductWhereInput
    orderBy?: InvoiceProductOrderByWithAggregationInput | InvoiceProductOrderByWithAggregationInput[]
    by: InvoiceProductScalarFieldEnum[] | InvoiceProductScalarFieldEnum
    having?: InvoiceProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceProductCountAggregateInputType | true
    _avg?: InvoiceProductAvgAggregateInputType
    _sum?: InvoiceProductSumAggregateInputType
    _min?: InvoiceProductMinAggregateInputType
    _max?: InvoiceProductMaxAggregateInputType
  }

  export type InvoiceProductGroupByOutputType = {
    id: string
    invoiceId: string
    productId: string
    name: string
    code: string
    amount: number
    price: number
    createdAt: Date
    updatedAt: Date
    _count: InvoiceProductCountAggregateOutputType | null
    _avg: InvoiceProductAvgAggregateOutputType | null
    _sum: InvoiceProductSumAggregateOutputType | null
    _min: InvoiceProductMinAggregateOutputType | null
    _max: InvoiceProductMaxAggregateOutputType | null
  }

  type GetInvoiceProductGroupByPayload<T extends InvoiceProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceProductGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceProductGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    name?: boolean
    code?: boolean
    amount?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceProduct"]>

  export type InvoiceProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    name?: boolean
    code?: boolean
    amount?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceProduct"]>

  export type InvoiceProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    name?: boolean
    code?: boolean
    amount?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceProduct"]>

  export type InvoiceProductSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    productId?: boolean
    name?: boolean
    code?: boolean
    amount?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "productId" | "name" | "code" | "amount" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["invoiceProduct"]>
  export type InvoiceProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type InvoiceProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type InvoiceProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $InvoiceProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceProduct"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      productId: string
      name: string
      code: string
      amount: number
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoiceProduct"]>
    composites: {}
  }

  type InvoiceProductGetPayload<S extends boolean | null | undefined | InvoiceProductDefaultArgs> = $Result.GetResult<Prisma.$InvoiceProductPayload, S>

  type InvoiceProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceProductCountAggregateInputType | true
    }

  export interface InvoiceProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceProduct'], meta: { name: 'InvoiceProduct' } }
    /**
     * Find zero or one InvoiceProduct that matches the filter.
     * @param {InvoiceProductFindUniqueArgs} args - Arguments to find a InvoiceProduct
     * @example
     * // Get one InvoiceProduct
     * const invoiceProduct = await prisma.invoiceProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceProductFindUniqueArgs>(args: SelectSubset<T, InvoiceProductFindUniqueArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceProductFindUniqueOrThrowArgs} args - Arguments to find a InvoiceProduct
     * @example
     * // Get one InvoiceProduct
     * const invoiceProduct = await prisma.invoiceProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceProductFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductFindFirstArgs} args - Arguments to find a InvoiceProduct
     * @example
     * // Get one InvoiceProduct
     * const invoiceProduct = await prisma.invoiceProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceProductFindFirstArgs>(args?: SelectSubset<T, InvoiceProductFindFirstArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductFindFirstOrThrowArgs} args - Arguments to find a InvoiceProduct
     * @example
     * // Get one InvoiceProduct
     * const invoiceProduct = await prisma.invoiceProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceProductFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceProducts
     * const invoiceProducts = await prisma.invoiceProduct.findMany()
     * 
     * // Get first 10 InvoiceProducts
     * const invoiceProducts = await prisma.invoiceProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceProductWithIdOnly = await prisma.invoiceProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceProductFindManyArgs>(args?: SelectSubset<T, InvoiceProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceProduct.
     * @param {InvoiceProductCreateArgs} args - Arguments to create a InvoiceProduct.
     * @example
     * // Create one InvoiceProduct
     * const InvoiceProduct = await prisma.invoiceProduct.create({
     *   data: {
     *     // ... data to create a InvoiceProduct
     *   }
     * })
     * 
     */
    create<T extends InvoiceProductCreateArgs>(args: SelectSubset<T, InvoiceProductCreateArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceProducts.
     * @param {InvoiceProductCreateManyArgs} args - Arguments to create many InvoiceProducts.
     * @example
     * // Create many InvoiceProducts
     * const invoiceProduct = await prisma.invoiceProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceProductCreateManyArgs>(args?: SelectSubset<T, InvoiceProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceProducts and returns the data saved in the database.
     * @param {InvoiceProductCreateManyAndReturnArgs} args - Arguments to create many InvoiceProducts.
     * @example
     * // Create many InvoiceProducts
     * const invoiceProduct = await prisma.invoiceProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceProducts and only return the `id`
     * const invoiceProductWithIdOnly = await prisma.invoiceProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceProductCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceProduct.
     * @param {InvoiceProductDeleteArgs} args - Arguments to delete one InvoiceProduct.
     * @example
     * // Delete one InvoiceProduct
     * const InvoiceProduct = await prisma.invoiceProduct.delete({
     *   where: {
     *     // ... filter to delete one InvoiceProduct
     *   }
     * })
     * 
     */
    delete<T extends InvoiceProductDeleteArgs>(args: SelectSubset<T, InvoiceProductDeleteArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceProduct.
     * @param {InvoiceProductUpdateArgs} args - Arguments to update one InvoiceProduct.
     * @example
     * // Update one InvoiceProduct
     * const invoiceProduct = await prisma.invoiceProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceProductUpdateArgs>(args: SelectSubset<T, InvoiceProductUpdateArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceProducts.
     * @param {InvoiceProductDeleteManyArgs} args - Arguments to filter InvoiceProducts to delete.
     * @example
     * // Delete a few InvoiceProducts
     * const { count } = await prisma.invoiceProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceProductDeleteManyArgs>(args?: SelectSubset<T, InvoiceProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceProducts
     * const invoiceProduct = await prisma.invoiceProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceProductUpdateManyArgs>(args: SelectSubset<T, InvoiceProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceProducts and returns the data updated in the database.
     * @param {InvoiceProductUpdateManyAndReturnArgs} args - Arguments to update many InvoiceProducts.
     * @example
     * // Update many InvoiceProducts
     * const invoiceProduct = await prisma.invoiceProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceProducts and only return the `id`
     * const invoiceProductWithIdOnly = await prisma.invoiceProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceProductUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceProduct.
     * @param {InvoiceProductUpsertArgs} args - Arguments to update or create a InvoiceProduct.
     * @example
     * // Update or create a InvoiceProduct
     * const invoiceProduct = await prisma.invoiceProduct.upsert({
     *   create: {
     *     // ... data to create a InvoiceProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceProduct we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceProductUpsertArgs>(args: SelectSubset<T, InvoiceProductUpsertArgs<ExtArgs>>): Prisma__InvoiceProductClient<$Result.GetResult<Prisma.$InvoiceProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductCountArgs} args - Arguments to filter InvoiceProducts to count.
     * @example
     * // Count the number of InvoiceProducts
     * const count = await prisma.invoiceProduct.count({
     *   where: {
     *     // ... the filter for the InvoiceProducts we want to count
     *   }
     * })
    **/
    count<T extends InvoiceProductCountArgs>(
      args?: Subset<T, InvoiceProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceProductAggregateArgs>(args: Subset<T, InvoiceProductAggregateArgs>): Prisma.PrismaPromise<GetInvoiceProductAggregateType<T>>

    /**
     * Group by InvoiceProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceProductGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceProduct model
   */
  readonly fields: InvoiceProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvoiceProduct model
   */
  interface InvoiceProductFieldRefs {
    readonly id: FieldRef<"InvoiceProduct", 'String'>
    readonly invoiceId: FieldRef<"InvoiceProduct", 'String'>
    readonly productId: FieldRef<"InvoiceProduct", 'String'>
    readonly name: FieldRef<"InvoiceProduct", 'String'>
    readonly code: FieldRef<"InvoiceProduct", 'String'>
    readonly amount: FieldRef<"InvoiceProduct", 'Int'>
    readonly price: FieldRef<"InvoiceProduct", 'Int'>
    readonly createdAt: FieldRef<"InvoiceProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"InvoiceProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceProduct findUnique
   */
  export type InvoiceProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceProduct to fetch.
     */
    where: InvoiceProductWhereUniqueInput
  }

  /**
   * InvoiceProduct findUniqueOrThrow
   */
  export type InvoiceProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceProduct to fetch.
     */
    where: InvoiceProductWhereUniqueInput
  }

  /**
   * InvoiceProduct findFirst
   */
  export type InvoiceProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceProduct to fetch.
     */
    where?: InvoiceProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceProducts to fetch.
     */
    orderBy?: InvoiceProductOrderByWithRelationInput | InvoiceProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceProducts.
     */
    cursor?: InvoiceProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceProducts.
     */
    distinct?: InvoiceProductScalarFieldEnum | InvoiceProductScalarFieldEnum[]
  }

  /**
   * InvoiceProduct findFirstOrThrow
   */
  export type InvoiceProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceProduct to fetch.
     */
    where?: InvoiceProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceProducts to fetch.
     */
    orderBy?: InvoiceProductOrderByWithRelationInput | InvoiceProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceProducts.
     */
    cursor?: InvoiceProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceProducts.
     */
    distinct?: InvoiceProductScalarFieldEnum | InvoiceProductScalarFieldEnum[]
  }

  /**
   * InvoiceProduct findMany
   */
  export type InvoiceProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceProducts to fetch.
     */
    where?: InvoiceProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceProducts to fetch.
     */
    orderBy?: InvoiceProductOrderByWithRelationInput | InvoiceProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceProducts.
     */
    cursor?: InvoiceProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceProducts.
     */
    skip?: number
    distinct?: InvoiceProductScalarFieldEnum | InvoiceProductScalarFieldEnum[]
  }

  /**
   * InvoiceProduct create
   */
  export type InvoiceProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceProduct.
     */
    data: XOR<InvoiceProductCreateInput, InvoiceProductUncheckedCreateInput>
  }

  /**
   * InvoiceProduct createMany
   */
  export type InvoiceProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceProducts.
     */
    data: InvoiceProductCreateManyInput | InvoiceProductCreateManyInput[]
  }

  /**
   * InvoiceProduct createManyAndReturn
   */
  export type InvoiceProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceProducts.
     */
    data: InvoiceProductCreateManyInput | InvoiceProductCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceProduct update
   */
  export type InvoiceProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceProduct.
     */
    data: XOR<InvoiceProductUpdateInput, InvoiceProductUncheckedUpdateInput>
    /**
     * Choose, which InvoiceProduct to update.
     */
    where: InvoiceProductWhereUniqueInput
  }

  /**
   * InvoiceProduct updateMany
   */
  export type InvoiceProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceProducts.
     */
    data: XOR<InvoiceProductUpdateManyMutationInput, InvoiceProductUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceProducts to update
     */
    where?: InvoiceProductWhereInput
    /**
     * Limit how many InvoiceProducts to update.
     */
    limit?: number
  }

  /**
   * InvoiceProduct updateManyAndReturn
   */
  export type InvoiceProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceProducts.
     */
    data: XOR<InvoiceProductUpdateManyMutationInput, InvoiceProductUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceProducts to update
     */
    where?: InvoiceProductWhereInput
    /**
     * Limit how many InvoiceProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceProduct upsert
   */
  export type InvoiceProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceProduct to update in case it exists.
     */
    where: InvoiceProductWhereUniqueInput
    /**
     * In case the InvoiceProduct found by the `where` argument doesn't exist, create a new InvoiceProduct with this data.
     */
    create: XOR<InvoiceProductCreateInput, InvoiceProductUncheckedCreateInput>
    /**
     * In case the InvoiceProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceProductUpdateInput, InvoiceProductUncheckedUpdateInput>
  }

  /**
   * InvoiceProduct delete
   */
  export type InvoiceProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
    /**
     * Filter which InvoiceProduct to delete.
     */
    where: InvoiceProductWhereUniqueInput
  }

  /**
   * InvoiceProduct deleteMany
   */
  export type InvoiceProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceProducts to delete
     */
    where?: InvoiceProductWhereInput
    /**
     * Limit how many InvoiceProducts to delete.
     */
    limit?: number
  }

  /**
   * InvoiceProduct without action
   */
  export type InvoiceProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceProduct
     */
    select?: InvoiceProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceProduct
     */
    omit?: InvoiceProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceProductInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    password: 'password',
    profileImage: 'profileImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    joinDate: 'joinDate',
    profileImage: 'profileImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const BreedScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BreedScalarFieldEnum = (typeof BreedScalarFieldEnum)[keyof typeof BreedScalarFieldEnum]


  export const DogScalarFieldEnum: {
    id: 'id',
    name: 'name',
    breedId: 'breedId',
    customBreed: 'customBreed',
    birthYear: 'birthYear',
    birthMonth: 'birthMonth',
    color: 'color',
    weight: 'weight',
    sex: 'sex',
    lastVaccineDate: 'lastVaccineDate',
    lastDewormDate: 'lastDewormDate',
    profileImage: 'profileImage',
    customerId: 'customerId',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DogScalarFieldEnum = (typeof DogScalarFieldEnum)[keyof typeof DogScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    categoryId: 'categoryId',
    price: 'price',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    categoryId: 'categoryId',
    description: 'description',
    amount: 'amount',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const DiagnoseScalarFieldEnum: {
    id: 'id',
    dxNumber: 'dxNumber',
    dxDate: 'dxDate',
    doctorName: 'doctorName',
    customerId: 'customerId',
    dogId: 'dogId',
    symptom: 'symptom',
    description: 'description',
    temperature: 'temperature',
    weight: 'weight',
    bloodPressure: 'bloodPressure',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DiagnoseScalarFieldEnum = (typeof DiagnoseScalarFieldEnum)[keyof typeof DiagnoseScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    invoiceNo: 'invoiceNo',
    customerId: 'customerId',
    dogId: 'dogId',
    inpatientDate: 'inpatientDate',
    inpatientTime: 'inpatientTime',
    dischargeDate: 'dischargeDate',
    dischargeTime: 'dischargeTime',
    total: 'total',
    deposit: 'deposit',
    balance: 'balance',
    subtotal: 'subtotal',
    treatmentType: 'treatmentType',
    paymentMethod: 'paymentMethod',
    customPaymentMethod: 'customPaymentMethod',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InvoiceServiceScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    serviceId: 'serviceId',
    name: 'name',
    code: 'code',
    datetime: 'datetime',
    duration: 'duration',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceServiceScalarFieldEnum = (typeof InvoiceServiceScalarFieldEnum)[keyof typeof InvoiceServiceScalarFieldEnum]


  export const InvoiceProductScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    productId: 'productId',
    name: 'name',
    code: 'code',
    amount: 'amount',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceProductScalarFieldEnum = (typeof InvoiceProductScalarFieldEnum)[keyof typeof InvoiceProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Sex'
   */
  export type EnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex'>
    


  /**
   * Reference to a field of type 'CategoryType'
   */
  export type EnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType'>
    


  /**
   * Reference to a field of type 'TreatmentType'
   */
  export type EnumTreatmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TreatmentType'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    joinDate?: DateTimeFilter<"Customer"> | Date | string
    profileImage?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    dog?: DogListRelationFilter
    Diagnose?: DiagnoseListRelationFilter
    invoice?: InvoiceListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    address?: SortOrder
    joinDate?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dog?: DogOrderByRelationAggregateInput
    Diagnose?: DiagnoseOrderByRelationAggregateInput
    invoice?: InvoiceOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    joinDate?: DateTimeFilter<"Customer"> | Date | string
    profileImage?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    dog?: DogListRelationFilter
    Diagnose?: DiagnoseListRelationFilter
    invoice?: InvoiceListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    address?: SortOrder
    joinDate?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringWithAggregatesFilter<"Customer"> | string
    address?: StringWithAggregatesFilter<"Customer"> | string
    joinDate?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    profileImage?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type BreedWhereInput = {
    AND?: BreedWhereInput | BreedWhereInput[]
    OR?: BreedWhereInput[]
    NOT?: BreedWhereInput | BreedWhereInput[]
    id?: StringFilter<"Breed"> | string
    name?: StringFilter<"Breed"> | string
    dog?: DogListRelationFilter
  }

  export type BreedOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dog?: DogOrderByRelationAggregateInput
  }

  export type BreedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BreedWhereInput | BreedWhereInput[]
    OR?: BreedWhereInput[]
    NOT?: BreedWhereInput | BreedWhereInput[]
    name?: StringFilter<"Breed"> | string
    dog?: DogListRelationFilter
  }, "id">

  export type BreedOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BreedCountOrderByAggregateInput
    _max?: BreedMaxOrderByAggregateInput
    _min?: BreedMinOrderByAggregateInput
  }

  export type BreedScalarWhereWithAggregatesInput = {
    AND?: BreedScalarWhereWithAggregatesInput | BreedScalarWhereWithAggregatesInput[]
    OR?: BreedScalarWhereWithAggregatesInput[]
    NOT?: BreedScalarWhereWithAggregatesInput | BreedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Breed"> | string
    name?: StringWithAggregatesFilter<"Breed"> | string
  }

  export type DogWhereInput = {
    AND?: DogWhereInput | DogWhereInput[]
    OR?: DogWhereInput[]
    NOT?: DogWhereInput | DogWhereInput[]
    id?: StringFilter<"Dog"> | string
    name?: StringFilter<"Dog"> | string
    breedId?: StringFilter<"Dog"> | string
    customBreed?: StringNullableFilter<"Dog"> | string | null
    birthYear?: IntFilter<"Dog"> | number
    birthMonth?: IntFilter<"Dog"> | number
    color?: StringFilter<"Dog"> | string
    weight?: FloatFilter<"Dog"> | number
    sex?: EnumSexFilter<"Dog"> | $Enums.Sex
    lastVaccineDate?: DateTimeFilter<"Dog"> | Date | string
    lastDewormDate?: DateTimeFilter<"Dog"> | Date | string
    profileImage?: StringNullableFilter<"Dog"> | string | null
    customerId?: StringFilter<"Dog"> | string
    notes?: StringNullableFilter<"Dog"> | string | null
    createdAt?: DateTimeFilter<"Dog"> | Date | string
    updatedAt?: DateTimeFilter<"Dog"> | Date | string
    breed?: XOR<BreedScalarRelationFilter, BreedWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    diagnose?: DiagnoseListRelationFilter
    invoice?: InvoiceListRelationFilter
  }

  export type DogOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    breedId?: SortOrder
    customBreed?: SortOrderInput | SortOrder
    birthYear?: SortOrder
    birthMonth?: SortOrder
    color?: SortOrder
    weight?: SortOrder
    sex?: SortOrder
    lastVaccineDate?: SortOrder
    lastDewormDate?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    customerId?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    breed?: BreedOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    diagnose?: DiagnoseOrderByRelationAggregateInput
    invoice?: InvoiceOrderByRelationAggregateInput
  }

  export type DogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DogWhereInput | DogWhereInput[]
    OR?: DogWhereInput[]
    NOT?: DogWhereInput | DogWhereInput[]
    name?: StringFilter<"Dog"> | string
    breedId?: StringFilter<"Dog"> | string
    customBreed?: StringNullableFilter<"Dog"> | string | null
    birthYear?: IntFilter<"Dog"> | number
    birthMonth?: IntFilter<"Dog"> | number
    color?: StringFilter<"Dog"> | string
    weight?: FloatFilter<"Dog"> | number
    sex?: EnumSexFilter<"Dog"> | $Enums.Sex
    lastVaccineDate?: DateTimeFilter<"Dog"> | Date | string
    lastDewormDate?: DateTimeFilter<"Dog"> | Date | string
    profileImage?: StringNullableFilter<"Dog"> | string | null
    customerId?: StringFilter<"Dog"> | string
    notes?: StringNullableFilter<"Dog"> | string | null
    createdAt?: DateTimeFilter<"Dog"> | Date | string
    updatedAt?: DateTimeFilter<"Dog"> | Date | string
    breed?: XOR<BreedScalarRelationFilter, BreedWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    diagnose?: DiagnoseListRelationFilter
    invoice?: InvoiceListRelationFilter
  }, "id">

  export type DogOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    breedId?: SortOrder
    customBreed?: SortOrderInput | SortOrder
    birthYear?: SortOrder
    birthMonth?: SortOrder
    color?: SortOrder
    weight?: SortOrder
    sex?: SortOrder
    lastVaccineDate?: SortOrder
    lastDewormDate?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    customerId?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DogCountOrderByAggregateInput
    _avg?: DogAvgOrderByAggregateInput
    _max?: DogMaxOrderByAggregateInput
    _min?: DogMinOrderByAggregateInput
    _sum?: DogSumOrderByAggregateInput
  }

  export type DogScalarWhereWithAggregatesInput = {
    AND?: DogScalarWhereWithAggregatesInput | DogScalarWhereWithAggregatesInput[]
    OR?: DogScalarWhereWithAggregatesInput[]
    NOT?: DogScalarWhereWithAggregatesInput | DogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dog"> | string
    name?: StringWithAggregatesFilter<"Dog"> | string
    breedId?: StringWithAggregatesFilter<"Dog"> | string
    customBreed?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    birthYear?: IntWithAggregatesFilter<"Dog"> | number
    birthMonth?: IntWithAggregatesFilter<"Dog"> | number
    color?: StringWithAggregatesFilter<"Dog"> | string
    weight?: FloatWithAggregatesFilter<"Dog"> | number
    sex?: EnumSexWithAggregatesFilter<"Dog"> | $Enums.Sex
    lastVaccineDate?: DateTimeWithAggregatesFilter<"Dog"> | Date | string
    lastDewormDate?: DateTimeWithAggregatesFilter<"Dog"> | Date | string
    profileImage?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    customerId?: StringWithAggregatesFilter<"Dog"> | string
    notes?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dog"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    service?: ServiceListRelationFilter
    product?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    service?: ServiceOrderByRelationAggregateInput
    product?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    service?: ServiceListRelationFilter
    product?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    type?: EnumCategoryTypeWithAggregatesFilter<"Category"> | $Enums.CategoryType
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    code?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    categoryId?: StringFilter<"Service"> | string
    price?: IntFilter<"Service"> | number
    description?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    invoice?: InvoiceServiceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    invoice?: InvoiceServiceOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    code?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    categoryId?: StringFilter<"Service"> | string
    price?: IntFilter<"Service"> | number
    description?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    invoice?: InvoiceServiceListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    code?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    categoryId?: StringWithAggregatesFilter<"Service"> | string
    price?: IntWithAggregatesFilter<"Service"> | number
    description?: StringWithAggregatesFilter<"Service"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    code?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    amount?: IntFilter<"Product"> | number
    price?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    invoice?: InvoiceProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    invoice?: InvoiceProductOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    code?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    amount?: IntFilter<"Product"> | number
    price?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    invoice?: InvoiceProductListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    code?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    amount?: IntWithAggregatesFilter<"Product"> | number
    price?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type DiagnoseWhereInput = {
    AND?: DiagnoseWhereInput | DiagnoseWhereInput[]
    OR?: DiagnoseWhereInput[]
    NOT?: DiagnoseWhereInput | DiagnoseWhereInput[]
    id?: StringFilter<"Diagnose"> | string
    dxNumber?: StringFilter<"Diagnose"> | string
    dxDate?: DateTimeFilter<"Diagnose"> | Date | string
    doctorName?: StringFilter<"Diagnose"> | string
    customerId?: StringFilter<"Diagnose"> | string
    dogId?: StringFilter<"Diagnose"> | string
    symptom?: StringFilter<"Diagnose"> | string
    description?: StringFilter<"Diagnose"> | string
    temperature?: FloatFilter<"Diagnose"> | number
    weight?: FloatFilter<"Diagnose"> | number
    bloodPressure?: StringFilter<"Diagnose"> | string
    notes?: StringNullableFilter<"Diagnose"> | string | null
    createdAt?: DateTimeFilter<"Diagnose"> | Date | string
    updatedAt?: DateTimeFilter<"Diagnose"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    dog?: XOR<DogScalarRelationFilter, DogWhereInput>
  }

  export type DiagnoseOrderByWithRelationInput = {
    id?: SortOrder
    dxNumber?: SortOrder
    dxDate?: SortOrder
    doctorName?: SortOrder
    customerId?: SortOrder
    dogId?: SortOrder
    symptom?: SortOrder
    description?: SortOrder
    temperature?: SortOrder
    weight?: SortOrder
    bloodPressure?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    dog?: DogOrderByWithRelationInput
  }

  export type DiagnoseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiagnoseWhereInput | DiagnoseWhereInput[]
    OR?: DiagnoseWhereInput[]
    NOT?: DiagnoseWhereInput | DiagnoseWhereInput[]
    dxNumber?: StringFilter<"Diagnose"> | string
    dxDate?: DateTimeFilter<"Diagnose"> | Date | string
    doctorName?: StringFilter<"Diagnose"> | string
    customerId?: StringFilter<"Diagnose"> | string
    dogId?: StringFilter<"Diagnose"> | string
    symptom?: StringFilter<"Diagnose"> | string
    description?: StringFilter<"Diagnose"> | string
    temperature?: FloatFilter<"Diagnose"> | number
    weight?: FloatFilter<"Diagnose"> | number
    bloodPressure?: StringFilter<"Diagnose"> | string
    notes?: StringNullableFilter<"Diagnose"> | string | null
    createdAt?: DateTimeFilter<"Diagnose"> | Date | string
    updatedAt?: DateTimeFilter<"Diagnose"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    dog?: XOR<DogScalarRelationFilter, DogWhereInput>
  }, "id">

  export type DiagnoseOrderByWithAggregationInput = {
    id?: SortOrder
    dxNumber?: SortOrder
    dxDate?: SortOrder
    doctorName?: SortOrder
    customerId?: SortOrder
    dogId?: SortOrder
    symptom?: SortOrder
    description?: SortOrder
    temperature?: SortOrder
    weight?: SortOrder
    bloodPressure?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DiagnoseCountOrderByAggregateInput
    _avg?: DiagnoseAvgOrderByAggregateInput
    _max?: DiagnoseMaxOrderByAggregateInput
    _min?: DiagnoseMinOrderByAggregateInput
    _sum?: DiagnoseSumOrderByAggregateInput
  }

  export type DiagnoseScalarWhereWithAggregatesInput = {
    AND?: DiagnoseScalarWhereWithAggregatesInput | DiagnoseScalarWhereWithAggregatesInput[]
    OR?: DiagnoseScalarWhereWithAggregatesInput[]
    NOT?: DiagnoseScalarWhereWithAggregatesInput | DiagnoseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Diagnose"> | string
    dxNumber?: StringWithAggregatesFilter<"Diagnose"> | string
    dxDate?: DateTimeWithAggregatesFilter<"Diagnose"> | Date | string
    doctorName?: StringWithAggregatesFilter<"Diagnose"> | string
    customerId?: StringWithAggregatesFilter<"Diagnose"> | string
    dogId?: StringWithAggregatesFilter<"Diagnose"> | string
    symptom?: StringWithAggregatesFilter<"Diagnose"> | string
    description?: StringWithAggregatesFilter<"Diagnose"> | string
    temperature?: FloatWithAggregatesFilter<"Diagnose"> | number
    weight?: FloatWithAggregatesFilter<"Diagnose"> | number
    bloodPressure?: StringWithAggregatesFilter<"Diagnose"> | string
    notes?: StringNullableWithAggregatesFilter<"Diagnose"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Diagnose"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Diagnose"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceNo?: StringFilter<"Invoice"> | string
    customerId?: StringFilter<"Invoice"> | string
    dogId?: StringFilter<"Invoice"> | string
    inpatientDate?: StringFilter<"Invoice"> | string
    inpatientTime?: StringFilter<"Invoice"> | string
    dischargeDate?: StringFilter<"Invoice"> | string
    dischargeTime?: StringFilter<"Invoice"> | string
    total?: IntFilter<"Invoice"> | number
    deposit?: IntFilter<"Invoice"> | number
    balance?: IntFilter<"Invoice"> | number
    subtotal?: IntFilter<"Invoice"> | number
    treatmentType?: EnumTreatmentTypeFilter<"Invoice"> | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFilter<"Invoice"> | $Enums.PaymentMethod
    customPaymentMethod?: StringFilter<"Invoice"> | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    dog?: XOR<DogScalarRelationFilter, DogWhereInput>
    invoiceService?: InvoiceServiceListRelationFilter
    invoiceProduct?: InvoiceProductListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    customerId?: SortOrder
    dogId?: SortOrder
    inpatientDate?: SortOrder
    inpatientTime?: SortOrder
    dischargeDate?: SortOrder
    dischargeTime?: SortOrder
    total?: SortOrder
    deposit?: SortOrder
    balance?: SortOrder
    subtotal?: SortOrder
    treatmentType?: SortOrder
    paymentMethod?: SortOrder
    customPaymentMethod?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    dog?: DogOrderByWithRelationInput
    invoiceService?: InvoiceServiceOrderByRelationAggregateInput
    invoiceProduct?: InvoiceProductOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    invoiceNo?: StringFilter<"Invoice"> | string
    customerId?: StringFilter<"Invoice"> | string
    dogId?: StringFilter<"Invoice"> | string
    inpatientDate?: StringFilter<"Invoice"> | string
    inpatientTime?: StringFilter<"Invoice"> | string
    dischargeDate?: StringFilter<"Invoice"> | string
    dischargeTime?: StringFilter<"Invoice"> | string
    total?: IntFilter<"Invoice"> | number
    deposit?: IntFilter<"Invoice"> | number
    balance?: IntFilter<"Invoice"> | number
    subtotal?: IntFilter<"Invoice"> | number
    treatmentType?: EnumTreatmentTypeFilter<"Invoice"> | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFilter<"Invoice"> | $Enums.PaymentMethod
    customPaymentMethod?: StringFilter<"Invoice"> | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    dog?: XOR<DogScalarRelationFilter, DogWhereInput>
    invoiceService?: InvoiceServiceListRelationFilter
    invoiceProduct?: InvoiceProductListRelationFilter
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    customerId?: SortOrder
    dogId?: SortOrder
    inpatientDate?: SortOrder
    inpatientTime?: SortOrder
    dischargeDate?: SortOrder
    dischargeTime?: SortOrder
    total?: SortOrder
    deposit?: SortOrder
    balance?: SortOrder
    subtotal?: SortOrder
    treatmentType?: SortOrder
    paymentMethod?: SortOrder
    customPaymentMethod?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceNo?: StringWithAggregatesFilter<"Invoice"> | string
    customerId?: StringWithAggregatesFilter<"Invoice"> | string
    dogId?: StringWithAggregatesFilter<"Invoice"> | string
    inpatientDate?: StringWithAggregatesFilter<"Invoice"> | string
    inpatientTime?: StringWithAggregatesFilter<"Invoice"> | string
    dischargeDate?: StringWithAggregatesFilter<"Invoice"> | string
    dischargeTime?: StringWithAggregatesFilter<"Invoice"> | string
    total?: IntWithAggregatesFilter<"Invoice"> | number
    deposit?: IntWithAggregatesFilter<"Invoice"> | number
    balance?: IntWithAggregatesFilter<"Invoice"> | number
    subtotal?: IntWithAggregatesFilter<"Invoice"> | number
    treatmentType?: EnumTreatmentTypeWithAggregatesFilter<"Invoice"> | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Invoice"> | $Enums.PaymentMethod
    customPaymentMethod?: StringWithAggregatesFilter<"Invoice"> | string
    notes?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type InvoiceServiceWhereInput = {
    AND?: InvoiceServiceWhereInput | InvoiceServiceWhereInput[]
    OR?: InvoiceServiceWhereInput[]
    NOT?: InvoiceServiceWhereInput | InvoiceServiceWhereInput[]
    id?: StringFilter<"InvoiceService"> | string
    invoiceId?: StringFilter<"InvoiceService"> | string
    serviceId?: StringFilter<"InvoiceService"> | string
    name?: StringFilter<"InvoiceService"> | string
    code?: StringFilter<"InvoiceService"> | string
    datetime?: DateTimeFilter<"InvoiceService"> | Date | string
    duration?: StringFilter<"InvoiceService"> | string
    price?: IntFilter<"InvoiceService"> | number
    createdAt?: DateTimeFilter<"InvoiceService"> | Date | string
    updatedAt?: DateTimeFilter<"InvoiceService"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type InvoiceServiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    serviceId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    datetime?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type InvoiceServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceServiceWhereInput | InvoiceServiceWhereInput[]
    OR?: InvoiceServiceWhereInput[]
    NOT?: InvoiceServiceWhereInput | InvoiceServiceWhereInput[]
    invoiceId?: StringFilter<"InvoiceService"> | string
    serviceId?: StringFilter<"InvoiceService"> | string
    name?: StringFilter<"InvoiceService"> | string
    code?: StringFilter<"InvoiceService"> | string
    datetime?: DateTimeFilter<"InvoiceService"> | Date | string
    duration?: StringFilter<"InvoiceService"> | string
    price?: IntFilter<"InvoiceService"> | number
    createdAt?: DateTimeFilter<"InvoiceService"> | Date | string
    updatedAt?: DateTimeFilter<"InvoiceService"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type InvoiceServiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    serviceId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    datetime?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceServiceCountOrderByAggregateInput
    _avg?: InvoiceServiceAvgOrderByAggregateInput
    _max?: InvoiceServiceMaxOrderByAggregateInput
    _min?: InvoiceServiceMinOrderByAggregateInput
    _sum?: InvoiceServiceSumOrderByAggregateInput
  }

  export type InvoiceServiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceServiceScalarWhereWithAggregatesInput | InvoiceServiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceServiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceServiceScalarWhereWithAggregatesInput | InvoiceServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvoiceService"> | string
    invoiceId?: StringWithAggregatesFilter<"InvoiceService"> | string
    serviceId?: StringWithAggregatesFilter<"InvoiceService"> | string
    name?: StringWithAggregatesFilter<"InvoiceService"> | string
    code?: StringWithAggregatesFilter<"InvoiceService"> | string
    datetime?: DateTimeWithAggregatesFilter<"InvoiceService"> | Date | string
    duration?: StringWithAggregatesFilter<"InvoiceService"> | string
    price?: IntWithAggregatesFilter<"InvoiceService"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InvoiceService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InvoiceService"> | Date | string
  }

  export type InvoiceProductWhereInput = {
    AND?: InvoiceProductWhereInput | InvoiceProductWhereInput[]
    OR?: InvoiceProductWhereInput[]
    NOT?: InvoiceProductWhereInput | InvoiceProductWhereInput[]
    id?: StringFilter<"InvoiceProduct"> | string
    invoiceId?: StringFilter<"InvoiceProduct"> | string
    productId?: StringFilter<"InvoiceProduct"> | string
    name?: StringFilter<"InvoiceProduct"> | string
    code?: StringFilter<"InvoiceProduct"> | string
    amount?: IntFilter<"InvoiceProduct"> | number
    price?: IntFilter<"InvoiceProduct"> | number
    createdAt?: DateTimeFilter<"InvoiceProduct"> | Date | string
    updatedAt?: DateTimeFilter<"InvoiceProduct"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type InvoiceProductOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type InvoiceProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceProductWhereInput | InvoiceProductWhereInput[]
    OR?: InvoiceProductWhereInput[]
    NOT?: InvoiceProductWhereInput | InvoiceProductWhereInput[]
    invoiceId?: StringFilter<"InvoiceProduct"> | string
    productId?: StringFilter<"InvoiceProduct"> | string
    name?: StringFilter<"InvoiceProduct"> | string
    code?: StringFilter<"InvoiceProduct"> | string
    amount?: IntFilter<"InvoiceProduct"> | number
    price?: IntFilter<"InvoiceProduct"> | number
    createdAt?: DateTimeFilter<"InvoiceProduct"> | Date | string
    updatedAt?: DateTimeFilter<"InvoiceProduct"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type InvoiceProductOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceProductCountOrderByAggregateInput
    _avg?: InvoiceProductAvgOrderByAggregateInput
    _max?: InvoiceProductMaxOrderByAggregateInput
    _min?: InvoiceProductMinOrderByAggregateInput
    _sum?: InvoiceProductSumOrderByAggregateInput
  }

  export type InvoiceProductScalarWhereWithAggregatesInput = {
    AND?: InvoiceProductScalarWhereWithAggregatesInput | InvoiceProductScalarWhereWithAggregatesInput[]
    OR?: InvoiceProductScalarWhereWithAggregatesInput[]
    NOT?: InvoiceProductScalarWhereWithAggregatesInput | InvoiceProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvoiceProduct"> | string
    invoiceId?: StringWithAggregatesFilter<"InvoiceProduct"> | string
    productId?: StringWithAggregatesFilter<"InvoiceProduct"> | string
    name?: StringWithAggregatesFilter<"InvoiceProduct"> | string
    code?: StringWithAggregatesFilter<"InvoiceProduct"> | string
    amount?: IntWithAggregatesFilter<"InvoiceProduct"> | number
    price?: IntWithAggregatesFilter<"InvoiceProduct"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InvoiceProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InvoiceProduct"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    name: string
    role: string
    password: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    name: string
    role: string
    password: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    name: string
    role: string
    password: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address: string
    joinDate?: Date | string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dog?: DogCreateNestedManyWithoutCustomerInput
    Diagnose?: DiagnoseCreateNestedManyWithoutCustomerInput
    invoice?: InvoiceCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address: string
    joinDate?: Date | string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dog?: DogUncheckedCreateNestedManyWithoutCustomerInput
    Diagnose?: DiagnoseUncheckedCreateNestedManyWithoutCustomerInput
    invoice?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dog?: DogUpdateManyWithoutCustomerNestedInput
    Diagnose?: DiagnoseUpdateManyWithoutCustomerNestedInput
    invoice?: InvoiceUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dog?: DogUncheckedUpdateManyWithoutCustomerNestedInput
    Diagnose?: DiagnoseUncheckedUpdateManyWithoutCustomerNestedInput
    invoice?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address: string
    joinDate?: Date | string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreedCreateInput = {
    id?: string
    name: string
    dog?: DogCreateNestedManyWithoutBreedInput
  }

  export type BreedUncheckedCreateInput = {
    id?: string
    name: string
    dog?: DogUncheckedCreateNestedManyWithoutBreedInput
  }

  export type BreedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dog?: DogUpdateManyWithoutBreedNestedInput
  }

  export type BreedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dog?: DogUncheckedUpdateManyWithoutBreedNestedInput
  }

  export type BreedCreateManyInput = {
    id?: string
    name: string
  }

  export type BreedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BreedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DogCreateInput = {
    id?: string
    name: string
    customBreed?: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date | string
    lastDewormDate: Date | string
    profileImage?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    breed: BreedCreateNestedOneWithoutDogInput
    customer: CustomerCreateNestedOneWithoutDogInput
    diagnose?: DiagnoseCreateNestedManyWithoutDogInput
    invoice?: InvoiceCreateNestedManyWithoutDogInput
  }

  export type DogUncheckedCreateInput = {
    id?: string
    name: string
    breedId: string
    customBreed?: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date | string
    lastDewormDate: Date | string
    profileImage?: string | null
    customerId: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    diagnose?: DiagnoseUncheckedCreateNestedManyWithoutDogInput
    invoice?: InvoiceUncheckedCreateNestedManyWithoutDogInput
  }

  export type DogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breed?: BreedUpdateOneRequiredWithoutDogNestedInput
    customer?: CustomerUpdateOneRequiredWithoutDogNestedInput
    diagnose?: DiagnoseUpdateManyWithoutDogNestedInput
    invoice?: InvoiceUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    breedId?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnose?: DiagnoseUncheckedUpdateManyWithoutDogNestedInput
    invoice?: InvoiceUncheckedUpdateManyWithoutDogNestedInput
  }

  export type DogCreateManyInput = {
    id?: string
    name: string
    breedId: string
    customBreed?: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date | string
    lastDewormDate: Date | string
    profileImage?: string | null
    customerId: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    breedId?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    updatedAt?: Date | string
    service?: ServiceCreateNestedManyWithoutCategoryInput
    product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    updatedAt?: Date | string
    service?: ServiceUncheckedCreateNestedManyWithoutCategoryInput
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateManyWithoutCategoryNestedInput
    product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    code: string
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutServiceInput
    invoice?: InvoiceServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    categoryId: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice?: InvoiceServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutServiceNestedInput
    invoice?: InvoiceServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    code: string
    name: string
    categoryId: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    code: string
    name: string
    description: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductInput
    invoice?: InvoiceProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    categoryId: string
    description: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice?: InvoiceProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    invoice?: InvoiceProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    code: string
    name: string
    categoryId: string
    description: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnoseCreateInput = {
    id?: string
    dxNumber: string
    dxDate: Date | string
    doctorName: string
    symptom: string
    description: string
    temperature: number
    weight: number
    bloodPressure: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutDiagnoseInput
    dog: DogCreateNestedOneWithoutDiagnoseInput
  }

  export type DiagnoseUncheckedCreateInput = {
    id?: string
    dxNumber: string
    dxDate: Date | string
    doctorName: string
    customerId: string
    dogId: string
    symptom: string
    description: string
    temperature: number
    weight: number
    bloodPressure: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnoseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dxNumber?: StringFieldUpdateOperationsInput | string
    dxDate?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    symptom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutDiagnoseNestedInput
    dog?: DogUpdateOneRequiredWithoutDiagnoseNestedInput
  }

  export type DiagnoseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dxNumber?: StringFieldUpdateOperationsInput | string
    dxDate?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    dogId?: StringFieldUpdateOperationsInput | string
    symptom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnoseCreateManyInput = {
    id?: string
    dxNumber: string
    dxDate: Date | string
    doctorName: string
    customerId: string
    dogId: string
    symptom: string
    description: string
    temperature: number
    weight: number
    bloodPressure: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnoseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dxNumber?: StringFieldUpdateOperationsInput | string
    dxDate?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    symptom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnoseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dxNumber?: StringFieldUpdateOperationsInput | string
    dxDate?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    dogId?: StringFieldUpdateOperationsInput | string
    symptom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceNo: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutInvoiceInput
    dog: DogCreateNestedOneWithoutInvoiceInput
    invoiceService?: InvoiceServiceCreateNestedManyWithoutInvoiceInput
    invoiceProduct?: InvoiceProductCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    invoiceNo: string
    customerId: string
    dogId: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoiceService?: InvoiceServiceUncheckedCreateNestedManyWithoutInvoiceInput
    invoiceProduct?: InvoiceProductUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutInvoiceNestedInput
    dog?: DogUpdateOneRequiredWithoutInvoiceNestedInput
    invoiceService?: InvoiceServiceUpdateManyWithoutInvoiceNestedInput
    invoiceProduct?: InvoiceProductUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    dogId?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceService?: InvoiceServiceUncheckedUpdateManyWithoutInvoiceNestedInput
    invoiceProduct?: InvoiceProductUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    invoiceNo: string
    customerId: string
    dogId: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    dogId?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceServiceCreateInput = {
    id?: string
    name: string
    code: string
    datetime: Date | string
    duration: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutInvoiceServiceInput
    service: ServiceCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceServiceUncheckedCreateInput = {
    id?: string
    invoiceId: string
    serviceId: string
    name: string
    code: string
    datetime: Date | string
    duration: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutInvoiceServiceNestedInput
    service?: ServiceUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type InvoiceServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceServiceCreateManyInput = {
    id?: string
    invoiceId: string
    serviceId: string
    name: string
    code: string
    datetime: Date | string
    duration: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceProductCreateInput = {
    id?: string
    name: string
    code: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutInvoiceProductInput
    product: ProductCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceProductUncheckedCreateInput = {
    id?: string
    invoiceId: string
    productId: string
    name: string
    code: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutInvoiceProductNestedInput
    product?: ProductUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type InvoiceProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceProductCreateManyInput = {
    id?: string
    invoiceId: string
    productId: string
    name: string
    code: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DogListRelationFilter = {
    every?: DogWhereInput
    some?: DogWhereInput
    none?: DogWhereInput
  }

  export type DiagnoseListRelationFilter = {
    every?: DiagnoseWhereInput
    some?: DiagnoseWhereInput
    none?: DiagnoseWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type DogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiagnoseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    joinDate?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    joinDate?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    joinDate?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BreedCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BreedMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BreedMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[]
    notIn?: $Enums.Sex[]
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type BreedScalarRelationFilter = {
    is?: BreedWhereInput
    isNot?: BreedWhereInput
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type DogCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    breedId?: SortOrder
    customBreed?: SortOrder
    birthYear?: SortOrder
    birthMonth?: SortOrder
    color?: SortOrder
    weight?: SortOrder
    sex?: SortOrder
    lastVaccineDate?: SortOrder
    lastDewormDate?: SortOrder
    profileImage?: SortOrder
    customerId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DogAvgOrderByAggregateInput = {
    birthYear?: SortOrder
    birthMonth?: SortOrder
    weight?: SortOrder
  }

  export type DogMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    breedId?: SortOrder
    customBreed?: SortOrder
    birthYear?: SortOrder
    birthMonth?: SortOrder
    color?: SortOrder
    weight?: SortOrder
    sex?: SortOrder
    lastVaccineDate?: SortOrder
    lastDewormDate?: SortOrder
    profileImage?: SortOrder
    customerId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DogMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    breedId?: SortOrder
    customBreed?: SortOrder
    birthYear?: SortOrder
    birthMonth?: SortOrder
    color?: SortOrder
    weight?: SortOrder
    sex?: SortOrder
    lastVaccineDate?: SortOrder
    lastDewormDate?: SortOrder
    profileImage?: SortOrder
    customerId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DogSumOrderByAggregateInput = {
    birthYear?: SortOrder
    birthMonth?: SortOrder
    weight?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[]
    notIn?: $Enums.Sex[]
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type EnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[]
    notIn?: $Enums.CategoryType[]
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[]
    notIn?: $Enums.CategoryType[]
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type InvoiceServiceListRelationFilter = {
    every?: InvoiceServiceWhereInput
    some?: InvoiceServiceWhereInput
    none?: InvoiceServiceWhereInput
  }

  export type InvoiceServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type InvoiceProductListRelationFilter = {
    every?: InvoiceProductWhereInput
    some?: InvoiceProductWhereInput
    none?: InvoiceProductWhereInput
  }

  export type InvoiceProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    amount?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    amount?: SortOrder
    price?: SortOrder
  }

  export type DogScalarRelationFilter = {
    is?: DogWhereInput
    isNot?: DogWhereInput
  }

  export type DiagnoseCountOrderByAggregateInput = {
    id?: SortOrder
    dxNumber?: SortOrder
    dxDate?: SortOrder
    doctorName?: SortOrder
    customerId?: SortOrder
    dogId?: SortOrder
    symptom?: SortOrder
    description?: SortOrder
    temperature?: SortOrder
    weight?: SortOrder
    bloodPressure?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiagnoseAvgOrderByAggregateInput = {
    temperature?: SortOrder
    weight?: SortOrder
  }

  export type DiagnoseMaxOrderByAggregateInput = {
    id?: SortOrder
    dxNumber?: SortOrder
    dxDate?: SortOrder
    doctorName?: SortOrder
    customerId?: SortOrder
    dogId?: SortOrder
    symptom?: SortOrder
    description?: SortOrder
    temperature?: SortOrder
    weight?: SortOrder
    bloodPressure?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiagnoseMinOrderByAggregateInput = {
    id?: SortOrder
    dxNumber?: SortOrder
    dxDate?: SortOrder
    doctorName?: SortOrder
    customerId?: SortOrder
    dogId?: SortOrder
    symptom?: SortOrder
    description?: SortOrder
    temperature?: SortOrder
    weight?: SortOrder
    bloodPressure?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiagnoseSumOrderByAggregateInput = {
    temperature?: SortOrder
    weight?: SortOrder
  }

  export type EnumTreatmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TreatmentType | EnumTreatmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TreatmentType[]
    notIn?: $Enums.TreatmentType[]
    not?: NestedEnumTreatmentTypeFilter<$PrismaModel> | $Enums.TreatmentType
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    customerId?: SortOrder
    dogId?: SortOrder
    inpatientDate?: SortOrder
    inpatientTime?: SortOrder
    dischargeDate?: SortOrder
    dischargeTime?: SortOrder
    total?: SortOrder
    deposit?: SortOrder
    balance?: SortOrder
    subtotal?: SortOrder
    treatmentType?: SortOrder
    paymentMethod?: SortOrder
    customPaymentMethod?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    total?: SortOrder
    deposit?: SortOrder
    balance?: SortOrder
    subtotal?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    customerId?: SortOrder
    dogId?: SortOrder
    inpatientDate?: SortOrder
    inpatientTime?: SortOrder
    dischargeDate?: SortOrder
    dischargeTime?: SortOrder
    total?: SortOrder
    deposit?: SortOrder
    balance?: SortOrder
    subtotal?: SortOrder
    treatmentType?: SortOrder
    paymentMethod?: SortOrder
    customPaymentMethod?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceNo?: SortOrder
    customerId?: SortOrder
    dogId?: SortOrder
    inpatientDate?: SortOrder
    inpatientTime?: SortOrder
    dischargeDate?: SortOrder
    dischargeTime?: SortOrder
    total?: SortOrder
    deposit?: SortOrder
    balance?: SortOrder
    subtotal?: SortOrder
    treatmentType?: SortOrder
    paymentMethod?: SortOrder
    customPaymentMethod?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    total?: SortOrder
    deposit?: SortOrder
    balance?: SortOrder
    subtotal?: SortOrder
  }

  export type EnumTreatmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TreatmentType | EnumTreatmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TreatmentType[]
    notIn?: $Enums.TreatmentType[]
    not?: NestedEnumTreatmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.TreatmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTreatmentTypeFilter<$PrismaModel>
    _max?: NestedEnumTreatmentTypeFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type InvoiceServiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    serviceId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    datetime?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceServiceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type InvoiceServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    serviceId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    datetime?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceServiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    serviceId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    datetime?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceServiceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type InvoiceProductCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceProductAvgOrderByAggregateInput = {
    amount?: SortOrder
    price?: SortOrder
  }

  export type InvoiceProductMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceProductMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceProductSumOrderByAggregateInput = {
    amount?: SortOrder
    price?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DogCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DogCreateWithoutCustomerInput, DogUncheckedCreateWithoutCustomerInput> | DogCreateWithoutCustomerInput[] | DogUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DogCreateOrConnectWithoutCustomerInput | DogCreateOrConnectWithoutCustomerInput[]
    createMany?: DogCreateManyCustomerInputEnvelope
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
  }

  export type DiagnoseCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DiagnoseCreateWithoutCustomerInput, DiagnoseUncheckedCreateWithoutCustomerInput> | DiagnoseCreateWithoutCustomerInput[] | DiagnoseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DiagnoseCreateOrConnectWithoutCustomerInput | DiagnoseCreateOrConnectWithoutCustomerInput[]
    createMany?: DiagnoseCreateManyCustomerInputEnvelope
    connect?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type DogUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DogCreateWithoutCustomerInput, DogUncheckedCreateWithoutCustomerInput> | DogCreateWithoutCustomerInput[] | DogUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DogCreateOrConnectWithoutCustomerInput | DogCreateOrConnectWithoutCustomerInput[]
    createMany?: DogCreateManyCustomerInputEnvelope
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
  }

  export type DiagnoseUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DiagnoseCreateWithoutCustomerInput, DiagnoseUncheckedCreateWithoutCustomerInput> | DiagnoseCreateWithoutCustomerInput[] | DiagnoseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DiagnoseCreateOrConnectWithoutCustomerInput | DiagnoseCreateOrConnectWithoutCustomerInput[]
    createMany?: DiagnoseCreateManyCustomerInputEnvelope
    connect?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type DogUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DogCreateWithoutCustomerInput, DogUncheckedCreateWithoutCustomerInput> | DogCreateWithoutCustomerInput[] | DogUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DogCreateOrConnectWithoutCustomerInput | DogCreateOrConnectWithoutCustomerInput[]
    upsert?: DogUpsertWithWhereUniqueWithoutCustomerInput | DogUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DogCreateManyCustomerInputEnvelope
    set?: DogWhereUniqueInput | DogWhereUniqueInput[]
    disconnect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    delete?: DogWhereUniqueInput | DogWhereUniqueInput[]
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    update?: DogUpdateWithWhereUniqueWithoutCustomerInput | DogUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DogUpdateManyWithWhereWithoutCustomerInput | DogUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DogScalarWhereInput | DogScalarWhereInput[]
  }

  export type DiagnoseUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DiagnoseCreateWithoutCustomerInput, DiagnoseUncheckedCreateWithoutCustomerInput> | DiagnoseCreateWithoutCustomerInput[] | DiagnoseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DiagnoseCreateOrConnectWithoutCustomerInput | DiagnoseCreateOrConnectWithoutCustomerInput[]
    upsert?: DiagnoseUpsertWithWhereUniqueWithoutCustomerInput | DiagnoseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DiagnoseCreateManyCustomerInputEnvelope
    set?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    disconnect?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    delete?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    connect?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    update?: DiagnoseUpdateWithWhereUniqueWithoutCustomerInput | DiagnoseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DiagnoseUpdateManyWithWhereWithoutCustomerInput | DiagnoseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DiagnoseScalarWhereInput | DiagnoseScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type DogUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DogCreateWithoutCustomerInput, DogUncheckedCreateWithoutCustomerInput> | DogCreateWithoutCustomerInput[] | DogUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DogCreateOrConnectWithoutCustomerInput | DogCreateOrConnectWithoutCustomerInput[]
    upsert?: DogUpsertWithWhereUniqueWithoutCustomerInput | DogUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DogCreateManyCustomerInputEnvelope
    set?: DogWhereUniqueInput | DogWhereUniqueInput[]
    disconnect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    delete?: DogWhereUniqueInput | DogWhereUniqueInput[]
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    update?: DogUpdateWithWhereUniqueWithoutCustomerInput | DogUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DogUpdateManyWithWhereWithoutCustomerInput | DogUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DogScalarWhereInput | DogScalarWhereInput[]
  }

  export type DiagnoseUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DiagnoseCreateWithoutCustomerInput, DiagnoseUncheckedCreateWithoutCustomerInput> | DiagnoseCreateWithoutCustomerInput[] | DiagnoseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DiagnoseCreateOrConnectWithoutCustomerInput | DiagnoseCreateOrConnectWithoutCustomerInput[]
    upsert?: DiagnoseUpsertWithWhereUniqueWithoutCustomerInput | DiagnoseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DiagnoseCreateManyCustomerInputEnvelope
    set?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    disconnect?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    delete?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    connect?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    update?: DiagnoseUpdateWithWhereUniqueWithoutCustomerInput | DiagnoseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DiagnoseUpdateManyWithWhereWithoutCustomerInput | DiagnoseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DiagnoseScalarWhereInput | DiagnoseScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type DogCreateNestedManyWithoutBreedInput = {
    create?: XOR<DogCreateWithoutBreedInput, DogUncheckedCreateWithoutBreedInput> | DogCreateWithoutBreedInput[] | DogUncheckedCreateWithoutBreedInput[]
    connectOrCreate?: DogCreateOrConnectWithoutBreedInput | DogCreateOrConnectWithoutBreedInput[]
    createMany?: DogCreateManyBreedInputEnvelope
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
  }

  export type DogUncheckedCreateNestedManyWithoutBreedInput = {
    create?: XOR<DogCreateWithoutBreedInput, DogUncheckedCreateWithoutBreedInput> | DogCreateWithoutBreedInput[] | DogUncheckedCreateWithoutBreedInput[]
    connectOrCreate?: DogCreateOrConnectWithoutBreedInput | DogCreateOrConnectWithoutBreedInput[]
    createMany?: DogCreateManyBreedInputEnvelope
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
  }

  export type DogUpdateManyWithoutBreedNestedInput = {
    create?: XOR<DogCreateWithoutBreedInput, DogUncheckedCreateWithoutBreedInput> | DogCreateWithoutBreedInput[] | DogUncheckedCreateWithoutBreedInput[]
    connectOrCreate?: DogCreateOrConnectWithoutBreedInput | DogCreateOrConnectWithoutBreedInput[]
    upsert?: DogUpsertWithWhereUniqueWithoutBreedInput | DogUpsertWithWhereUniqueWithoutBreedInput[]
    createMany?: DogCreateManyBreedInputEnvelope
    set?: DogWhereUniqueInput | DogWhereUniqueInput[]
    disconnect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    delete?: DogWhereUniqueInput | DogWhereUniqueInput[]
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    update?: DogUpdateWithWhereUniqueWithoutBreedInput | DogUpdateWithWhereUniqueWithoutBreedInput[]
    updateMany?: DogUpdateManyWithWhereWithoutBreedInput | DogUpdateManyWithWhereWithoutBreedInput[]
    deleteMany?: DogScalarWhereInput | DogScalarWhereInput[]
  }

  export type DogUncheckedUpdateManyWithoutBreedNestedInput = {
    create?: XOR<DogCreateWithoutBreedInput, DogUncheckedCreateWithoutBreedInput> | DogCreateWithoutBreedInput[] | DogUncheckedCreateWithoutBreedInput[]
    connectOrCreate?: DogCreateOrConnectWithoutBreedInput | DogCreateOrConnectWithoutBreedInput[]
    upsert?: DogUpsertWithWhereUniqueWithoutBreedInput | DogUpsertWithWhereUniqueWithoutBreedInput[]
    createMany?: DogCreateManyBreedInputEnvelope
    set?: DogWhereUniqueInput | DogWhereUniqueInput[]
    disconnect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    delete?: DogWhereUniqueInput | DogWhereUniqueInput[]
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    update?: DogUpdateWithWhereUniqueWithoutBreedInput | DogUpdateWithWhereUniqueWithoutBreedInput[]
    updateMany?: DogUpdateManyWithWhereWithoutBreedInput | DogUpdateManyWithWhereWithoutBreedInput[]
    deleteMany?: DogScalarWhereInput | DogScalarWhereInput[]
  }

  export type BreedCreateNestedOneWithoutDogInput = {
    create?: XOR<BreedCreateWithoutDogInput, BreedUncheckedCreateWithoutDogInput>
    connectOrCreate?: BreedCreateOrConnectWithoutDogInput
    connect?: BreedWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutDogInput = {
    create?: XOR<CustomerCreateWithoutDogInput, CustomerUncheckedCreateWithoutDogInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDogInput
    connect?: CustomerWhereUniqueInput
  }

  export type DiagnoseCreateNestedManyWithoutDogInput = {
    create?: XOR<DiagnoseCreateWithoutDogInput, DiagnoseUncheckedCreateWithoutDogInput> | DiagnoseCreateWithoutDogInput[] | DiagnoseUncheckedCreateWithoutDogInput[]
    connectOrCreate?: DiagnoseCreateOrConnectWithoutDogInput | DiagnoseCreateOrConnectWithoutDogInput[]
    createMany?: DiagnoseCreateManyDogInputEnvelope
    connect?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutDogInput = {
    create?: XOR<InvoiceCreateWithoutDogInput, InvoiceUncheckedCreateWithoutDogInput> | InvoiceCreateWithoutDogInput[] | InvoiceUncheckedCreateWithoutDogInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutDogInput | InvoiceCreateOrConnectWithoutDogInput[]
    createMany?: InvoiceCreateManyDogInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type DiagnoseUncheckedCreateNestedManyWithoutDogInput = {
    create?: XOR<DiagnoseCreateWithoutDogInput, DiagnoseUncheckedCreateWithoutDogInput> | DiagnoseCreateWithoutDogInput[] | DiagnoseUncheckedCreateWithoutDogInput[]
    connectOrCreate?: DiagnoseCreateOrConnectWithoutDogInput | DiagnoseCreateOrConnectWithoutDogInput[]
    createMany?: DiagnoseCreateManyDogInputEnvelope
    connect?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutDogInput = {
    create?: XOR<InvoiceCreateWithoutDogInput, InvoiceUncheckedCreateWithoutDogInput> | InvoiceCreateWithoutDogInput[] | InvoiceUncheckedCreateWithoutDogInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutDogInput | InvoiceCreateOrConnectWithoutDogInput[]
    createMany?: InvoiceCreateManyDogInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSexFieldUpdateOperationsInput = {
    set?: $Enums.Sex
  }

  export type BreedUpdateOneRequiredWithoutDogNestedInput = {
    create?: XOR<BreedCreateWithoutDogInput, BreedUncheckedCreateWithoutDogInput>
    connectOrCreate?: BreedCreateOrConnectWithoutDogInput
    upsert?: BreedUpsertWithoutDogInput
    connect?: BreedWhereUniqueInput
    update?: XOR<XOR<BreedUpdateToOneWithWhereWithoutDogInput, BreedUpdateWithoutDogInput>, BreedUncheckedUpdateWithoutDogInput>
  }

  export type CustomerUpdateOneRequiredWithoutDogNestedInput = {
    create?: XOR<CustomerCreateWithoutDogInput, CustomerUncheckedCreateWithoutDogInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDogInput
    upsert?: CustomerUpsertWithoutDogInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutDogInput, CustomerUpdateWithoutDogInput>, CustomerUncheckedUpdateWithoutDogInput>
  }

  export type DiagnoseUpdateManyWithoutDogNestedInput = {
    create?: XOR<DiagnoseCreateWithoutDogInput, DiagnoseUncheckedCreateWithoutDogInput> | DiagnoseCreateWithoutDogInput[] | DiagnoseUncheckedCreateWithoutDogInput[]
    connectOrCreate?: DiagnoseCreateOrConnectWithoutDogInput | DiagnoseCreateOrConnectWithoutDogInput[]
    upsert?: DiagnoseUpsertWithWhereUniqueWithoutDogInput | DiagnoseUpsertWithWhereUniqueWithoutDogInput[]
    createMany?: DiagnoseCreateManyDogInputEnvelope
    set?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    disconnect?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    delete?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    connect?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    update?: DiagnoseUpdateWithWhereUniqueWithoutDogInput | DiagnoseUpdateWithWhereUniqueWithoutDogInput[]
    updateMany?: DiagnoseUpdateManyWithWhereWithoutDogInput | DiagnoseUpdateManyWithWhereWithoutDogInput[]
    deleteMany?: DiagnoseScalarWhereInput | DiagnoseScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutDogNestedInput = {
    create?: XOR<InvoiceCreateWithoutDogInput, InvoiceUncheckedCreateWithoutDogInput> | InvoiceCreateWithoutDogInput[] | InvoiceUncheckedCreateWithoutDogInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutDogInput | InvoiceCreateOrConnectWithoutDogInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutDogInput | InvoiceUpsertWithWhereUniqueWithoutDogInput[]
    createMany?: InvoiceCreateManyDogInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutDogInput | InvoiceUpdateWithWhereUniqueWithoutDogInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutDogInput | InvoiceUpdateManyWithWhereWithoutDogInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type DiagnoseUncheckedUpdateManyWithoutDogNestedInput = {
    create?: XOR<DiagnoseCreateWithoutDogInput, DiagnoseUncheckedCreateWithoutDogInput> | DiagnoseCreateWithoutDogInput[] | DiagnoseUncheckedCreateWithoutDogInput[]
    connectOrCreate?: DiagnoseCreateOrConnectWithoutDogInput | DiagnoseCreateOrConnectWithoutDogInput[]
    upsert?: DiagnoseUpsertWithWhereUniqueWithoutDogInput | DiagnoseUpsertWithWhereUniqueWithoutDogInput[]
    createMany?: DiagnoseCreateManyDogInputEnvelope
    set?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    disconnect?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    delete?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    connect?: DiagnoseWhereUniqueInput | DiagnoseWhereUniqueInput[]
    update?: DiagnoseUpdateWithWhereUniqueWithoutDogInput | DiagnoseUpdateWithWhereUniqueWithoutDogInput[]
    updateMany?: DiagnoseUpdateManyWithWhereWithoutDogInput | DiagnoseUpdateManyWithWhereWithoutDogInput[]
    deleteMany?: DiagnoseScalarWhereInput | DiagnoseScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutDogNestedInput = {
    create?: XOR<InvoiceCreateWithoutDogInput, InvoiceUncheckedCreateWithoutDogInput> | InvoiceCreateWithoutDogInput[] | InvoiceUncheckedCreateWithoutDogInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutDogInput | InvoiceCreateOrConnectWithoutDogInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutDogInput | InvoiceUpsertWithWhereUniqueWithoutDogInput[]
    createMany?: InvoiceCreateManyDogInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutDogInput | InvoiceUpdateWithWhereUniqueWithoutDogInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutDogInput | InvoiceUpdateManyWithWhereWithoutDogInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type ServiceCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type EnumCategoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.CategoryType
  }

  export type ServiceUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutServiceInput = {
    create?: XOR<CategoryCreateWithoutServiceInput, CategoryUncheckedCreateWithoutServiceInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutServiceInput
    connect?: CategoryWhereUniqueInput
  }

  export type InvoiceServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<InvoiceServiceCreateWithoutServiceInput, InvoiceServiceUncheckedCreateWithoutServiceInput> | InvoiceServiceCreateWithoutServiceInput[] | InvoiceServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: InvoiceServiceCreateOrConnectWithoutServiceInput | InvoiceServiceCreateOrConnectWithoutServiceInput[]
    createMany?: InvoiceServiceCreateManyServiceInputEnvelope
    connect?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
  }

  export type InvoiceServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<InvoiceServiceCreateWithoutServiceInput, InvoiceServiceUncheckedCreateWithoutServiceInput> | InvoiceServiceCreateWithoutServiceInput[] | InvoiceServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: InvoiceServiceCreateOrConnectWithoutServiceInput | InvoiceServiceCreateOrConnectWithoutServiceInput[]
    createMany?: InvoiceServiceCreateManyServiceInputEnvelope
    connect?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutServiceNestedInput = {
    create?: XOR<CategoryCreateWithoutServiceInput, CategoryUncheckedCreateWithoutServiceInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutServiceInput
    upsert?: CategoryUpsertWithoutServiceInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutServiceInput, CategoryUpdateWithoutServiceInput>, CategoryUncheckedUpdateWithoutServiceInput>
  }

  export type InvoiceServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<InvoiceServiceCreateWithoutServiceInput, InvoiceServiceUncheckedCreateWithoutServiceInput> | InvoiceServiceCreateWithoutServiceInput[] | InvoiceServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: InvoiceServiceCreateOrConnectWithoutServiceInput | InvoiceServiceCreateOrConnectWithoutServiceInput[]
    upsert?: InvoiceServiceUpsertWithWhereUniqueWithoutServiceInput | InvoiceServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: InvoiceServiceCreateManyServiceInputEnvelope
    set?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    disconnect?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    delete?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    connect?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    update?: InvoiceServiceUpdateWithWhereUniqueWithoutServiceInput | InvoiceServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: InvoiceServiceUpdateManyWithWhereWithoutServiceInput | InvoiceServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: InvoiceServiceScalarWhereInput | InvoiceServiceScalarWhereInput[]
  }

  export type InvoiceServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<InvoiceServiceCreateWithoutServiceInput, InvoiceServiceUncheckedCreateWithoutServiceInput> | InvoiceServiceCreateWithoutServiceInput[] | InvoiceServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: InvoiceServiceCreateOrConnectWithoutServiceInput | InvoiceServiceCreateOrConnectWithoutServiceInput[]
    upsert?: InvoiceServiceUpsertWithWhereUniqueWithoutServiceInput | InvoiceServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: InvoiceServiceCreateManyServiceInputEnvelope
    set?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    disconnect?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    delete?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    connect?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    update?: InvoiceServiceUpdateWithWhereUniqueWithoutServiceInput | InvoiceServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: InvoiceServiceUpdateManyWithWhereWithoutServiceInput | InvoiceServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: InvoiceServiceScalarWhereInput | InvoiceServiceScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type InvoiceProductCreateNestedManyWithoutProductInput = {
    create?: XOR<InvoiceProductCreateWithoutProductInput, InvoiceProductUncheckedCreateWithoutProductInput> | InvoiceProductCreateWithoutProductInput[] | InvoiceProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InvoiceProductCreateOrConnectWithoutProductInput | InvoiceProductCreateOrConnectWithoutProductInput[]
    createMany?: InvoiceProductCreateManyProductInputEnvelope
    connect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
  }

  export type InvoiceProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InvoiceProductCreateWithoutProductInput, InvoiceProductUncheckedCreateWithoutProductInput> | InvoiceProductCreateWithoutProductInput[] | InvoiceProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InvoiceProductCreateOrConnectWithoutProductInput | InvoiceProductCreateOrConnectWithoutProductInput[]
    createMany?: InvoiceProductCreateManyProductInputEnvelope
    connect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductInput, CategoryUpdateWithoutProductInput>, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type InvoiceProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<InvoiceProductCreateWithoutProductInput, InvoiceProductUncheckedCreateWithoutProductInput> | InvoiceProductCreateWithoutProductInput[] | InvoiceProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InvoiceProductCreateOrConnectWithoutProductInput | InvoiceProductCreateOrConnectWithoutProductInput[]
    upsert?: InvoiceProductUpsertWithWhereUniqueWithoutProductInput | InvoiceProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InvoiceProductCreateManyProductInputEnvelope
    set?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    disconnect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    delete?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    connect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    update?: InvoiceProductUpdateWithWhereUniqueWithoutProductInput | InvoiceProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InvoiceProductUpdateManyWithWhereWithoutProductInput | InvoiceProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InvoiceProductScalarWhereInput | InvoiceProductScalarWhereInput[]
  }

  export type InvoiceProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InvoiceProductCreateWithoutProductInput, InvoiceProductUncheckedCreateWithoutProductInput> | InvoiceProductCreateWithoutProductInput[] | InvoiceProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InvoiceProductCreateOrConnectWithoutProductInput | InvoiceProductCreateOrConnectWithoutProductInput[]
    upsert?: InvoiceProductUpsertWithWhereUniqueWithoutProductInput | InvoiceProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InvoiceProductCreateManyProductInputEnvelope
    set?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    disconnect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    delete?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    connect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    update?: InvoiceProductUpdateWithWhereUniqueWithoutProductInput | InvoiceProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InvoiceProductUpdateManyWithWhereWithoutProductInput | InvoiceProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InvoiceProductScalarWhereInput | InvoiceProductScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutDiagnoseInput = {
    create?: XOR<CustomerCreateWithoutDiagnoseInput, CustomerUncheckedCreateWithoutDiagnoseInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDiagnoseInput
    connect?: CustomerWhereUniqueInput
  }

  export type DogCreateNestedOneWithoutDiagnoseInput = {
    create?: XOR<DogCreateWithoutDiagnoseInput, DogUncheckedCreateWithoutDiagnoseInput>
    connectOrCreate?: DogCreateOrConnectWithoutDiagnoseInput
    connect?: DogWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutDiagnoseNestedInput = {
    create?: XOR<CustomerCreateWithoutDiagnoseInput, CustomerUncheckedCreateWithoutDiagnoseInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDiagnoseInput
    upsert?: CustomerUpsertWithoutDiagnoseInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutDiagnoseInput, CustomerUpdateWithoutDiagnoseInput>, CustomerUncheckedUpdateWithoutDiagnoseInput>
  }

  export type DogUpdateOneRequiredWithoutDiagnoseNestedInput = {
    create?: XOR<DogCreateWithoutDiagnoseInput, DogUncheckedCreateWithoutDiagnoseInput>
    connectOrCreate?: DogCreateOrConnectWithoutDiagnoseInput
    upsert?: DogUpsertWithoutDiagnoseInput
    connect?: DogWhereUniqueInput
    update?: XOR<XOR<DogUpdateToOneWithWhereWithoutDiagnoseInput, DogUpdateWithoutDiagnoseInput>, DogUncheckedUpdateWithoutDiagnoseInput>
  }

  export type CustomerCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<CustomerCreateWithoutInvoiceInput, CustomerUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoiceInput
    connect?: CustomerWhereUniqueInput
  }

  export type DogCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<DogCreateWithoutInvoiceInput, DogUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: DogCreateOrConnectWithoutInvoiceInput
    connect?: DogWhereUniqueInput
  }

  export type InvoiceServiceCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceServiceCreateWithoutInvoiceInput, InvoiceServiceUncheckedCreateWithoutInvoiceInput> | InvoiceServiceCreateWithoutInvoiceInput[] | InvoiceServiceUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceServiceCreateOrConnectWithoutInvoiceInput | InvoiceServiceCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceServiceCreateManyInvoiceInputEnvelope
    connect?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
  }

  export type InvoiceProductCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceProductCreateWithoutInvoiceInput, InvoiceProductUncheckedCreateWithoutInvoiceInput> | InvoiceProductCreateWithoutInvoiceInput[] | InvoiceProductUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceProductCreateOrConnectWithoutInvoiceInput | InvoiceProductCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceProductCreateManyInvoiceInputEnvelope
    connect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
  }

  export type InvoiceServiceUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceServiceCreateWithoutInvoiceInput, InvoiceServiceUncheckedCreateWithoutInvoiceInput> | InvoiceServiceCreateWithoutInvoiceInput[] | InvoiceServiceUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceServiceCreateOrConnectWithoutInvoiceInput | InvoiceServiceCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceServiceCreateManyInvoiceInputEnvelope
    connect?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
  }

  export type InvoiceProductUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceProductCreateWithoutInvoiceInput, InvoiceProductUncheckedCreateWithoutInvoiceInput> | InvoiceProductCreateWithoutInvoiceInput[] | InvoiceProductUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceProductCreateOrConnectWithoutInvoiceInput | InvoiceProductCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceProductCreateManyInvoiceInputEnvelope
    connect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
  }

  export type EnumTreatmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.TreatmentType
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type CustomerUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<CustomerCreateWithoutInvoiceInput, CustomerUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoiceInput
    upsert?: CustomerUpsertWithoutInvoiceInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutInvoiceInput, CustomerUpdateWithoutInvoiceInput>, CustomerUncheckedUpdateWithoutInvoiceInput>
  }

  export type DogUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<DogCreateWithoutInvoiceInput, DogUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: DogCreateOrConnectWithoutInvoiceInput
    upsert?: DogUpsertWithoutInvoiceInput
    connect?: DogWhereUniqueInput
    update?: XOR<XOR<DogUpdateToOneWithWhereWithoutInvoiceInput, DogUpdateWithoutInvoiceInput>, DogUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceServiceUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceServiceCreateWithoutInvoiceInput, InvoiceServiceUncheckedCreateWithoutInvoiceInput> | InvoiceServiceCreateWithoutInvoiceInput[] | InvoiceServiceUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceServiceCreateOrConnectWithoutInvoiceInput | InvoiceServiceCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceServiceUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceServiceUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceServiceCreateManyInvoiceInputEnvelope
    set?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    disconnect?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    delete?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    connect?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    update?: InvoiceServiceUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceServiceUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceServiceUpdateManyWithWhereWithoutInvoiceInput | InvoiceServiceUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceServiceScalarWhereInput | InvoiceServiceScalarWhereInput[]
  }

  export type InvoiceProductUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceProductCreateWithoutInvoiceInput, InvoiceProductUncheckedCreateWithoutInvoiceInput> | InvoiceProductCreateWithoutInvoiceInput[] | InvoiceProductUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceProductCreateOrConnectWithoutInvoiceInput | InvoiceProductCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceProductUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceProductUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceProductCreateManyInvoiceInputEnvelope
    set?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    disconnect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    delete?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    connect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    update?: InvoiceProductUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceProductUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceProductUpdateManyWithWhereWithoutInvoiceInput | InvoiceProductUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceProductScalarWhereInput | InvoiceProductScalarWhereInput[]
  }

  export type InvoiceServiceUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceServiceCreateWithoutInvoiceInput, InvoiceServiceUncheckedCreateWithoutInvoiceInput> | InvoiceServiceCreateWithoutInvoiceInput[] | InvoiceServiceUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceServiceCreateOrConnectWithoutInvoiceInput | InvoiceServiceCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceServiceUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceServiceUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceServiceCreateManyInvoiceInputEnvelope
    set?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    disconnect?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    delete?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    connect?: InvoiceServiceWhereUniqueInput | InvoiceServiceWhereUniqueInput[]
    update?: InvoiceServiceUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceServiceUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceServiceUpdateManyWithWhereWithoutInvoiceInput | InvoiceServiceUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceServiceScalarWhereInput | InvoiceServiceScalarWhereInput[]
  }

  export type InvoiceProductUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceProductCreateWithoutInvoiceInput, InvoiceProductUncheckedCreateWithoutInvoiceInput> | InvoiceProductCreateWithoutInvoiceInput[] | InvoiceProductUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceProductCreateOrConnectWithoutInvoiceInput | InvoiceProductCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceProductUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceProductUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceProductCreateManyInvoiceInputEnvelope
    set?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    disconnect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    delete?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    connect?: InvoiceProductWhereUniqueInput | InvoiceProductWhereUniqueInput[]
    update?: InvoiceProductUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceProductUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceProductUpdateManyWithWhereWithoutInvoiceInput | InvoiceProductUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceProductScalarWhereInput | InvoiceProductScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutInvoiceServiceInput = {
    create?: XOR<InvoiceCreateWithoutInvoiceServiceInput, InvoiceUncheckedCreateWithoutInvoiceServiceInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutInvoiceServiceInput
    connect?: InvoiceWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<ServiceCreateWithoutInvoiceInput, ServiceUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutInvoiceInput
    connect?: ServiceWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutInvoiceServiceNestedInput = {
    create?: XOR<InvoiceCreateWithoutInvoiceServiceInput, InvoiceUncheckedCreateWithoutInvoiceServiceInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutInvoiceServiceInput
    upsert?: InvoiceUpsertWithoutInvoiceServiceInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutInvoiceServiceInput, InvoiceUpdateWithoutInvoiceServiceInput>, InvoiceUncheckedUpdateWithoutInvoiceServiceInput>
  }

  export type ServiceUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<ServiceCreateWithoutInvoiceInput, ServiceUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutInvoiceInput
    upsert?: ServiceUpsertWithoutInvoiceInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutInvoiceInput, ServiceUpdateWithoutInvoiceInput>, ServiceUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceCreateNestedOneWithoutInvoiceProductInput = {
    create?: XOR<InvoiceCreateWithoutInvoiceProductInput, InvoiceUncheckedCreateWithoutInvoiceProductInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutInvoiceProductInput
    connect?: InvoiceWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<ProductCreateWithoutInvoiceInput, ProductUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInvoiceInput
    connect?: ProductWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutInvoiceProductNestedInput = {
    create?: XOR<InvoiceCreateWithoutInvoiceProductInput, InvoiceUncheckedCreateWithoutInvoiceProductInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutInvoiceProductInput
    upsert?: InvoiceUpsertWithoutInvoiceProductInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutInvoiceProductInput, InvoiceUpdateWithoutInvoiceProductInput>, InvoiceUncheckedUpdateWithoutInvoiceProductInput>
  }

  export type ProductUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<ProductCreateWithoutInvoiceInput, ProductUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInvoiceInput
    upsert?: ProductUpsertWithoutInvoiceInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInvoiceInput, ProductUpdateWithoutInvoiceInput>, ProductUncheckedUpdateWithoutInvoiceInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[]
    notIn?: $Enums.Sex[]
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[]
    notIn?: $Enums.Sex[]
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type NestedEnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[]
    notIn?: $Enums.CategoryType[]
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[]
    notIn?: $Enums.CategoryType[]
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type NestedEnumTreatmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TreatmentType | EnumTreatmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TreatmentType[]
    notIn?: $Enums.TreatmentType[]
    not?: NestedEnumTreatmentTypeFilter<$PrismaModel> | $Enums.TreatmentType
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumTreatmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TreatmentType | EnumTreatmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TreatmentType[]
    notIn?: $Enums.TreatmentType[]
    not?: NestedEnumTreatmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.TreatmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTreatmentTypeFilter<$PrismaModel>
    _max?: NestedEnumTreatmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type DogCreateWithoutCustomerInput = {
    id?: string
    name: string
    customBreed?: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date | string
    lastDewormDate: Date | string
    profileImage?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    breed: BreedCreateNestedOneWithoutDogInput
    diagnose?: DiagnoseCreateNestedManyWithoutDogInput
    invoice?: InvoiceCreateNestedManyWithoutDogInput
  }

  export type DogUncheckedCreateWithoutCustomerInput = {
    id?: string
    name: string
    breedId: string
    customBreed?: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date | string
    lastDewormDate: Date | string
    profileImage?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    diagnose?: DiagnoseUncheckedCreateNestedManyWithoutDogInput
    invoice?: InvoiceUncheckedCreateNestedManyWithoutDogInput
  }

  export type DogCreateOrConnectWithoutCustomerInput = {
    where: DogWhereUniqueInput
    create: XOR<DogCreateWithoutCustomerInput, DogUncheckedCreateWithoutCustomerInput>
  }

  export type DogCreateManyCustomerInputEnvelope = {
    data: DogCreateManyCustomerInput | DogCreateManyCustomerInput[]
  }

  export type DiagnoseCreateWithoutCustomerInput = {
    id?: string
    dxNumber: string
    dxDate: Date | string
    doctorName: string
    symptom: string
    description: string
    temperature: number
    weight: number
    bloodPressure: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dog: DogCreateNestedOneWithoutDiagnoseInput
  }

  export type DiagnoseUncheckedCreateWithoutCustomerInput = {
    id?: string
    dxNumber: string
    dxDate: Date | string
    doctorName: string
    dogId: string
    symptom: string
    description: string
    temperature: number
    weight: number
    bloodPressure: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnoseCreateOrConnectWithoutCustomerInput = {
    where: DiagnoseWhereUniqueInput
    create: XOR<DiagnoseCreateWithoutCustomerInput, DiagnoseUncheckedCreateWithoutCustomerInput>
  }

  export type DiagnoseCreateManyCustomerInputEnvelope = {
    data: DiagnoseCreateManyCustomerInput | DiagnoseCreateManyCustomerInput[]
  }

  export type InvoiceCreateWithoutCustomerInput = {
    id?: string
    invoiceNo: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dog: DogCreateNestedOneWithoutInvoiceInput
    invoiceService?: InvoiceServiceCreateNestedManyWithoutInvoiceInput
    invoiceProduct?: InvoiceProductCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutCustomerInput = {
    id?: string
    invoiceNo: string
    dogId: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoiceService?: InvoiceServiceUncheckedCreateNestedManyWithoutInvoiceInput
    invoiceProduct?: InvoiceProductUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceCreateManyCustomerInputEnvelope = {
    data: InvoiceCreateManyCustomerInput | InvoiceCreateManyCustomerInput[]
  }

  export type DogUpsertWithWhereUniqueWithoutCustomerInput = {
    where: DogWhereUniqueInput
    update: XOR<DogUpdateWithoutCustomerInput, DogUncheckedUpdateWithoutCustomerInput>
    create: XOR<DogCreateWithoutCustomerInput, DogUncheckedCreateWithoutCustomerInput>
  }

  export type DogUpdateWithWhereUniqueWithoutCustomerInput = {
    where: DogWhereUniqueInput
    data: XOR<DogUpdateWithoutCustomerInput, DogUncheckedUpdateWithoutCustomerInput>
  }

  export type DogUpdateManyWithWhereWithoutCustomerInput = {
    where: DogScalarWhereInput
    data: XOR<DogUpdateManyMutationInput, DogUncheckedUpdateManyWithoutCustomerInput>
  }

  export type DogScalarWhereInput = {
    AND?: DogScalarWhereInput | DogScalarWhereInput[]
    OR?: DogScalarWhereInput[]
    NOT?: DogScalarWhereInput | DogScalarWhereInput[]
    id?: StringFilter<"Dog"> | string
    name?: StringFilter<"Dog"> | string
    breedId?: StringFilter<"Dog"> | string
    customBreed?: StringNullableFilter<"Dog"> | string | null
    birthYear?: IntFilter<"Dog"> | number
    birthMonth?: IntFilter<"Dog"> | number
    color?: StringFilter<"Dog"> | string
    weight?: FloatFilter<"Dog"> | number
    sex?: EnumSexFilter<"Dog"> | $Enums.Sex
    lastVaccineDate?: DateTimeFilter<"Dog"> | Date | string
    lastDewormDate?: DateTimeFilter<"Dog"> | Date | string
    profileImage?: StringNullableFilter<"Dog"> | string | null
    customerId?: StringFilter<"Dog"> | string
    notes?: StringNullableFilter<"Dog"> | string | null
    createdAt?: DateTimeFilter<"Dog"> | Date | string
    updatedAt?: DateTimeFilter<"Dog"> | Date | string
  }

  export type DiagnoseUpsertWithWhereUniqueWithoutCustomerInput = {
    where: DiagnoseWhereUniqueInput
    update: XOR<DiagnoseUpdateWithoutCustomerInput, DiagnoseUncheckedUpdateWithoutCustomerInput>
    create: XOR<DiagnoseCreateWithoutCustomerInput, DiagnoseUncheckedCreateWithoutCustomerInput>
  }

  export type DiagnoseUpdateWithWhereUniqueWithoutCustomerInput = {
    where: DiagnoseWhereUniqueInput
    data: XOR<DiagnoseUpdateWithoutCustomerInput, DiagnoseUncheckedUpdateWithoutCustomerInput>
  }

  export type DiagnoseUpdateManyWithWhereWithoutCustomerInput = {
    where: DiagnoseScalarWhereInput
    data: XOR<DiagnoseUpdateManyMutationInput, DiagnoseUncheckedUpdateManyWithoutCustomerInput>
  }

  export type DiagnoseScalarWhereInput = {
    AND?: DiagnoseScalarWhereInput | DiagnoseScalarWhereInput[]
    OR?: DiagnoseScalarWhereInput[]
    NOT?: DiagnoseScalarWhereInput | DiagnoseScalarWhereInput[]
    id?: StringFilter<"Diagnose"> | string
    dxNumber?: StringFilter<"Diagnose"> | string
    dxDate?: DateTimeFilter<"Diagnose"> | Date | string
    doctorName?: StringFilter<"Diagnose"> | string
    customerId?: StringFilter<"Diagnose"> | string
    dogId?: StringFilter<"Diagnose"> | string
    symptom?: StringFilter<"Diagnose"> | string
    description?: StringFilter<"Diagnose"> | string
    temperature?: FloatFilter<"Diagnose"> | number
    weight?: FloatFilter<"Diagnose"> | number
    bloodPressure?: StringFilter<"Diagnose"> | string
    notes?: StringNullableFilter<"Diagnose"> | string | null
    createdAt?: DateTimeFilter<"Diagnose"> | Date | string
    updatedAt?: DateTimeFilter<"Diagnose"> | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutCustomerInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutCustomerInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceNo?: StringFilter<"Invoice"> | string
    customerId?: StringFilter<"Invoice"> | string
    dogId?: StringFilter<"Invoice"> | string
    inpatientDate?: StringFilter<"Invoice"> | string
    inpatientTime?: StringFilter<"Invoice"> | string
    dischargeDate?: StringFilter<"Invoice"> | string
    dischargeTime?: StringFilter<"Invoice"> | string
    total?: IntFilter<"Invoice"> | number
    deposit?: IntFilter<"Invoice"> | number
    balance?: IntFilter<"Invoice"> | number
    subtotal?: IntFilter<"Invoice"> | number
    treatmentType?: EnumTreatmentTypeFilter<"Invoice"> | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFilter<"Invoice"> | $Enums.PaymentMethod
    customPaymentMethod?: StringFilter<"Invoice"> | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type DogCreateWithoutBreedInput = {
    id?: string
    name: string
    customBreed?: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date | string
    lastDewormDate: Date | string
    profileImage?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutDogInput
    diagnose?: DiagnoseCreateNestedManyWithoutDogInput
    invoice?: InvoiceCreateNestedManyWithoutDogInput
  }

  export type DogUncheckedCreateWithoutBreedInput = {
    id?: string
    name: string
    customBreed?: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date | string
    lastDewormDate: Date | string
    profileImage?: string | null
    customerId: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    diagnose?: DiagnoseUncheckedCreateNestedManyWithoutDogInput
    invoice?: InvoiceUncheckedCreateNestedManyWithoutDogInput
  }

  export type DogCreateOrConnectWithoutBreedInput = {
    where: DogWhereUniqueInput
    create: XOR<DogCreateWithoutBreedInput, DogUncheckedCreateWithoutBreedInput>
  }

  export type DogCreateManyBreedInputEnvelope = {
    data: DogCreateManyBreedInput | DogCreateManyBreedInput[]
  }

  export type DogUpsertWithWhereUniqueWithoutBreedInput = {
    where: DogWhereUniqueInput
    update: XOR<DogUpdateWithoutBreedInput, DogUncheckedUpdateWithoutBreedInput>
    create: XOR<DogCreateWithoutBreedInput, DogUncheckedCreateWithoutBreedInput>
  }

  export type DogUpdateWithWhereUniqueWithoutBreedInput = {
    where: DogWhereUniqueInput
    data: XOR<DogUpdateWithoutBreedInput, DogUncheckedUpdateWithoutBreedInput>
  }

  export type DogUpdateManyWithWhereWithoutBreedInput = {
    where: DogScalarWhereInput
    data: XOR<DogUpdateManyMutationInput, DogUncheckedUpdateManyWithoutBreedInput>
  }

  export type BreedCreateWithoutDogInput = {
    id?: string
    name: string
  }

  export type BreedUncheckedCreateWithoutDogInput = {
    id?: string
    name: string
  }

  export type BreedCreateOrConnectWithoutDogInput = {
    where: BreedWhereUniqueInput
    create: XOR<BreedCreateWithoutDogInput, BreedUncheckedCreateWithoutDogInput>
  }

  export type CustomerCreateWithoutDogInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address: string
    joinDate?: Date | string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Diagnose?: DiagnoseCreateNestedManyWithoutCustomerInput
    invoice?: InvoiceCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutDogInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address: string
    joinDate?: Date | string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Diagnose?: DiagnoseUncheckedCreateNestedManyWithoutCustomerInput
    invoice?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutDogInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDogInput, CustomerUncheckedCreateWithoutDogInput>
  }

  export type DiagnoseCreateWithoutDogInput = {
    id?: string
    dxNumber: string
    dxDate: Date | string
    doctorName: string
    symptom: string
    description: string
    temperature: number
    weight: number
    bloodPressure: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutDiagnoseInput
  }

  export type DiagnoseUncheckedCreateWithoutDogInput = {
    id?: string
    dxNumber: string
    dxDate: Date | string
    doctorName: string
    customerId: string
    symptom: string
    description: string
    temperature: number
    weight: number
    bloodPressure: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnoseCreateOrConnectWithoutDogInput = {
    where: DiagnoseWhereUniqueInput
    create: XOR<DiagnoseCreateWithoutDogInput, DiagnoseUncheckedCreateWithoutDogInput>
  }

  export type DiagnoseCreateManyDogInputEnvelope = {
    data: DiagnoseCreateManyDogInput | DiagnoseCreateManyDogInput[]
  }

  export type InvoiceCreateWithoutDogInput = {
    id?: string
    invoiceNo: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutInvoiceInput
    invoiceService?: InvoiceServiceCreateNestedManyWithoutInvoiceInput
    invoiceProduct?: InvoiceProductCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutDogInput = {
    id?: string
    invoiceNo: string
    customerId: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoiceService?: InvoiceServiceUncheckedCreateNestedManyWithoutInvoiceInput
    invoiceProduct?: InvoiceProductUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutDogInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutDogInput, InvoiceUncheckedCreateWithoutDogInput>
  }

  export type InvoiceCreateManyDogInputEnvelope = {
    data: InvoiceCreateManyDogInput | InvoiceCreateManyDogInput[]
  }

  export type BreedUpsertWithoutDogInput = {
    update: XOR<BreedUpdateWithoutDogInput, BreedUncheckedUpdateWithoutDogInput>
    create: XOR<BreedCreateWithoutDogInput, BreedUncheckedCreateWithoutDogInput>
    where?: BreedWhereInput
  }

  export type BreedUpdateToOneWithWhereWithoutDogInput = {
    where?: BreedWhereInput
    data: XOR<BreedUpdateWithoutDogInput, BreedUncheckedUpdateWithoutDogInput>
  }

  export type BreedUpdateWithoutDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BreedUncheckedUpdateWithoutDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUpsertWithoutDogInput = {
    update: XOR<CustomerUpdateWithoutDogInput, CustomerUncheckedUpdateWithoutDogInput>
    create: XOR<CustomerCreateWithoutDogInput, CustomerUncheckedCreateWithoutDogInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutDogInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutDogInput, CustomerUncheckedUpdateWithoutDogInput>
  }

  export type CustomerUpdateWithoutDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Diagnose?: DiagnoseUpdateManyWithoutCustomerNestedInput
    invoice?: InvoiceUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Diagnose?: DiagnoseUncheckedUpdateManyWithoutCustomerNestedInput
    invoice?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type DiagnoseUpsertWithWhereUniqueWithoutDogInput = {
    where: DiagnoseWhereUniqueInput
    update: XOR<DiagnoseUpdateWithoutDogInput, DiagnoseUncheckedUpdateWithoutDogInput>
    create: XOR<DiagnoseCreateWithoutDogInput, DiagnoseUncheckedCreateWithoutDogInput>
  }

  export type DiagnoseUpdateWithWhereUniqueWithoutDogInput = {
    where: DiagnoseWhereUniqueInput
    data: XOR<DiagnoseUpdateWithoutDogInput, DiagnoseUncheckedUpdateWithoutDogInput>
  }

  export type DiagnoseUpdateManyWithWhereWithoutDogInput = {
    where: DiagnoseScalarWhereInput
    data: XOR<DiagnoseUpdateManyMutationInput, DiagnoseUncheckedUpdateManyWithoutDogInput>
  }

  export type InvoiceUpsertWithWhereUniqueWithoutDogInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutDogInput, InvoiceUncheckedUpdateWithoutDogInput>
    create: XOR<InvoiceCreateWithoutDogInput, InvoiceUncheckedCreateWithoutDogInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutDogInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutDogInput, InvoiceUncheckedUpdateWithoutDogInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutDogInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutDogInput>
  }

  export type ServiceCreateWithoutCategoryInput = {
    id?: string
    code: string
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice?: InvoiceServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutCategoryInput = {
    id?: string
    code: string
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice?: InvoiceServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceCreateManyCategoryInputEnvelope = {
    data: ServiceCreateManyCategoryInput | ServiceCreateManyCategoryInput[]
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    code: string
    name: string
    description: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice?: InvoiceProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    code: string
    name: string
    description: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice?: InvoiceProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
  }

  export type ServiceUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
  }

  export type ServiceUpdateManyWithWhereWithoutCategoryInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    code?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    categoryId?: StringFilter<"Service"> | string
    price?: IntFilter<"Service"> | number
    description?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    code?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    amount?: IntFilter<"Product"> | number
    price?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type CategoryCreateWithoutServiceInput = {
    id?: string
    name: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutServiceInput = {
    id?: string
    name: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutServiceInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutServiceInput, CategoryUncheckedCreateWithoutServiceInput>
  }

  export type InvoiceServiceCreateWithoutServiceInput = {
    id?: string
    name: string
    code: string
    datetime: Date | string
    duration: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutInvoiceServiceInput
  }

  export type InvoiceServiceUncheckedCreateWithoutServiceInput = {
    id?: string
    invoiceId: string
    name: string
    code: string
    datetime: Date | string
    duration: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceServiceCreateOrConnectWithoutServiceInput = {
    where: InvoiceServiceWhereUniqueInput
    create: XOR<InvoiceServiceCreateWithoutServiceInput, InvoiceServiceUncheckedCreateWithoutServiceInput>
  }

  export type InvoiceServiceCreateManyServiceInputEnvelope = {
    data: InvoiceServiceCreateManyServiceInput | InvoiceServiceCreateManyServiceInput[]
  }

  export type CategoryUpsertWithoutServiceInput = {
    update: XOR<CategoryUpdateWithoutServiceInput, CategoryUncheckedUpdateWithoutServiceInput>
    create: XOR<CategoryCreateWithoutServiceInput, CategoryUncheckedCreateWithoutServiceInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutServiceInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutServiceInput, CategoryUncheckedUpdateWithoutServiceInput>
  }

  export type CategoryUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type InvoiceServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: InvoiceServiceWhereUniqueInput
    update: XOR<InvoiceServiceUpdateWithoutServiceInput, InvoiceServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<InvoiceServiceCreateWithoutServiceInput, InvoiceServiceUncheckedCreateWithoutServiceInput>
  }

  export type InvoiceServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: InvoiceServiceWhereUniqueInput
    data: XOR<InvoiceServiceUpdateWithoutServiceInput, InvoiceServiceUncheckedUpdateWithoutServiceInput>
  }

  export type InvoiceServiceUpdateManyWithWhereWithoutServiceInput = {
    where: InvoiceServiceScalarWhereInput
    data: XOR<InvoiceServiceUpdateManyMutationInput, InvoiceServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type InvoiceServiceScalarWhereInput = {
    AND?: InvoiceServiceScalarWhereInput | InvoiceServiceScalarWhereInput[]
    OR?: InvoiceServiceScalarWhereInput[]
    NOT?: InvoiceServiceScalarWhereInput | InvoiceServiceScalarWhereInput[]
    id?: StringFilter<"InvoiceService"> | string
    invoiceId?: StringFilter<"InvoiceService"> | string
    serviceId?: StringFilter<"InvoiceService"> | string
    name?: StringFilter<"InvoiceService"> | string
    code?: StringFilter<"InvoiceService"> | string
    datetime?: DateTimeFilter<"InvoiceService"> | Date | string
    duration?: StringFilter<"InvoiceService"> | string
    price?: IntFilter<"InvoiceService"> | number
    createdAt?: DateTimeFilter<"InvoiceService"> | Date | string
    updatedAt?: DateTimeFilter<"InvoiceService"> | Date | string
  }

  export type CategoryCreateWithoutProductInput = {
    id?: string
    name: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    updatedAt?: Date | string
    service?: ServiceCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    updatedAt?: Date | string
    service?: ServiceUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type InvoiceProductCreateWithoutProductInput = {
    id?: string
    name: string
    code: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutInvoiceProductInput
  }

  export type InvoiceProductUncheckedCreateWithoutProductInput = {
    id?: string
    invoiceId: string
    name: string
    code: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceProductCreateOrConnectWithoutProductInput = {
    where: InvoiceProductWhereUniqueInput
    create: XOR<InvoiceProductCreateWithoutProductInput, InvoiceProductUncheckedCreateWithoutProductInput>
  }

  export type InvoiceProductCreateManyProductInputEnvelope = {
    data: InvoiceProductCreateManyProductInput | InvoiceProductCreateManyProductInput[]
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type InvoiceProductUpsertWithWhereUniqueWithoutProductInput = {
    where: InvoiceProductWhereUniqueInput
    update: XOR<InvoiceProductUpdateWithoutProductInput, InvoiceProductUncheckedUpdateWithoutProductInput>
    create: XOR<InvoiceProductCreateWithoutProductInput, InvoiceProductUncheckedCreateWithoutProductInput>
  }

  export type InvoiceProductUpdateWithWhereUniqueWithoutProductInput = {
    where: InvoiceProductWhereUniqueInput
    data: XOR<InvoiceProductUpdateWithoutProductInput, InvoiceProductUncheckedUpdateWithoutProductInput>
  }

  export type InvoiceProductUpdateManyWithWhereWithoutProductInput = {
    where: InvoiceProductScalarWhereInput
    data: XOR<InvoiceProductUpdateManyMutationInput, InvoiceProductUncheckedUpdateManyWithoutProductInput>
  }

  export type InvoiceProductScalarWhereInput = {
    AND?: InvoiceProductScalarWhereInput | InvoiceProductScalarWhereInput[]
    OR?: InvoiceProductScalarWhereInput[]
    NOT?: InvoiceProductScalarWhereInput | InvoiceProductScalarWhereInput[]
    id?: StringFilter<"InvoiceProduct"> | string
    invoiceId?: StringFilter<"InvoiceProduct"> | string
    productId?: StringFilter<"InvoiceProduct"> | string
    name?: StringFilter<"InvoiceProduct"> | string
    code?: StringFilter<"InvoiceProduct"> | string
    amount?: IntFilter<"InvoiceProduct"> | number
    price?: IntFilter<"InvoiceProduct"> | number
    createdAt?: DateTimeFilter<"InvoiceProduct"> | Date | string
    updatedAt?: DateTimeFilter<"InvoiceProduct"> | Date | string
  }

  export type CustomerCreateWithoutDiagnoseInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address: string
    joinDate?: Date | string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dog?: DogCreateNestedManyWithoutCustomerInput
    invoice?: InvoiceCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutDiagnoseInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address: string
    joinDate?: Date | string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dog?: DogUncheckedCreateNestedManyWithoutCustomerInput
    invoice?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutDiagnoseInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDiagnoseInput, CustomerUncheckedCreateWithoutDiagnoseInput>
  }

  export type DogCreateWithoutDiagnoseInput = {
    id?: string
    name: string
    customBreed?: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date | string
    lastDewormDate: Date | string
    profileImage?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    breed: BreedCreateNestedOneWithoutDogInput
    customer: CustomerCreateNestedOneWithoutDogInput
    invoice?: InvoiceCreateNestedManyWithoutDogInput
  }

  export type DogUncheckedCreateWithoutDiagnoseInput = {
    id?: string
    name: string
    breedId: string
    customBreed?: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date | string
    lastDewormDate: Date | string
    profileImage?: string | null
    customerId: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice?: InvoiceUncheckedCreateNestedManyWithoutDogInput
  }

  export type DogCreateOrConnectWithoutDiagnoseInput = {
    where: DogWhereUniqueInput
    create: XOR<DogCreateWithoutDiagnoseInput, DogUncheckedCreateWithoutDiagnoseInput>
  }

  export type CustomerUpsertWithoutDiagnoseInput = {
    update: XOR<CustomerUpdateWithoutDiagnoseInput, CustomerUncheckedUpdateWithoutDiagnoseInput>
    create: XOR<CustomerCreateWithoutDiagnoseInput, CustomerUncheckedCreateWithoutDiagnoseInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutDiagnoseInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutDiagnoseInput, CustomerUncheckedUpdateWithoutDiagnoseInput>
  }

  export type CustomerUpdateWithoutDiagnoseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dog?: DogUpdateManyWithoutCustomerNestedInput
    invoice?: InvoiceUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutDiagnoseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dog?: DogUncheckedUpdateManyWithoutCustomerNestedInput
    invoice?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type DogUpsertWithoutDiagnoseInput = {
    update: XOR<DogUpdateWithoutDiagnoseInput, DogUncheckedUpdateWithoutDiagnoseInput>
    create: XOR<DogCreateWithoutDiagnoseInput, DogUncheckedCreateWithoutDiagnoseInput>
    where?: DogWhereInput
  }

  export type DogUpdateToOneWithWhereWithoutDiagnoseInput = {
    where?: DogWhereInput
    data: XOR<DogUpdateWithoutDiagnoseInput, DogUncheckedUpdateWithoutDiagnoseInput>
  }

  export type DogUpdateWithoutDiagnoseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breed?: BreedUpdateOneRequiredWithoutDogNestedInput
    customer?: CustomerUpdateOneRequiredWithoutDogNestedInput
    invoice?: InvoiceUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateWithoutDiagnoseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    breedId?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUncheckedUpdateManyWithoutDogNestedInput
  }

  export type CustomerCreateWithoutInvoiceInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address: string
    joinDate?: Date | string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dog?: DogCreateNestedManyWithoutCustomerInput
    Diagnose?: DiagnoseCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutInvoiceInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    address: string
    joinDate?: Date | string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dog?: DogUncheckedCreateNestedManyWithoutCustomerInput
    Diagnose?: DiagnoseUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutInvoiceInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutInvoiceInput, CustomerUncheckedCreateWithoutInvoiceInput>
  }

  export type DogCreateWithoutInvoiceInput = {
    id?: string
    name: string
    customBreed?: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date | string
    lastDewormDate: Date | string
    profileImage?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    breed: BreedCreateNestedOneWithoutDogInput
    customer: CustomerCreateNestedOneWithoutDogInput
    diagnose?: DiagnoseCreateNestedManyWithoutDogInput
  }

  export type DogUncheckedCreateWithoutInvoiceInput = {
    id?: string
    name: string
    breedId: string
    customBreed?: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date | string
    lastDewormDate: Date | string
    profileImage?: string | null
    customerId: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    diagnose?: DiagnoseUncheckedCreateNestedManyWithoutDogInput
  }

  export type DogCreateOrConnectWithoutInvoiceInput = {
    where: DogWhereUniqueInput
    create: XOR<DogCreateWithoutInvoiceInput, DogUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceServiceCreateWithoutInvoiceInput = {
    id?: string
    name: string
    code: string
    datetime: Date | string
    duration: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceServiceUncheckedCreateWithoutInvoiceInput = {
    id?: string
    serviceId: string
    name: string
    code: string
    datetime: Date | string
    duration: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceServiceCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceServiceWhereUniqueInput
    create: XOR<InvoiceServiceCreateWithoutInvoiceInput, InvoiceServiceUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceServiceCreateManyInvoiceInputEnvelope = {
    data: InvoiceServiceCreateManyInvoiceInput | InvoiceServiceCreateManyInvoiceInput[]
  }

  export type InvoiceProductCreateWithoutInvoiceInput = {
    id?: string
    name: string
    code: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceProductUncheckedCreateWithoutInvoiceInput = {
    id?: string
    productId: string
    name: string
    code: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceProductCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceProductWhereUniqueInput
    create: XOR<InvoiceProductCreateWithoutInvoiceInput, InvoiceProductUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceProductCreateManyInvoiceInputEnvelope = {
    data: InvoiceProductCreateManyInvoiceInput | InvoiceProductCreateManyInvoiceInput[]
  }

  export type CustomerUpsertWithoutInvoiceInput = {
    update: XOR<CustomerUpdateWithoutInvoiceInput, CustomerUncheckedUpdateWithoutInvoiceInput>
    create: XOR<CustomerCreateWithoutInvoiceInput, CustomerUncheckedCreateWithoutInvoiceInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutInvoiceInput, CustomerUncheckedUpdateWithoutInvoiceInput>
  }

  export type CustomerUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dog?: DogUpdateManyWithoutCustomerNestedInput
    Diagnose?: DiagnoseUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dog?: DogUncheckedUpdateManyWithoutCustomerNestedInput
    Diagnose?: DiagnoseUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type DogUpsertWithoutInvoiceInput = {
    update: XOR<DogUpdateWithoutInvoiceInput, DogUncheckedUpdateWithoutInvoiceInput>
    create: XOR<DogCreateWithoutInvoiceInput, DogUncheckedCreateWithoutInvoiceInput>
    where?: DogWhereInput
  }

  export type DogUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: DogWhereInput
    data: XOR<DogUpdateWithoutInvoiceInput, DogUncheckedUpdateWithoutInvoiceInput>
  }

  export type DogUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breed?: BreedUpdateOneRequiredWithoutDogNestedInput
    customer?: CustomerUpdateOneRequiredWithoutDogNestedInput
    diagnose?: DiagnoseUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    breedId?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnose?: DiagnoseUncheckedUpdateManyWithoutDogNestedInput
  }

  export type InvoiceServiceUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceServiceWhereUniqueInput
    update: XOR<InvoiceServiceUpdateWithoutInvoiceInput, InvoiceServiceUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceServiceCreateWithoutInvoiceInput, InvoiceServiceUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceServiceUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceServiceWhereUniqueInput
    data: XOR<InvoiceServiceUpdateWithoutInvoiceInput, InvoiceServiceUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceServiceUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceServiceScalarWhereInput
    data: XOR<InvoiceServiceUpdateManyMutationInput, InvoiceServiceUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceProductUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceProductWhereUniqueInput
    update: XOR<InvoiceProductUpdateWithoutInvoiceInput, InvoiceProductUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceProductCreateWithoutInvoiceInput, InvoiceProductUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceProductUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceProductWhereUniqueInput
    data: XOR<InvoiceProductUpdateWithoutInvoiceInput, InvoiceProductUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceProductUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceProductScalarWhereInput
    data: XOR<InvoiceProductUpdateManyMutationInput, InvoiceProductUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceCreateWithoutInvoiceServiceInput = {
    id?: string
    invoiceNo: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutInvoiceInput
    dog: DogCreateNestedOneWithoutInvoiceInput
    invoiceProduct?: InvoiceProductCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutInvoiceServiceInput = {
    id?: string
    invoiceNo: string
    customerId: string
    dogId: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoiceProduct?: InvoiceProductUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutInvoiceServiceInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutInvoiceServiceInput, InvoiceUncheckedCreateWithoutInvoiceServiceInput>
  }

  export type ServiceCreateWithoutInvoiceInput = {
    id?: string
    code: string
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutInvoiceInput = {
    id?: string
    code: string
    name: string
    categoryId: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCreateOrConnectWithoutInvoiceInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutInvoiceInput, ServiceUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceUpsertWithoutInvoiceServiceInput = {
    update: XOR<InvoiceUpdateWithoutInvoiceServiceInput, InvoiceUncheckedUpdateWithoutInvoiceServiceInput>
    create: XOR<InvoiceCreateWithoutInvoiceServiceInput, InvoiceUncheckedCreateWithoutInvoiceServiceInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutInvoiceServiceInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutInvoiceServiceInput, InvoiceUncheckedUpdateWithoutInvoiceServiceInput>
  }

  export type InvoiceUpdateWithoutInvoiceServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutInvoiceNestedInput
    dog?: DogUpdateOneRequiredWithoutInvoiceNestedInput
    invoiceProduct?: InvoiceProductUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutInvoiceServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    dogId?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceProduct?: InvoiceProductUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type ServiceUpsertWithoutInvoiceInput = {
    update: XOR<ServiceUpdateWithoutInvoiceInput, ServiceUncheckedUpdateWithoutInvoiceInput>
    create: XOR<ServiceCreateWithoutInvoiceInput, ServiceUncheckedCreateWithoutInvoiceInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutInvoiceInput, ServiceUncheckedUpdateWithoutInvoiceInput>
  }

  export type ServiceUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateWithoutInvoiceProductInput = {
    id?: string
    invoiceNo: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutInvoiceInput
    dog: DogCreateNestedOneWithoutInvoiceInput
    invoiceService?: InvoiceServiceCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutInvoiceProductInput = {
    id?: string
    invoiceNo: string
    customerId: string
    dogId: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoiceService?: InvoiceServiceUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutInvoiceProductInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutInvoiceProductInput, InvoiceUncheckedCreateWithoutInvoiceProductInput>
  }

  export type ProductCreateWithoutInvoiceInput = {
    id?: string
    code: string
    name: string
    description: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInvoiceInput = {
    id?: string
    code: string
    name: string
    categoryId: string
    description: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutInvoiceInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInvoiceInput, ProductUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceUpsertWithoutInvoiceProductInput = {
    update: XOR<InvoiceUpdateWithoutInvoiceProductInput, InvoiceUncheckedUpdateWithoutInvoiceProductInput>
    create: XOR<InvoiceCreateWithoutInvoiceProductInput, InvoiceUncheckedCreateWithoutInvoiceProductInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutInvoiceProductInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutInvoiceProductInput, InvoiceUncheckedUpdateWithoutInvoiceProductInput>
  }

  export type InvoiceUpdateWithoutInvoiceProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutInvoiceNestedInput
    dog?: DogUpdateOneRequiredWithoutInvoiceNestedInput
    invoiceService?: InvoiceServiceUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutInvoiceProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    dogId?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceService?: InvoiceServiceUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type ProductUpsertWithoutInvoiceInput = {
    update: XOR<ProductUpdateWithoutInvoiceInput, ProductUncheckedUpdateWithoutInvoiceInput>
    create: XOR<ProductCreateWithoutInvoiceInput, ProductUncheckedCreateWithoutInvoiceInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInvoiceInput, ProductUncheckedUpdateWithoutInvoiceInput>
  }

  export type ProductUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DogCreateManyCustomerInput = {
    id?: string
    name: string
    breedId: string
    customBreed?: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date | string
    lastDewormDate: Date | string
    profileImage?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnoseCreateManyCustomerInput = {
    id?: string
    dxNumber: string
    dxDate: Date | string
    doctorName: string
    dogId: string
    symptom: string
    description: string
    temperature: number
    weight: number
    bloodPressure: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateManyCustomerInput = {
    id?: string
    invoiceNo: string
    dogId: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DogUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breed?: BreedUpdateOneRequiredWithoutDogNestedInput
    diagnose?: DiagnoseUpdateManyWithoutDogNestedInput
    invoice?: InvoiceUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    breedId?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnose?: DiagnoseUncheckedUpdateManyWithoutDogNestedInput
    invoice?: InvoiceUncheckedUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    breedId?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnoseUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    dxNumber?: StringFieldUpdateOperationsInput | string
    dxDate?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    symptom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dog?: DogUpdateOneRequiredWithoutDiagnoseNestedInput
  }

  export type DiagnoseUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    dxNumber?: StringFieldUpdateOperationsInput | string
    dxDate?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    dogId?: StringFieldUpdateOperationsInput | string
    symptom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnoseUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    dxNumber?: StringFieldUpdateOperationsInput | string
    dxDate?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    dogId?: StringFieldUpdateOperationsInput | string
    symptom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dog?: DogUpdateOneRequiredWithoutInvoiceNestedInput
    invoiceService?: InvoiceServiceUpdateManyWithoutInvoiceNestedInput
    invoiceProduct?: InvoiceProductUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    dogId?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceService?: InvoiceServiceUncheckedUpdateManyWithoutInvoiceNestedInput
    invoiceProduct?: InvoiceProductUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    dogId?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DogCreateManyBreedInput = {
    id?: string
    name: string
    customBreed?: string | null
    birthYear: number
    birthMonth: number
    color: string
    weight: number
    sex: $Enums.Sex
    lastVaccineDate: Date | string
    lastDewormDate: Date | string
    profileImage?: string | null
    customerId: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DogUpdateWithoutBreedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutDogNestedInput
    diagnose?: DiagnoseUpdateManyWithoutDogNestedInput
    invoice?: InvoiceUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateWithoutBreedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnose?: DiagnoseUncheckedUpdateManyWithoutDogNestedInput
    invoice?: InvoiceUncheckedUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateManyWithoutBreedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    customBreed?: NullableStringFieldUpdateOperationsInput | string | null
    birthYear?: IntFieldUpdateOperationsInput | number
    birthMonth?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    lastVaccineDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastDewormDate?: DateTimeFieldUpdateOperationsInput | Date | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnoseCreateManyDogInput = {
    id?: string
    dxNumber: string
    dxDate: Date | string
    doctorName: string
    customerId: string
    symptom: string
    description: string
    temperature: number
    weight: number
    bloodPressure: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateManyDogInput = {
    id?: string
    invoiceNo: string
    customerId: string
    inpatientDate: string
    inpatientTime: string
    dischargeDate: string
    dischargeTime: string
    total: number
    deposit: number
    balance: number
    subtotal: number
    treatmentType: $Enums.TreatmentType
    paymentMethod: $Enums.PaymentMethod
    customPaymentMethod: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnoseUpdateWithoutDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    dxNumber?: StringFieldUpdateOperationsInput | string
    dxDate?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    symptom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutDiagnoseNestedInput
  }

  export type DiagnoseUncheckedUpdateWithoutDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    dxNumber?: StringFieldUpdateOperationsInput | string
    dxDate?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    symptom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnoseUncheckedUpdateManyWithoutDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    dxNumber?: StringFieldUpdateOperationsInput | string
    dxDate?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorName?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    symptom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bloodPressure?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutInvoiceNestedInput
    invoiceService?: InvoiceServiceUpdateManyWithoutInvoiceNestedInput
    invoiceProduct?: InvoiceProductUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceService?: InvoiceServiceUncheckedUpdateManyWithoutInvoiceNestedInput
    invoiceProduct?: InvoiceProductUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNo?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    inpatientDate?: StringFieldUpdateOperationsInput | string
    inpatientTime?: StringFieldUpdateOperationsInput | string
    dischargeDate?: StringFieldUpdateOperationsInput | string
    dischargeTime?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    deposit?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    treatmentType?: EnumTreatmentTypeFieldUpdateOperationsInput | $Enums.TreatmentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customPaymentMethod?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyCategoryInput = {
    id?: string
    code: string
    name: string
    price: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    code: string
    name: string
    description: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceServiceCreateManyServiceInput = {
    id?: string
    invoiceId: string
    name: string
    code: string
    datetime: Date | string
    duration: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceServiceUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutInvoiceServiceNestedInput
  }

  export type InvoiceServiceUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceServiceUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceProductCreateManyProductInput = {
    id?: string
    invoiceId: string
    name: string
    code: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceProductUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutInvoiceProductNestedInput
  }

  export type InvoiceProductUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceProductUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceServiceCreateManyInvoiceInput = {
    id?: string
    serviceId: string
    name: string
    code: string
    datetime: Date | string
    duration: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceProductCreateManyInvoiceInput = {
    id?: string
    productId: string
    name: string
    code: string
    amount: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceServiceUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type InvoiceServiceUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceServiceUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceProductUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type InvoiceProductUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceProductUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}