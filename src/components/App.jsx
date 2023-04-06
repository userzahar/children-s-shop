
import { goods } from "data/goods";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { GalleryProducts } from "./GalleryProducts/GalleryProducts";
import { Main } from "./Main/Main";
import { PageContainer } from "./pageContainer/pageContainer";
import { Theme } from "providers/themeContextProvider";
import { ThemeProvider } from "@emotion/react";

export const App = () => {

const theme = Theme();

  return (<>
  <ThemeProvider theme={theme}>
    <Header/>

    <Main>
      <PageContainer>
        <GalleryProducts goodsItem={goods} />
      </PageContainer>
    </Main>
  
    <Footer />
  </ThemeProvider>
    
  </>);
};
