import React from 'react';

import DropDown from './DropDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CreateOrderModal from '../Modal/CreateOrderModal';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 26,
  },
  tools: {
    display: 'flex',
    '& > *:not(:last-child)': {
      marginRight: 16,
    },
  },
  input: {
    width: 300,
    height: 40,
    borderRadius: 6,
    padding: '13px 20px',
    background: '#FFFFFF',
    boxShadow: '0px 7px 20px rgba(45, 46, 44, 0.05)',
    border: 'none',
  },
});

const statusOptions = [
  { value: null, label: 'Show all' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
  { value: 'preparing', label: 'Preparing' },
  { value: 'in-progress', label: 'In-progress' },
];

const filterOptions = [
  { value: null, label: 'Show all' },
  { value: 'client', label: 'Client Name' },
  { value: 'price', label: 'Price' },
  { value: 'deliveryDate', label: 'Delivery date' },
  { value: 'deliveryman', label: 'Deliveryman' },
];

const ToolBar = ({ onChangeStatus, onChangeSort, onChangeSearch }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span>Orders</span>
      <div className={classes.tools}>
        <input
          placeholder='Search Order'
          className={classes.input}
          type='text'
          onChange={(event) => onChangeSearch(event.target.value)}
        />
        <DropDown
          onChange={onChangeStatus}
          options={statusOptions}
          label='Status'
          icon={<KeyboardArrowDownIcon />}
        />
        <DropDown
          onChange={onChangeSort}
          options={filterOptions}
          label='Sort'
          icon={<FilterListIcon />}
        />
        <CreateOrderModal />
      </div>
    </div>
  );
};

export default ToolBar;
