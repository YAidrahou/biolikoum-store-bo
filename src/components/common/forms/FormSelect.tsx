const FormSelect = ({
    value,
    label,
    keyInput,
    options,
    handleChange
}: {
    value: any,
    label: string,
    keyInput: string,
    options: any,
    handleChange: (value:any) => any
}) => {

    return (
        <div className="">
            <label htmlFor={keyInput} className="block text-sm/6 font-medium text-gray-900">{label}</label>
            <div className="mt-2 grid grid-cols-1">
            <select 
                value={value}
                name={keyInput}
                id={keyInput}  
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={(e) => handleChange(e.target.value)}>
                    <option value="" > Select </option>
                {
                    options.map((option:any) => (
                        <option key={option._id} value={option._id}>
                            {option.name}
                        </option>
                    ))
                }    
              
            </select>
            <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
    );
}

export default FormSelect;
