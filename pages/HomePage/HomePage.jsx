import {BalanceInfo} from "../../components/BalanceInfo/BalanceInfo";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {fetchTransactions} from "../../redux/transactions/transactionsOperations";
import {TransactionList} from "../../components/TransactionList/TransactionList";
import {Container} from "../../components/CommonComponents/Container.styles";
import {Modal} from "../../components/Modal/Modal";
import {ShowModalBtn} from "../../components/CommonComponents/Buttons.styles";

import Icon from "react-native-vector-icons/AntDesign"; // Импорт набора AntDesign

import {DesktopWrapper} from "../../components/CommonComponents/Pages.styles";
import {TouchableOpacity, View} from "react-native";
import {AppBar} from "../../components/AppBar/AppBar";


const HomePage = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    return <Container>
        {showModal && <Modal toggleModal={toggleModal}/>}

        <AppBar/>
                <View>
                    <BalanceInfo/>
                </View>
        <ShowModalBtn onPress={()=> toggleModal()}>
            <Icon name="plus" size={30} color="white"/>
        </ShowModalBtn>
        <TransactionList/>
    </Container>;
}
export default HomePage;

