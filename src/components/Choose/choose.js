import './choose.css'

export const Choose = () => {
    return (
        <div className="d-flex align-items-center justify-content-between choose">
            <h4 className='ms-4'>Choose Dishes</h4>
            <select className="select">
                <option value="DineIn">Dine In</option>
                <option value="Today">Today</option>
            </select>
        </div>
    )
}