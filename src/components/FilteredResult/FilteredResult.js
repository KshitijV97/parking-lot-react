export const FilteredResult = ({ values }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				margin: '1em',
			}}
		>
			{values.map((value) => (
				<div
					style={{
						textAlign: 'center',
						width: '15vw',
						backgroundColor: 'white',
						padding: '0.3em',
					}}
				>
					{value}
				</div>
			))}
		</div>
	);
};
