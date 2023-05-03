const RcSelect = ({ options, defaultValue, value, onChange }) => {

    return (
        <select className='rc-select'
                value={value}
                onChange={event => onChange(event.target.value)}>
            <option disabled value=''>{ defaultValue }</option>
            { options?.map(option =>
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export default RcSelect;