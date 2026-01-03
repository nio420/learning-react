import React from 'react';

export default class emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
    
    render(override){
        let text = ' i am a best emoji';

        if(override) text = override;
        return (
            <div>
                {text}
            </div>
        )
    }
}