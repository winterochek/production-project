import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
   const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
         !isDev ? MiniCssExtractPlugin.loader : 'style-loader',
         {
            loader: 'css-loader',
            options: {
               modules: {
                  auto: (resPath: string) =>
                     Boolean(resPath.includes('.module')),
                  localIdentName: isDev
                     ? '[path][name]__[local]--[hash:base64:5]'
                     : '[hash:base64:8]',
               },
            },
         },
         'sass-loader',
      ],
   };
   const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   };
   return [typescriptLoader, cssLoader];
}
