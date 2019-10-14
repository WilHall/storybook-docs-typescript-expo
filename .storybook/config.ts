import {configure, addDecorator, addParameters} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withA11y} from '@storybook/addon-a11y';
import {withConsole} from '@storybook/addon-console';
import centered from './decorators/centered';
addParameters({
  // @storybook/addon-viewport
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },

  // @storybook/addon-backgrounds
  backgrounds: [
    {name: 'Light', value: '#ffffff', default: true},
    {name: 'Dark', value: '#333333'},
  ],
});

// addDecorator(host({
//   align: 'center middle',
//   backdrop: 'transparent',
//   cropMarks: false,
// }));

addDecorator(centered);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(tsx|mdx)$/), module);
