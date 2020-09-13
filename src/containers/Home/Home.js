import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/Button';
import * as Styles from './styles';

export const Home = () => {

	const styles = require('./styles/HomeStyles.scss');

	return (

		<div className={styles.home}>

			<Helmet title="Home" />

			{/* ---------------------------------------------- */}

			<div className={`mb-5 ${styles.masthead}`}>

				<div className="container">

					<div className={`${styles.headingMain}`}>App 2020</div>

					<div className={`font-tester-font2 ${styles.headingMainSub}`}>The Primary is right around the corner!</div>

					<div className={styles.blurb}>What are you and others saying?</div>

					<div className={styles.blurbElipsis}>... join the conversation.</div>

					<div>
            <Button type="button" className="btn-primary" onClick={() => false}>
              Sign Up Now »
            </Button>
					</div>

				</div>

			</div>

			{/* ---------------------------------------------- */}

			<div className="container">

				<div className={`mb-5 cardContainerGrid`}>

					<div className="container-padding-border-radius-2">
						<div>
							<h4>Card Title 1</h4>
							<div>
								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
							</div>
							<div>
								<a href="#">More Info</a>
							</div>
						</div>
					</div>

					<div className="container-padding-border-radius-2">
						<div>
							<h4>Card Title 2</h4>
							<div>
								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
							</div>
							<div>
								<a href="#">More Info</a>
							</div>
						</div>
					</div>

					<div className="container-padding-border-radius-2">
						<div>
							<h4>Card Title 3</h4>
							<div>
								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
							</div>
							<div>
								<a href="#">More Info</a>
							</div>
						</div>
					</div>

				</div>

			</div>
		</div>
	);
}
