
import { goods } from "data/goods";
import { Footer } from "./footer/Footer";
import { GalleryProducts } from "./GalleryProducts/GalleryProducts";
import { Main } from "./Main/Main";
import { PageContainer } from "./pageContainer/pageContainer";

export const App = () => {
  return (<>
    <Main>
      <PageContainer>
        <GalleryProducts goodsItem={goods} />
      </PageContainer>
    </Main>
  
    <Footer />
  </>);
};
