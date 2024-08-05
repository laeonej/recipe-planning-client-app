import { useQuery } from 'react-query'
import UserService from '@service/userService';


const useGetUser = () => {
    const { isLoading, error, data } = useQuery('getUser',
        async () => UserService.getUser()
    );

    return {
        isLoading,
        error,
        data
    };
};


export default useGetUser;