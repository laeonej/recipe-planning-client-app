import routes from '@src/ui/routes/routes';

import { FaRegUserCircle } from "react-icons/fa";
import Nav from './Nav/Nav';
import { FaBowlFood } from 'react-icons/fa6';
import { useAuthStore, useUserStore } from '@src/ui/states';

const NavBar = () => {

    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const userId = useUserStore((state) => state.userId);
    
    return (
        <>
            <ul className=' bg-orange-400 w-full h-16'>
                <Nav routeTo={routes.ROOT} direction='left'><FaBowlFood className='h-6 w-auto'/></Nav>
                <Nav routeTo={routes.SAMPLE} label='Recipes' direction='left'/>
                { isAuthenticated && <Nav routeTo={routes.MEAL_PLAN} label='Meal Plan' direction='left'/> }
                { isAuthenticated && userId && <Nav routeTo={routes.ROOT} direction='right'><FaRegUserCircle className='h-6 w-auto'/></Nav> }
                { !isAuthenticated && <Nav routeTo={routes.LOGIN} label='Login' direction='right'/> }
                { !isAuthenticated && <Nav routeTo={routes.SIGNUP} label='Sign Up' direction='right'/> }
            </ul>
        </>
    )

};

export default NavBar;