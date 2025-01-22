import React from "react";
import { ToogleLabel, ToogleWrapper, ModalToogleBtn, ToggleCircle, ToggleIcon } from "./ModalToogleBtn.styles";
import plus from "../../assets/icons/plus.png";
import minus from "../../assets/icons/minus.png";
import Statistics from "../../assets/icons/Statistics";

export const ModalToogle = ({ type, setType }) => {
    return (
        <ToogleWrapper>
            <ToogleLabel active={type} color="#24CCA7">
                Income
            </ToogleLabel>
            <ModalToogleBtn onPress={() => setType(!type)}>
                <ToggleCircle type={type}>
                    <ToggleIcon style={{transform: [{translateX: '-50%'}, { translateY: '-50%'}]}} source={type ? plus : minus} />
                </ToggleCircle>
            </ModalToogleBtn>
            <ToogleLabel active={!type} color="#FF6596">
                Expense
            </ToogleLabel>
        </ToogleWrapper>
    );
};
