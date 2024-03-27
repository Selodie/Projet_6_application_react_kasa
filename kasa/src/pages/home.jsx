import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner"
import Card from "../components/card"


export default function App() {
  return (
    <>
      <div>
        <Header/>
      </div>
      <div>
        <Banner/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

