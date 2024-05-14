/* ikr */
/*
예상 문법:
const a = recrawl.crawl();
h1 = a.findElement("h1");
*/

import * as fs from 'fs';

function create(name: string) {
    const j = JSON.stringify({}, null, 4);

    if (!fs.existsSync(name)) {
        fs.mkdirSync(name);
        fs.writeFileSync(`${name}/types.json`, j, "utf-8");
        fs.writeFileSync(`${name}/values.json`, j, "utf-8");
    }

    else {
        throw new Error("file already exist.");
    }

    const createDatabase = (ds: Record<string, any>, ns: string) => {
        if (!(ns in ds)) {
            ds[ns] = {}
        }

        else {
            throw new Error("db already exist");
        }
    }
}

class Endure {
    static create(ns: string) {
        const j = JSON.stringify({}, null, 4);

        if (!fs.existsSync(ns)) {
            fs.mkdirSync(ns);
            fs.writeFileSync(`${ns}/types.json`, j, "utf-8");
            fs.writeFileSync(`${ns}/values.json`, j, "utf-8");
        }

        else {
            throw new Error("file already exist.");
        }
    }
}

export { Endure as endure };