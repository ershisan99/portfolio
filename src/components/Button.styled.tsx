import styled, { css } from "styled-components";

type PropsType = {
  outlined?: boolean;
};

export const Button = styled.button<PropsType>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 19px 57px;
  gap: 10px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 18px;

  ${({ outlined }) =>
    outlined &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.textSecondary};
      color: ${({ theme }) => theme.colors.primary};
    `};
`;
