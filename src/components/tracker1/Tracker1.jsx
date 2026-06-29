import get1 from "../../assets/get1.png";
import { Link } from "react-router-dom";
import "./Tracker1.css"

const Tracker1 = () => {
  return (
    <div className='tracker1'>
      <div className='tracker1-div'>
        <div>
          <img src={get1} alt="" />
          <h2>Xush kelibsiz</h2>
          <p>Hisobingizga kiring</p>
        </div>
        <h3>Email</h3>
        <input type="email" placeholder="email@example.com" />
        <h3>Paril</h3>
        <input type="number" placeholder="••••••••" />
        <Link to={`/user1/:id`}>
          <button type="submit">Kirish</button>
        </Link>
        <h4>Hisobingiz yo'qmi? <span>Ro'yxatdan o'tish</span></h4>
      </div>
    </div>
  )
}

export default Tracker1;
