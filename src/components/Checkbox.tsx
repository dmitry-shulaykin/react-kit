import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { getPrimaryMainColor, ThemeProps } from "../themes/theme";

const InternalCheckbox = styled.input`
  position: absolute;
  opacity: 0;
`;

const StyledCheckboxLabel = styled.label<LabelProps>`
  display: inline-block;
  border: 1px solid ${getPrimaryMainColor};
  border-radius: 8px;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  background-color: ${(props: LabelProps) =>
    props.disabled
      ? "grey"
      : props.value
      ? getPrimaryMainColor(props)
      : "transparent"};
  &::after {
    font-family: "monospace";
    content: ${(props: LabelProps) => (props.value ? `'✓'` : `'✖'`)};
    line-height: 1.5em;
    color: ${(props: LabelProps) =>
      props.value ? `white` : getPrimaryMainColor(props)};
    position: relative;
    top: 0;
    bottom: 0;
  }
`;

interface LabelProps extends ThemeProps {
  value?: boolean;
  disabled?: boolean;
}

export interface Props {
  onChange?: (value: boolean) => void;
  value: boolean;
  disabled?: boolean;
}

export const Checkbox: FC<Props> = (props) => {
  const { onChange, value, disabled } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <StyledCheckboxLabel value={value} disabled={disabled}>
      <InternalCheckbox
        type="checkbox"
        onChange={handleChange}
        checked={value ?? false}
        disabled={disabled}
      />
    </StyledCheckboxLabel>
  );
};
