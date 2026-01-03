import React from 'react';

class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        const {change: currentChange, locale: currentLocale} = this.props;
        const {change: nextChange, locale: nextLocale } = nextProps;
        if(currentChange === nextChange && currentLocale === nextLocale){
            return false;
        } else{
            return true;
        }
    }
    render(){
        const { show } = this.props;
        console.log(`button render`);
        const {change, locale} = this.props;
        return(
            <>
            <button type='button' onClick={()=> change(locale) }> {locale === 'en-US' ? 'Click English' : ' Click Bangla'} </button>
            {show && <h1> hello babayaga</h1> }
            </>
        )
    }
}

export default Button;