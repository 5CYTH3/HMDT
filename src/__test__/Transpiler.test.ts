import { Transpiler } from "..";

test("First Transpiler", () => {
	const t = new Transpiler({
		outDir: "src/__test__/dist",
		inDir: "src/__test__/in",
	});
	t.init;
	t.transpile();
});
