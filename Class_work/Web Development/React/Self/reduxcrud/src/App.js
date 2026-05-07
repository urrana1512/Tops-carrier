import { BrowserRouter, Route, Routes } from "react-router-dom";
import AHeader from "./features/admin/components/AHeader";
import Dashboard from "./features/admin/Dashboard";
import Add_User from "./features/admin/Add_User";
import AFooter from "./features/admin/components/AFooter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin"
            element={
              <>
                <AHeader />
                <Dashboard />
                <AFooter />
              </>
            }
          />
          <Route
            path="/add-user"
            element={
              <>
                <AHeader />
                <Add_User />
                <AFooter />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
