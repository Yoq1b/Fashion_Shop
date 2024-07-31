import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Basket from "./pages/Basket";
// import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Single_product from "./pages/Single_product";
import Tops from "./pages/Tops";
import Like from "./pages/Like";
import ShopByCategory from "./pages/ShopByCategory";
import Search from "./pages/Search";

export const LikeContext = createContext();
export const ShopContext = createContext();
export const ProductContext = createContext();
export const LoginContext = createContext();

function App() {
  const [likedd, setLikedd] = useState([]);
  const [shop, setShop] = useState([]);
  const [product, setProduct] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  return (
    <>
      <div className="w-[100%] m-auto bg-[#080020]">
        <div className="w-[100%] m-auto">
          <ShopContext.Provider value={{ shop, setShop }}>
            <LikeContext.Provider value={{ likedd, setLikedd }}>
              <ProductContext.Provider value={{ product, setProduct }}>
                <LoginContext.Provider value={{ userInfo, setUserInfo }}>
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/account" element={<Account />} />
                      <Route path="/basket" element={<Basket />} />
                      {/* <Route path="/cart" element={<Cart />} /> */}
                      <Route path="/category" element={<Category />} />
                      <Route path="/search" element={<Search />} />
                      <Route
                        path="/shopbycategory"
                        element={<ShopByCategory />}
                      />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route
                        path="/singleproduct"
                        element={<Single_product />}
                      />
                      <Route path="/tops" element={<Tops />} />
                      <Route path="/like" element={<Like />} />
                    </Routes>
                  </BrowserRouter>
                </LoginContext.Provider>
              </ProductContext.Provider>
            </LikeContext.Provider>
          </ShopContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
