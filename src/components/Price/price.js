import "./price.css"
import Delete from "../../assets/img/Delete.svg"

export const Price = ({ item }) => {
    return (
        <div className="price ms-4 mt-4">
            <div className="d-flex align-items-center justify-content-between">
                <img src={`https://food-service-layer-app.herokuapp.com/` + item.image} alt="Rasm" width="43" height="43" />
                <div>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </div>
                <p className="price__number">2</p>
                <p>$ {item.price}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <form>
                    <input type="text" autoComplete="off" placeholder="Please, just a little bit spicy only." />
                </form>
                <button className="me-4"><img src={Delete} alt="" /></button>
            </div>
        </div>
    )
}