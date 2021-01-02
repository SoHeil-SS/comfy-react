import Navbar from "../Navbar";
import FactorContent from "../FactorComponents/FactorContent";
import ProductItem from "./ProductItem";

const productStyle = {
  img: {
    width: "950px",
    height: "700",
    border: "3.5px solid red",
    borderRadius: "10px",
  },
  button: {
    marginTop: "6.5%",
  },
  div: {
    marginTop: "5%",
    padding: "10px",
    marginRight: "",
    float: "right",
  },
  content: { border: "" },
};
const content =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum distinctio voluptatum quam ipsum placeat! Eos eum numquam minus soluta aliquid hic perspiciatis molestias et quis iste itaque repudiandae voluptate ducimus, quas ex voluptates, nihil vitae, repellat eveniet a enim reprehenderit dolores. Neque, alias natus. Ut dicta odit officiis voluptatum, deserunt est alias a omnis autem, reiciendis voluptates cum atque ipsam, esse ipsum. Eum earum nemo nostrum debitis, a ea voluptatem expedita enim nulla repellendus. Aperiam laboriosam architecto, deleniti culpa natus fuga dolor qui porro molestias aspernatur sunt soluta, repudiandae eum sed ut cumque inventore unde ipsum sit obcaecati? Exercitationem ea est corrupti nobis aperiam odit in quidem dolorem quia ut consectetur hic illum placeat, suscipit delectus? Labore quam voluptatem sint molestias voluptates aliquam quas dignissimos magni ullam temporibus, blanditiis, dolorum, soluta eveniet dolorem libero culpa? Harum illum rerum ratione eos sequi numquam vitae aliquam obcaecati incidunt, animi debitis doloribus doloremque.";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <Navbar />
      <FactorContent />
      <ProductItem
        text={product.title}
        price={product.title}
        image={product.image}
        alt={product.alt}
        content={content}
        productStyle={productStyle}
        // handleAddProduct={() => handleAddProduct(product, product.id)}
      />
    </div>
  );
};

export default ProductDetails;
