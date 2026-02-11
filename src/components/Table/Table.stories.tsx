import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Table } from "./Table";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { TableFooter } from "./TableFooter";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  args: { backgroundColor: "#ffffff", disabled: false },
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Age</TableCell>
        </TableRow>
      </TableHeader>

      <tbody>
        <TableRow>
          <TableCell>Max</TableCell>
          <TableCell>25</TableCell>
        </TableRow>
      </tbody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Footer</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <Table {...args}>
      <tbody>
        <tr>
          <td>Disabled table</td>
        </tr>
      </tbody>
    </Table>
  ),
};
