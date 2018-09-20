import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container">
                <div className="row">
                    <div className="col-lg-2 offset-lg-5">
                        <h2>Autools</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 offset-lg-3">
                        <div className="card">
                            <img className="card-img-top" src="../public/visualyserlogo.png" alt="visualyser logo"/>
                            <div className="card-body">
                                <p className="card-text">Visualyser</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">Announcem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
