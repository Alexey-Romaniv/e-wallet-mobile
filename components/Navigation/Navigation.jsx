import home from '../../assets/icons/home.svg';
import statistics from '../../assets/icons/statistics.svg';
import currency from '../../assets/icons/currency.svg';
import {NavIcon, NavigationLink, NavList, NavText} from "./Navigation.styles";

export const Navigation = () => {
    return <nav>
        <NavList>
            <li><NavigationLink to='/'><NavIcon src={home}/><NavText>Home</NavText></NavigationLink></li>
            <li><NavigationLink to='/statistics'><NavIcon src={statistics}/>
                <NavText>Statistic</NavText></NavigationLink></li>
            <li><NavigationLink to='/currency'><NavIcon src={currency}/></NavigationLink></li>
        </NavList>
    </nav>
}