import { useEffect, useState } from 'react';
import { getRegistrationNumbersByColor } from '../../functions/getRegistrationNumbersByColor';
import { Dropdown } from '../Dropdown/Dropdown';
import { FilteredResult } from '../FilteredResult/FilteredResult';

export const DisplayRegistrationNumbersByColor = ({
	parkingLot,
	availableColors,
}) => {
	useEffect(() => {
		setColorFilterRegistration({
			label: '',
			value: '',
		});
		setColorFilteredRegistratioNumbers([]);
	}, [parkingLot]);

	const [colorFilterRegistration, setColorFilterRegistration] = useState({
		label: '',
		value: '',
	});

	const [
		colorFilteredRegistrationNumbers,
		setColorFilteredRegistratioNumbers,
	] = useState([]);

	useEffect(() => {
		if (colorFilterRegistration?.value) {
			setColorFilteredRegistratioNumbers(
				getRegistrationNumbersByColor(
					parkingLot,
					colorFilterRegistration.label
				)
			);
		}
	}, [colorFilterRegistration]);

	/**
	 * Logging for Debugging
	 */
	useEffect(() => {
		console.log(
			`LOGS | Registration numbers of color ${colorFilterRegistration.label} are `,
			colorFilteredRegistrationNumbers
		);
	}, [colorFilteredRegistrationNumbers]);

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Dropdown
					label='Get registration number of cars of a particular color'
					placeholder='COLOR'
					options={availableColors}
					onChange={(event) => {
						let selectedColor = availableColors.filter(
							(color) => color.value === event.target.value
						)[0];
						setColorFilterRegistration(selectedColor);
					}}
				/>
				<button
					style={{
						backgroundColor: 'white',
						border: 'none',
						textAlign: 'center',
						textDecoration: 'none',
						display: 'inline-block',
						marginLeft: '1em',
						cursor: 'pointer',
					}}
					onClick={() => {
						setColorFilterRegistration({
							label: '',
							value: '',
						});
						setColorFilteredRegistratioNumbers([]);
					}}
				>
					Clear results
				</button>
			</div>
			<div>
				{colorFilteredRegistrationNumbers.length > 0 ? (
					<div>
						<FilteredResult
							values={colorFilteredRegistrationNumbers}
						/>
					</div>
				) : null}
			</div>
		</div>
	);
};
