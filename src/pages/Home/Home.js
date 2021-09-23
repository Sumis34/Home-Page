import React, { Component } from 'react'
import Discord from '../../components/Discord/Discord.js'


export default class Home extends Component {
    shoot() {
        alert("Great Shot!");
    }

    render() {
        return (
            <div>
                <button onClick={this.shoot}>Take the shot!</button>
                <Discord 
                    user="SUMIS" 
                    bot="Test bot" 
                    command="/user" 
                />
            </div>
        )
    }
}
