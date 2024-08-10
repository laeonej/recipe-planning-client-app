import '@ui/index.css';
import { Link, useLocation } from 'react-router-dom';
import routes from '@src/ui/routes/routes';
// import useGetUser from '@src/ui/hooks/useGetUser';


const Sample = () => {

    // const { isLoading: isLoadingData, error: isError, data} = useGetUser();
    const location = useLocation();
    return (
        // <TextInput type="text" label="123" subLabel='AAAA' subLabelLink='#'/>
<p className=" mt-10 text-center text-sm text-gray-500 ">
                            Don't have an account? <Link to={routes.LOGIN} state={{prevPath: location.pathname}}className=" font-semibold leading-6 text-orange-600 hover:text-orange-500">Sign Up</Link>
                    </p> 
    );
};

export default Sample