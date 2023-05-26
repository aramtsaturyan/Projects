import { useState } from 'react';
import './createpage.css'
import FilePicker from './FilePicker';
import LinkInput from './LinkInput';
import Range from './Range';
import { BASE_URL, TOKEN } from '../config';


function CreatePage(){
    const [state, setState] = useState({
        name: "",
        startDate: "",
        url: "",
        maxShowCount: 0,
        content: null
    })

    const handleChange = (e) => {
        setState((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleCountChange = (maxShowCount) => {
        setState((prev) => ({...prev, maxShowCount }))
    }

    const handleContentChange = (content) => {
        setState((prev) => ({...prev, content }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!state.content) {
            console.log("Not selected file");
            return
        }
        const formData = new FormData()
        formData.append("name", state.name)
        formData.append("content", state.content)
        formData.append("maxShowCount", state.maxShowCount)
        formData.append("startDate", state.startDate)
        formData.append("url", state.url)

        fetch(`${BASE_URL}/api/v2/author/company`, {
            method: "POST",
            body: formData,
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        }).then((res) =>{ 
            return res.json()
        }).then((data) => {
            console.log(data);
        })

    }
    return (
        <form onSubmit={handleSubmit}>
        <h2>Создание и редактирование кампании</h2>   
        <div className='createfield'>
            <div className='downfile'>
               <FilePicker handleContentChange={handleContentChange} />
            </div>
            <div className='inputPart'>
                <input name='name' onChange={handleChange} type='text' placeholder='Название*'/>
                <input name='startDate' onChange={handleChange} type='text' placeholder='Дата старта*'/>
                <LinkInput handleStateChange={handleChange} />
            </div>
        </div>
        <div className='createfield2'>
            <div className='info'>
                <p>100 показов = 300 руб</p>
                <p>Итоговая стоимость</p>
            </div>
            <div className='rangePart'>
                <Range handleChange={handleCountChange} />
                
            </div>
        </div>
        <input type='submit' className='submit' />          
        </form>
    )
}

export default CreatePage;