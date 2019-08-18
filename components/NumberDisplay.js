import React from 'react';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';


export default class NumberDisplay extends React.Component {

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <FormControl
          aria-describedby="speed-helper-text"
        >
          <Input
            id="adornment-speed"
            value="214.34"
            onChange={this.handleChange}
            endAdornment={<InputAdornment position="end">km/h</InputAdornment>}
            inputProps={{
              'aria-label': 'Speed',
            }}
          />
          <FormHelperText id="speed-helper-text">Speed</FormHelperText>
        </FormControl>
      </div>
    );
  }
}