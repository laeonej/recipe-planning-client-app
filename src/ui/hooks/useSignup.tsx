import { useMutation } from "react-query";
import UserService, { UserSignupBody } from '@service/userService';

const useSignup = () => {
    const {mutate: signup, isLoading } = useMutation(
        async ({email, username, password}: UserSignupBody ) => UserService.signup({email, username, password})
    );

    return {
        signup,
        isLoading,
    };
};

export default useSignup;