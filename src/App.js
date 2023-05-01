import Navbar from './components/Navbar.jsx';
import './App.css';
import SideBar from './components/SideBar.jsx';
import  Navigation  from './components/Navigation.jsx';



const App = ()=>{

    
    return(
        <div className="parent">
            
            <div className='Child-1'></div>
           <Navigation/>
           <SideBar/>
        </div>
    )
}

export default App;