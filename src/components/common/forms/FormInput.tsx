const FormInput = ({
    value,
    label,
    keyInput,
    type,
    handleChange
}: {
    value: any,
    label: string,
    keyInput: string,
    type: string,
    handleChange: (value:any) => any
}) => {

    return (
        <div className="">
            <label htmlFor={keyInput} className="block text-sm/6 font-medium text-gray-900">{label}</label>
            <div className="mt-2">
                <input
                    value={value}
                    type={type} name={keyInput} id={keyInput}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default FormInput;