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
      <main className="main">
        <div>
          <Banner
          alt={"Image de falaises"}
          classe={"bannerBack"}
          text={"Chez vous, partout et ailleurs"}/>
        </div>
        <div className="backCard">
          {/* utilisation de la méthode map() pour afficher un card pour chaque logements */}
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

