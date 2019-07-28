import React, { Component } from 'react';

import './app.css';


import steamService from "../../services/steamService";
import Header from "../header";
import Loader from '../loader';

export default class App extends Component {

    state = {
        currentPlayerId: '76561197998250364',
        playerSummary: null
    };

    getPlayerSummary = () => {
        const steam = new steamService();
        steam.getPlayerSummaries(this.state.currentPlayerId).then((data) => {
            this.setState({
                playerSummary: data.toString()
            })
        });
    };

    render(){
        const {playerSummary} = this.state;
        if (!playerSummary) {
            this.getPlayerSummary();
        }
        const playerInfo = playerSummary ? playerSummary : <Loader/>;
        console.log(playerSummary);
        return(
            <div>
                <Header />
                <div>{playerInfo}</div>
            </div>
        );
    }
}