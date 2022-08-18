import { Settings } from '../../Settings'
import Filter from "../../../../assets/img/filter.svg"
import { RenderProduct } from '../../RenderProduct/RenderProduct'
import Plus from "../../../../assets/img/plus.svg"
import { ModalAdd } from '../../../../components/Modal/Modal'
import { useEffect, useState } from "react"
import { ProductNav } from '../productsNav/productNav'
import { ModalEdit } from '../../ModalEdit/ModaltEdit'

export const ProductGrill = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://food-service-layer-app.herokuapp.com/food/4')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(err => console.log(err))
    }, [])

    const [modal, setModal] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [selected, setSelected] = useState({})

    return (
        <div className='row'>
            <div className='col-4'>
                <Settings />
            </div>
            <div className='col-8'>
                <div className="products" id="style-1">
                    <div className="d-flex align-items-center justify-content-between">
                        <h3 className="mt-4 ms-3">Products Management</h3>
                        <button className="d-flex align-items-center filter"><img src={Filter} alt="" width="20" height="20" /><p className="m-0 p-0 ms-2">Manage Categories</p></button>
                    </div>
                    <ProductNav />
                    <div className="row cards">
                        <button onClick={() => setModal(true)} className="col-3 modal-link ms-5">
                            <img src={Plus} alt="" />
                            <p>Add new dish</p>
                        </button>
                        {data.length && data.map(e => (
                            <RenderProduct setSelected={setSelected} setModalEdit={setModalEdit} key={e.id} item={e} />
                        ))}
                    </div>
                </div>
                <div className="product__bottom ms-4">
                    <button className="discard-btn ms-5">Discard Changes</button>
                    <button className="save-btn ms-5">Save Changes</button>
                </div>
            </div>
            <ModalAdd modal={modal} setModal={setModal} />
            <ModalEdit selected={selected} modalEdit={modalEdit} setModalEdit={setModalEdit} />
        </div>
    )
}