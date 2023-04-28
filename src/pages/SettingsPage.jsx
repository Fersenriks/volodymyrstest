import React, { useContext } from 'react';

import { ResourcesContext } from '../routes/PrivateRoutes';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const workersColumns = [{ id: 'name', label: 'Full Name' }];
const productsColumns = [{ product: 'Product', price: 'Price' }];
const clientsColumns = [{ name: 'Client' }];

const SettingsPage = () => {
  const { workers, products, clients } = useContext(ResourcesContext);

  return (
    <div>
      <TableContainer>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {workersColumns.map((item) => (
                <>
                  <TableCell>#</TableCell>
                  <TableCell key={item.id}>{item.label}</TableCell>
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {workers.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{++index}</TableCell>
                <TableCell>{item.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {productsColumns.map((item) => (
                <>
                  <TableCell>{item.product}</TableCell>
                  <TableCell key={item.id}>{item.price}</TableCell>
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {clientsColumns.map((item, index) => (
                <TableCell key={index}>{item.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SettingsPage;
