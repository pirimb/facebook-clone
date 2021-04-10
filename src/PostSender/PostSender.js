import React, { useState } from 'react'
import './PostSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import firebase from 'firebase'


function PostSender({profileSrc}) {
    const [{user}, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profileSrc: user.photoURL,
            image: imageUrl,
            username: user.displayName
        })

        setInput('')
        setImageUrl('')
    }

    return (
      <div className="postSender">
        <div className="postSender__top">
            <Avatar src={user.photoURL} />
            <form action="">
                <input
                    className="postSender__input"
                    type="text"
                    placeholder={`Whats's on your mind, ${user.displayName}?`}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    />
                <input 
                    type="text" 
                    placeholder="image URL(Optional)"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)} />
                <button onClick={handleClick} type="submit">Hidden submit</button>
            </form>
        </div>
        <div className="postSender__bottom">
            <div className="postSender__bottom_option">
                <VideocamIcon style={{color:"red"}} />  
                <h3>Live video</h3>              
            </div>
            <div className="postSender__bottom_option">
                <PhotoLibraryIcon style={{color:"green"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="postSender__bottom_option">
                <EmojiEmotionsIcon style={{color:"orange"}} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>
      </div>
    );
}

export default PostSender
