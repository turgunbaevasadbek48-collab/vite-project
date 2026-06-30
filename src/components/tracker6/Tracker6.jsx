import { Link } from 'react-router-dom';
import get1 from "../../assets/get1.png";
import get2 from "../../assets/get2.png";
import get3 from "../../assets/get3.png";
import get4 from "../../assets/get4.png";
import get5 from "../../assets/get5.png";
import get6 from "../../assets/get6.png";
import get7 from "../../assets/get7.png";
import get10 from "../../assets/get10.png";
import get22 from "../../assets/get22.png";
import get23 from "../../assets/get23.png";
import get24 from "../../assets/get24.png";
import get25 from "../../assets/get25.png";
import get26 from "../../assets/get26.png";
import get27 from "../../assets/get27.png";
import get28 from "../../assets/get28.png";
import get29 from "../../assets/get29.png";
import get30 from "../../assets/get30.png";
import "./Tracker6.css"

const Tracker6 = () => {
  return (
    <div className='tracker6'>
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
      <div className="tracker6-div">
        <div className="tracker6-div1">
          <h2>Profil</h2>
          <p>Shaxsiy ma'lumotlaringizni boshqaring</p>
        </div>
        <div className="tracker6-div2">
          <div className="tracker6-div3">
            <div className="tracker6-div4">
              <img src={get1} alt="" />
              <div>
                <h2>Foydalanuvchi</h2>
                <p>user@example.com</p>
                <a>Premium foydalanuvchi</a>
              </div>
            </div>
            <div className="tracker6-div5">
              <h2><img src={get6} alt="" />Shaxsiy ma'lumotlar</h2>
              <div className="tracker6-div6">
                <div>
                  <h3>Ism</h3>
                  <input type="text" placeholder="Foydalanuvchi" />
                </div>
                <div>
                  <h3>Email</h3>
                  <input type="email" placeholder="user@example.com" />
                </div>
              </div>
              <div className="tracker6-div6">
                <div>
                  <h3>Telefon</h3>
                  <input type="number" placeholder="+998 90 123 45 67" />
                </div>
                <div>
                  <h3>Manzil</h3>
                  <input type="text" placeholder="Toshkent, O'zbekiston" />
                </div>
              </div>
              <button>O'zgarishlarni saqlash</button>
            </div>
            <div className="tracker6-div7">
              <h2><img src={get4} />Xavfsizlik sozlamalari</h2>
              <div className="tracker6-div8">
                <div className="tracker6-div9">
                  <img src={get5} alt="" />
                  <div>
                    <h3>Parolni o'zgartirish</h3>
                    <p>Oxirgi o'zgarish: 30 kun oldin</p>
                  </div>
                </div>
                <input type="text" placeholder="Eski parol" />
                <input type="text" placeholder="Yangi parol" />
                <button>Parolni yangilash</button>
              </div>
              <div className="tracker6-div8-1">
                <div className="tracker6-div9">
                  <img src={get7} alt="" />
                  <div>
                    <h3>Ikki bosqichli autentifikatsiya</h3>
                    <p>Qo'shimcha xavfsizlik qatlami</p>
                  </div>
                </div>
                <button>Yoqish</button>
              </div>
            </div>
          </div>
          <div className="tracker6-div10">
            <div className="tracker6-div11">
              <h2><img src={get10} />Statistika</h2>
              <div className="tracker6-div12">
                <img src={get22} alt="" />
                <div>
                  <p>Ro'yxatdan o'tgan</p>
                  <h3>15 Yanvar, 2026</h3>
                </div>
              </div>
              <div className="tracker6-div12">
                <img src={get23} alt="" />
                <div>
                  <p>Jami tranzaksiyalar</p>
                  <h3>847</h3>
                </div>
              </div>
              <div className="tracker6-div12">
                <img src={get24} alt="" />
                <div>
                  <p>Jami xarajat</p>
                  <h3>12,450,000 so'm</h3>
                </div>
              </div>
              <div className="tracker6-div12">
                <img src={get25} alt="" />
                <div>
                  <p>Jami daromad</p>
                  <h3>24,000,000 so'm</h3>
                </div>
              </div>
            </div>
            <div className="tracker6-div13">
              <h2>Hisob harakatlari</h2>
              <div className="tracker6-div14">
                <img src={get26} alt="" />
                <h3>Manzilni yangilash</h3>
              </div>
              <div className="tracker6-div14">
                <img src={get27} alt="" />
                <h3>To'lov usullarini boshqarish</h3>
              </div>
              <div className="tracker6-div14">
                <img src={get28} alt="" />
                <h3>Maxfiylik sozlamalari</h3>
              </div>
              <div className="tracker6-div14">
                <img src={get29} alt="" />
                <h3>Hisobdan chiqish</h3>
              </div>
            </div>
            <div className="tracker6-div15">
              <h2>So'nggi faoliyat</h2>
              <div className="tracker6-div16">
                <img src={get30} alt="" />
                <div>
                  <h4>Parol yangilandi</h4>
                  <p>2 soat oldin</p>
                </div>
              </div>
              <div className="tracker6-div16">
                <img src={get30} alt="" />
                <div>
                  <h4>Profil tahrirlandi</h4>
                  <p>1 kun oldin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracker6;