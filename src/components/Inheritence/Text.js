import emoji from "./emoji";

export default class Text extends emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        const decorateText = this.addEmoji('i am a javascript', '❤')
        return super.render(decorateText);
    }
}