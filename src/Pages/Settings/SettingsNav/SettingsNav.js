import { NavLink } from "react-router-dom";
import "./setting-nav.css"
import Heart from "../../../assets/img/Heart.svg"
import Restaurant from "../../../assets/img/Restaurant.svg"
import Products from "../../../assets/img/Products.svg"
import Notifiations from "../../../assets/img/nofications.svg"
import Security from "../../../assets/img/security.svg"
import Warn from "../../../assets/img/warn.svg"

export const SettingsNav = () => {
    return (
        <div className="settings-nav ms-4">
            <ul>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-link d-inline-block  text-decoration-none"
                            : " d-inline-block text-light text-decoration-none"
                    } to="/appereance">
                        <div className="d-flex">
                            <img className="mt-4" src={Heart} alt="" width="13" height="13" />
                            <div className="mt-3 ms-2">
                                <h5>Appereance</h5>
                                <p>Dark and Light mode, Font size</p>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/restaurant">
                        <div className="d-flex">
                            <img className="mt-4" src={Restaurant} alt="" width="13" height="13" />
                            <div className="mt-3 ms-2">
                                <h5>Your Restaurant</h5>
                                <p>Manage your product, pricing, etc</p>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "active-nav d-inline-block  text-decoration-none"
                            : " d-inline-block text-decoration-none"
                    } to="/products">
                        <div className="d-flex">
                            <img className="mt-4" src={Products} alt="" width="13" height="13" />
                            <div className="mt-3 ms-2">
                                <h5>Products Management</h5>
                                <p>Manage your product, pricing, etc</p>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/notifications">
                        <div className="d-flex">
                            <img className="mt-4" src={Notifiations} alt="" width="15" height="15" />
                            <div className="mt-3 ms-2">
                                <h5>Notifications</h5>
                                <p>Customize your notifications</p>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/security">
                        <div className="d-flex">
                            <img className="mt-4" src={Security} alt="" width="13" height="13" />
                            <div className="mt-3 ms-2">
                                <h5>Security</h5>
                                <p>Configure Password, PIN, etc</p>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/security">
                        <div className="d-flex">
                            <img className="mt-4" src={Security} alt="" width="13" height="13" />
                            <div className="mt-3 ms-2">
                                <h5>Security</h5>
                                <p>Configure Password, PIN, etc</p>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        <div className="d-flex">
                            <img className="mt-4" src={Warn} alt="" width="13" height="13" />
                            <div className="mt-3 ms-2">
                                <h5>About Us</h5>
                                <p>Find out more about Posly</p>
                            </div>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}