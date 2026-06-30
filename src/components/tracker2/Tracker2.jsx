import { trackerMap2 } from "../axios/axios";
import { Link } from 'react-router-dom'; 
import get1 from "../../assets/get1.png";
import get2 from "../../assets/get2.png";
import get3 from "../../assets/get3.png";
import get4 from "../../assets/get4.png";
import get5 from "../../assets/get5.png";
import get6 from "../../assets/get6.png";
import get7 from "../../assets/get7.png";
import get8 from "../../assets/get8.png";
import get9 from "../../assets/get9.png";
import get10 from "../../assets/get10.png";
import get11 from "../../assets/get11.png";
import get12 from "../../assets/get12.png";
import get13 from "../../assets/get13.png";
import get14 from "../../assets/get14.png";
import get15 from "../../assets/get15.png";
import "./Tracker2.css"

const Tracker2 = () => {
  return (
    <div className='tracker2'>
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
            <Link to={`/user1/:id`} style={{ textDecoration: 'none' }}>
              <li>
                <img src={get2} alt="" />
                <p>Dashboard</p>
              </li>
            </Link>
            <Link to={`/user2/:id`} style={{ textDecoration: 'none' }}>
              <li>
                <img src={get3} alt="" />
                <p>Transactions</p>
              </li>
            </Link>
            <Link to={`/user3/:id`} style={{ textDecoration: 'none' }}>
              <li>
                <img src={get4} alt="" />
                <p>Kategoriyalar</p>
              </li>
            </Link>
            <Link to={`/user4/:id`} style={{ textDecoration: 'none' }}>
              <li>
                <img src={get5} alt="" />
                <p>Statistika</p>
              </li>
            </Link>
            <Link to={`/user5/:id`} style={{ textDecoration: 'none' }}>
              <li>
                <img src={get6} alt="" />
                <p>Profil</p>
              </li>
            </Link>
          </ul>
        </nav>
      </header>
      <div className="tracker2-div">
        <div className="tracker2-div1">
          <div>
            <h2>Dashboard</h2>
            <p>Xarajatlaringizni boshqaring</p>
          </div>
          <h3><img src={get7} alt="" />May 2026</h3>
        </div>
        <div className="tracker2-div2">
          <div className="tracker2-div3">
            <div>
              <p>Balans</p>
              <img src={get7} alt="" />
            </div>
            <h2>2,760,000 so'm</h2>
            <p>Umumiy balans</p>
          </div>
          <div className="tracker2-div3">
            <div>
              <p>Daromad</p>
              <img src={get10} alt="" />
            </div>
            <h2>5,000,000 so'm</h2>
            <p>Ushbu oy</p>
          </div>
          <div className="tracker2-div3">
            <div>
              <p>Xarajat</p>
              <img src={get11} alt="" />
            </div>
            <h2>2,240,000 so'm</h2>
            <p>Ushbu oy</p>
          </div>
        </div>
        <div className="tracker2-div4">
          <div className="tracker2-div5">
            <div className="tracker2-div6">
              <h3>So'nggi tranzaksiyalar</h3>
              <h3>Barchasini ko'rish</h3>
            </div>
            <div className="tracker2-div7">
              <div className="tracker2-div8">
                <img src={get8} alt="" />
                <div>
                  <h3>Supermarket</h3>
                  <p>Ovqat</p>
                </div>
              </div>
              <div>
                <h4>-45,000 so'm</h4>
                <p>2026-05-15</p>
              </div>
            </div>
            <div className="tracker2-div7">
              <div className="tracker2-div8">
                <img src={get13} alt="" />
                <div>
                  <h3>Ish haqi</h3>
                  <p>Daromad</p>
                </div>
              </div>
              <div>
                <h4>+ 5,000,000 so'm</h4>
                <p>2026-05-14</p>
              </div>
            </div>
            {trackerMap2.map((item, index) => (
              <div className="tracker2-div7" key={index}>
                <div className="tracker2-div8">
                  <img src={get8} alt="" />
                  <div>
                    <h3>{item.h3}</h3>
                    <p>{item.p1}</p>
                  </div>
                </div>
                <div>
                  <h4>{item.h4}</h4>
                  <p>{item.p2}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="tracker2-div5">
            <h2>Kategoriyalar bo'yicha</h2>
            <div className="tracker2-div10">
              <div className="tracker2-div9">
                <p>Ovqat</p>
                <p>850,000 so'm</p>
              </div>
              <img src={get9} alt="" />
            </div>
            <div className="tracker2-div10">
              <div className="tracker2-div9">
                <p>Transport</p>
                <p>420,000 so'm</p>
              </div>
              <img src={get14} alt="" />
            </div>
            <div className="tracker2-div10">
              <div className="tracker2-div9">
                <p>To'lovlar</p>
                <p>650,000 so'm</p>
              </div>
              <img src={get9} alt="" />
            </div>
            <div className="tracker2-div10">
              <div className="tracker2-div9">
                <p>O'yin-kulgi</p>
                <p>320,000 so'm</p>
              </div>
              <img src={get15} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracker2;