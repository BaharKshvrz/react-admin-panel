import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import UserList from "./pages/userList/UserList";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="users" element={<UserList/>}/>
            <Route path="users/:userId" element={<User/>} />
            <Route path="/newUser" element={<NewUser/>} />
            <Route path="/products" element={<ProductList/>} />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
