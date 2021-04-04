import React, { FC } from "react";
import { FormField } from "./FormField";
import { TextInput } from "../TextInput";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (name: string, value: string) => void;
  disabled?: boolean;
  errorMessage?: string | null;
}

export const TextFormField: FC<Props> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  disabled,
  errorMessage,
}) => {
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <FormField label={label} errorMessage={errorMessage}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormField>
  );
};
