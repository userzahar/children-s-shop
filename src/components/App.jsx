
import { goods } from "data/goods";
import { Footer } from "./footer/Footer";
import { Gallery } from "./Gallery/Gallery";
import { PageContainer } from "./pageContainer/pageContainer";
export const App = () => {
  return (<div>
    <PageContainer>
      <Gallery goods={goods} />
    </PageContainer>
    
    <Footer />
  </div>);
};
