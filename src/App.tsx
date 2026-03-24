import React from 'react';
import { Button } from './components/Button';
import { Label } from './components/Label';
import { Text } from './components/Text';
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
} from './components/Table';
import { Dropdown } from './components/Dropdown';
import { RadioButton } from './components/RadioButton';
import { Img } from './components/Img';
import { HeroImage } from './components/HeroImage';
import { Card } from './components/Card';

function App() {
  return (
    <div style={{ padding: '2rem', display: 'grid', gap: '2rem' }}>
      <Button text="Example Button" />
      <Label text="Example Label" />
      <Text text="Example text content" />

      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Header 1</TableCell>
            <TableCell>Header 2</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer 1</TableCell>
            <TableCell>Footer 2</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <Dropdown
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ]}
      />

      <RadioButton label="Radio Option" name="group1" />

      <Img
        src="https://img.freepik.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_rp_progressive&w=740&q=80%22"
        alt="Example"
      />

      <HeroImage
        title="Hero Title"
        subtitle="Hero subtitle"
        backgroundColor="https://smithworks.marketing/hubfs/hero-banner.webp"
      />

      <Card title="Card Title" body="This is a card" />
    </div>
  );
}

export default App;
