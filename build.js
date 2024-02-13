const { build } = require('esbuild');

const args = process.argv.slice(2);

(async () => {
  await build({
	 entryPoints: ['./src/index.ts'],
	 minify: false,
	 sourcemap: true,
	 bundle: true,
	 outfile: './assets/bundle.js',
	 format: 'cjs',
	 logLevel: 'info',
	 watch: args[0] == 'watch',
  });
})();
