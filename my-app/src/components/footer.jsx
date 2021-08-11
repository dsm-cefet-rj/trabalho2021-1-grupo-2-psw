import React from "react"; 
import "../styles/stylePrincipalAdocaoPet.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div> 
            <nav className="footer bg-primary-color" id="footer">
            <div className="">
                <h6 className="primary-color"></h6>
                    <span>PetFriend</span>
                    <h6 className="primary-color"></h6>
                        <span>All rights reserved - 2021</span>
            </div>
        </nav>
        </div>
    )
}