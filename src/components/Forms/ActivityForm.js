import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

class ActivityForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="title">Activity</Label>
          <Input type="text" name="title" id="title" placeholder="Add a title" />
        </FormGroup>
        <FormGroup>
          <Label for="time">How much time does this activity take?</Label>
          <Input type="select" name="time" id="time">
            <option value='1'>0-15 minutes</option>
            <option value='2'>15-30 minutes</option>
            <option value='3'>30-45 minutes</option>
            <option value='4'>45-60 minutes</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="category">Which category best fits this activity?</Label>
          <Input type="select" name="category" id="category">
            <option>Physical</option>
            <option>Social</option>
            <option>Emotional</option>
            <option>Creative</option>
            <option>Practical</option>
            <option>Spiritual</option>
            <option>Intellectual</option>
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default ActivityForm;
