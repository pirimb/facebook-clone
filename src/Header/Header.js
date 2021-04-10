import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import GamepadIcon from '@material-ui/icons/Gamepad';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { IconButton, Avatar } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue()

    return (
      <div className="header">
        <div className="header__left">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                alt=""
            />
            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder="search Facebook"/>
            </div>
        </div>

        <div className="header__center">
            <div className="header__option active">
                <HomeIcon fontSize="large" />
            </div>
            <div className="header__option">
                <PeopleIcon fontSize="large" />
            </div>
            <div className="header__option">
                <OndemandVideoIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontSize="large" />
            </div>
            <div className="header__option">
                <GamepadIcon fontSize="large" />
            </div>            
        </div>

        <div className="header__right"></div>
            <div className="header__avatar_info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>
            <div className="header__right_last">
                <IconButton>
                    <AddCircleOutlineIcon fontSize="large" />
                </IconButton>
                <IconButton>
                    <EmailIcon fontSize="large" />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon fontSize="large" />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    );
}

export default Header
