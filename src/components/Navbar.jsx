import img from '../logo1 1.png';
import {useState,useEffect} from 'react';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const Navbar = ()=>{

  const [show,setShow] = useState("translate-y-0");
    const [lastScrollY,setLastScrollY] = useState(0);

    const controlNavbar = ()=>{

        if(window.scrollY>200){
            if(window.scrollY>lastScrollY){
                setShow("-translate-y-[80px]")

            }else{
                setShow("shadow-sm")
            }

        }else{
            setShow("translate-y-0")
        }

        setLastScrollY(window.scrollY)

    }

    useEffect(()=>{
        window.addEventListener("scroll",controlNavbar);
        return ()=>{
            window.removeEventListener("scroll",controlNavbar)
        }
    },[lastScrollY])


  return(
    <div style={{transition:'transform' , transitionDuration:"300", translate:{show} }} className="Child-2">

      
      <img  src={img} alt="image"/>

      <div className='item-2'>
      <NotificationsOutlinedIcon className='icon'/>
      <div className='avtar'></div>
      <KeyboardArrowDownOutlinedIcon className='icon2'/>;
      </div>

    </div>
  )
}

export default Navbar;