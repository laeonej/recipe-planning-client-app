import { useQuery } from 'react-query'
import UserService from '@service/userService';


const useGetUser = (userId: number) => {
    const { isLoading, error, data } = useQuery(['getUser', userId],
        async () => UserService.getUser(userId)
    );

    return {
        isLoading,
        error,
        data
    };
};


export default useGetUser;