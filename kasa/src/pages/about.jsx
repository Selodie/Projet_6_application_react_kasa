import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner"
import Collapse from "../components/collapse"


export default function About() {

  // pour générer une clé unique et alétoire en uilisant un préfixe et une date
  new Date().getTime();
    const generateKey = (pre) => {
      return `${ pre }_${ new Date().getTime() }`;
  }
  // tableau qui contient les titres et les textes à mettre dans les collapses
  const collapseData = [
    {
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbations de voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title:"Service",
      text: "La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbations de voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title:"Sécurité",
      text:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ]
    return (
      <>
        <div>
            <Header/>
        </div> 
        <main className="mainAbout">
          <div>
            <Banner
              alt={"Image de falaises"}
              classe={"bannerAbout"}/>
          </div>
          <div className="allCollapse">
            {/* on parcours le tableau et pour chaque objet, on affiche un collapse. */}
            {collapseData.map(({ title, text }) => (
                <Collapse key= {generateKey(title)} title = {title} text = {text} />
              ))}
          </div>
        </main>
        <div>
            <Footer/>
        </div>
      </>
    );
  }

 