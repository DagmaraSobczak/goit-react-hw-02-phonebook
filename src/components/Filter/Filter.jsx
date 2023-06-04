import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.css';

export default class Filter extends Component {
  render() {
    const { filteredContacts } = this.props;
    return (
      <>
        <div className={css.wraper}>
          <label className={css.label}>Search contact</label>
          <input
            className={css.input}
            type="text"
            name="filter"
            onChange={filteredContacts}
          />
        </div>
      </>
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};
