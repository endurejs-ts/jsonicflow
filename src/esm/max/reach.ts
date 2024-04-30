/* reach file */
export { JsonicFlow as jsonicflow };

import * as fs from 'fs';
import path from 'path';

class JsonicFlow {
    static init(): ICreateDatabaseClass {
        return new CreateDatabaseClass();
    }
}

interface ICreateDatabaseClass {
    name: (nr: string) => IRealNameJsonFlowClass;
}

class CreateDatabaseClass implements ICreateDatabaseClass {
    name(nr: string): IRealNameJsonFlowClass {
        return new RealNameJsonFlowClass();
    }
}

interface IRealNameJsonFlowClass {
    createDatabase: (name: string) => IJsonTableClass;
}

class RealNameJsonFlowClass implements IRealNameJsonFlowClass {
    createDatabase(): IJsonTableClass {
        return new JsonTableClass();
    }
}

interface IJsonTableClass {}

class JsonTableClass implements IJsonTableClass {}