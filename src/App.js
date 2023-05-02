import Navbar from './components/Navbar.jsx';
import './App.css';
import SideBar from './components/SideBar.jsx';
import  Navigation  from './components/Navigation.jsx';



const App = ()=>{

    
    return(

        <div className="pp">


        <div className="parent">
            
            
           <Navigation/>
           <SideBar/>
        </div>
        </div>
    )
}

export default App;