import bgCard from "../assets/image/bg/bg-card.jpg"
import bgCard2 from "../assets/image/bg/bg-card2.jpg"
import icon from "../assets/image/bg/Group 10.png"

function Home(){
    return(
        <div className="home" id="home">
            <div className="container">
                <div className="content">
                    <div className="main-text">
                        <h1>Find Simple Business Solutions and Direction, at <span>solution.id</span></h1>
                        <p>
                            At solution.id you will get solutions that are easy to understand, trusted, and forward-looking in your business.{" "}
                            Starting from your starting point to the future and long-term of your business.
                        </p>
                        <button>Get Started</button>
                    </div>
                    <div className="content-bottom">
                        <div className="content-card">
                            <div className="card first">
                                <img src={bgCard} alt="" />
                                <h4>200+</h4>
                                <p>the best project we have done so far lorem ipsum.</p>
                            </div>
                            <div className="card second">
                                <img src={bgCard2} alt="" />
                                <h4>13</h4>
                                <p>partners with whom we ipsum connect our lorem.</p>
                            </div>
                            <div className="card third">
                                <h4>24 Hours</h4>
                                <p>Our Solution can share on you speedly lorem loreman. Ipsum Dolor dolor contrectur elit</p>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;