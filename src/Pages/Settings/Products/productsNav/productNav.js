import { NavLink } from "react-router-dom"

export const ProductNav = () => {
    return (
        <nav className="sitenav">
            <ul>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-link d-inline-block  text-decoration-none"
                            : " d-inline-block text-light text-decoration-none"
                    } to='/products/hot-dishes'>Hot Dishes</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-link d-inline-block  text-decoration-none"
                            : " d-inline-block text-light text-decoration-none"
                    } to='/products/cold-dishes'>Cold Dishes</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-link d-inline-block  text-decoration-none"
                            : " d-inline-block text-light text-decoration-none"
                    } to='/products/soup'>Soup</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-link d-inline-block  text-decoration-none"
                            : " d-inline-block text-light text-decoration-none"
                    } to='/products/grill'>Grill</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-link d-inline-block  text-decoration-none"
                            : " d-inline-block text-light text-decoration-none"
                    } to='/products/appetizer'>Appetizer</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-link d-inline-block  text-decoration-none"
                            : " d-inline-block text-light text-decoration-none"
                    } to='/products/dessert'>Dessert</NavLink>
                </li>
            </ul>
        </nav>
    )
}