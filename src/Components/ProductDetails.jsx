import React from "react";
import { Link } from "react-router-dom";
import Factor from "./Factor";
import Navbar from "./Navbar";

const ProductDetails = ({
  signedUser,
  factorProducts,
  handleAddProduct,
  handleFactorVisibility,
  product,
  handleIncDec,
  handleRemove,
  openDialog,
  totalPrice,
  handleClear,
  factorVisibility,
}) => {
  return (
    <div>
      <Navbar
        signedUser={signedUser}
        factorProducts={factorProducts}
        handleFactorVisibility={handleFactorVisibility}
      />
      <article className="product">
        <div className="img-container">
          <Link to="/">
            <img
              className="product-img"
              style={{ width: "600px", height: "500px", float: "right" }}
              src={product.image}
              alt={product.alt}
            />
          </Link>
          <button
            onClick={() => handleAddProduct(product, product.id)}
            className="bag-btn"
          >
            {product.price}
            <i className="fas fa-shopping-cart">Add to cart</i>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          sit voluptate pariatur eligendi illum est molestiae error nesciunt
          atque labore, accusantium asperiores tempore ullam excepturi deserunt
          unde? Cum esse excepturi quidem. Reiciendis expedita similique atque
          harum quas ut ullam excepturi eum numquam consequuntur voluptatibus
          earum tempora nemo, maiores sunt, iste temporibus sint beatae dolorum
          ab unde vel! Accusamus ipsa ad voluptatem ab quisquam ipsum molestiae,
          nulla esse natus minus ex dolorem ea maxime quas ducimus dignissimos
          molestias ut nesciunt? Laudantium expedita ad non laborum eveniet
          dolor, maxime atque, libero corporis neque, totam doloremque deserunt
          nesciunt odio quidem officiis dolorem sit! Voluptates, cum rem. Velit
          animi recusandae a eius laudantium, soluta dolorem numquam iusto
          quaerat nisi quibusdam consectetur nam doloremque sunt libero cumque
          aliquid molestiae maiores quisquam consequuntur quas ad praesentium
          autem. Dicta molestias quas placeat voluptate provident eaque,
          voluptatibus saepe, repellat, ea quaerat porro rerum optio totam a
          similique impedit distinctio quis inventore. Adipisci, quisquam aut
          vero accusamus dolores reiciendis voluptatibus, quaerat, hic impedit
          qui magnam dicta suscipit rem quia. Alias, excepturi adipisci, nihil
          voluptate sunt officiis expedita tenetur vel, exercitationem dolore
          inventore debitis distinctio ipsum voluptas recusandae eligendi odio
          facere reprehenderit deserunt animi velit? Molestiae reprehenderit
          tempora ipsa repellat quam quas officia explicabo vitae adipisci
          dolorum perspiciatis consectetur asperiores debitis incidunt mollitia
          numquam consequuntur quis minus harum ex, omnis recusandae. Commodi
          perferendis laboriosam at, natus odit mollitia quidem voluptatum.
          Iusto distinctio accusantium quod dolores praesentium, laudantium
          iste, eos facilis doloremque nihil nisi maxime veniam. Nihil quibusdam
          cumque doloremque aliquid dignissimos voluptate cupiditate
          reprehenderit accusamus provident tempora eum necessitatibus eveniet
          dolores quas officiis accusantium sapiente nesciunt mollitia obcaecati
          quia praesentium illo, repellendus molestias? Eos ducimus consequuntur
          maxime sed pariatur incidunt deserunt eligendi veritatis quae, nam
          maiores neque laboriosam aut odio mollitia corrupti nisi earum fuga
          similique qui alias. Temporibus, aut.
        </h3>
      </article>

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
    </div>
  );
};

export default ProductDetails;

//TODO change ProductItem to reusable component
