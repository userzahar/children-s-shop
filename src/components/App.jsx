
import { goods } from "data/goods";
import { Header } from "./Header/Header";
import { Footer } from "./footer/Footer";
import { GalleryProducts } from "./GalleryProducts/GalleryProducts";
import { Main } from "./Main/Main";
import { PageContainer } from "./pageContainer/pageContainer";

export const App = () => {
  return (<>
    <Header />
    <Main>
      <PageContainer>
        <GalleryProducts goodsItem={goods} />
      </PageContainer>
    </Main>
  
    <Footer />
  </>);
};
