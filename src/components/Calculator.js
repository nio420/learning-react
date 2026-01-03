import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TempInput from './TempInput';
import { toCelsius, toFahrenheit, convert } from '../lib/Convert';

export default class Calculator extends React.Component {
  state = {
    temperature: '',
    scale: ''
  };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TempInput scale="c" temperature={celsius} onTemp={this.handleChange} />
        <TempInput scale="f" temperature={fahrenheit} onTemp={this.handleChange} />
        <BoilingVerdict celsius={celsius !== '' ? parseFloat(celsius) : null} />
      </div>
    );
  }
}
