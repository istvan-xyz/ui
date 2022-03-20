import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../style.css';
import '../../page.css';
import FormLayout from '../FormLayout';
import TextBox from '../TextBox';
import Select from '../Select';

export default {
    title: 'ui/FormLayout',
    component: FormLayout,
} as ComponentMeta<typeof FormLayout>;

const Template: ComponentStory<typeof FormLayout> = args => (
    <FormLayout {...args} />
);

export const Default = Template.bind({});

Default.args = {
    children: (
        <>
            <label>Field label</label>
            <TextBox />
            <label>Select</label>
            <Select>
                <option>A</option>
                <option>B</option>
                <option>c</option>
            </Select>
        </>
    ),
};
