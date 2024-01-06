import React from "react"


export default function Header(){
    return (
        <header className="header">
            <img
                src="./images/header-logo.png"
                className="header--logo"
            />
            <h2 className="header--title">Meme Generator</h2>
            <ul className="header--container">
            <li className="header--tab"><a href="#">Download</a></li>
            <li className="header--tab"><a href="https://api.whatsapp.com/send?phone=&text=URLENCODEDTEXTHERE" data-action="share/whatsapp/share"
        target="_blank">Share</a></li>
            <li className="header--tab"><a href="/">Refresh</a></li>
            </ul>
        </header>
    )
}