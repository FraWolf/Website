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
            <header className="masthead text-lg-center text-center">
                <div className="darkoverlay"></div>
                <div className="container justify-content-center">
                    <div className="d-lg-block d-none">
                        <img className="avatar" src={this.state.avatar} />
                    </div>
                    <div>
                        <h1 className="mb-2 text-lg-center text-white">
                            { /*/this.state.username*/ }
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
                                <img className="singlebadge" src={`https://discord.id/dashboard/flags/${item.id}.png`} height="30" />
                                ))}
                            </div>
                        </h1>
                    </div>
                </div>
            </header>
        );
    }
}

export default Home;