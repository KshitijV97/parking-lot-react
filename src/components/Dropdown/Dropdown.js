// Reusable component to render a Dropdown

export const Dropdown = ({ label, value, options, onChange, placeholder }) => {
	return (
		<label>
			<span style={{ padding: '1em' }}>{label}</span>

			<select value={value} onChange={onChange}>
				<option value='' selected disabled>
					{placeholder}
				</option>
				{options.map((option, index) => (
					<option value={option.value} key={index}>
						{option.label}
					</option>
				))}
			</select>
		</label>
	);
};
