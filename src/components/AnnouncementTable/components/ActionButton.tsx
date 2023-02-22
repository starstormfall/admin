/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ActionIcon } from '@mantine/core';
import { IconTrash, IconEdit } from '@tabler/icons';
import React from 'react';

type Action = 'delete' | 'edit';

interface ActionButtonProps {
  type: Action;
  announcementId: number;
}

export const ActionButton: React.FunctionComponent<ActionButtonProps> = ({
  type,
  announcementId
}) => {
  const renderIcon = (type: Action) => {
    if (type === 'delete') {
      return <IconTrash />;
    } else if (type === 'edit') {
      return <IconEdit />;
    }
  };

  const handleEditClick = (id: number) => {
    alert(`edited announcement ${id}`);
  };

  const handleDeleteClick = (id: number) => {
    alert(`deleted announcement ${id}`);
  };

  const handleClick = (type: Action, id: number) => {
    if (type === 'delete') {
      handleDeleteClick(id);
    } else if (type === 'edit') {
      handleEditClick(id);
    }
  };

  return (
    <ActionIcon
      variant={type === 'delete' ? 'filled' : 'subtle'}
      color={type === 'delete' ? 'red' : 'gray'}
      onClick={() => {
        handleClick(type, announcementId);
      }}>
      {renderIcon(type)}
    </ActionIcon>
  );
};
