import { TextFormField } from "./TextFormField";
import React from "react";
import { FieldItemDataType } from "../../model/FieldItemData";
import { NumberFormField } from "./NumberFormField";
import { CheckboxFormField } from "./CheckboxFormField";
import { SelectFormField } from "./SelectFormField";
import { SelectOption } from "../Select";
import { OptionsProvider } from "../Autocomplete";
import { AutocompleteFormField } from "./AutocompleteFormField";
import { DateFormField } from "./DateFormField";
import { MultipleAutocompleteFormField } from "./MultipleAutocompleteFormField";
import { MultipleSelectFormField } from "./MultipleSelectFormField";

interface Props<T> {
  name: string;
  label: string;
  disabled?: boolean;
  icon?: string;
  value: T | null | SelectOption<T> | SelectOption<T>[];
  type: FieldItemDataType;
  options?: SelectOption<T>[];
  placeholder?: string;
  optionsProvider?: OptionsProvider<T>;
  onChange: (
    fieldName: string,
    value: T | null | SelectOption<T> | T[]
  ) => void;
  errorMessage?: string | null;
}

export const DataFormField = <T extends unknown>({
  name,
  label,
  type,
  onChange,
  value,
  icon,
  placeholder,
  options,
  optionsProvider,
  disabled,
  errorMessage,
}: Props<T>) => {
  if (type === "text") {
    return (
      <TextFormField
        icon={icon}
        label={label}
        name={name}
        onChange={onChange as (name: string, value: string) => void}
        placeholder={placeholder}
        value={value as string}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  if (type === "date") {
    return (
      <DateFormField
        icon={icon}
        label={label}
        name={name}
        onChange={onChange as (name: string, value: Date | null) => void}
        placeholder={placeholder}
        value={value as Date | null}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  if (type === "number") {
    return (
      <NumberFormField
        icon={icon}
        value={value as number}
        onChange={onChange as (name: string, value: number) => void}
        placeholder={placeholder}
        label={label}
        name={name}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  if (type === "bool") {
    return (
      <CheckboxFormField
        icon={icon}
        value={value as boolean}
        onChange={onChange as (name: string, value: boolean) => void}
        label={label}
        name={name}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  if (type === "select") {
    return (
      <SelectFormField<T>
        icon={icon}
        value={value as SelectOption<T> | null}
        onChange={
          onChange as (name: string, value: SelectOption<T> | null) => void
        }
        label={label}
        name={name}
        placeholder={placeholder}
        options={options ?? []}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  if (type === "autocomplete" && optionsProvider !== undefined) {
    return (
      <AutocompleteFormField<T>
        icon={icon}
        value={value as SelectOption<T> | null}
        onChange={onChange}
        label={label}
        name={name}
        placeholder={placeholder}
        optionsProvider={optionsProvider as OptionsProvider<T>}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  if (type === "multipleAutocomplete" && optionsProvider !== undefined) {
    return (
      <MultipleAutocompleteFormField<T>
        icon={icon}
        value={value as SelectOption<T>[]}
        onChange={onChange as (name: string, value: SelectOption<T>[]) => void}
        label={label}
        name={name}
        placeholder={placeholder}
        optionsProvider={optionsProvider}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  if (type === "multipleSelect") {
    return (
      <MultipleSelectFormField<T>
        icon={icon}
        value={value as SelectOption<T>[]}
        onChange={onChange as (name: string, value: SelectOption<T>[]) => void}
        label={label}
        name={name}
        placeholder={placeholder}
        options={options ?? []}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    );
  }

  return null;
};
