import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../style.css';
import Button from '../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ui/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        primary: { type: 'boolean' },
        secondary: { type: 'boolean' },
        danger: { type: 'boolean' },
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    children: 'Primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
    secondary: true,
    children: 'Secondary',
};

export const Danger = Template.bind({});

Danger.args = {
    danger: true,
    children: 'Danger',
};
