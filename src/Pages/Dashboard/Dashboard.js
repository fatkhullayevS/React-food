import './Dashboard.css'
import { TotalCard } from './TotalCard/TotalCard'
import Filter from "../../assets/img/filter.svg"
import { Users } from './Users/Users'

// IMPORT IMAGE
import Avatar1 from "../../assets/img/Avatar1.svg"
import Avatar2 from "../../assets/img/Avatar2.svg"
import Avatar3 from "../../assets/img/Avatar3.svg"
import Avatar4 from "../../assets/img/Avatar4.svg"
import Avatar5 from "../../assets/img/Avatar5.svg"
import Yellow from "../../assets/img/yellow.svg"
import Pink from "../../assets/img/Pink.svg"
import Blue from "../../assets/img/blue.svg"
import { MostOrdered } from './MostOrdered/MostOrdered'
import ApexCharts from './ApexChart/ApexChart'

export const Dashboard = () => {
    return (
        <>
            <div className='mt-3'>
                <h1 className="text-white m-0">Dashboard</h1>
                <p className="m-0 p-0 desc">Tuesday 2 Feb, 2021</p>
                <hr />
            </div>
            <div className='row'>
                <TotalCard desc={'Total Revenue'} title={"$10, 243.00"} />
                <TotalCard desc={'Total Dish Ordered'} title={"23, 456"} />
                <TotalCard desc={'Total Customer'} title={"1, 234"} />
            </div>
            <div className='d-flex'>
                <div className='order-report'>
                    <div className="d-flex align-items-center justify-content-between">
                        <h3 className="mt-4 ms-4">Order report</h3>
                        <button className="d-flex align-items-center filter"><img src={Filter} alt="" width="20" height="20" /><p className="m-0 p-0 ms-2">Filter Order</p></button>
                    </div>
                    <div className='order_table mt-4 d-flex'>
                        <p className='ms-4'>Customer</p>
                        <p className='menu'>Menu</p>
                        <p className='order-total'>Total Payment</p>
                        <p className='status'>Status</p>
                    </div>
                    <hr />
                    <Users img={Avatar1} money={"$125"} menu={"Spicy seasoned seafood noodles "} userName={"Eren Jaegar"} />
                    <Users img={Avatar2} money={"$145"} menu={"Salted Pasta with mushroom sauce"} userName={"Reiner Braunn"} />
                    <Users img={Avatar3} money={"$105"} menu={"Beef dumpling in hot and sour soup"} userName={"Levi Ackerman"} />
                    <Users img={Avatar4} money={"$45"} menu={"Hot spicy fried rice with omelet"} userName={"Historia Reiss"} />
                    <Users img={Avatar5} money={"$245"} menu={"Hot spicy fried rice with omelet"} userName={"Hanji Zoe"} />
                </div>
                <MostOrdered />
                <div className='diagramma'>
                    <div className="d-flex mt-2 ms-4 align-items-center justify-content-between">
                        <h3>Most Ordered</h3>
                        <select className="select">
                            <option value="DineIn">Today</option>
                            <option value="Today">Dine in</option>
                        </select>
                    </div>
                    <div className='d-flex'>
                        <div className='apex'>
                            <ApexCharts />
                        </div>
                        <div className='pink mt-5'>
                            <div className='d-flex'>
                                <img src={Pink} alt="" />
                                <div className='ms-2'>
                                    <p className='p-0 m-0'>Dine In</p>
                                    <p className='p-0 m-0'>200 customers</p>
                                </div>
                            </div>
                        </div>
                        <div className='yellow'>
                            <div className='d-flex ms-5'>
                                <img src={Yellow} alt="" />
                                <div className='ms-2'>
                                    <p className='p-0 m-0'>To Go</p>
                                    <p className='p-0 m-0'>122 customers</p>
                                </div>
                            </div>
                        </div>
                        <div className='Blue'>
                            <div className='d-flex ms-5'>
                                <img src={Blue} alt="" />
                                <div className='ms-2'>
                                    <p className='p-0 m-0'>Delivery</p>
                                    <p className='p-0 m-0'>284 customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}