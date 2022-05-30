import './main.css'
import furniture from '../../image-about-dark.jpg'

const Main = () => {
    return (
        <div className="main">
            <div className="discover">
                <h2>Discover innovative ways to decorate</h2>
                <p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
                <p className="shop">Shop Now &rarr;</p>
            </div>
            <img className="furniturePic" src={furniture} alt="furniture"/>
            <div className="furniture">
                <h2>About our Furniture</h2>
                <p>Blah blah blah</p>
            </div>
        </div>
    )
}

export default Main;