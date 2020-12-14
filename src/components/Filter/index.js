import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class Filter extends Component {
  state = {
    showFilter: false,
  }

  showFilters = () => {
    this.setState({ showFilter: true });
  }

  hideFilters = () => {
    this.setState({ showFilter: false });
  }

  render() {
    return (
      <>
      { this.state.showFilter
        ? (
          <>
          <Button className='filter-btn' onClick={this.hideFilters}>Filter By<i className="fas fa-caret-up icon"></i></Button>
          <Form className='filters'>
            <FormGroup className='filter-group' tag='category'>
              <legend>Category</legend>
              <FormGroup check>
                <Label check>
                  <Input type='checkbox' />{' Physical'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type='checkbox' />{' Social'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type='checkbox' />{' Emotional'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type='checkbox' />{' Creative'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type='checkbox' />{' Practical'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type='checkbox' />{' Spiritual'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type='checkbox' />{' Intellectual'}
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup className='filter-group' tag='time'>
              <legend>Time</legend>
              <FormGroup check>
                <Label check>
                  <Input type='checkbox' />{' 0-15 minutes'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type='checkbox' />{' 15-30 minutes'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type='checkbox' />{' 30-45 minutes'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type='checkbox' />{' 45-60 minutes'}
                </Label>
              </FormGroup>
            </FormGroup>
          </Form>
          <Button className='apply-filters-btn'>FILTER</Button>
          </>
        ) : (<Button className='filter-btn' onClick={this.showFilters}>Filter By<i className="fas fa-caret-down icon"></i></Button>)
      }
      </>
    );
  }
}

export default Filter;
