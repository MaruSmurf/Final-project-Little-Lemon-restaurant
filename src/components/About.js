export default function About(){
return(
    <section className="about-section" id="aboutSection">
        <div className="about-section-content">
            <h1 className="section-typefaces">Little Lemon</h1>
            <h2 className="section-subtitle">Chicago</h2>
            <p className="section-lead-text">Nothing brings people together like good food.</p>
        </div>
        <div className="about-section-foto">
        <img src="./images/restaurant chef B.jpg" id="foto"
             alt="foto"
             className="foto1"></img>
        <img src="./images/Mario and Adrian B.jpg" id="foto"
             alt="foto"
        className="foto2"></img>
        </div>
    </section>
)
}
