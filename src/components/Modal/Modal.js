import { useEffect, useRef } from 'react'
import './modal.css'
import axios from "axios"

export const ModalAdd = ({ modal, setModal, }) => {

    const elName = useRef("")
    const elPrice = useRef("")
    const elBowls = useRef("")
    const elCategory = useRef("")
    const elImg = useRef("")

    const handleSend = (evt) => {
        evt.preventDefault()

        const formData = new FormData()

        formData.append("name", elName.current.value)
        formData.append("price", elPrice.current.value)
        formData.append("bowls", elBowls.current.value)
        formData.append("category_id", elCategory.current.value)
        formData.append("food_img", elImg.current.files[0])

        axios
            .post('https://food-service-layer-app.herokuapp.com/food', formData)
            .then((data) => console.log(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        window.addEventListener("keyup", function (evt) {
            if (evt.code === "Escape") {
                setModal(false)
            }
        })
    }, [])

    return (
        <div className={`d-flex overlay w-50 ${!modal && "d-none"}`}>
            <div className="w-75 modal-add p-3">
                <div className="modal-header">
                    <h3>Yangi Mahsulot qo'shish</h3>
                    <button className='btn btn-outline-light' onClick={() => setModal(false)}>&times;</button>
                </div>
                <div className="modal-content">
                    <form onSubmit={handleSend} className='d-block'>
                        <input required placeholder='Mahsulot nomini kiriting' ref={elName} type="text" name="name" /><br />
                        <input required placeholder='Narxini kiriting' ref={elPrice} type="text" name="price" /><br />
                        <input required placeholder='sonini kiriting' ref={elBowls} type="number" name="bowls" /><br />
                        <input required placeholder='Categoriyasini kiriting' ref={elCategory} type="number" name="category_id" /><br />
                        <input required placeholder='Rasmini tanlang' ref={elImg} type="file" name="food_img" /><br />
                        <button className='send' type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}