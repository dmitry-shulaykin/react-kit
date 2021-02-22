import styled from "styled-components";
import { FC, ReactNode } from "react";
import React from "react";
import { Text } from "./Text";
import { Icon } from "./Icon";

const FormItemBase = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${(props) => props.theme.spacing.double};
  flex-wrap: wrap;
`;

const LabelContainer = styled.div`
  flex: 1 1;
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.double};
`;

const FieldContainer = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing.double};
`;

export interface Props {
  label?: string;
  children: ReactNode;
  icon?: string;
}

export const FormField: FC<Props> = ({ label, icon, children }) => (
  <FormItemBase>
    {icon && <Icon icon={icon} />}
    <LabelContainer>
      <Text>{label ?? ""}</Text>
    </LabelContainer>
    <FieldContainer>{children}</FieldContainer>
  </FormItemBase>
);