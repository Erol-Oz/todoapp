function Form({ form, setForm, forms, setForms }) {

    const onSumbit = (e) => {
        if (form === "") {
            return false
        }
        e.preventDefault()
        setForms([...forms, form])
        setForm("")
        }
        
    return (
        <div id="form">
            <div id="formItem">
                <input id="input" type="text" value={form} onChange={(e) => setForm(e.target.value)} />
                <button id="frombutton" onClick={onSumbit}>Add</button>
            </div>

        </div>
    )
}

export default Form
