import { Link } from 'react-router-dom'
// we replace a href tags with link so react uses browswer for switching
// pages instead of sending requests to server. Link replaces a and to replaces href
const Navbar = () => {
    return (
    <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            <Link to={"/"}>Home</Link> 
            <Link to={"/create"} style={{
                color: 'white',
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }}>New Blog</Link>
        </div>
    </nav>
      );
}
 
export default Navbar;