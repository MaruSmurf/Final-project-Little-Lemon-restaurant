import Navbar from "../components/Navbar";
import React, {useState} from "react";
import Heading from "../components/Heading";
import Footer from "../components/Footer"

export default function ReservationPage(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [count, setCount] = useState("");
    const [occasion, setOccasion] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e)
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <>
            <Navbar/>
            <Heading/>
            <section className="reservation-section" id="reservation">

                <div className="reservation-specials-container">
                    <h1 className="reservation-section-heading">Reserve a Table</h1>

                </div>
                <div className="booking-icons">
                    <img src="./images/card.png" alt="payment card"></img>
                    <img src="./images/wifi.png" alt="wifi"></img>
                    <img src="./images/noanimals.png" alt="no animals"></img>
                    <img src="./images/nosmoking.png" alt="no smoking"></img>
                </div>
                <form onSubmit={handleSubmit}
                      className="reservation-form-container">


                    <label htmlFor="date"
                           className="contact-label">
            <span className="reservation-title">Date
                <img src="./images/date.png" alt="Date"></img>
                </span>
                        <input type="date"
                               value={date}
                               onChange={(e) => handleChange(e.target.value)}
                               className="contact-input text-md"
                               id="date"
                        />
                    </label>

                    <label htmlFor="time"
                           className="contact-label">
            <span className="reservation-title">Time
            <img src="./images/time.png" alt="time table"></img>
            </span>
                        <select value={time}
                                onChange={(e) => setTime(e.target.value)}
                                id="choose-time"
                                className="contact-input text-md">
                            <option value="">Choose time...</option>
                            {
                                props.availableTime.availableTime.map(availableTime => {
                                    return <option key={{availableTime}}>{availableTime}</option>
                                })
                            }

                        </select>
                    </label>

                    <label htmlFor="count"
                           className="contact-label">
            <span className="reservation-title">Persons count
            <img src="./images/count.png" alt="person count"></img>
            </span>
                        <input type="number"
                               value={count}
                               onChange={(e) => setCount(e.target.value)}
                               min="1" max="10"
                               className="contact-input text-md"
                               name="count"
                               id="count"
                               required/>
                    </label>

                    <label htmlFor="occasion"
                           className="contact-label">
                <span className="reservation-title">Occasion
                <img src="./images/vino2.png" alt="glasses"></img>
                </span>
                        <select key={occasion}
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                                id="choose-topic"
                                className="contact-input text-md">
                            <option>Select One...</option>
                            <option>Birthday</option>
                            <option>Engagement</option>
                            <option>Anniversary</option>
                        </select>
                    </label>


                    <label htmlFor="massage"
                           className="contact-label">
            <span className="reservation-title">Notes
            <img src="./images/note.png" alt="notes"></img>
            </span>
                        <textarea placeholder="Type your message..."
                                  className="contact-input text-md"
                                  rows={8}
                                  id="note"/>
                    </label>


                    <label htmlFor="full-name"
                           className="contact-label">
                <span className="reservation-title">Full Name
             <img src="./images/pen.png" alt="pen"></img>
                </span>
                        <input type="text"
                               placeholder="Full Name"
                               className="contact-input text-md"
                               name="full-name"
                               id="full-name"
                               required/>
                    </label>

                    {/*<label htmlFor="phone-number"
                   className="contact-label">
                <span className="reservation-title">Phone
                 <img src="./images/phone.png" alt="phone"></img>
                </span>
            <input type="number" placeholder="Phone Number"
                   className="contact-input text-md"
                   name="phone-number"
                   id="phone-number"
                   required/>
        </label>

            <label htmlFor="email"
                   className="contact-label">
                <span className="reservation-title" >
                    Email<img src="./images/email.png" alt="email"></img></span>

            <input type="email" placeholder="email"
                   className="contact-input text-md"
                   name="email"
                   id="email"
                   required/>
        </label>*/}

                    <div className="button-reserve">
                        <a href="/confirm">
                            <button className="btn-primary">
                                Reserve a Table
                            </button>
                        </a>
                    </div>


                </form>
            </section>
            <Footer/>
        </>
    )
}