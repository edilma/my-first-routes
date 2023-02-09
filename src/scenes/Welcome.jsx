import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default function Welcome({setIsLoggedIn}){
    return(
        <>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to react</h1>
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        <Link to="/home" className="App-link">Home</Link>
        </>
    )
}