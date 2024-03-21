const esbuild = require('esbuild');

async function go() {
  const args = process.argv.slice(2);

  const entries = [
    {src: './src/encoding.ts', out: './lib/encoding.cjs'},
  ]

  const contexts = await Promise.all(entries.map(({src, out}) =>
    esbuild.context({
      entryPoints: [src],
      minify: false,
      sourcemap: true,
      bundle: true,
      outfile: out,
      logLevel: 'info',
      format: 'cjs',
    })));

  if (args[0] == 'watch') {
    await Promise.all(contexts.map(context => context.watch()));
  }
  else {
    for (const context of contexts) {
      await context.rebuild();
    }
    process.exit(0);
  }
}

go();
