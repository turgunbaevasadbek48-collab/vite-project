import get1 from "../../assets/get1.png";
import { Link } from "react-router-dom";
import "./Tracker7.css";

const Tracker7 = () => {
  return (
    <div className='tracker7'>
      <div className='tracker7-div'>
        <div>
          <img src={get1} alt="" />
          <h2>Hisob yaratish</h2>
          <p>Ma'lumotlaringizni kiriting</p>
        </div>
        <h3>Ism</h3>
        <input type="text" placeholder="Ismingiz" />
        <h3>Email</h3>
        <input type="email" placeholder="email@example.com" />
        <h3>Paril</h3>
        <input type="number" placeholder="••••••••" />
        <h3>Parilni tasdiqlang</h3>
        <input type="number" placeholder="••••••••" />
        <Link to={`/user1/:id`}>
          <button type="submit">Ro'yxatdan o'tish</button>
        </Link>
        <h4>Hisobingiz yo'qmi? <Link to={`/`} style={{ textDecoration: 'none' }}><span>Kirish</span></Link></h4>
      </div>
    </div>
  )
}

export default Tracker7;
