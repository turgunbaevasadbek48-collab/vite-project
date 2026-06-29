import { trackerMap7 } from "../axios/axios";
import { Link } from 'react-router-dom';
import get1 from "../../assets/get1.png";
import get2 from "../../assets/get2.png";
import get3 from "../../assets/get3.png";
import get4 from "../../assets/get4.png";
import get5 from "../../assets/get5.png";
import get6 from "../../assets/get6.png";
import get7 from "../../assets/get7.png";
import get19 from "../../assets/get19.png";
import get20 from "../../assets/get20.png";
import get21 from "../../assets/get21.png";
import "./Tracker5.css"

const Tracker5 = () => {
  return (
    <div className='tracker5'>
      <header className='header'>
        <div className='header-list'>
          <img src={get1} alt="" />
          <div>
            <h2>Xarajatlar</h2>
            <p>Boshqaruv tizimi</p>
          </div>
        </div>
        <nav>
          <ul className="header-ul">
            <Link to={`/user1/:id`}>
              <li>
                <img src={get2} alt="" />
                <p>Dashboard</p>
              </li>
            </Link>
            <Link to={`/user2/:id`}>
              <li>
                <img src={get3} alt="" />
                <p>Transactions</p>
              </li>
            </Link>
            <Link to={`/user3/:id`}>
              <li>
                <img src={get4} alt="" />
                <p>Kategoriyalar</p>
              </li>
            </Link>
            <Link to={`/user4/:id`}>
              <li>
                <img src={get5} alt="" />
                <p>Statistika</p>
              </li>
            </Link>
            <Link to={`/user5/:id`}>
              <li>
                <img src={get6} alt="" />
                <p>Profil</p>
              </li>
            </Link>
          </ul>
        </nav>
      </header>
      <div className="tracker5-div">
        <div className="tracker5-div1">
          <div>
            <h2>Statistika</h2>
            <p>Xarajatlaringiz bo'yicha tahlil</p>
          </div>
          <h3><img src={get7} />2026 yil</h3>
        </div>
        <div className="tracker5-div2">
          <h2>Daromad va xarajatlar tendensiyasi</h2>
          <img src={get19} alt="" />
        </div>
        <div className="tracker5-div3">
          <div className="tracker5-div4">
            <h2>Kategoriyalar bo'yicha taqsimot</h2>
            <img src={get20} alt="" />
          </div>
          <div className="tracker5-div4">
            <h2>Haftalik xarajatlar</h2>
            <img src={get21} alt="" />
          </div>
        </div>
        <div className="tracker5-div5">
          {trackerMap7.map((item, index) => (
            <div className="tracker5-div6">
              <div>
                <p>{item.p1}</p>
                <img src={get7} alt="" />
              </div>
              <h2>{item.h2}</h2>
              <p>{item.p2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tracker5;