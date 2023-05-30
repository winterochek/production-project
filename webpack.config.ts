import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, BuildEnv } from './config/build/types/config';

export default (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const port = env.port || 3000;

  const isDev = mode === 'development';

  const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    src: path.resolve(__dirname, 'src'),
  };

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });
  return config;
};
