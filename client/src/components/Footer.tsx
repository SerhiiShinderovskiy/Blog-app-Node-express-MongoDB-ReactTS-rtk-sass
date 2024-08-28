import { FC } from "react";

const Footer: FC = () => {
    return ( 
        <footer className="footer">
            &copy; {new Date().getFullYear()} Serhii • Built with Node.js & MongoDB
        </footer>
    );
}
 
export default Footer;