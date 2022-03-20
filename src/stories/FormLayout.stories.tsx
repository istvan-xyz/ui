import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../style.css';
import '../../page.css';
import FormLayout from '../FormLayout';
import VBoxLayout from '../VBoxLayout';
import TextBox from '../TextBox';
import Select from '../Select';
import Button from '../Button';
import ButtonRow from '../ButtonRow';

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

const TemplateComplex: ComponentStory<typeof FormLayout> = args => (
    <VBoxLayout>
        <FormLayout>
            <label>Field label</label>
            <TextBox />
            <label>Field label</label>
            <TextBox />
            <label>Select</label>
            <Select>
                <option>A</option>
                <option>B</option>
                <option>c</option>
            </Select>
        </FormLayout>
        <ButtonRow>
            <Button primary>Save</Button>
            <Button secondary>Cancel</Button>
        </ButtonRow>
    </VBoxLayout>
);

export const Complex = TemplateComplex.bind({});
