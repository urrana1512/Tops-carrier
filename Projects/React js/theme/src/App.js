import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./website/components/Header";
import Footer from "./website/components/Footer";
import Author from "./website/pages/Author";
import Index from "./website/pages/Index";
import Create from "./website/pages/Create";
import Details from "./website/pages/Details";
import Explore from "./website/pages/Explore";
function App() {
  return (
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
          path="/Author"
          element={
            <>
              <Header />
              <Author />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/Create"
          element={
            <>
              <Header />
              <Create />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/Details"
          element={
            <>
              <Header />
              <Details />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/Explore"
          element={
            <>
              <Header />
              <Explore />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
