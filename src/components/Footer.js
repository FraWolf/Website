import React, { Component } from 'react';

class Footer extends Component {
    render() {
       return(
        <footer className="footer mt-auto py-3">
			<div className="container d-flex justify-content-center justify-content-xl-around">
				<span className="align-middle text-muted">Copyright <a className="text-muted" href="https://top.gg/user/156851568975675392" target="_blank">FraWolf</a>.</span>
				<div className="socials text-muted">
					<a href="https://github.com/FraWolf"><i class="fab fa-github"></i></a>
				</div>
			</div>
		</footer>
        );
    }
}

export default Footer;