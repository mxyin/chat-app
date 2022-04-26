import React from 'react'
import Navbar from "./components/Navbar/Navbar.js"
import './Chat.scss'

function Chat() {
    // let reducer update the state and re-render the chat component,
    // access the state by useSelector
    return (
        <div id='chat-container'>
            <Navbar id='chat-wrap'/>
        </div>
    )
}

export default Chat;