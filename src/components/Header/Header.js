import { Card } from "../Card/Card"
import { Choose } from "../Choose/choose"
import { Navbar } from "../Navbar/Navbar"
import "./header.css"

export const Header = () => {
    return (
        <div className="header">
            <div className="d-flex align-items-center justify-content-between">
                <div className="mt-4 ms-4">
                    <h3 className="text-white">Jaegar Resto</h3>
                    <p className="text-white">Tuesday, 2 Feb 2021</p>
                </div>
                <form className="mt-4">
                    <input autoComplete="off" type="search" placeholder="search food..." />
                </form>
            </div>
        </div>
    )
}