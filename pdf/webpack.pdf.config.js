import path from "path";

export default {
  experiments: {
    outputModule: true,
    topLevelAwait: true,
  },
  mode: `development`,
  target: `node`,
  context: path.join(process.cwd()),
  entry: {
    pdf: `./src/index.tsx`
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    libraryTarget: `module`,
    chunkFormat: `module`,
    library: { type: "module" },
    environment: {
      module: true,
      dynamicImport: true,   // Note you need to enable `dynamicImport ` here
    },
  },
  externalsType: `import`,
  externals:{
    canvas: {},

  },
  stats: `errors-only`
};