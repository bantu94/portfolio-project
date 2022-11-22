import ReactDOM  from "react-dom";


// importing the App 
import App from "./App";

// importing stylings for index.js 
import './index.css'

// connecting the App to the root id the /public/index
ReactDOM.render(<App/>, document.querySelector('#root'))