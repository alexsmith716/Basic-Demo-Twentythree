import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from './NavLinks';

//	import styled from 'styled-components';
//	const A = styled(Link)`
//		color: #009900;
//		text-decoration: none;
//	`;


export const NavBar = () => {

	const [clicked, setClicked] = useState(false);

	useEffect(() => {
			//	componentDidMount
			console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > useEffect() > componentDidMount');

			//	componentDidUpdate
			if (clicked) {
				console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > useEffect() > componentDidUpdate > clicked: ', clicked);
			}

			//	componentWillUnmount
			return () => {
				//	some effects might require cleanup
				console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > useEffect() > componentWillUnmount > cleanup phase');
			};
		},
		[clicked]
	);

	return (

		<nav className="fixed-top navbar">

			<div className="container">

				<div className="navbar-expand">

					<Link to='/' className="js-scroll-trigger navbar-brand" onClick={() => setClicked(false)}>Election App</Link>

					<div className="navbar-toggler-icon" onClick={() => setClicked(!clicked)}>
						{clicked && (
							<div className="navbar-close"></div>
						)}

						{!clicked && (
							<div className="navbar-open"></div>
						)}
					</div>

					<div className="navbar-collapse">

						<ul className={ clicked ? 'navbar-nav active' : 'navbar-nav' }>

							{ NavLinks.map((item, index) => {
								return (
									<li key={index}>
										<Link to={item.url} className={`js-scroll-trigger ${item.navLink}`} onClick={() => setClicked(false)}>
											{item.title}
										</Link>
									</li>
								)
							}) }

						</ul>

					</div>
				</div>
			</div>
		</nav>
	);
}
