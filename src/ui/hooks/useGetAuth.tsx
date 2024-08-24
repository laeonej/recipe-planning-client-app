import { useQuery } from 'react-query'
import UserService from '@service/userService';


const useGetAuth = () => {
    const { data, isLoading } = useQuery('getAuth',
        async () => await UserService.getAuth()
    );

    return {
        data,
        isLoading
    };
};


export default useGetAuth;