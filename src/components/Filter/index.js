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
    timeFilters: [],
    categoryFilters: [],
    showFilter: false,
  }

  selectedCategoryFilters = [];

  selectedTimeFilters = [];

  showFilters = () => {
    this.setState({ showFilter: true });
  }

  hideFilters = () => {
    this.setState({ showFilter: false });
  }

  handleInputChange = (e) => {
    if (this.selectedTimeFilters.includes(e.target.value) && Number.isInteger(parseInt(e.target.value, 10))) {
      const removedFilterArray = this.selectedTimeFilters.filter((filter) => filter !== e.target.value);
      this.selectedTimeFilters = removedFilterArray;
      this.setState({ timeFilters: this.selectedTimeFilters });
    } else if (this.selectedCategoryFilters.includes(e.target.value) && !Number.isInteger(parseInt(e.target.value, 10))) {
      const removedFilterArray = this.selectedCategoryFilters.filter((filter) => filter !== e.target.value);
      this.selectedCategoryFilters = removedFilterArray;
      this.setState({ categoryFilters: this.selectedCategoryFilters });
    } else if (Number.isInteger(parseInt(e.target.value, 10))) {
      this.selectedTimeFilters.push(e.target.value);
      this.setState({ timeFilters: this.selectedTimeFilters });
    } else if (!Number.isInteger(parseInt(e.target.value, 10))) {
      this.selectedCategoryFilters.push(e.target.value);
      this.setState({ categoryFilters: this.selectedCategoryFilters });
    }
  }

  render() {
    return (
      <>
      { this.state.showFilter
        ? (
          <>
          <Button className='filter-btn' onClick={this.hideFilters}>Filter By<i className="fas fa-caret-up icon"></i></Button>
          <Form className='filters'>
            <FormGroup className='filter-group'>
              <legend>Category</legend>
              <FormGroup check>
                <Label check>
                  <Input onChange={this.handleInputChange} value='Physical' type='checkbox' />{' Physical'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input onChange={this.handleInputChange} value='Social' type='checkbox' />{' Social'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input onChange={this.handleInputChange} value='Emotional' type='checkbox' />{' Emotional'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input onChange={this.handleInputChange} value='Creative' type='checkbox' />{' Creative'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input onChange={this.handleInputChange} value='Practical' type='checkbox' />{' Practical'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input onChange={this.handleInputChange} value='Spiritual' type='checkbox' />{' Spiritual'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input onChange={this.handleInputChange} value='Intellectual' type='checkbox' />{' Intellectual'}
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup className='filter-group'>
              <legend>Time</legend>
              <FormGroup check>
                <Label check>
                  <Input onChange={this.handleInputChange} value='1' type='checkbox' />{' 0-15 minutes'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input onChange={this.handleInputChange} value='2' type='checkbox' />{' 15-30 minutes'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input onChange={this.handleInputChange} value='3' type='checkbox' />{' 30-45 minutes'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input onChange={this.handleInputChange} value='4' type='checkbox' />{' 45-60 minutes'}
                </Label>
              </FormGroup>
            </FormGroup>
          </Form>
          <Button className='apply-filters-btn' id='apply-filters' onClick={(e) => { this.props.filterActivities(e, this.state.timeFilters, this.state.categoryFilters); } }>FILTER</Button>
          </>
        ) : (<Button className='filter-btn' onClick={this.showFilters}>Filter By<i className="fas fa-caret-down icon"></i></Button>)
      }
      </>
    );
  }
}

export default Filter;
