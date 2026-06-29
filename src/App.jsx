import { Link, Routes, Route } from "react-router-dom";
import Tracker1 from "./components/tracker1/Tracker1";
import Tracker2 from "./components/tracker2/Tracker2";
import Tracker3 from "./components/tracker3/Tracker3";
import Tracker4 from "./components/tracker4/Tracker4";
import Tracker5 from "./components/tracker5/Tracker5";
import Tracker6 from "./components/tracker6/Tracker6";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Tracker1 />} />
        <Route path="/user1/:id" element={<Tracker2 />} />
        <Route path="/user2/:id" element={<Tracker3 />} />
        <Route path="/user3/:id" element={<Tracker4 />} />
        <Route path="/user4/:id" element={<Tracker5 />} />
        <Route path="/user5/:id" element={<Tracker6 />} />
      </Routes>
    </div>
  )
}

export default App;