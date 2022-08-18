import "./sidebar.css";
import Logo from "../../assets/img/Logo.svg"
import Home from "../../assets/img/home.svg"
import Hug from "../../assets/img/hug.svg"
import Dashboard from "../../assets/img/dashboard.svg"
import Accordion from "../../assets/img/accordion.svg"
import Settings from "../../assets/img/settings.svg"
import Nofications from '../../assets/img/nofications.svg'
import Logout from "../../assets/img/logout.svg"
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
    return (
        <>
            <div className="col-1">
                <div className="sidebar">
                    <img className="ms-4 mt-4 logo" src={Logo} alt="" />
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive
                                    ? "active-icon d-inline-block  text-decoration-none"
                                    : " d-inline-block text-light text-decoration-none"
                            } to='/'> <img className="home" src={Home} alt="" /></NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive
                                    ? "active-icon d-inline-block  text-decoration-none"
                                    : " d-inline-block text-light text-decoration-none"
                            } to='/hug'>  <img src={Hug} alt="" /></NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive
                                    ? "active-icon d-inline-block  text-decoration-none"
                                    : " d-inline-block text-light text-decoration-none"
                            } to='/dashboard'>  <img src={Dashboard} alt="" /></NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive
                                    ? "active-icon d-inline-block  text-decoration-none"
                                    : " d-inline-block text-light text-decoration-none"
                            } to='/accordion'> <img src={Accordion} alt="" /></NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive
                                    ? "active-icon d-inline-block  text-decoration-none"
                                    : " d-inline-block text-light text-decoration-none"
                            } to='/nofications'> <img src={Nofications} alt="" /></NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive
                                    ? "active-icon d-inline-block  text-decoration-none"
                                    : " d-inline-block text-light text-decoration-none"
                            } to='/settings'>    <img src={Settings} alt="" /></NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive
                                    ? "active-icon d-inline-block  text-decoration-none"
                                    : " d-inline-block text-light text-decoration-none"
                            } to='/logout'> <img src={Logout} alt="" /></NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}