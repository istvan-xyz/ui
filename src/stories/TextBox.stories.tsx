import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../style.css';
import '../../page.css';
import TextBox from '../TextBox';

export default {
    title: 'ui/TextBox',
    component: TextBox,
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = args => <TextBox {...args} />;

export const Default = Template.bind({});

Default.args = {};
