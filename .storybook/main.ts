import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  //stories: [
  //  '../stories/**/*.mdx',
  // '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  // ],
  stories: ['../components/templates/base/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
