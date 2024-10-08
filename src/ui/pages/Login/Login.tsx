// directory imports
import '@ui/index.css'
import { Button, Loader, TextInput } from '@ui/components';
import routes from '@ui/routes/routes';
import useLogin from '@ui/hooks/useLogin';

// third party imports
import { ChangeEvent, useEffect, useState } from 'react';
import { FaBowlFood } from 'react-icons/fa6'
import { 
    Link, 
    useNavigate,
    generatePath,
    useLocation
} from "react-router-dom";
import { useAuthStore, useUserStore } from '@src/ui/states';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const setAuthed = useAuthStore((state) => state.setAuthed);
    const setUserId = useUserStore((state) => state.setUserId);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const state  = location.state;
    const { login, isLoading: isLoggingIn } = useLogin();
    
    const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleFormSubmit = async () => {
        login({email, password},
            {
            onSuccess: (result) => {
                setAuthed(true);
                setUserId(result.user_id);
                let nextPath = routes.ROOT;
                if (state && state.prevPath) {
                    nextPath = state.prevPath
                }
                navigate(
                    generatePath(nextPath)
                )
            }
        });
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate(generatePath(routes.ROOT));
        }
    }, [isAuthenticated, navigate])
    
    if (isLoggingIn) {
        return <Loader/>
    }

    return (
        <>
            {isAuthenticated && <Loader/>}
            {!isAuthenticated && <div className=" flex h-screen content-center from-orange-300 to-yellow-200 bg-gradient-to-b flex-col justify-center px-6 py-10 mb-1/2 lg:px-8 m-auto">
                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    <FaBowlFood className='mx-auto h-20 w-auto'/>
                </div>
                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    
                    <h2 className=" mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
                
                <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:mb-32 sm:mb space-y-6">
                    
                    <div>
                        <TextInput 
                            required 
                            id="email"
                            type="email" 
                            label="Email Address" 
                            onChange={handleEmailInputChange} 
                            value={email}
                        />
                    </div>

                    <div>
                        <TextInput 
                            required 
                            id="password" 
                            type="password" 
                            label="Password"
                            subLabel="Forgot Password?"
                            subLabelLink={routes.SAMPLE}
                            onChange={handlePasswordInputChange}
                            value={password}
                        />
                    </div>
                
                    <div>
                        <Button fullWidth onClick={handleFormSubmit} disabled={!email || !password}>Sign in</Button>
                    </div>
                    <p className=" mt-10 text-center text-sm text-gray-500 ">
                            Don't have an account? <Link to={routes.SIGNUP} className=" font-semibold leading-6 text-orange-600 hover:text-orange-500">Sign Up</Link>
                    </p> 
                </div >
            </div>
            }

        
        </>
    )
};

export default Login