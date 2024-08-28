import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/Button";
import "../styles/styles.scss";
 
const Navigation: FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return ( 
        <div className="header-nav">
            <ul>
                <li>
                    <Link to="/posts">
                        <Button className={isActive('/posts') ? "button-hov active" : "button-hov"}>Home</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <Button className={isActive('/about') ? "button-hov active" : "button-hov"}>About</Button>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <Button className={isActive('/contact') ? "button-hov active" : "button-hov"}>Contact</Button>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
 
export default Navigation;