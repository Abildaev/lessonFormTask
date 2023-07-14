export function RadioInput({type, value, name, label, required}) {

    return (

        <label className="label-inline">
            <span>{label}</span>
            <input
                type={type}
                name={name}
                value={value}
                className="input"
                required={required}
            />
        </label>

    )

}