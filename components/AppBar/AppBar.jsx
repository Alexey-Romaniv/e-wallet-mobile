import {useAuth} from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/auth/authOperations";
// import {NavLink} from "react-router-dom";
import logo from '../../assets/icons/logo.svg'
import exit from '../../assets/icons/exit.svg'

import {ExitBtn, Header, HeaderContainer, HeaderFlexbox, LogoImg, LogoLink, Name} from "./AppBar.styles";
import {Image} from "react-native";

export const AppBar = () => {
    const {userName} = useAuth();
    const dispath = useDispatch();
    const logoutHandler = () => {
        dispath(logout());
    }
    return (<Header><HeaderContainer><LogoLink to='/'><LogoImg src={logo} alt='logoImg'/> Wallet</LogoLink> <HeaderFlexbox><Name>{userName}</Name>
        <ExitBtn onClick={logoutHandler}><Image src={exit} width={18} height={18}/><span>Exit</span></ExitBtn></HeaderFlexbox>
    </HeaderContainer></Header>);
};
