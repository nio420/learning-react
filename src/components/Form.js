import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'javascript',
        text: 'textarea',
        library: 'react',
        awesome:  true,
    };

    handleChange = (event) =>{
        if(event.target.type=== 'text'){
                    this.setState ({
            title: event.target.value,
        });
        } else if(event.target.type === 'textarea'){
                    this.setState ({
            text: event.target.value,
        });
        } else if(event.target.type === 'select-one'){
                    this.setState ({
            library: event.target.value,
        });
        } else if(event.target.type === 'checkbox'){
                    this.setState ({
            awesome: event.target.checked,
        });
        } else {
            console.log(`nothing found`);
        }
    }
    submitHandler = (event) =>{
        const { title, text, library, awesome,} = this.state;
        event.preventDefault();  // page reload is off 
        console.log(title, text, library, awesome);
    };

render(){
const { title, text, library, awesome, submit  } = this.state;
    return(
        <div>
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder='enter a name' value={title} onChange={this.handleChange} /> <br /> <br />
                <textarea name="text" placeholder='enter a text' value={text} onChange={this.handleChange}></textarea>
                <br /><br />
                <select  value={library} onChange={this.handleChange}>
                    <option value="react">react</option>
                    <option value="vue">vue</option>
                    <option value="Anguler">Anguler</option>
                </select> <br />
                    <input type="checkbox" checked={awesome} onChange={this.handleChange}  />
                    <br /> <br />
                    <input type="submit" value={submit} />
            </form>
        </div>
    )
}
}