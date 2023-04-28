import React, { useContext, useState } from 'react';

import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import { InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import CreateButton from '../ToolsBar/CreateButton';
import ProductItem from './components/ProductItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { ResourcesContext } from '../../routes/PrivateRoutes';

import { v4 as uuidv4 } from 'uuid';
import { useMutation } from 'react-query';
import { createOrder } from '../../resources/orders';
import { STATUSES } from '../../constants';

const useStyles = makeStyles({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow: 24,
    padding: 16,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: 8,
    },
  },
  products: {
    marginTop: 8,
    '& > *:not(:last-child)': {
      marginBottom: 8,
    },
  },
  select: {
    width: '100%',
  },
  product: {
    display: 'flex',
    backgroundColor: '#e1e1e1',
    borderRadius: 4,
    padding: '4px 8px 4px 8px',
    alignItems: 'center',
    '& > *:not(:last-child)': {
      marginRight: 4,
    },
  },
  deliveryDate: {
    display: 'flex',
    flexDirection: 'column',
  },
  deliveryman: {
    marginTop: 8,
    marginBottom: 8,
  },
  control: {
    marginTop: 24,
  },
});

const CreateOrderModal = () => {
  const classes = useStyles();
  const { workers, products } = useContext(ResourcesContext);
  const [open, setOpen] = useState(false);

  const [client, setClient] = useState('');
  const [deliveryDate, setDeliveryDate] = useState(0);
  const [destination, setDestination] = useState('');
  const [worker, setWorker] = useState('');
  const [productsList, setProductsList] = useState([]);

  const mutation = useMutation((newOrder) => createOrder(newOrder));

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    productsList.forEach((item) => {
      const menuItem = products.find((menuItem) => menuItem.id === item);
      totalPrice += menuItem.price;
    });

    return +totalPrice.toFixed(2);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateOrder = () => {
    const order = {
      id: uuidv4(),
      client: client,
      deliveryDate: deliveryDate,
      destination: destination,
      status: STATUSES.PREPARING,
      price: calculateTotalPrice(),
      products: productsList,
      deliveryman: worker,
    };

    mutation.mutate(order);
  };

  const handleSelectWorker = (event) => {
    setWorker(event.target.value);
  };

  const onChangeDestination = (event) => {
    setDestination(event.target.value);
  };

  const onChangeClient = (event) => {
    setClient(event.target.value);
  };

  const handleRemoveProduct = (productId) => {
    const index = productsList.indexOf(productId);

    if (index !== -1) {
      setProductsList((prevState) => prevState.splice(index, 1));
    }
  };

  const handleChangeDate = (event) => {
    setDeliveryDate(Date.parse(event.target.value));
  };

  const handleAddProduct = (productId) => {
    setProductsList((prevState) => [...prevState, productId]);
  };

  return (
    <div>
      <CreateButton onClick={handleOpen} label='Create' icon={<AddIcon />} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className={classes.modal}>
          <div className={classes.form}>
            <TextField
              onChange={(event) => onChangeClient(event)}
              label='Full Name'
              variant='outlined'
              value={client}
            />
            <TextField
              onChange={(event) => onChangeDestination(event)}
              label='Destination'
              variant='outlined'
              value={destination}
            />
            <div>
              <div className={classes.deliveryman}>
                <InputLabel>Deliveryman</InputLabel>
                <Select
                  className={classes.select}
                  value={worker}
                  onChange={handleSelectWorker}
                  displayEmpty
                >
                  {workers.map((item) => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div className={classes.deliveryDate}>
                <label>Delivery Date</label>
                <input onChange={(event) => handleChangeDate(event)} type='date' />
              </div>
            </div>
          </div>
          <div className={classes.products}>
            {products.map((item) => (
              <ProductItem
                key={item.id}
                item={item}
                onAdd={handleAddProduct}
                onRemove={handleRemoveProduct}
              />
            ))}
            <span>Total price: {calculateTotalPrice()}</span>
          </div>
          <Stack direction='row' spacing={2}>
            <Button onClick={() => handleClose()} variant='outlined'>
              Cancel
            </Button>
            <Button
              disabled={mutation.isLoading}
              onClick={() => handleCreateOrder()}
              variant='contained'
            >
              Create
            </Button>
          </Stack>
        </div>
      </Modal>
    </div>
  );
};

export default CreateOrderModal;
