import * as fs from "fs";
import * as path from "path";

export class Transpiler {
	private inDir: string;
	private outDir: string;
	private arr: Array<String> = [];
	constructor(opt: { outDir: string; inDir: string }) {
		this.outDir = opt.outDir;
		this.inDir = opt.inDir;
	}

	init() {
		this.arr = fs.readdirSync(this.inDir);
	}

	transpile() {
		this.arr.forEach((e) => {
			const data = fs.readFileSync(`${this.outDir}/${e}`);
			const stringifyied = data.toString();
			const cleared = stringifyied.trim().split("\n");
			parse(e, cleared, `${this.outDir}/${e}`);
		});
	}
}

const parse = (file: String, data: string[], end: string) => {
	data.forEach((e: string) => {
		if (e.startsWith("#")) {
			console.log(e);
			console.log(file);
			console.log(e.split("#")[0].trim());

			fs.writeFileSync(
				`${path.basename(file.toString())}.html`,
				`<h1>${e.split("#")[0].trim()}</h1>`
			);
		} else if (e.startsWith("##")) {
		} else if (e.startsWith("###")) {
		} else {
			fs.writeFileSync(
				`${path.basename(file.toString())}.html`,
				`<p>${e}</p>`
			);
		}
	});
	// return program;
};
