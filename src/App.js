import React, { Component } from "react";

import DATA from "./DATA.json";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ProductMapper from "./Components/ProductMapper";
import Factor from "./Components/Factor";
import BuyCarts from "./Components/‌BuyCarts";

function initialData() {
  const SAMPLE_DATA = DATA.items.map((p) => {
    return {
      title: p.fields.title,
      id: p.sys.id,
      price: p.fields.price,
      image: p.fields.image.fields.file.url,
      alt: p.fields.title,
      // inStock: p.fields.inStock,
    };
  });
  return SAMPLE_DATA;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factorProducts: [],
      factorVisibility: false,
      isDialogOpen: false,
      totalPrice: 0,
    };
  }

  handleState = (factorProducts) => {
    this.totalPrice(factorProducts);
    if (!factorProducts.length) {
      return { factorProducts, factorVisibility: false };
    } else {
      return { factorProducts };
    }
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

  handleClear = () => {
    this.closeDialog();
    this.setState({
      factorProducts: [],
      factorVisibility: false,
    });
  };

  handleFactorVisibility = () => {
    this.setState((prevState) => {
      const factorVisibility = !prevState.factorVisibility;
      return {
        factorVisibility,
      };
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

  render() {
    console.log("render");
    const {
      factorProducts,
      factorVisibility,
      isDialogOpen,
      totalPrice,
    } = this.state;
    return (
      <>
        <Navbar
          factorProducts={factorProducts}
          handleFactorVisibility={this.handleFactorVisibility}
        />
        <Header />
        <ProductMapper
          factorProducts={factorProducts}
          products={initialData()}
          handleAddProduct={this.handleAddProduct}
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
    );
  }
}

export default App;
