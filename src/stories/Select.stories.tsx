import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../style.css';
import '../../page.css';
import Select from '../Select';

export default {
    title: 'ui/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: (
        <>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </>
    ),
};
