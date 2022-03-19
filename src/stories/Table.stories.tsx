import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../style.css';
import '../../page.css';
import Table from '../Table';

export default {
    title: 'ui/Table',
    component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => (
    <div style={{ width: 700 }}>
        <Table {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    header: ['Header cell 1', 'Header cell 2', 'Header cell 3'],
    body: [
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 1', 'Cell 2', 'Cell 3'],
    ],
};
