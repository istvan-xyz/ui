import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../style.css';
import '../../page.css';
import VBoxLayout from '../VBoxLayout';
import Button from '../Button';
import TextBox from '../TextBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ui/VBoxLayout',
    component: VBoxLayout,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof VBoxLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VBoxLayout> = args => (
    <VBoxLayout {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: (
        <>
            <TextBox placeholder="Username" />
            <Button primary>Continue</Button>
        </>
    ),
};
