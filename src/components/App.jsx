
import { goods } from "data/goods";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { GalleryProducts } from "./GalleryProducts/GalleryProducts";
import { Main } from "./Main/Main";
import { PageContainer } from "./pageContainer/pageContainer";
import { useContext } from "react";
import { Theme, ThemeContext } from "providers/themeContextProvider";
import { ThemeProvider } from "@emotion/react";
import { light } from "utils/theme";

export const App = () => {
console.log(Theme().type);
  const themeSwitcher = () => {
    console.log('theme');
  };
const theme = useContext(ThemeContext).type;
  return (<>
  <ThemeProvider theme={theme}>
    <Header themeSwitcher={themeSwitcher}/>

    <Main>
      <PageContainer>
        <GalleryProducts goodsItem={goods} />
      </PageContainer>
    </Main>
  
    <Footer />
  </ThemeProvider>
    
  </>);
};
