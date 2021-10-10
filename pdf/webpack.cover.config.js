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
    cover: `./cover/index.tsx`
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: `@svgr/webpack`,
            options: {
              svgo: false,
            },
          }
        ]
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
    puppeteer: 'puppeteer',
  },
  stats: `errors-only`
};