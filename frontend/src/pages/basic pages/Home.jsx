import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Cards/Card";
import LeftSection from "../../components/LeftSection/LeftSection";
import BoxSection from "../../components/Box/Box";
function Home(){
    return <>
    <div className='Navbar'>
      <Navbar />

      <section className="content-section">
        <Card />

        <div className="content-text">
          <h1>Welcome to Our website Legal Awareness </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum consequat ex,  tempus.</p>
          <button className="explore-button">Explore</button>
        </div>

      </section>

  <section className='sectionX'>
      <div className="content">
      
        <LeftSection />
        {/* Other components or sections */}
      </div>
      <div className="boxes">
      <BoxSection />
      </div>

      </section>

      

    </div></>
}
export default Home;