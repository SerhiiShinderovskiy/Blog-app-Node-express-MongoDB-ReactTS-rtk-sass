import { FC } from "react";
import "../styles/styles.scss";

const NodeJS: FC = () => {

    return ( 
        <div>
            <div className="author">
                <h1 className="author-heading">Hi, I am Serhii.</h1>
                <p className="author-body">Welcome to my app Blog</p>
            </div>
            <img src="https://media.istockphoto.com/id/1560833158/photo/game-controller-with-purple-lit-keyboard-amidst-various-wireless-devices.jpg?b=1&s=170667a&w=0&k=20&c=BAahYaK1iOabHELLX-7NpL6Py9Hz7UXZU34g3aXo5NE=" alt="person looking out through window" className="hero-image" width={509} height={339}/>
        </div>
    );
}
 
export default NodeJS;