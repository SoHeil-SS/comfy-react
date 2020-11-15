import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import userRepository from "./Core/UserRepository";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ProductMapper from "./Components/ProductMapper";
import Factor from "./Components/Factor";
import BuyCarts from "./Components/‌BuyCarts";
import SingAndLogin from "./Components/SignAndLogin";
import OurProducts from "./Components/OurProducts";
import ProductDetails from "./Components/ProductDetails";
import Loading from "./Components/Loading";
const App = () => {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const [factorProducts, setFactorProducts] = useState([]);
  const [factorVisibility, setFactorVisibility] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [signedUser, setSignedUser] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [path, setPath] = useState("/products");

  useEffect(() => {
    fetch("https://run.mocky.io/v3/72e6966f-b14c-47e6-a963-cac8e122d89b")
      .then((response) => response.json())
      .then((response) =>
        response.items.map((p) => {
          return {
            title: p.fields.title,
            id: p.sys.id,
            price: p.fields.price,
            image: p.fields.image.fields.file.url,
            alt: p.fields.title,
            // inStock: p.fields.inStock,
          };
        })
      )
      .then((products) =>
        setTimeout(() => {
          setProducts(products);
        }, 750)
      );
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
<<<<<<< HEAD
    console.log(path);
=======
>>>>>>> a2637ed456a25e4f52e1354498f4f2a2069c75df
    if (path === "/") {
      setPath("product");
    } else setPath(path);
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
    console.log(user.username);
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

  const handleSignUp = (e) => {
    const userInRepository = userRepository.users.filter(
      (u) => u.username === user.username
    );
    if (userInRepository.length) {
      alert("please enter another username...");
      console.log(userInRepository);
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
    return <Loading />;
  }
<<<<<<< HEAD
  console.log(path);
=======

>>>>>>> a2637ed456a25e4f52e1354498f4f2a2069c75df
  return (
    <>
      <Router>
        <Switch>
          <a href=""></a>
          <Route path={path}>
            <ProductDetails
              product={product}
              handleAddProduct={handleAddProduct}
              signedUser={signedUser}
              factorProducts={factorProducts}
              handlePath={handlePath}
              handleFactorVisibility={handleFactorVisibility}
            />
            <Factor
              factorProducts={factorProducts}
              handleIncDec={handleIncDec}
              handleRemove={handleRemove}
              openDialog={openDialog}
              totalPrice={totalPrice}
              handleClear={handleClear}
              factorVisibility={factorVisibility}
              handleFactorVisibility={handleFactorVisibility}
            />
          </Route>
          <Route path="/sign">
            <SingAndLogin
              username={user.username}
              password={user.password}
              email={user.email}
              handleInputChange={handleInputChange}
              handleSignIn={handleSignIn}
              handleSignUp={handleSignUp}
            />
          </Route>
          <Route path="/">
            <Navbar
              signedUser={signedUser}
              factorProducts={factorProducts}
              handleFactorVisibility={handleFactorVisibility}
            />
            <Header />
            <>
              <OurProducts />
              <ProductMapper
                factorProducts={factorProducts}
                products={products}
                handleAddProduct={handleAddProduct}
                handlePath={handlePath}
                value=""
              />
              <Factor
                factorProducts={factorProducts}
                handleIncDec={handleIncDec}
                handleRemove={handleRemove}
                openDialog={openDialog}
                totalPrice={totalPrice}
                handleClear={handleClear}
                factorVisibility={factorVisibility}
                handleFactorVisibility={handleFactorVisibility}
              />
              <BuyCarts
                totalPrice={totalPrice}
                closeDialog={closeDialog}
                isDialogOpen={isDialogOpen}
                handleClear={handleClear}
              />
            </>
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
