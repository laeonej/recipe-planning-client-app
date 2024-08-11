import routes from '@src/ui/routes/routes';

import { FaRegUserCircle } from "react-icons/fa";
import Nav from './Nav/Nav';
import { FaBowlFood } from 'react-icons/fa6';

const NavBar = () => {
    // get UserContext
    // const { user } = useContext(UserContext);
    return (
        <>
            <ul className=' bg-orange-400 w-full h-16'>
                <Nav routeTo={routes.ROOT} direction='left'><FaBowlFood className='h-6 w-auto'/></Nav>
                <Nav routeTo={routes.ROOT} label='Recipes' direction='left'/>
                <Nav routeTo={routes.ROOT} label='Meal Plan' direction='left'/>
                <Nav routeTo={routes.ROOT} direction='right'><FaRegUserCircle className='h-6 w-auto'/></Nav>
                <Nav routeTo={routes.LOGIN} label='Login' direction='right'/>
                <Nav routeTo={routes.SIGNUP} label='Sign Up' direction='right'/>
            </ul>
        </>
    )

};

export default NavBar;