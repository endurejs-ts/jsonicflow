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
        const k: Record<string, any> = {};
        const j = JSON.stringify(k, null, 4);

        if (!fs.existsSync(nr)) {
            fs.mkdirSync(nr);
            fs.writeFileSync(`${nr}/types.json`, j, "utf-8");
            fs.writeFileSync(`${nr}/values.json`, j, "utf-8");
        }

        else {
            throw new Error("file already exist.");
        }

        return new RealNameJsonFlowClass(k);
    }
}

class RealNameJsonFlowClass implements IRealNameJsonFlowClass {
    constructor(private namer: Record<string, any>) {}

    createDatabase(nr: string): IJsonTableClass {
        if (!(nr in this.namer)) {
            this.namer[nr] = {}
        }
        
        else {
            throw new Error("db already exist");
        }

        return new JsonTableClass(nr);
    }
}

class JsonTableClass implements IJsonTableClass {
    constructor(private navemr: string) {}

    createTable() {}
}