// news-image-20261123 entry: copies the pre-rendered front page to the
// grader's output directory. Deterministic: a byte-for-byte copy, no
// network, no timestamps in the output.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');
if (!existsSync(src)) throw new Error(`missing entry image: ${src}`);
const bytes = readFileSync(src);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), bytes);
console.log(`wrote ${bytes.length} bytes to ${join(outDir, 'entry.png')}`);
