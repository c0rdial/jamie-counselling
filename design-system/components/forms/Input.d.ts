export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
}
export declare function Input(props: InputProps): JSX.Element;
