import React from 'react';

export default class emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
    
    render(){
            return this.props.children({addEmoji: this.addEmoji})
    }
}