/* reach file */
export { JsonicFlow as jsonicflow };

import * as fs from 'fs';
import { ICreateDatabaseClass, IRealNameJsonFlowClass, IJsonTableClass } from './inter';

class JsonicFlow {
    static init(): ICreateDatabaseClass {
        return new CreateDatabaseClass();
    }
}

class CreateDatabaseClass implements ICreateDatabaseClass {
    name(nr: string): IRealNameJsonFlowClass {
        const jsonic = JSON.stringify({}, null, 4);\

        fs.mkdir("./daa", { recursive: false }, )
        fs.mkdir("./dist")

        return new RealNameJsonFlowClass(nr);
    }
}

class RealNameJsonFlowClass implements IRealNameJsonFlowClass {
    constructor(private namer: string) {}

    createDatabase(nr: string): IJsonTableClass {
        return new JsonTableClass(nr);
    }
}

class JsonTableClass implements IJsonTableClass {
    constructor(private navemr: string) {}
}