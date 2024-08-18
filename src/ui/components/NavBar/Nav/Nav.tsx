import { Link } from "react-router-dom";
import { NavProps } from "./Nav.types";

const Nav = ({children, routeTo, label, direction} : NavProps) => {

    let linkTailWindClass = 'py-5 px-4 inline hover:bg-orange-500 float-left '
    if (direction === 'right') {
        linkTailWindClass = 'py-5 px-4 inline hover:bg-orange-500 float-right'
    };

    return (
        <Link className={linkTailWindClass} to={routeTo}>
            {children ? children : <span className="h-16">{label}</span>
            }
        
        </Link>
    );
};

export default Nav;