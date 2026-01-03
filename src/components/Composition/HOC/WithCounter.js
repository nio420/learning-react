import React from 'react'

const WithCounter = (OrginalComponent) => {
    class newComponent extends React.Component {
        state = {
        count: 0
    }

    incrementCount = () => {
        this.setState((prevstate) => ({count : prevstate.count + 1}))
    }
    render(){
        const {count} = this.state
        return <OrginalComponent count={count} incrementCount= {this.incrementCount} />
    } 
}
    return newComponent;
}
export default WithCounter;