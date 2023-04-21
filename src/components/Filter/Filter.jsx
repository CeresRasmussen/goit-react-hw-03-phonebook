import css from 'components/Filter/Filter.module.css';
import React from 'react';

export const Filter = ({ value, onFilterContacts }) => {
  return (
    <>
      <label className={css.title}>
        Find contact by name
        <input
          type="text"
          value={value}
          name="filter"
          onChange={onFilterContacts}
          placeholder="Enter the filter value..."
        />
      </label>
    </>
  );
};
