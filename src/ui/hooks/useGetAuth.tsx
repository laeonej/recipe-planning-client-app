import { useQuery } from 'react-query'
import UserService from '@service/userService';


const useGetAuth = () => {
    const { data } = useQuery('getAuth',
        async () => UserService.getAuth()
    );

    return {
        data
    };
};


export default useGetAuth;