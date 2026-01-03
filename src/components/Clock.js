import React from 'react';
import Button from './Button';

class Clock extends React.Component{
state = { date : new Date(), locale: 'bn-Bd'}

componentDidMount(){
  this.clockTimer = setInterval(() =>{
        this.tick();
    }, 1000)
}
componentWillUnmount(){
    clearInterval(this.clockTimer);
}
tick(){
    this.setState({
        date : new Date(),
    });
}
 handleClick = (locale) => {
  console.log(`the button click success`);
  this.setState({
    // locale : 'en-US'
    locale,
  })
}

  render(){
    const {  locale, } = this.state;
    let button;
    if(locale === 'bn-BD'){
      button = (<Button change={this.handleClick} locale = 'en-US' show={false}></Button>
      );
    } else{
      button = (<Button change={this.handleClick} locale = 'bn-BD' show = {true}></Button>
      );
    }
    console.log(`clock render`);
    return (
      <div className='clock'>
        <h1 className='heading'>
    <span className='text'>hello matherfucker kire {this.props.Clock} {new Date().toLocaleTimeString(this.state.locale)} </span>
  </h1>
  {/* <Button change={this.handleClick} locale = 'en-US'>click here</Button> */}
    {button}
  </div>
    );
  }
}

export default Clock;