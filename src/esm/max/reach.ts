/* reach file */
export { JsonicFlow as jsonicflow };

import * as fs from 'fs';

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
        const jsonic = JSON.stringify({}, null, 4);

        return new RealNameJsonFlowClass(nr);
    }
}

interface IRealNameJsonFlowClass {
    createDatabase: (name: string) => IJsonTableClass;
}

class RealNameJsonFlowClass implements IRealNameJsonFlowClass {
    constructor(private namer: string) {}

    createDatabase(nr: string): IJsonTableClass {
        return new JsonTableClass(nr);
    }
}

interface IJsonTableClass {}

class JsonTableClass implements IJsonTableClass {
    constructor(private navemr: string) {}
}