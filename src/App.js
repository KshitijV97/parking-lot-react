/**
 * * Registration numbers of all cars of a particular Color.
 * Ticket number in which a car with a given registration number is placed.
 * Ticket numbers of all ticket where a car of a particular color is placed.
 */

import React, { useEffect, useState } from 'react';

import './App.css';
import ParkingSize from './components/ParkingLotSize/ParkingLotSize';
import ParkingLot from './components/ParkingLot/ParkingLot';
import Queries from './components/Queries/Queries';

import { initializeParking } from './functions/initializeParking';

function App() {
	const [parkingLotSize, setParkingLotSize] = useState(0);

	const [parkingLot, setParkingLot] = useState([]);

	useEffect(() => {
		if (parkingLotSize > 0) {
			setParkingLot(initializeParking(parkingLotSize));
		}
	}, [parkingLotSize]);

	/*
	Logging for Debugging
	*/
	useEffect(() => {
		console.log('LOGS | New parking lot size is', parkingLotSize);
	}, [parkingLotSize]);

	useEffect(() => {
		console.log('LOGS | New parking lot is', parkingLot);
	}, [parkingLot]);

	return (
		<div className='App'>
			<ParkingSize setParkingLotSize={setParkingLotSize} />
			<Queries parkingLot={parkingLot} setParkingLot={setParkingLot} />
			<ParkingLot parkingLot={parkingLot} />
		</div>
	);
}

export default App;

/**
 * Car
 * -> ticketNumber
 * -> color
 * -> registrationNumber
 */
