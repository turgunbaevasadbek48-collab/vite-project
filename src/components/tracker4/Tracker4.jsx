import serversData from "../../data/data.json";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import get1 from "../../assets/get1.png";
import get2 from "../../assets/get2.png";
import get3 from "../../assets/get3.png";
import get4 from "../../assets/get4.png";
import get5 from "../../assets/get5.png";
import get6 from "../../assets/get6.png";
import get9 from "../../assets/get9.png";
import get10 from "../../assets/get10.png";
import get11 from "../../assets/get11.png";
import get13 from "../../assets/get13.png";
import get14 from "../../assets/get14.png";
import get15 from "../../assets/get15.png";
import get18 from "../../assets/get18.png";
import "./Tracker4.css";

const Tracker4 = () => {
  const [show, setShow] = useState(false);
  const [categoriesList, setCategoriesList] = useState(serversData.servers || []);
  const [statistika, setStatistika] = useState("");
  const [kategoriya, setKategoriya] = useState("");
  const [sana, setSana] = useState("");
  const [summa, setSumma] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!kategoriya.trim() || !summa.trim()) return;

    const newCategoryItem = {
      id: Date.now(),
      image: "/images/supermarket.png",
      static: statistika ? statistika + "%" : "0%",
      name: kategoriya,
      price: parseInt(summa).toLocaleString() + " so'm",
      money: sana || "Tranzaksiya",
      images: get13
    };

    setCategoriesList([newCategoryItem, ...categoriesList]);

    setStatistika("");
    setKategoriya("");
    setSana("");
    setSumma("");
    setShow(false);
  };

  return (
    <div className='tracker4'>
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
      <div className="tracker4-div">
        <div className="tracker3-div1">
          <div>
            <h2>Kategoriyalar</h2>
            <p>Xarajatlaringizni kategoriyalar bo'yicha boshqaring</p>
          </div>
          <button onClick={() => setShow(true)} className="tracker3-div1-btn">+ Yangi tranzaksiya</button>
          {show && (
            <form className="modal" onSubmit={handleSubmit}>
              <div className="modal-content">
                <div>
                  <h2>Yangi tranzaksiyalar</h2>
                  <img onClick={() => setShow(false)} src={get18} alt="Yopish" style={{cursor: 'pointer'}} />
                </div>
                <h3>Statistika</h3>
                <input type="text" value={statistika} onChange={(e) => setStatistika(e.target.value)} placeholder="Foizi (Masalan: 25)" />
                <h3>Kategoriya</h3>
                <input type="text" value={kategoriya} onChange={(e) => setKategoriya(e.target.value)} placeholder="Masalan: Ovqat" />
                <h3>Sana</h3>
                <input type="text" value={sana} onChange={(e) => setSana(e.target.value)} placeholder="Tranzaksiya yoki sana" />
                <h3>Summa (so'm)</h3>
                <input type="number" value={summa} onChange={(e) => setSumma(e.target.value)} placeholder="0" />
                <div>
                  <button type="button" onClick={() => setShow(false)}>Bekor qilish</button>
                  <button className="tracker3-div1-btn" type="submit">Qo'shish</button>
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="tracker4-div2">
          {categoriesList && categoriesList.map((item, index) => (
            <div className="tracker4-div3" key={item.id || index}>
              <div>
                <img className="tracker4-div3-1" src={item.image} alt="" />
                <h2>{item.static}</h2>
              </div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <h3>{item.money}</h3>
              <img className="tracker4-div3-2" src={item.images} alt="" />
            </div>
          ))}
        </div>
        <div className="tracker4-div4">
          <h2>Umumiy xarajatlar</h2>
          <div className="tracker4-div5">
            <img className="tracker4-div5-1" src="/imagea/Container1.png" alt="" />
            <div className="tracker4-div6">
              <div>
                <p>Ovqat</p>
                <p>850,000 so'm</p>
              </div>
              <img className="tracker4-div5-2" src={get9} alt="" />
            </div>
            <p>25.2%</p>
          </div>
          <div className="tracker4-div5">
            <img className="tracker4-div5-1" src="/imagea/Container2.png" alt="" />
            <div className="tracker4-div6">
              <div>
                <p>Transport</p>
                <p>420,000 so'm</p>
              </div>
              <img className="tracker4-div5-2" src={get15} alt="" />
            </div>
            <p>12.5%</p>
          </div>
          <div className="tracker4-div5">
            <img className="tracker4-div5-1" src="/imagea/Container3.png" alt="" />
            <div className="tracker4-div6">
              <div>
                <p>To'lovlar</p>
                <p>650,000 so'm</p>
              </div>
              <img className="tracker4-div5-2" src={get14} alt="" />
            </div>
            <p>19.3%</p>
          </div>
          <div className="tracker4-div5">
            <img className="tracker4-div5-1" src="/imagea/Container4.png" alt="" />
            <div className="tracker4-div6">
              <div>
                <p>O'yin-kulgi</p>
                <p>320,000 so'm</p>
              </div>
              <img className="tracker4-div5-2" src={get9} alt="" />
            </div>
            <p>9.5%</p>
          </div>
          <div className="tracker4-div5">
            <img className="tracker4-div5-1" src="/imagea/Container5.png" alt="" />
            <div className="tracker4-div6">
              <div>
                <p>Kafe</p>
                <p>280,000 so'm</p>
              </div>
              <img className="tracker4-div5-2" src={get15} alt="" />
            </div>
            <p>8.3%</p>
          </div>
          <div className="tracker4-div5">
            <img className="tracker4-div5-1" src="/imagea/Container6.png" alt="" />
            <div className="tracker4-div6">
              <div>
                <p>Salomatlik</p>
                <p>450,000 so'm</p>
              </div>
              <img className="tracker4-div5-2" src={get14} alt="" />
            </div>
            <p>13.4%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker4;