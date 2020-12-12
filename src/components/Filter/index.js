import React, { Component } from 'react';
import { Button } from 'reactstrap';

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
          <div className='filters'>
            <p>Put filters here</p>
          </div>
          </>
        ) : (<Button className='filter-btn' onClick={this.showFilters}>Filter By<i className="fas fa-caret-down icon"></i></Button>)
      }
      </>
    );
  }
}

export default Filter;
