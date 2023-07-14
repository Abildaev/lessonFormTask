export function TextInput({type, placeholder, name, label, required}) {
        return (

                <label className="label">
                    <span>{label}</span>
                    <span className="input-wrapper">
                        {name === "username" && "@"}
                        <input
                            type={type}
                            placeholder={placeholder}
                            name={name}
                            className="input"
                            required={required}
                        />
                    </span>
                </label>


        )
}