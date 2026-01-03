export default function Text ({ addEmoji, addBracket}){
    let text = ' i am javascript language use for programme';
    if(addEmoji) {
        text = addEmoji(text, '❤');
    }  if (addBracket)
        text = addBracket(text);
    return <div>
        {text}
    </div>
}