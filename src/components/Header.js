import React, { Component } from 'react';

class Header extends Component {
    render() {
       return(
           <nav className="navbar navbar-dark sticky-top">
               <div className="container">
                    <div className="mr-0 navbar-brand">
                        <img className="mr-2" src="https://cdn.discordapp.com/attachments/516733604001480714/516733685005811797/FW_Logo.png" alt="Logo" height="35" />
                        <span className="align-middle">FraWolf</span>
                    </div>
                    { /* <a className="btn btn-blurple" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noopener noreferrer" target="_blank"><i className="fas fa-sign-in-alt" aria-hidden="true"></i> Login</a> */ }
                    <a className="btn btn-blurple" href="mailto:frawolf@outlook.it"><i class="fas fa-envelope" aria-hidden="true"></i> Contact me</a>
               </div>
           </nav>
        );
    }
}

export default Header;