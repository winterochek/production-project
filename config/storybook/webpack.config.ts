import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: Configuration }) => {
    if (!config?.resolve?.modules || !config.resolve?.extensions || !config?.module?.rules) return
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    // @ts-ignore
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })
    config.module.rules.push(buildSvgLoader())
    config.module.rules.push(buildCssLoader(true));

    return config;
};