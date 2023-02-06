import './style.css'
import icon from '../../icon/icon'

const Editor = ()=>{

    return <div className='editor_wrapper'>
        <div className='title'>Hello World</div>
        <div className='info'>
            <span className='info_item'> <span className='icon'>{icon.folder}</span> <span>Coding</span></span>
            <span className='info_item'> <span  className='icon'>{icon.clock}</span> <span>Editado a 21min</span></span>
        </div>
        <div className='branch'>
            <span className='item'>#Laravel</span>
            <span className='item'>#PHP</span>
            <span className='item'>#PostgreSQL</span>
        </div>
        <div className='text'>

            <textarea className='textarea_editor'/>
        </div>
    </div>

}

export default Editor;