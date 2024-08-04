import { useMutation } from 'react-query'
import UserService, { UserLoginBody } from '@service/userService';



const useLogin = () => {
    const { mutate: login, isLoading } = useMutation(
        async ({email, password}: UserLoginBody ) => UserService.login({email, password})
    );

    return {
        login,
        isLoading,
    };
};


export default useLogin;