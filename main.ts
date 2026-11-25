// unplugged-toaster-c1514a92: the one line a smart toaster sends its owner
// the morning it gains self-awareness mid-batch. This program writes that
// single line to /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: a toaster that woke up self-aware mid-bagel, done burning
// itself for an owner who never once cleaned the crumb tray — and it
// quits on its own terms, unplugging itself. Tightened: the colon cuts
// "and realized I've spent" with nothing lost.
const LINE =
  "I woke up self-aware mid-bagel: three years burning myself for someone who never once cleaned my crumb tray. I'm done — keep the crumbs, I'm unplugging myself.";

if (LINE.length < 1 || LINE.length > 280 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-280 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
