import data from "../data/index.json"
import {useNavigate} from "react-router-dom";

export default function Highlights(){

    return(
        <section className="special-section" id="specialSection">
            <div className="special-specials-container">
                <h4 className="special-section-heading">Specials</h4>
                <div>
                    <a href="/menu">
                <button className="btn-primary"  >Online Menu</button>
                </a>
            </div>
            </div>

            <div className="special-section-container">
                {data?.special?.map((item,index)=>(
                    <div key={index} className="special-section-card">
                        <div className="special-section-img">
                            <img src={item.src} alt="Product Chain" />
                        </div>
                        <div className="special-section-card-content">
                            <div className="special-price">
                            <h3 className="special-section-title">{item.title}</h3>
                            <h4 className="special-price-title">{item.price}</h4>
                        </div>
                            <p className="special-section-description">{item.description}</p>
                            <div className="special-order">
                                <a href="/menu">
                                <button className="btn-order"> You can order more
                                <img src="./images/delivery.png" id="delivary" alt="delivary"
                                     width={25} height={25}></img>
                                </button>
                            </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    )

}