import {useAuth} from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/auth/authOperations";
import Logo from '../../assets/icons/Logo'
import {ExitBtn, Header, HeaderContainer, HeaderFlexbox, LogoImg, LogoLink, LogoText, Name} from "./AppBar.styles";
import {Image, Text} from "react-native";
import Exit from "../../assets/icons/Exit";

export const AppBar = () => {
    const {userName} = useAuth();
    const dispath = useDispatch();
    const logoutHandler = () => {
        dispath(logout());
    }
    return (<Header><HeaderContainer><LogoLink to='/'><Logo alt='logoImg'/>
        <Text style={{fontSize: 24, fontWeight: 700}}>Wallet</Text>
    </LogoLink>
        <HeaderFlexbox><Name>{userName}</Name>
            <ExitBtn onPress={logoutHandler}><Exit width={24} height={24}/></ExitBtn></HeaderFlexbox>
    </HeaderContainer></Header>);
};
