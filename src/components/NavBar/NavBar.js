import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isNormalTheme, toggleTheme } from '../../redux/modules/toggleTheme';
import { navLinks } from './navLinks';
import * as Styles from './styles';


export const NavBar = () => {

	const themeType = useSelector(state => state.toggleTheme.theme.themeType);
	const dispatch = useDispatch();

	const [clicked, setClicked] = useState(false);

	useEffect(() => {
			//  componentDidMount
			console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > useEffect() > componentDidMount');

			//  componentDidUpdate
			if (clicked) {
				console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > useEffect() > componentDidUpdate > clicked: ', clicked);
			}

			//  componentWillUnmount
			return () => {
				//  some effects might require cleanup
				console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > useEffect() > componentWillUnmount > cleanup phase');
			};
		},
		[clicked]
	);

	const doThemeToggle = () => {
		console.log('>>>>>>>>>>>>>>>>>>>>>>>> NavBar > onClick > doThemeToggle');
		dispatch(toggleTheme(themeType));
	}

	return (

		<Styles.NavBar className="navbar">

			<div className="container">

				<Styles.Expand>

					<Styles.NavBarBrandLink to='/' className="js-scroll-trigger" onClick={() => setClicked(false)}>Election App</Styles.NavBarBrandLink>

					<Styles.Toggler onClick={() => setClicked(!clicked)}>
						{clicked && (
							<div className="navbar-close"></div>
						)}

						{!clicked && (
							<div className="navbar-open"></div>
						)}
					</Styles.Toggler>

					<Styles.Collapse>

						<Styles.NavBarNav clicked={clicked} className={ clicked ? 'clicked' : '' }>

							<li>
								<Styles.NavBarNavA className="js-scroll-trigger" onClick={doThemeToggle}>
									toggleTheme
								</Styles.NavBarNavA>
							</li>

							{ navLinks.map((item, index) => {
								return (
									<li key={index}>
										<Styles.NavBarNavLink to={item.url} className="js-scroll-trigger" onClick={() => setClicked(false)}>
											{item.title}
										</Styles.NavBarNavLink>
									</li>
								)
							}) }

						</Styles.NavBarNav>

					</Styles.Collapse>
				</Styles.Expand>
			</div>
		</Styles.NavBar>
	);
}
