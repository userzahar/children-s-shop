import { ProductCard } from "./ProductCard/ProductCard";

export const App = () => {
  return (<div>
        <ProductCard data={{
        name: "Ромпер з собаками",
        id: "id-1",
        price: 510,
        photo: [
            {src:"https://i.ibb.co/Hq1myG9/photo-2023-03-15-19-48-42.jpg", alt:"ромпер"}
        ],
        category: ["одяг","для найменших"],
        description: "Тринитка на флісі. Розмір 62см."
    } } />
  </div>);
};
