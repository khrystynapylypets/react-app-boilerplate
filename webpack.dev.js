import { merge } from 'webpack-merge';
import path from 'path';
import { fileURLToPath } from 'url';
import { detect } from 'detect-port';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { commonConfig } from './webpack.common.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const defaultPort = 3000;

const generateDevConfig = async () => {
  const getAvailablePort = async (startingPort) => {
    try {
      const availablePort = await detect(startingPort);
      console.log(`Port ${availablePort} is available`);
      return availablePort;
    } catch {
      const nextPort = startingPort + 1;
      console.error(`Port ${startingPort} is occupied, trying ${nextPort}`);
      return getAvailablePort(nextPort);
    }
  };

  return {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      port: await getAvailablePort(defaultPort),
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  };
};

export default async () => {
  const devConfig = await generateDevConfig();
  return merge(commonConfig, devConfig);
};
