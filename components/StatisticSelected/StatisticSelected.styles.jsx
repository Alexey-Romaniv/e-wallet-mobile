import styled from "styled-components/native";
import { View } from "react-native";

export const SelectContainer = styled(View)`
    margin-top: 32px;
    margin-bottom: 20px;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 16px;
    }
`;
