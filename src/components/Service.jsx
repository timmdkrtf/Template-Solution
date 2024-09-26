import IconDone from "../assets/image/icon/Done.png"
import IconPencil from "../assets/image/icon/Edit.png"
import IconClock from "../assets/image/icon/Future.png"
import IconIdea from "../assets/image/icon/Idea Sharing.png"

import elemen1 from "../assets/image/elemen/Group 11 (1).png"

function Service(){
    return (
        <div className="service" id="service">
            <div className="container">
                <div className="content">
                    <div className="text-left">
                        <p>Our Service</p>
                        <h1>Choose our service you want</h1>
                        <button>Contact Now</button>
                    </div>
                    <div className="service-right">
                        <div className="bg-elemen">
                            <img src={elemen1} alt="" />
                        </div>
                        <div className="service-card">
                            <div className="card">
                                <img src={IconDone} alt="" />
                                <h5>Lorem lorem lorem loremloerm</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut, voluptatibus error cupiditate a inventore</p>
                            </div>
                            <div className="card">
                                <img src={IconPencil} alt="" />
                                <h5>Lorem lorem lorem loremloerm</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut, voluptatibus error cupiditate a inventore</p>
                            </div>
                            <div className="card">
                                <img src={IconIdea} alt="" />
                                <h5>Lorem lorem lorem loremloerm</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut, voluptatibus error cupiditate a inventore</p>
                            </div>
                            <div className="card">
                                <img src={IconClock} alt="" />
                                <h5>Lorem lorem lorem loremloerm</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut, voluptatibus error cupiditate a inventore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;