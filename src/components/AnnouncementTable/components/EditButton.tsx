import { ActionIcon } from '@mantine/core';
import { IconEdit } from '@tabler/icons';
import React from 'react';

export const EditButton: React.FunctionComponent = () => {
  return (
    <ActionIcon>
      <IconEdit />
    </ActionIcon>
  );
};
