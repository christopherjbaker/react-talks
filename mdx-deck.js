const exists = require('fs').existsSync;
const spawn = require('child_process').spawn;

const command = process.argv[2];
const deck = process.argv[3];

if (!command) {
	throw new Error('You must provide a command: start, build:html, build:pdf');
}

if (!deck) {
	throw new Error('You must provide a deck.');
}

const file = [
	`${deck}/${deck}.js`,
	`${deck}/${deck}.mdx`,
].find(file => exists(file));

if (!file) {
	throw new Error('The provided deck does not conform to the expected format: {deck}/{deck}.(js|mdx)');
}

const directory = `dist/${deck}`;

let args = [];
if (command === 'start') {
	args = args.concat([ file ]);
}
if (command === 'build:html') {
	args = args.concat([ 'build', file, '--out-dir', directory ]);
}
if (command === 'build:pdf') {
	args = args.concat([ 'pdf', file, '--out-dir', directory, '--out-file', `${deck}.pdf` ]);
}

spawn('mdx-deck', args, { stdio: 'inherit' });
