import { ProductCard } from "./ProductCard/ProductCard";
import { Footer } from "./footer/Footer";

export const App = () => {
  return (<div>
    <Footer />
    <ProductCard data={{
        name: "Боді з довгим рукавом",
        id: "id-7",
        price: 130,
        photo: [
 
    ],
        category: [],
        description: "Колір: рожевий синій, зелений. Розмір 86."
    }} />
  </div>);
};
