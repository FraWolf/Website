import React, { Component } from 'react';
import fetch from 'node-fetch';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: null,
            tag: null,
            avatar: null,
            badges: []
        }
    }

    async componentDidMount() {
        let data = await (await fetch("https://api.frawolf.it/bots/userinfo/156851568975675392")).json();
        this.setState({
            id: data.id,
            username: data.username,
            tag: data.discriminator,
            avatar: data.avatar,
            badges: data.badges
        });
    }

    render() {
        return (
            <div>
                <header className="masthead text-lg-center text-center">
                    <div className="container justify-content-center">
                        <div className="d-lg-block d-none">
                            <img className="avatar" src={this.state.avatar} alt="Avatar" />
                        </div>
                        <div>
                            <h1 className="mb-2 text-lg-center text-white">
                                <span className="badge badge-danger d-md-inline-block" height="50">
                                    <i className="fas fa-paw" aria-hidden="true"></i>&nbsp;
                                    { this.state.username && this.state.username.toUpperCase() }
                                </span>

                                <div className="bio">
                                    <p>
                                        Hello everyone, I'm Fra. <br />
                                        I'm an Italian Developer
                                    </p>
                                </div>

                                <div className="discord-badge">
                                    { this.state.username !== null && this.state.badges.map(item => (
                                    <img className="singlebadge" src={`https://discord.id/dashboard/flags/${item.id}.png`} alt={item.name} height="30" />
                                    ))}
                                </div>
                            </h1>
                        </div>
                    </div>
                </header>
                
                <br />

                <div className="container">
                    { /* What I do */ }
                    <div className="text-lg-center">
                        <h1> WHAT I DO</h1>
                        <p style={{ fontSize: "25px" }}>
                            I mainly develop things in Javascript (Node.js), PHP and Python. <br />
                            Currently developing Bots for Discord & Telegram and making websites in free time.
                        </p>
                    </div>

                    { /* My Projects */ }
                    <div className="text-lg-center">
                        <h1> MY PROJECTS</h1>
                        <div className="projects">
                            <p style={{ fontSize: "25px" }}>
                                Coming Soon...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;