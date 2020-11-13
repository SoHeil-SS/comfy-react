import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

import userRepository from "./Core/UserRepository";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ProductMapper from "./Components/ProductMapper";
import Factor from "./Components/Factor";
import BuyCarts from "./Components/‌BuyCarts";
import SingAndLogin from "./Components/SignAndLogin";
import OurProducts from "./Components/OurProducts";
import ProductDetails from "./Components/ProductDetails";

class App extends Component {
  state = {
    products: null,
    product: null,
    factorProducts: [],
    factorVisibility: false,
    isDialogOpen: false,
    totalPrice: 0,
    signedUser: null,
    username: "",
    email: "",
    password: "",
    path: null,
  };

  handleState = (factorProducts) => {
    this.totalPrice(factorProducts);
    if (!factorProducts.length) {
      return { factorProducts, factorVisibility: false };
    } else {
      return { factorProducts };
    }
  };

  handlePath = (product, path) => {
    this.setState({ product, path });
    console.log(product, path);
  };

  handleAddProduct = (product, id) => {
    this.setState((prevState) => {
      const factorProducts = [...prevState.factorProducts];
      const index = factorProducts.findIndex((p) => p.id === id);
      if (index === -1) {
        const p = { ...product };
        p.inCart = 1;
        p.total = p.price;
        factorProducts.push(p);
      } else {
        this.handleIncDec(id, +1);
      }
      return this.handleState(factorProducts);
    });
  };

  handleIncDec = (id, op) => {
    this.setState((prevState) => {
      let factorProducts = [...prevState.factorProducts];
      const index = factorProducts.findIndex((p) => p.id === id);
      factorProducts[index].inCart = factorProducts[index].inCart + op;
      if (factorProducts[index].inCart === 0) {
        factorProducts = factorProducts.filter((p) => p.id !== id);
      } else {
        factorProducts[index].total =
          factorProducts[index].inCart * factorProducts[index].price;
      }
      return this.handleState(factorProducts);
    });
  }; //TODO fix sideEffect warning

  handleRemove = (id) => {
    this.setState((prevState) => {
      const factorProducts = [...prevState.factorProducts].filter(
        (p) => p.id !== id
      );
      return this.handleState(factorProducts);
    });
  };

  openDialog = () => {
    this.handleFactorVisibility();
    setTimeout(() => {
      this.setState({ isDialogOpen: true });
    }, 650);
  };

  closeDialog = () => this.setState({ isDialogOpen: false });

  handleFactorVisibility = () => {
    this.setState((prevState) => {
      const factorVisibility = !prevState.factorVisibility;
      return {
        factorVisibility,
      };
    });
  };

  handleClear = () => {
    this.closeDialog();
    this.setState({
      factorProducts: [],
      factorVisibility: false,
    });
  };

  totalPrice = (factorProducts) => {
    let totalPrice = 0;
    this.setState(() => {
      factorProducts.forEach((p) => {
        totalPrice += p.total;
      });
      return { factorProducts, totalPrice };
    });
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSignIn = () => {
    const { username, email, password } = this.state;
    console.log(username);
    const user = userRepository.users.find((u) => u.username === username);
    if (user) {
      this.setState({
        signedUser: { email: email, username: username, password: password },
        username: "",
        email: "",
        password: "",
      });
    } else alert("user not find");
  };

  handleSignUp = () => {
    const { username, email, password } = this.state;
    const user = userRepository.users.filter(
      (user) => user.username === username
    );
    if (user.length === 1) {
      alert("please enter another username or username is incorrect");
      console.log(user);
      this.setState({ username: "", email: "", password: "" });
      return;
    }
    userRepository.add(username, email, password);
    this.setState({
      signedUser: { email: email, username: username, password: password },
      username: "",
      email: "",
      password: "",
    });
    console.log(userRepository.users);
  };

  componentDidMount() {
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
          this.setState({ products });
        }, 750)
      );
  }

  render() {
    const {
      signedUser,
      products,
      product,
      path,
      factorProducts,
      factorVisibility,
      isDialogOpen,
      totalPrice,
      username,
      password,
    } = this.state;
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
    console.log(path);

    return (
      <>
        <Router>
          <Switch>
            <Route path={`/products/${path}`}>
              <ProductDetails
                product={product}
                handleAddProduct={this.handleAddProduct}
                signedUser={signedUser}
                factorProducts={factorProducts}
                handleFactorVisibility={this.handleFactorVisibility}
              />
              <Factor
                factorProducts={factorProducts}
                handleIncDec={this.handleIncDec}
                handleRemove={this.handleRemove}
                openDialog={this.openDialog}
                totalPrice={totalPrice}
                handleClear={this.handleClear}
                factorVisibility={factorVisibility}
                handleFactorVisibility={this.handleFactorVisibility}
              />
            </Route>
            <Route path="/sign">
              <SingAndLogin
                username={username}
                password={password}
                handleInputChange={this.handleInputChange}
                handleSignIn={this.handleSignIn}
                handleSignUp={this.handleSignUp}
              />
            </Route>
            <Route path="/">
              <Navbar
                signedUser={signedUser}
                factorProducts={factorProducts}
                handleFactorVisibility={this.handleFactorVisibility}
              />
              <Header handleMode={this.handleMode} />
              <>
                <OurProducts />
                <ProductMapper
                  factorProducts={factorProducts}
                  products={products}
                  handleAddProduct={this.handleAddProduct}
                  handlePath={this.handlePath}
                />
                <Factor
                  factorProducts={factorProducts}
                  handleIncDec={this.handleIncDec}
                  handleRemove={this.handleRemove}
                  openDialog={this.openDialog}
                  totalPrice={totalPrice}
                  handleClear={this.handleClear}
                  factorVisibility={factorVisibility}
                  handleFactorVisibility={this.handleFactorVisibility}
                />
                <BuyCarts
                  totalPrice={totalPrice}
                  closeDialog={this.closeDialog}
                  isDialogOpen={isDialogOpen}
                  handleClear={this.handleClear}
                />
              </>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
