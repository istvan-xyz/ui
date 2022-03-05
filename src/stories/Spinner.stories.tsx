import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../style.css';
import '../../page.css';
import Spinner from '../Spinner';

export default {
    title: 'ui/Spinner',
    component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const Default = Template.bind({});

Default.args = {};
