import { useSelector} from "react-redux";
import {
    selectWallet,
    selectIsAuth,
    selectIsFetching,
    selectUser,
    selectUserName,
    selectIsLoading
} from "../redux/auth/authSelectors";

export const useAuth = () => {
    const isAuth = useSelector(selectIsAuth);
    const isFetching = useSelector(selectIsFetching);
    const isLoading = useSelector(selectIsLoading)
    const user = useSelector(selectUser);
    const userName = useSelector(selectUserName);
    const wallet = useSelector(selectWallet);

    return {isAuth, isFetching, user , userName, wallet, isLoading};
}