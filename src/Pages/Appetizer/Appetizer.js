import { useEffect, useState } from "react"
import { Card } from "../../components/Card/Card"
import { Choose } from "../../components/Choose/choose"
import { Header } from "../../components/Header/Header"
import { Navbar } from "../../components/Navbar/Navbar"
import { Orders } from "../../components/Orders/Orders"


export const Appetizer = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://food-service-layer-app.herokuapp.com/food/5')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className="d-flex">
                <div className="hot-dishes">
                    <Header />
                    <Navbar />
                    <Choose />
                    <div className="row cardRender">
                        {data.length && data.map(e => (
                            <Card key={e.id} item={e} />
                        ))}
                    </div>
                </div>
                <Orders />
            </div>
        </>
    )
}