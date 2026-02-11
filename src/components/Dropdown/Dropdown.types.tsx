export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps = {
  options?: DropdownOption[];
  backgroundColor?: string;
  disabled?: boolean;
};
