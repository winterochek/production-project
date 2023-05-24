import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildPaths } from './types/config';

export function buildPlugins({ html }: BuildPaths): WebpackPluginInstance[] {
   return [
      new HTMLWebpackPlugin({
         template: html,
      }),
      new ProgressPlugin(),
      new MiniCssExtractPlugin({
         filename: 'css/[name].[contenthash:8].css',
         chunkFilename: 'css/[name].[contenthash:8].css',
      }),
   ];
}
