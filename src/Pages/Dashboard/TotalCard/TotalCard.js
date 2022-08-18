import Dollar from "../../../assets/img/dollar.svg"
import Top from "../../../assets/img/top.svg"
import "./total-card.css"

export const TotalCard = ({ title, desc }) => {
    return (
        <div className="total ms-2 col-4 me-5">
            <div className="ms-2 d-flex align-items-center">
                <img className="mt-3" src={Dollar} alt="" width={38} height={38} />
                <p className="m-0 p-0 text-white mt-3 ms-2">+32.40%</p>
                <img className="mt-3 ms-1" src={Top} alt="" width={18} height={18} />
            </div>
            <h3 className="mt-3 ms-2 m-0">{title}</h3>
            <p className="ms-2">{desc}</p>
        </div>
    )
}