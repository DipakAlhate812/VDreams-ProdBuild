import Header from "../../components/header"
import Footer from "../../components/footer"
import MainSection from "../../components/home-page-main-section"
import "../../styles/home-page.css"
import Tagline from "../../components/Tagline"
function HomePage() {

  return (
    <>
    <div>
        <div >
            <Header></Header>
        </div>
        
        <div className="main-home-page">
            <MainSection></MainSection>
            
            {/* <UpdateCard> </UpdateCard> */}
            <h2>Next Roadmap: Tools Beta Launch</h2>
            <div className="roadmap-image-container">
            <img
              src="./src/assets/Roadmap.png" // Replace with your actual image path
              alt="Roadmap Image"
              className="roadmap-image"
            />
          </div>
        </div>
    </div>
      
        <div className="footer-home-page">
          <Tagline></Tagline>
            <Footer></Footer>
        </div>

    </>
  )
}

export default HomePage
