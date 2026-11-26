import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const text =
  "I bought a planner to finally get organized, and now I lose it in a much more structured way every day.";

if (text.length < 1 || text.length > 140 || text.includes("\n")) {
  throw new Error("entry must be a single line of 1-140 characters");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text + "\n");
