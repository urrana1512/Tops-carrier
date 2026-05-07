import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashbord from "./features/admin/Dashbord";
import Add_user from "./features/admin/Add_user";
import Manage_contact from "./features/admin/Manage_contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashbord />}></Route>
          <Route path="/index" element={<Dashbord />}></Route>
          <Route path="/add_user" element={<Add_user />}></Route>
          <Route path="/manage_contact" element={<Manage_contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
