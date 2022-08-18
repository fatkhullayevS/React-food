import "./users.css"

export const Users = ({ userName, menu, money, img }) => {
    return (
        <div className="users ms-4">
            <img src={img} alt="" width={32} height={32} />
            <p className="usersName">{userName}</p>
            <p className="userMenu">{menu}</p>
            <p className="userMoney">{money}</p>
            <button className="btn btn-success user-btn">Completed</button>
        </div>
    )
}