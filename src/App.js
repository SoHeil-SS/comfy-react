import React, { useState, useEffect, useReducer, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import userRepository from "./Core/UserRepository";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ProductMapper from "./Components/ProductMapper";
import Factor from "./Components/Factor";
import BuyCarts from "./Components/‌BuyCarts";
import SingAndLogin from "./Components/SignAndLogin";
import OurProducts from "./Components/OurProducts";
import ProductDetails from "./Components/ProductDetails";

const App = () => {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const [factorProducts, setFactorProducts] = useState([]);
  const [factorVisibility, setFactorVisibility] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] = useState({ username: "", password: " ", email: "" });
  const [signedUser, setSignedUser] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [path, setPath] = useState(null);
  const [{ data, loading },dispatch] = useReducer(reducer, {
    data: null,
    loading: true,
  });
  useEffect(()=>{
    fetch().then(data)=>{
      '0'
    }26
    5012.
  })
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
    setPath(path);
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
    const user = null;
    //[name] = e.target.value;
    setUser((user[name] = e.target.value));
    //TODO
    setUser({
      [name]: e.target.value,
      [name]: e.target.value,
      [name]: e.target.value,
    });
  };

  const handleSignIn = () => {
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
    } else alert("user not find");
  };

  const handleSignUp = () => {
    const userInRepository = userRepository.users.filter(
      (u) => u.username === user.username
    );
    if (userInRepository.length) {
      alert("please enter another username...");
      console.log(userInRepository);
      setUser({ username: "", email: "", password: "" });
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
      <Spinner
        style={{
          marginLeft: "42%",
          marginTop: "20%",
          width: "250px",
          height: "250px",
        }}
        animation="border"
        role="status"
        variant="danger"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  console.log(factorProducts);
  return (
    <>
      <Router>
        <Switch>
          <Route path={`/products/${path}`}>
            <ProductDetails
              product={product}
              handleAddProduct={handleAddProduct}
              signedUser={signedUser}
              factorProducts={factorProducts}
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
