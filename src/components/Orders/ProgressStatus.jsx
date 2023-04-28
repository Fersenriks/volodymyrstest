import React, { memo } from 'react';

import { STATUSES } from '../../constants';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 119,
    background: '#EAE9FF',
    borderRadius: 6,
    padding: '2px 14px 2px 14px',
  },
  preparing: {
    backgroundColor: '#EFFCA4',
  },
  inProgress: {
    backgroundColor: '#EAE9FF',
  },
  completed: {
    backgroundColor: '#E1FFE3',
  },
  cancelled: {
    backgroundColor: '#FFE6E3',
  },
});

const ProgressStatus = ({ status }) => {
  const classes = useStyles();

  const selectStatus = () => {
    switch (status) {
      case STATUSES.PREPARING: {
        return {
          color: 'preparing',
          label: 'Preparing',
        };
      }
      case STATUSES.IN_PROGRESS: {
        return {
          color: 'inProgress',
          label: 'In-progress',
        };
      }
      case STATUSES.COMPLETED: {
        return {
          color: 'completed',
          label: 'Completed',
        };
      }
      case STATUSES.CANCELLED: {
        return {
          color: 'cancelled',
          label: 'Cancelled',
        };
      }
    }
  };

  return (
    <div className={clsx(classes.root, classes[selectStatus()?.color])}>
      {selectStatus()?.label}
    </div>
  );
};

export default memo(ProgressStatus);
