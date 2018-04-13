import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

//import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById('root')
);



//--------------------------------------------- L O G G E R ------------------------------------------------

class Logger extends React.Component {

    //------------- constructor -----------------
    constructor(props){
        super(props); //pass props down

        this.xxx = 'AAAAAA <br/>';

        //------------- state props ------------------
        this.state = {
            txt: "...empty...",
        };
    }

    addLog(str) {
        this.props.txt += str + "<br/>";
        //this.setState({ txt: "xxxx add new value" })
    }

    render(){
        return(
            <div id="loggerContent">
                empty logger content <br/>
            </div>
        );
    }
}

ReactDOM.render(
    <Logger />,
    document.getElementById('console')
);


//Logger.addLog("XXXXXX");
var $console = document.getElementById('loggerContent');

const log = input => {
    $console.innerHTML += input + "<br/>";
}

//test
log("test 1 2 3 ");













registerServiceWorker();