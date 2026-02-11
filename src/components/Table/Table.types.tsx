export type BaseTablePartProps = {
  backgroundColor?: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

export type TableProps = BaseTablePartProps;

export type TableCellProps = {
  backgroundColor?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  as?: "td" | "th";
  colSpan?: number;
};
