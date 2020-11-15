import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import userRepository from "./Core/UserRepository";
import contexts from "./contexts";
import fetch from "./server";

import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ProductMapper from "./Components/ProductsComponents/ProductMapper.jsx";
import FactorContent from "./Components/FactorComponents/FactorContent";
import BuyCarts from "./Components/‌BuyCarts";
import SingAndLogin from "./Components/SignAndLogin";
import OurProducts from "./Components/OurProducts";
import ProductDetails from "./Components/ProductsComponents/ProductDetails";

const App = () => {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const [factorProducts, setFactorProducts] = useState([]);
  const [factorVisibility, setFactorVisibility] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [signedUser, setSignedUser] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productPath, setProductPath] = useState("/none");

  useEffect(() => {
    fetch()
      .then((response) =>
        response.items.map((item) => {
          return {
            title: item.fields.title,
            id: item.sys.id,
            price: item.fields.price,
            image: item.fields.image.fields.file.url,
            alt: item.fields.title,
            // inStock: p.fields.inStock,
          };
        })
      )
      .then((products) => setTimeout(() => setProducts(products), 750));
  }, []);

  const handleState = (factorProducts) => {
    totalPriceFn(factorProducts);
    if (!factorProducts.length) {
      setFactorProducts(factorProducts);
      setFactorVisibility(false);
    } else {
      setFactorProducts(factorProducts);
    }
  };

  const handlePath = (product, path) => {
    setProduct(product);
    if (path === "/") {
      setProductPath("/none");
    } else setProductPath(path);
  };

  const handleAddProduct = (product, id) => {
    const factorCarts = [...factorProducts];
    const index = factorCarts.findIndex((p) => p.id === id);
    if (index === -1) {
      const p = { ...product };
      p.inCart = 1;
      p.total = p.price;
      factorCarts.push(p);
    } else {
      handleIncDec(id, +1);
    }
    handleState(factorCarts);
  };

  const handleIncDec = (id, op) => {
    let factorCarts = [...factorProducts];
    const index = factorCarts.findIndex((p) => p.id === id);
    factorCarts[index].inCart = factorCarts[index].inCart + op;
    if (factorCarts[index].inCart === 0) {
      factorCarts = factorCarts.filter((p) => p.id !== id);
    } else {
      factorCarts[index].total =
        factorCarts[index].inCart * factorCarts[index].price;
    }
    handleState(factorCarts);
  };

  const handleRemove = (id) => {
    const factorCarts = [...factorProducts].filter((p) => p.id !== id);
    handleState(factorCarts);
  };

  const openDialog = () => {
    handleFactorVisibility();
    setTimeout(() => {
      setIsDialogOpen(true);
    }, 650);
  };

  const closeDialog = () => setIsDialogOpen(false);

  const handleFactorVisibility = () => setFactorVisibility(!factorVisibility);

  const handleClear = () => {
    closeDialog();
    setFactorProducts([]);
    setFactorVisibility(false);
  };

  const totalPriceFn = (factorProducts) => {
    let totalPrice = 0;
    factorProducts.forEach((p) => {
      totalPrice += p.total;
    });
    setFactorProducts(factorProducts);
    setTotalPrice(totalPrice);
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    setUser({ ...user, [name]: e.target.value });
  };

  const handleSignIn = (e) => {
    const userInRepository = userRepository.users.find(
      (u) => u.username === user.username
    );
    if (userInRepository) {
      setSignedUser({
        email: user.email,
        username: user.username,
        password: user.password,
      });
      setUser({ username: "", email: "", password: "" });
    } else {
      setUser({ username: "", email: "", password: "" });

      alert("user not find");
      e.preventDefault();
    }
  };
  //TODO 2in1 handleSing
  const handleSignUp = (e) => {
    const userInRepository = userRepository.users.filter(
      (u) => u.username === user.username
    );
    if (userInRepository.length) {
      alert("please enter another username...");
      setUser({ username: "", email: "", password: "" });
      e.preventDefault();
      return;
    }
    userRepository.add(user.username, user.email, user.password);
    setSignedUser({
      email: user.email,
      username: user.username,
      password: user.password,
    });
    setUser({ username: "", email: "", password: "" });
  };

  console.log("render");
  if (!products) {
    return (
      <Loader
        style={{
          marginLeft: "42%",
          marginTop: "20%",
          width: "250px",
          height: "250px",
        }}
      />
    );
  }
  return (
    <contexts.Provider
      value={{
        isDialogOpen,
        factorVisibility,
        signedUser,
        totalPrice,
        factorProducts,
        openDialog,
        handlePath,
        handleState,
        handleAddProduct,
        handleIncDec,
        handleRemove,
        handleClear,
        handleFactorVisibility,
      }}
    >
      <Router>
        <Switch>
          <Route path={productPath}>
            <ProductDetails product={product} />
            <FactorContent />
          </Route>
          <Route path="/sign">
            <SingAndLogin
              email={user.email}
              username={user.username}
              password={user.password}
              handleInputChange={handleInputChange}
              handleSignIn={handleSignIn}
              handleSignUp={handleSignUp}
            />
          </Route>
          <Route path="/">
            <Navbar />
            <Header />
            <OurProducts />
            <ProductMapper products={products} />
            <FactorContent />
            <BuyCarts />
          </Route>
        </Switch>
      </Router>
    </contexts.Provider>
  );
};
export default App;
