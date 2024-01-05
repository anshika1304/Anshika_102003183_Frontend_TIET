import ListOutlinedIcon from "@mui/icons-material/ListOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import {BsBell, BsChatDots, BsDroplet, BsPersonCircle} from 'react-icons/bs'
import helloIcon from './hello.png'
import uploadIcon from './upload.PNG'
import avatarIcon from './avatar.png'
import { Margin } from "@mui/icons-material"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                    <div className='item' >
                        <ListOutlinedIcon /> 
                    </div>
                    <div className='item'>
                    <span>Hello</span> <span>Mad</span>
                    </div>
                <img src={helloIcon} alt="Hi Icon" style={{ width: '20px', height: '20px' }} className='icon_header'/>
                <div className='search'>
                    <input type="text" placeholder="Search here"/>
                    <SearchOutlinedIcon />
                </div>
                <div className='items'>
                    <div className='item'>
                        <img src={uploadIcon} alt="Upload Icon" style={{ width: '70px', height: '40px' }} className='icon'/>
                    </div>
                    <div className='item'>
                        <BsBell className='icon'/>
                        <div className='counter'>2</div>
                    </div>
                    <div className='item'>
                        <BsChatDots className='icon'/>
                    </div>
                    <div className='item'>
                        <BsDroplet className='icon'/>
                    </div>
                    <div className='item'>
                        <img
                            src={avatarIcon}
                            alt=""
                            className='avatar'
                        />
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Navbar