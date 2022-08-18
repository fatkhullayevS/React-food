import "./most-ordered.css"
import Makaron from "../../../assets/img/makaron.png"
import Tuxum from "../../../assets/img/tuxum.png"
import Rolton from "../../../assets/img/rolton.svg"
import { Link } from "react-router-dom"


export const MostOrdered = () => {
    return (
        <div className="col-4 most">
            <div className="d-flex mt-2 ms-4 align-items-center justify-content-between">
                <h3>Most Ordered</h3>
                <select className="select">
                    <option value="DineIn">Today</option>
                    <option value="Today">Dine in</option>
                </select>
            </div>
            <hr />
            <div className="ms-4 mt-4 d-flex">
                <img src={Makaron} alt="" width={60} height={60} />
                <div className="descs">
                    <h5>Spicy seasoned seafood noodles</h5>
                    <p>200 dishes ordered</p>
                </div>
            </div>
            <div className="ms-4 mt-4 d-flex">
                <img src={Tuxum} alt="" width={60} height={60} />
                <div className="descs">
                    <h5>Salted pasta with mushroom sauce</h5>
                    <p>120 dishes ordered</p>
                </div>
            </div>
            <div className="ms-4 mt-4 d-flex mb-3">
                <img src={Rolton} alt="" width={60} height={60} />
                <div className="descs">
                    <h5>Beef dumpling in hot and sour soup</h5>
                    <p>80 dishes ordered</p>
                </div>
            </div>
            <Link to="/hot-dishes">View All</Link>
        </div>
    )
}