import { useDispatch, useSelector } from "react-redux";
import { createTask, updateTask } from "../axios/axios";
import { MdContentPasteSearch } from 'react-icons/md';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import get1 from "../../assets/get1.png";
import get2 from "../../assets/get2.png";
import get3 from "../../assets/get3.png";
import get4 from "../../assets/get4.png";
import get5 from "../../assets/get5.png";
import get6 from "../../assets/get6.png";
import get8 from "../../assets/get8.png";
import get10 from "../../assets/get10.png";
import get11 from "../../assets/get11.png";
import get16 from "../../assets/get16.png";
import get17 from "../../assets/get17.png";
import get18 from "../../assets/get18.png";
import "./Tracker3.css";

const Tracker3 = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Xarajat"); 

  const dispatch = useDispatch();
    const editsTask = useSelector((state) => state.todo?.editTask || state["vite-project"]?.editTask);

  useEffect(() => {
    fetch("https://mocki.io/v1/afdbefff-11a0-463e-984c-dd0a3eef99e6")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch((err) => console.error("Xatolik yuz berdi:", err));
  }, []);

  const filter = search.trim().toLowerCase();

  const filteredProducts = products.filter(product => {
    if (!filter) return true;
    const pName = (product.name || '').toLowerCase();
    const title = (product.title || '').toLowerCase();
    const brand = (product.brand || '').toLowerCase();
    const cat = (product.category || '').toLowerCase();
    
    return pName.includes(filter) || title.includes(filter) || brand.includes(filter) || cat.includes(filter);
  });

  const handleDeleteClick = (id, index) => {
    const updatedProducts = products.filter((product, i) => {
      if (id) return product.id !== id;
      return i !== index;
    });
    setProducts(updatedProducts);
  };

  const handleEditClick = (product) => {
    setName(product.name || product.title || "");
    setAmount(product.price || "");
    setCategory(product.category || "");
    setShow(true);
  };

  useEffect(() => {
    if (editsTask) {
      setName(editsTask.task || editsTask.name || "");
    }
  }, [editsTask]);

  const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!name.trim()) return;

  const newTransaction = {
    id: Date.now(),
    name: name,
    price: amount ? amount + " so'm" : "0 so'm",
    money: amount || "0",
    category: category,
    date: date || "Kiritilmagan",
    type: type
  };

  setProducts([newTransaction, ...products]);

  if (editsTask) {
    dispatch(updateTask(name));
  } else {
    dispatch(createTask(name));
  }

  setName("");
  setAmount("");
  setCategory("");
  setDate("");
  setShow(false);
};

  return (
    <div className='tracker3'>
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
      <div className="tracker3-div">
        <div className="tracker3-div1">
          <div>
            <h2>Tranzaksiyalar</h2>
            <p>Barcha xarajat va daromadlar</p>
          </div>
          <button onClick={() => setShow(true)} className="tracker3-div1-btn">+ Yangi tranzaksiya</button>
          {show && (
            <form className="modal" onSubmit={handleSubmit}>
              <div className="modal-content">
                <div>
                  <h2>Yangi tranzaksiyalar</h2>
                  <img onClick={() => setShow(false)} src={get18} alt="" style={{cursor: 'pointer'}} />
                </div>
                <h3>Nomi</h3>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masalan: Supermarket" />
                <h3>Summa (so'm)</h3>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0" />
                <h3>Kategoriya</h3>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Masalan: Ovqat" />
                <h3>Sana</h3>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <h3>Turi</h3>
                <div>
                  <button type="button" onClick={() => setType("Xarajat")} style={{borderColor: type === "Xarajat" ? "red" : "#ccc"}}><img src={get10} />Xarajat</button>
                  <button type="button" onClick={() => setType("Daromad")} style={{borderColor: type === "Daromad" ? "green" : "#ccc"}}><img src={get11} />Daromad</button>
                </div>
                <div>
                  <button type="button" onClick={() => setShow(false)}>Bekor qilish</button>
                  <button className="tracker3-div1-btn" type="submit">Qo'shish</button>
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="tracker3-div2">
          <div className="tracker3-div3">
            <input value={search} type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Qidirish..." />
            <button>Barchasi</button>
            <h3>Daromad</h3>
            <h3>_Xarajat</h3>
          </div>
          {filteredProducts.length === 0 ? (
            <p className="text-3xl text-red-600 betania">Mahsulot topilmadi...</p>
          ) : (
            <div>
              {filteredProducts.slice(0, 15).map((product, index) => (
                <div className="tracker3-div4" key={product.id || index}>
                  <div className="tracker3-div5">
                    <img className="tracker3-div5-1" src={get8} alt="" />
                    <div>
                      <h3>{product.name || "Brendsiz"}</h3>
                      <p>{product.price}</p>
                    </div>
                  </div>
                  <div className="tracker3-div5">
                    <h4>{product.money || product.price}</h4>
                    <img onClick={() => handleEditClick(product)} style={{ cursor: 'pointer' }} className="tracker3-div5-2" src={get16} alt="" />
                    <img onClick={() => handleDeleteClick(product.id, index)} className="tracker3-div5-2" src={get17} style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tracker3;