import React from 'react';

import Button from '@mui/material/Button';

const CreateButton = ({ label, icon, onClick }) => {
  return (
    <Button variant='contained' startIcon={icon} onClick={onClick}>
      {label}
    </Button>
  );
};

export default CreateButton;
