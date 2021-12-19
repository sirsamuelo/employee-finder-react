import {Link} from 'react-router-dom'
const Navbar = ({title,icon}) => {
    return (
        <div className="nav">
            <div className="container">
                <Link to="/">
                    <h3 style={{color: "#faf9f9"}}><i className={icon} style={{margin: "0.4rem"}}></i>{title}</h3>
                </Link>
            </div>
        </div>
    )
}


Navbar.defaultProps = {
    title: "Employee Finder",
    icon: "fas fa-address-book"
}


export default Navbar
