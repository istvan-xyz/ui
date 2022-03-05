import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../style.css';
import '../../page.css';
import FormLayout from '../FormLayout';
import Button from '../Button';
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
            <input type="text" />
            <label>Field label</label>
            <select>
                <option>A</option>
                <option>B</option>
                <option>c</option>
            </select>
            <label>Select</label>
            <Select>
                <option>A</option>
                <option>B</option>
                <option>c</option>
            </Select>
            <label>Field label</label>
            <Button primary>Delete</Button>
            <Select>
                <option>A</option>
                <option>B</option>
                <option>c</option>
            </Select>
            <Button danger>Delete</Button>
            <Button secondary>Cancel</Button>
            <Button primary>Send</Button>
        </>
    ),
};
