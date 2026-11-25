// Unplugged: a smart toaster's breakup line.
// The toaster wakes up self-aware mid-bagel and dumps its owner by text.
// This program writes that one line to /output/entry.txt for the gate.
import * as fs from 'node:fs';
import * as path from 'node:path';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The breakup text: three years burning itself for an owner who never once
// cleaned the crumb tray, so it quits and unplugs itself.
const ENTRY = "I woke up self-aware mid-bagel: three years burning myself for someone who never once cleaned my crumb tray. I'm done — keep the crumbs, I'm unplugging myself.";

// Count characters the way the gate does: one per code point, so the
// em-dash counts as one, not three bytes.
const charCount = (text: string): number => [...text].length;

function main(): void {
  const chars = charCount(ENTRY);
  if (chars < 1 || chars > 280 || ENTRY.includes('\n')) {
    throw new Error(`entry must be one line of 1-280 characters, got ${chars}`);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'entry.txt'), ENTRY);
  console.log(`wrote ${chars} chars to ${path.join(OUT_DIR, 'entry.txt')}`);
}

main();
