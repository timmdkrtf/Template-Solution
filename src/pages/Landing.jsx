import Navbar from "../components/Navigation"
import Home from "../components/Home"
import Service from "../components/Service"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"

function Landing(){
    return(
        <>
            <Navbar />
            <Home />
            <Service />
            <Portfolio />
            <Footer />
        </>
    );
}

export default Landing;