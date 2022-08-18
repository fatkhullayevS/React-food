import { useEffect, useRef } from 'react'
import './modal-edit.css'
import axios from "axios"

export const ModalEdit = ({ modalEdit, setModalEdit, selected }) => {

    const elName = useRef("")
    const elPrice = useRef("")
    const elBowls = useRef("")
    const elCategory = useRef("")
    const elImg = useRef("")

    const handleEdit = (evt) => {
        evt.preventDefault()

        const formData = new FormData()

        formData.append("name", elName.current.value)
        formData.append("price", elPrice.current.value)
        formData.append("bowls", elBowls.current.value)
        formData.append("category_id", elCategory.current.value)
        formData.append("food_img", elImg.current.files[0])

        axios
            .put('https://food-service-layer-app.herokuapp.com/food/' + selected.id, formData)
            .then((data) => console.log(data))
            .catch(err => console.log(err))
    }

    const hanldeDeleteFood = () => {
        axios
            .delete('https://food-service-layer-app.herokuapp.com/food/' + selected.id)
            .then((data) => console.log(data))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        window.addEventListener("keyup", function (evt) {
            if (evt.code === "Escape") {
                setModalEdit(false)
            }
        })
    }, [])

    return (
        <div className={`d-flex overlay w-50 ${!modalEdit && "d-none"}`}>
            <div className="w-75 modal-add p-3">
                <div className="modal-header">
                    <h3>Tahrirlash</h3>
                    <button className='btn btn-outline-light' onClick={() => setModalEdit(false)}>&times;</button>
                </div>
                <div className="modal-content">
                    <form onSubmit={handleEdit} className='d-block'>
                        <input defaultValue={selected.name} required placeholder='Mahsulot nomini kiriting' ref={elName} type="text" name="name" /><br />
                        <input defaultValue={selected.price} required placeholder='Narxini kiriting' ref={elPrice} type="text" name="price" /><br />
                        <input defaultValue={selected.bowls} required placeholder='sonini kiriting' ref={elBowls} type="number" name="bowls" /><br />
                        <input required placeholder='Categoriyasini kiriting' ref={elCategory} type="number" name="category_id" /><br />
                        <input required placeholder='Rasmini tanlang' ref={elImg} type="file" name="food_img" /><br />
                        <button className='send' type='submit'>Edit</button>
                        <button onClick={hanldeDeleteFood} className='send ms-2' type='button'>Delete</button>
                    </form>
                </div>
            </div>
        </div>
    )
}