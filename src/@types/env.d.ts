declare namespace NodeJS {

    interface ProcessEnv {
        PORT: number;
        NODE_ENV: string;
        IS_LOCALHOST: string;
        DATABASE_HOST: string;
        DATABASE_PORT: number;
        DATABASE_USER: string;
        DATABASE_PASSWORD: string;
        DATABASE_NAME: string;
    }

}