import '@ui/index.css'
import { Button, TextInput } from '@ui/components';

import { FaBowlFood } from 'react-icons/fa6'
import { Link } from "react-router-dom";
import routes from '@ui/routes/routes';

const Login = () => {

    return (
        <>
            <div className=" flex h-screen content-center from-orange-300 to-yellow-200 bg-gradient-to-b flex-col justify-center px-6 py-10 mb-1/2 lg:px-8 m-auto">
                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    <FaBowlFood className='mx-auto h-20 w-auto'/>
                </div>
                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    
                    <h2 className=" mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
                
                <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:mb-32 sm:mb space-y-6">
                    
                    <div>
                        <TextInput required id="email" type="email" label="Email Address"/>
                    </div>

                    <div>
                        <TextInput 
                            required 
                            id="password" 
                            type="password" 
                            label="Password"
                            subLabel="Forgot Password?"
                            subLabelLink={routes.SAMPLE}
                        />
                    </div>
                
                    <div>
                        <Button fullWidth>Sign in</Button>
                    </div>
                    <p className=" mt-10 text-center text-sm text-gray-500 ">
                            Don't have an accountg? <Link to={routes.SAMPLE}className=" font-semibold leading-6 text-orange-600 hover:text-orange-500">Sign Up</Link>
                    </p> 
                </div >
            </div>
        
        </>
    )
};

export default Login