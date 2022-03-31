import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../style.css';
import '../../page.css';
import ErrorBox from '../ErrorBox';

export default {
    title: 'ui/ErrorBox',
    component: ErrorBox,
} as ComponentMeta<typeof ErrorBox>;

const Template: ComponentStory<typeof ErrorBox> = args => (
    <ErrorBox {...args} />
);

export const Default = Template.bind({});

Default.args = {
    error: new Error('Something went wrong'),
};
