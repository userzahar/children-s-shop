import { ProductCard } from "./ProductCard/ProductCard";
import { Footer } from "./footer/Footer";
import { PageContainer } from "./pageContainer/pageContainer";

export const App = () => {
  return (<div>
    <PageContainer>
      <ProductCard data={{
        name: "Сенсорні кульки",
        id: "id-9",
        price: 150,
      photo: [
        { src: "https://i.ibb.co/V3CCZN8/photo-2023-03-15-19-48-43-6.jpg", alt: "валідна картинка" },
        {src:"https://content2.rozetka.com.ua/goods/images/big/280916356.jpg", alt:"невалідна картинка"},
    ],
        category: ["Іграшки"],
        description: ""
    }} />
    </PageContainer>
    
    <Footer />
  </div>);
};
