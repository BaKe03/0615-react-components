//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as IconSearchSVG } from "../../assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";

import TextField from "@mui/material/TextField";

import "./header.css";

import {useContext} from 'react';
import {DarkModeContext} from "../../Context.js";

//массив данных ссылок
const swLinks = [
  {
    url: "https://www.facebook.com/StarWars",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];

export const Header = ({ fan }) => {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  }

  return (
    <header className={darkMode ? 'Container-dark' : 'Container-light'}>
      <div className="links-layout">
        {swLinks.map((link) => (
          <a
            key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}
      </div>
      <StarWarsLogoSVG />
      <div className="search-layout">
        <IconSearchSVG className="search-icon" />
        
        {/* <input placeholder="Search Star Wars" type="text" /> */}
        <TextField 
          id="outlined-search" 
          label="Search Star Wars" 
          type="search" 
          sx={{
            backgroundColor: 'white',
            borderRadius: '10px'
          }}
        />

        <div style={{ paddingTop: "1rem" }}>
          I am fan of: {fan}
        </div>

        
        <button className="button-4" onClick={handleClick}>switch theme</button>
      </div>
    </header>
  );
};
