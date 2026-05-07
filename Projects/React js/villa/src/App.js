import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./website/components/Header";
import Footer from "./website/components/Footer";
import Index from "./website/pages/Index";
import Properties from "./website/pages/Properties";
import Property_details from "./website/pages/Property_details";
import Contact from "./website/pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Index />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/Properties"
            element={
              <>
                <Header />
                <Properties />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/Property_details"
            element={
              <>
                <Header />
                <Property_details />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/Contact"
            element={
              <>
                <Header />
                <Contact />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
