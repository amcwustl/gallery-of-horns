import React from 'react';
import Form from 'react-bootstrap/Form';

class HornForm extends React.Component {
  render(){
    return (
      <Form>
          <Form.Select onChange={this.props.handleSelect}>
            <option value="">Select Number of Horns</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Select>
        </Form>
    )
  }
}

export default HornForm;