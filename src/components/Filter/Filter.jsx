import { useDispatch } from 'react-redux';
import { setValueFilter } from 'redux/contacts/filtersSlice';
import { TextField } from '@mui/material';
import { useState } from 'react';

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const getFilterData = ({ target: { value } }) => {
    setFilter(value);
    dispatch(setValueFilter(value));
  };
  return (
      <TextField
        type="text"
        name="filter"
        onChange={getFilterData}
        value={filter}
        placeholder="Search contact"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        fullWidth
        label="Filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />

 );
};
export default Filter;
