const esbuild = require('esbuild');

async function go() {
  const args = process.argv.slice(2);

  const context = await esbuild.context({
    entryPoints: ['./src/index.ts'],
    minify: false,
    sourcemap: true,
    bundle: true,
    outfile: './public/assets/bundle.js',
    logLevel: 'info',
    format: 'iife',
  })

  if (args[0] == 'watch') {
    await context.watch()
  }
  else {
    const result = await context.rebuild();
    process.exit(0);
  }
}

go();
