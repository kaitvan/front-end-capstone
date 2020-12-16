import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { addActivity } from '../../helpers/data/activityData';

class AddActivityForm extends Component {
  state = {
    title: this.props.activity?.title || '',
    time: this.props.activity?.time || '',
    uid: this.props.user,
    category: this.props.activity?.category || '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    addActivity(this.state).then(() => {
      this.props.onSave();
    });

    this.props.toggle();
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="title">Activity</Label>
          <Input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title} placeholder="Add a title" />
        </FormGroup>
        <FormGroup>
          <Label for="time">How much time does this activity take?</Label>
          <Input type="select" name="time" id="time" onChange={this.handleChange} value={this.state.time}>
            <option></option>
            <option value='1'>0-15 minutes</option>
            <option value='2'>15-30 minutes</option>
            <option value='3'>30-45 minutes</option>
            <option value='4'>45-60 minutes</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="category">Which category best fits this activity?</Label>
          <Input type="select" name="category" id="category" onChange={this.handleChange} value={this.state.category}>
            <option></option>
            <option value='Physical'>Physical</option>
            <option value='Social'>Social</option>
            <option value='Emotional'>Emotional</option>
            <option value='Creative'>Creative</option>
            <option value='Practical'>Practical</option>
            <option value='Spiritual'>Spiritual</option>
            <option value='Intellectual'>Intellectual</option>
          </Input>
        </FormGroup>
        <Button onClick={this.handleSubmit}>Add Activity to My List</Button>
      </Form>
    );
  }
}

export default AddActivityForm;
