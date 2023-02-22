import { ActionIcon } from '@mantine/core';
import { IconTrash } from '@tabler/icons';
import React from 'react';

export const DeleteButton: React.FunctionComponent = () => {
  return (
    <ActionIcon>
      <IconTrash />
    </ActionIcon>
  );
};
