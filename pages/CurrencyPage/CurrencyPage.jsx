import {Container} from "../../components/CommonComponents/Container.styles";
import {Navigation} from "../../components/Navigation/Navigation";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrency} from "../../redux/currency/currencySelectors";
import {useEffect} from "react";
import {fetchCurrency} from "../../redux/currency/currencyOperations";
import {CurrencyInfo} from "../../components/CurrencyInfo/CurrencyInfo";

const CurrencyPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrency())
    }, [dispatch])
    const currency = useSelector(selectCurrency)
    return  <Container>
        {/*<Navigation/>*/}
        <CurrencyInfo currency={currency}/>
    </Container>;
};

export default CurrencyPage;
