import "./render-product.css"


export const RenderProduct = ({ item, setModalEdit, setSelected }) => {

    return (
        <div className="col-4">
            <div className="card ms-4">
                <img src={`https://food-service-layer-app.herokuapp.com/${item.image}`} alt={item.name} width="132" height="132" />
                <p className="card__title text-center">{item.name}</p>
                <div className="text-center">
                    <p className="card__money">$ {item.price}</p>
                    <span className="card__number">{item.bowls} bowls available</span>
                </div>
                <button onClick={() => {
                    setModalEdit(true)
                    setSelected(item)
                }} className="edit">Edit</button>
            </div>
        </div>
    )
}