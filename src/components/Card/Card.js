import "./card.css"
import Lagmon from "../../assets/img/lagmon.png"

export const Card = ({ item }) => {
    return (
        <>
            <div className="col-4">
                <div className="card ms-4">
                    <img src={`https://food-service-layer-app.herokuapp.com/` + item.image} alt={item.name} width="132" height="132" />
                    <p className="card__title">{item.name}</p>
                    <span className="card__money"> $ {item.price}</span>
                    <span className="card__number">{item.bowls} bowls available</span>
                </div>
            </div>
        </>
    )
}