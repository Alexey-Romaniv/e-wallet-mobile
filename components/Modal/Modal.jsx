import {CloseButton, ModalContent, ModalTitle, } from './Modal.styles.jsx'
import {useState} from "react";
import {ModalToogle} from "../ModalButtons/ModalToogle";
import {ExpenseForm, IncomeForm} from "../ModalForms/ModalForms";
import { Dimensions, Modal as ModalWrapper } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export const Modal = ({toggleModal}) => {
    const [type, setType] = useState(true); // тип операции


    return (
        <>
            <ModalWrapper style={{alignSelf:'stretch', flex:1, position: 'absolute', top: 0, left: 0}}>
                <ModalContent>
                    <CloseButton onClick={toggleModal}/>
                    <ModalTitle>Add transaction</ModalTitle>
                    <ModalToogle type={type} setType={setType}/>
                    {type ? <IncomeForm toggleModal={toggleModal}/> : <ExpenseForm toggleModal={toggleModal}/>}
                </ModalContent>
            </ModalWrapper>
        </>
    );
}