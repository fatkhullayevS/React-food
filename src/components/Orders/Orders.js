import './orders.css'
import { Price } from '../Price/price'
import { useEffect, useState } from 'react'
import Card from "../../assets/img/Card.svg"
import Paypal from "../../assets/img/Paypal.svg"
import Wallet from "../../assets/img/wallet.svg"
export const Orders = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://food-service-layer-app.herokuapp.com/food/3')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="orders">
            <h3 className='mt-4 ms-3'>Orders #34562</h3>
            <div className='orders__btn'>
                <ul>
                    <li>
                        <a href="#!">
                            Dine In
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            To Go
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            Delivery
                        </a>
                    </li>
                </ul>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
                <p className='ms-4'>Item</p>
                <div className='d-flex align-items-center justify-content-between'>
                    <p>Qty</p>
                    <p>Price</p>
                </div>
            </div>
            <hr />
            {data.length && data.map(e => (
                <Price key={e.id} item={e} />
            ))}
            <div className='orders__bottom mt-3'>
                <div className='d-flex justify-content-between ms-4'>
                    <p>Discount</p>
                    <p>$0</p>
                </div>
                <div className='d-flex justify-content-between ms-4'>
                    <p>Sub total</p>
                    <p> $ 21,03</p>
                </div>
                <button className='orders__button ms-5 mt-3' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Continue to Payment</button>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 className="offcanvas-title ms-1" id="offcanvasRightLabel">Payment</h5>
                    </div>
                    <p className='ms-4'>3 payment method available</p>
                    <hr />
                    <div class="offcanvas-body">
                        <h5 className='ms-1'>Payment Method</h5>
                        <button className='credite-btn ms-2'>
                            <img src={Card} alt="" />
                            <p className='m-0 p-0'>Credite Card</p>
                        </button>
                        <button className='credite-btn ms-3'>
                            <img src={Paypal} alt="" />
                            <p className='m-0 p-0'>Paypal</p>
                        </button>
                        <button className='credite-btn ms-3'>
                            <img src={Wallet} alt="" />
                            <p className='m-0 p-0'>Cash</p>
                        </button>
                        <form className='form mt-4'>
                            <label className='mt-2'>Cardholder Name</label><br />
                            <input className='mb-2' type="text" placeholder='Levi Ackerman' />
                            <label className='mt-2'>Card Number</label><br />
                            <input type="text" placeholder='2564 1421 0897 1244' />
                            <div className='d-flex mt-3 carta'>
                                <div>
                                    <label className='mt-2'>Expiration Date</label><br />
                                    <input type="text" placeholder='02/2022' />
                                </div>
                                <div className='ms-3'>
                                    <label className='mt-2'>CVV</label><br />
                                    <input type="text" placeholder='* * *' />
                                </div>
                            </div>
                            <hr />
                            <div className='d-flex mt-3 carta'>
                                <div className='mt-2'>
                                    <label>Order Type</label>
                                    <select>
                                        <option value="Dine in">Dine in</option>
                                        <option value="Today">Today</option>
                                    </select>
                                </div>
                                <div className='ms-3'>
                                    <label className='mt-2'>Table no.</label><br />
                                    <input type="text" placeholder='* * *' />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <button className='cancel   '>Cancel</button>
                                <button className='payment ms-3'>Confirm Payment</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}