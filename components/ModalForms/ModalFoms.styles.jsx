import styled from "styled-components/native";
import { TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

// Формы
export const ModalForm = styled.View`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

// Поле ввода
export const ModalInput = styled(TextInput)`
  width: 100%;
  border: none;
  border-bottom-width: 2px;
  border-bottom-color: ${(p) => p.theme.colors.secondaryText};
  outline: none;
  padding: 0 20px 8px;
  font-family: ${(p) => p.theme.fonts.mainFont};
  color: ${(p) => p.theme.colors.black};
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  transition: border 250ms linear;

  &::placeholder {
    color: ${(p) => p.theme.colors.secondaryText};
    font-weight: 700;
    font-size: 18px;
  }

  &:hover,
  &:focus {
    border-bottom-color: ${(p) => p.theme.colors.income};
  }
`;

// Выпадающий список (Picker)
export const SelectInput = styled(Picker)`
  width: 100%;
  border: none;
  border-bottom-width: 2px;
  border-bottom-color: ${(p) => p.theme.colors.secondaryText};
  background-color: transparent;
  padding: 0 20px 8px;
`;

// Комментарий (textarea)
export const ModalComment = styled.View`
  width: 100%;

  & ${ModalInput} {
    min-height: 84px;
    text-align-vertical: top;
    padding: 0 20px;
    border-bottom-color: ${(p) => p.theme.colors.secondaryText};
    font-family: ${(p) => p.theme.fonts.mainFont};
    font-size: 18px;
    color: ${(p) => p.theme.colors.mainText};
    resize: none;
  }
`;

// Компонент выбора даты
export const ModalDate = styled.View`
  width: 100%;
  border: none;
  border-bottom-width: 2px;
  border-bottom-color: ${(p) => p.theme.colors.secondaryText};
`;
