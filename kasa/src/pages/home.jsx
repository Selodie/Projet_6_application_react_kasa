import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner"
import Card from "../components/card"
import Data from "../housingRental.json"



export default function App() {
  return (
    <>
      <div>
        <Header/>
      </div>
      <div>
        <Banner/>
      </div>
      <div className="backCard">
        {Data.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
        ))}
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

