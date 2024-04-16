import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner"
import Card from "../components/card"
import Data from "../housingRental.json"
// import Cliff from "/assets/cliff.png"



export default function App() {
  return (
    <>
      <div>
        <Header/>
      </div>
      <main className="main">
      <div>
        <Banner
        src={"/assets/cliff.png"}
        alt={"Image de falaises"}/>
      </div>
      <div className="backCard">
        {Data.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
        ))}
      </div>
      </main>
      <div>
        <Footer/>
      </div>
    </>
  );
}

