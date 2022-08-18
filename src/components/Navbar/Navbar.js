import { NavLink } from "react-router-dom"
import "./navbar.css"

export const Navbar = () => {
    return (
        <nav className="sitenav">
            <ul>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-link d-inline-block  text-decoration-none"
                            : " d-inline-block text-light text-decoration-none"
                    } to='/hot-dishes'>Hot Dishes</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-link d-inline-block  text-decoration-none"
                            : " d-inline-block text-light text-decoration-none"
                    } to='/cold-dishes'>Cold Dishes</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-link d-inline-block  text-decoration-none"
                            : " d-inline-block text-light text-decoration-none"
                    } to='/soup'>Soup</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-link d-inline-block  text-decoration-none"
                            : " d-inline-block text-light text-decoration-none"
                    } to='/grill'>Grill</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-link d-inline-block  text-decoration-none"
                            : " d-inline-block text-light text-decoration-none"
                    } to='/appetizer'>Appetizer</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-link d-inline-block  text-decoration-none"
                            : " d-inline-block text-light text-decoration-none"
                    } to='/dessert'>Dessert</NavLink>
                </li>
            </ul>
        </nav>
    )
}