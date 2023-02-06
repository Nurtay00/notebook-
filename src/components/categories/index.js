import './style.css'
import Icon from "../../icon/icon";

const Categories = ()=>{

    return <div className='categories_wrapper'>
        <div className='categories_title'>
            Categories
        </div>
        <div className='folders'>
            <div className='folder'>
                <div className='folder_title'>
                    <span className="folder_icon"> {Icon.folder}</span>
                    <span>Coding</span>
                </div>
            </div>
            <div className='folder'>
                <div className='folder_title'>
                    <span className="folder_icon"> {Icon.openFolder}</span>
                    <span>Tasks</span>
                </div>
                <div className='sub_folders'>
                    <div className="sub_folder">
                        <span className="folder_icon">{Icon.list}</span>
                        <span>Task 01</span>
                    </div>
                    <div className="sub_folder">
                        <span className="folder_icon">{Icon.list}</span>
                        <span>Task 01</span>
                    </div>
                    <div className="sub_folder">
                        <span className="folder_icon">{Icon.list}</span>
                        <span>Task 01</span>
                    </div>
                </div>
            </div>
            <div className='folder'>
                <div className='folder_title'>
                    <span className="folder_icon"> {Icon.folder}</span>
                    <span>School</span>
                </div>
            </div>
        </div>
    </div>
}

export default Categories;