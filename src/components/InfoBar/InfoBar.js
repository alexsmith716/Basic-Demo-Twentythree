import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadInfo } from '../../redux/modules/info';
import Loading from '../Loading/Loading';
import { Button } from '../Button';

export const InfoBar = () => {

	const styles = require('./scss/InfoBar.scss');

	const data = useSelector(state => state.info.data);
	const loading = useSelector(state => state.info.loading);
	const error = useSelector(state => state.info.error);
	const errorResponse = useSelector(state => state.info.errorResponse);

	const dispatch = useDispatch();

	console.log('>>>>>>>>>>>>>>>>>>>>>>>> InfoBar > data					????: ', data);
	console.log('>>>>>>>>>>>>>>>>>>>>>>>> InfoBar > loading				????: ', loading);
	console.log('>>>>>>>>>>>>>>>>>>>>>>>> InfoBar > error					????: ', error);
	console.log('>>>>>>>>>>>>>>>>>>>>>>>> InfoBar > errorResponse	????: ', errorResponse);

	const doLoadInfo = async () => {
		try {
			await dispatch(loadInfo())
		}
		catch (error) { 
			console.log(error.message)
		}
	}

	return (

		<div className="container">
			<div className="flex-column-center bg-lightskyblue-1 mb-5">
				<div className={`${styles.infoBar}`}>

					{/* (>>>>>>>>>>>>>>>>>>>>>> LOADING >>>>>>>>>>>>>>>>>>>>>>>>) */}
					{loading && (
						<Loading text="Loading" />
					)}

					{/* (>>>>>>>>>>>>>>>>>>>>>> ERROR >>>>>>>>>>>>>>>>>>>>>>>>) */}
					{error && (
						<>
							<div>RENDERING ERROR</div>
							<div>{`Message: ${errorResponse.message}`}</div>
							<div>{`Url: ${errorResponse.documentation_url}`}</div>
						</>
					)}

					{/* (>>>>>>>>>>>>>>>>>>>>>>>> LOADED >>>>>>>>>>>>>>>>>>>>>>>>) */}
					{!loading && (
						<>
							<div>InfoBar message: '<span className={styles.message}>{data ? data.message : 'no message!'}</span>'</div>
							<div>{data && new Date(data.time).toString()}</div>
							<div>{data && data.timeElapsed}</div>

							<div className="mt-2">
								<Button type="button" className="btn-primary" onClick={doLoadInfo}>
									Reload from server
								</Button>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
