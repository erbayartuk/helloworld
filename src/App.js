import Model from "./w3School/es6_class";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";

function App() {
  const mycar = new Model("Ford", "Mustang");
  const normalFunction = function () {
    return "Normal Function";
  };
  const arrowFunction = () => {
    return "Arrow Function";
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="blogs" element={<Blogs />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
