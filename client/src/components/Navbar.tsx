import { FC, useEffect, useState } from "react";
import Button from "./Button";
import "../styles/styles.scss";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../routes/Navigation";
import SearchBar from "./SearchBar";
import Cookies from "js-cookie";

const Navbar: FC = () => {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const navigate = useNavigate();

    const toggleSearchBar = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    useEffect(() => {
        const checkAdminStatus = async () => {
            const token = Cookies.get('token');
            console.log("Admin token (js-cookie):", token); // Перевірка значення кукі
            if (token) {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        }
        checkAdminStatus();
    }, [])

    const logout = () => {
        Cookies.remove("token");
        setIsAdmin(false);
        navigate('/');
    }

    return (
        <div className="header">
            {isAdmin ? (
                <>
                    <Link to="/admin/dashboard" className="header-logo">Admin Panel</Link>
                    <div className="header-button">
                        <Button onClick={logout} className="logoutBtn">Logout</Button>
                    </div>
                </>
            ) : (
                <>
                    <SearchBar isSearchOpen={isSearchOpen} onClose={toggleSearchBar}/>
                    <Link to="/" className="header-logo">NodeJS</Link>
                    <div className="header-button">
                        <Button className="searchBtn" onClick={toggleSearchBar}>
                            Search
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.79167 13.4583C10.9213 13.4583 13.4583 10.9213 13.4583 7.79167C13.4583 4.66205 10.9213 2.125 7.79167 2.125C4.66205 2.125 2.125 4.66205 2.125 7.79167C2.125 10.9213 4.66205 13.4583 7.79167 13.4583Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.875 14.875L11.7938 11.7938" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Button>
                    </div>
                </>
            )}
            <Navigation/>
        </div>
    );
}
 
export default Navbar;