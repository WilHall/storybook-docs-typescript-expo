// Based on https://github.com/storybookjs/storybook/blob/ead1e3d7ed78e1f1c4fccea4768064324c040d67/addons/centered/src/react.tsx
// but using position: absolute instead of position: fixed

/* eslint-disable import/no-extraneous-dependencies */
import React, {ReactNode} from 'react';
import {makeDecorator, StoryFn} from '@storybook/addons';

const parameters = {
  name: 'centered',
  parameterName: 'centered',
} as const;

const styles = {
  style: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    display: 'flex',
    alignItems: 'center',
    overflow: 'auto',
  },
  innerStyle: {
    margin: 'auto',
    maxHeight: '100%', // Hack for centering correctly in IE11
  },
} as const;

function centered(storyFn: () => ReactNode) {
  return (
    <div style={styles.style}>
      <div style={styles.innerStyle}>{storyFn()}</div>
    </div>
  );
}

export default makeDecorator({
  ...parameters,
  wrapper: getStory => centered(getStory as StoryFn),
});
