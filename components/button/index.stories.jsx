/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Buttons from './index';

export default {
  title: 'General/Button',
  component: Buttons,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'select' },
      options: [' ', 'secondary', 'neutral'],
    },
    size: {
      control: { type: 'select' },
      options: ['compact', 'medium', 'elevated', 'super'],
    },
    pill: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    label: 'Continue',
    type: ' ',
    size: 'medium',
    pill: false,
    disabled: false,
  },
};

export const Button = (args) => <Buttons {...args} />;
