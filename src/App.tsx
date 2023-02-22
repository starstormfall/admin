import { Container } from '@mantine/core';
import React from 'react';
import { AnnouncementTable } from './components/AnnouncementTable';

const App: React.FunctionComponent = () => {
  return (
    <Container size={2000} px="md">
      <AnnouncementTable />
    </Container>
  );
};

export default App;
