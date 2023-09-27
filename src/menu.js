import { Link } from "react-router-dom";

function Menu(){
    return (
        <div>
            <div className="nav">
                <Link to='home'>Home</Link>
                <Link to='about' >About</Link>
                <Link to='contact'>Contact</Link>
                <Link to='feedback'>Feedback</Link>
            </div>
        </div>
    )
}
export default Menu;