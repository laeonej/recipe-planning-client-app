// directory imports
import '@ui/index.css'
import { Button, Loader, TextInput} from '@ui/components';
import { Hover } from '@src/ui/components/Hover';
import routes from '@ui/routes/routes';
import useSignup from '@ui/hooks/useSignup';


// third party imports
import { ChangeEvent, useContext, useState } from 'react';
import { FaBowlFood, FaCircleQuestion } from 'react-icons/fa6'
import { 
    Link, 
    useNavigate,
    generatePath,
    useLocation
} from "react-router-dom";
import { AuthContext } from '@src/ui/contexts/AuthContext';

const Signup = () => {
    const navigate = useNavigate();
    const { authenticated, setAuthenticated } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signup, isLoading: isSigningUp } = useSignup();
    const [errorMessage, setErrorMessage] = useState('')
    
    const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleUsernameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }

    const handleFormSubmit = async () => {
        const isValidPassword = validPassword();
        const isValidEmail = validEmail();

        if (isValidPassword && isValidEmail) {
            setErrorMessage('');
            signup({email, username, password},
                {
                onSuccess: () => {
                    setAuthenticated(true);
                    console.log("signup successful");
                    
                    navigate(
                        generatePath(routes.ROOT)
                    );
                }
            });
        } else if (!isValidPassword) {
            setErrorMessage("Please enter a valid password")
        } else if (!isValidEmail) {
            setErrorMessage("Please enter a valid email address")
        }
    }

    const validEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validPassword = () => {
        if (password.length < 8) {
            return false
        }

        const hasLowerCase = /[a-z]/.test(password)
        const hasUppercase = /[A-Z]/.test(password)
        const hasNumber = /\d/.test(password)

        return hasLowerCase && hasUppercase && hasNumber
    }
    
    if (authenticated) {
        navigate(generatePath(routes.ROOT))
    }

    if (isSigningUp) {
        return <Loader/>
    }

    return (
        <>
            <div className=" flex h-screen content-center from-orange-300 to-yellow-200 bg-gradient-to-b flex-col justify-center px-6 py-10 mb-1/2 lg:px-8 m-auto">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <FaBowlFood className='mx-auto h-20 w-auto'/>
                </div>
                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    
                    <h2 className=" mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an account</h2>
                </div>
                
                <div className='grid grid-cols-3 gap-4 items-end mt-10 sm:mx-auto sm:w-full'>
                    <div className='col-start-2'>
                        <TextInput 
                            required 
                            id="email"
                            type="email" 
                            label="Email Address" 
                            onChange={handleEmailInputChange} 
                            value={email}
                        />
                    </div>
                    <div className='col-start-2'>
                        <TextInput 
                            required 
                            id="username"
                            type="username" 
                            label="Username" 
                            onChange={handleUsernameInputChange} 
                            value={username}
                        />
                    </div>
                    <div className='col-start-2'>
                        <TextInput 
                            required 
                            id="password" 
                            type="password" 
                            label="Password"
                            onChange={handlePasswordInputChange}
                            value={password}
                        />
                    </div>
                    <div>
                        <Hover 
                            icon={FaCircleQuestion}
                            label='hi'
                            size ={24}
                            // textBoxWidth='200px'
                            color='black'
                            hoverText={
                                    <ul className='list-disc'>Password must contain 
                                        <li>8 characters</li>
                                        <li>Uppercase letters</li>
                                        <li>Lowercase letters</li>
                                        <li>A number</li>
                                    </ul>}
                            //hoverText='Password must contain 8 characters, uppercase and lowercase letters, and a number'
                        />
                    </div>
                    <div className='col-start-2'>
                        <TextInput 
                            required 
                            id="passwordConfirm" 
                            type="password" 
                            label="Confirm Password"
                            subLabel={password===confirmPassword ? "" : "Passwords must match"}
                            onChange={handleConfirmPasswordInputChange}
                            value={confirmPassword}
                        />
                    </div>
                    <div className='col-start-2'>
                        <Button 
                            fullWidth 
                            onClick={handleFormSubmit} 
                            disabled={ !email || !username || !password || password!==confirmPassword}>
                            Sign Up
                        </Button>
                    </div>
                </div>
                    {errorMessage !== '' ?                     
                    <p className=" mt-10 text-center text-sm text-red-700 col-span-6">
                            {errorMessage}
                    </p> : <></>}

                    <p className=" mt-10 text-center text-sm text-gray-500 col-span-6">
                            Already have an account? <Link to={routes.LOGIN} className=" font-semibold leading-6 text-orange-600 hover:text-orange-500">Sign In</Link>
                    </p> 
                
            </div>

        
        </>
    )
};

export default Signup