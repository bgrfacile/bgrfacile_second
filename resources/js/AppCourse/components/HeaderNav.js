import { Link, NavLink } from "react-router-dom";
import ApplicationLogo from "./ApplicationLogo";
import SvgBonus from "./svg/Svgbonus";
import Svgbook from "./svg/SvgBook";
import SvgExo from "./svg/SvgExo";
import SvgFormation from "./svg/SvgFormation";

const HeaderNar = () => {

    const className = "flex justify-center items-center p-2 mx-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50";
    const classNameLinkActive = "text-blue-600 bg-gray-300";
    return (<>
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8 flex justify-evenly">
                <NavLink activeClassName={classNameLinkActive} to='/cours' className={className}>
                    <Svgbook className='block h-10 w-auto text-gray-600' />
                    <span>Cours</span>
                </NavLink>
                <NavLink activeClassName={classNameLinkActive} to='/exercices' className={className}>
                    <SvgExo className='block h-10 w-auto text-gray-600' />
                    <span>Exercices</span>
                </NavLink>
                <NavLink activeClassName={classNameLinkActive} to='/formation' className={className}>
                    <SvgFormation className='block h-10 w-auto text-gray-600' />
                    <span>Formations</span>
                </NavLink>
                <NavLink activeClassName={classNameLinkActive} to='/bonus' className={className}>
                    <SvgBonus className='block h-10 w-auto text-gray-600' />
                    <span>Bonus</span>
                </NavLink>
            </div>
        </header>
    </>);
};

export default HeaderNar;
