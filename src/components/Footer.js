import React, { Component } from 'react';

const socials = [
	["fab fa-github", "https://github.com/FraWolf"],
	["fab fa-discord", "https://discord.frawolf.it"],
	["fab fa-twitter", "https://twitter.com/FraWolf__"]
];

class Footer extends Component {
    render() {
       return(
        <footer className="footer mt-auto py-3">
			<div className="container d-flex justify-content-center justify-content-xl-around">
				<span className="align-middle text-muted">Copyright <a className="text-muted" href="https://top.gg/user/156851568975675392" rel="noopener noreferrer" target="_blank">FraWolf</a>.</span>
				<div className="socials text-muted">
					{ socials && socials.length > 0 && socials.map((item, index) => (
						<span className="single-social">
							<a href={item[1]}><i class={item[0]}></i></a>
						</span>
					))}
				</div>
			</div>
		</footer>
        );
    }
}

export default Footer;