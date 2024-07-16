import "../App.sass";

export default function Footer() {
  return(
    <footer className="footer">
      <div className="imgFooter">
        {/* Logo de l'application */}
        <img src="/assets/logoFooter.png" alt="logo de Kasa, la premier a est représenté par une maison"></img>
      </div>
      <div>
      <div className="pFooter">@ 2020 Kasa. All rights reserved</div>
      </div>
    </footer>
  )
}

