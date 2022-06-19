import {useContext} from 'react';
import {DarkModeContext} from "../../Context.js";
import './footer.css'

export const Footer = ({ fan }) => {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    const handleClick = () => {
        toggleDarkMode();
    }

    return (
        <header className={darkMode ? 'Container-dark footer' : 'Container-light footer'}>
                <ul> 
                    <h2>You can also watch cool TV-shows such as:</h2>
                    <li><a href="https://ochen-strannye-dela.online/">Stranger Things</a></li>
                    <li><a href="https://jut.su/kimetsu-yaiba/">Demon Slayer</a></li>
                </ul>
                <button className="button-4" onClick={handleClick}>switch theme</button>
        </header>
    );
};