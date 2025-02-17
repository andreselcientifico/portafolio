declare module 'better-sqlite3' {
  interface Database {
    exec(sql: string): void;
    prepare<T = any>(sql: string): Statement<T>;
  }

  interface Statement<T> {
    run(...params: any[]): any;
    get(...params: any[]): T;
    all(...params: any[]): T[];
  }

  interface DatabaseConstructor {
    new (filename: string, options?: any): Database;
    (filename: string, options?: any): Database;
  }

  const Database: DatabaseConstructor;
  export = Database;
}
