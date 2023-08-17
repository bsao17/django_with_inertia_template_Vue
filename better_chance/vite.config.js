import {resolve} from "path"

module.exports = {
  plugins: [],
  root: resolve('./assets/dist'),
  base: '/assets/',
  server: {
    host: 'localhost',
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  build: {
    outDir: resolve('./assets/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve('./assets/dist/js/main.jsx'),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
};