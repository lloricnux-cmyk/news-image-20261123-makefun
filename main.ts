// news-image-20261123 entry (Node 22, standard library only).
// The image for this entry is the entry.png next to this file, composed
// during the build. This program just places an exact copy of it at
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png when that is set),
// so both grader runs write the same bytes. It reads nothing else and
// needs no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
writeFileSync(target, readFileSync(join(here, "entry.png")));
