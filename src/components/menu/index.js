import './style.css'
import icon from '../../icon/icon'

const Menu = ()=>{

    return <div className='menu_wrapper'>
        <div className='search_bar'>
            {icon.search}
        </div>
        <div>
            <div>
                {icon.panel}
            </div>
            <div className='panel'>
                <span className='panel_item'>#Node.js</span>
                <span className='panel_item active'>#Laravel</span>
                <span className='panel_item'>#HTML</span>
                <span className='panel_item active'>#PostgreSQL</span>
                <span className='panel_item'>#CSS</span>
            </div>
        </div>
        <div className='notes'>
            <div className='notes_item'>
                <div className='note_title'>Docker Images</div>
                <div className='note_text'>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem ...</div>
                <div className='note_action'>{icon.action}</div>
            </div>
            <div className='notes_item'>
                <div className='note_title'>Docker Images</div>
                <div className='note_text'>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem ...</div>
                <div className='note_action'>{icon.action}</div>
            </div>
        </div>

    </div>

}

export default Menu;