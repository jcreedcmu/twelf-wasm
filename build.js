import * as esbuild from 'esbuild';

async function go() {
  const args = process.argv.slice(2);

  const entries = [
    {src: './src/index.ts', out: './public/assets/bundle.js'},
    {src: './src/worker.ts', out: './public/assets/worker.js'},
  ]

  const contexts = await Promise.all(entries.map(({src, out}) =>
    esbuild.context({
      entryPoints: [src],
      minify: false,
      sourcemap: true,
      bundle: true,
      outfile: out,
      logLevel: 'info',
      format: 'iife',
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
