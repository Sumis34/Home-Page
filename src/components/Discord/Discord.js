import React, { Component } from 'react'
import './discord.scss'

export default class Discord extends Component {
    render() {
        return (
            <div class="discord-messages">
                <div class="discord-message">
                <div class="discord-interaction">
                    <img
                    class="discord-interaction-author-avatar"
                    src="/assets/discord-avatar-djs.5d8ce4a1.png"
                    alt=""
                    /><span class="discord-author-info discord-interaction-author-info"
                    ><span class="discord-author-username">{this.props.user} </span
                    ></span
                    ><span class="discord-interaction-command">
                    used
                    <span class="discord-interaction-command-name"> {this.props.command}</span></span
                    >
                </div>
                <div class="discord-message-content">
                    <div class="discord-author-avatar">
                    <img src="https://cdn.discordapp.com/embed/avatars/2.png" alt="" />
                    </div>
                    <div class="discord-message-body">
                    <div>
                        <span class="discord-author-info"
                        ><span class="discord-author-username">{this.props.bot}</span
                        ><span class="discord-author-bot-tag"> Bot </span></span
                        ><span class="discord-message-timestamp">09/22/2021</span>
                    </div>
                    Your tag: User#0001 <br />
                    Your id: 123456789012345678
                    </div>
                </div>
                </div>
            </div>
        )
    }
}