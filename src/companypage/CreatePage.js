import './createpage.css'
import FilePicker from './FilePicker';
import LinkInput from './LinkInput';
import Range from './Range';



function CreatePage(){
   
    return (
        <form>
        <h2>Создание и редактирование кампании</h2>   
        <div className='createfield'>
            <div className='downfile'>
               <FilePicker />
            </div>
            <div className='inputPart'>
                <input type='text' placeholder='Название*'/>
                <input type='text' placeholder='Дата старта*'/>
                <LinkInput />
            </div>
        </div>
        <div className='createfield2'>
            <div className='info'>
                <p>100 показов = 300 руб</p>
                <p>Итоговая стоимость</p>
            </div>
            <div className='rangePart'>
                <Range />
                
            </div>
        </div>
        <input type='submit' className='submit' />          
        </form>
    )
}

export default CreatePage;