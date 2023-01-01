import { useState,useEffect } from 'react'
import List from './list'
import Form from './form'

function Container() {
    const [form, setForm] = useState("")
    const [forms, setForms] = useState([])

    return (
        <div id='container'>
            <h1 className='animate__bounceInDown'>TO DO LIST</h1>
            <Form forms={forms} setForms={setForms} form={form} setForm={setForm} />
            <List forms={forms} setForms={setForms} />
        </div>
    )
}

export default Container