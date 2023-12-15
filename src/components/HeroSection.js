



export default function HeroSection(){


return(
    <section className="herosection" id="heroSection">
<div className="hero-section">
        <div className="hero-content-box">
            <div className="hero-content">
    <h1 className="section-typefaces">Little Lemon</h1>
    <h2 className="section-subtitle">Chicago</h2>
    <p className="section-lead-text">We are a family owned Mediterranean restaurant,
        focused on traditional recipes served with a modern twist.</p>
        </div>
            <a href="/reservation">
        <button className="btn-primary"
       >Reserve a Table</button>
            </a>
    </div>
        <div className="hero-section-foto">
            <img src="./images/restauranfood.jpg" id="hero-foto"
                 alt="hero-foto" width={300} height={375}></img>
        </div>
    </div>
</section>

)
}