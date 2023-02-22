import React from 'react';

import { Table } from '@mantine/core';
import { DeleteButton, EditButton } from './components';

export const AnnouncementTable: React.FunctionComponent = () => {
  const announcementData = [
    {
      id: 'id',
      status: 'active',
      preview: 'preview',
      displayStarts: '',
      displayEnds: '',
      announcementType: 'System Maintenance',
      lastUpdated: '',
      editIcon: <DeleteButton />,
      deleteIcon: <EditButton />
    },
    {
      id: 'id',
      status: 'active',
      preview: 'preview',
      displayStarts: '',
      displayEnds: '',
      announcementType: 'System Maintenance',
      lastUpdated: '',
      editIcon: <DeleteButton />,
      deleteIcon: <EditButton />
    },
    {
      id: 'id',
      status: 'expired',
      preview: 'preview',
      displayStarts: '',
      displayEnds: '',
      announcementType: 'New Release',
      lastUpdated: '',
      editIcon: <DeleteButton />,
      deleteIcon: <EditButton />
    }
  ];

  const rows = announcementData.map((announcement) => (
    <tr key={announcement.id}>
      <td>{announcement.status}</td>
      <td>{announcement.preview}</td>
      <td>{announcement.displayStarts}</td>
      <td>{announcement.displayEnds}</td>
      <td>{announcement.announcementType}</td>
      <td>{announcement.lastUpdated}</td>
      <td>{announcement.editIcon}</td>
      <td>{announcement.deleteIcon}</td>
    </tr>
  ));

  const tableHeader = [
    'Status',
    'Preview',
    'Display Start',
    'Display End',
    'Announcement Type',
    'Last Updated',
    ' ',
    ' '
  ];

  const renderTableHead = tableHeader.map((header, index) => <th key={index}>{header}</th>);

  // status  |  preview  |  display starts  |  display ends  |  announcement type  |  last updated |  editIcon  |  deleteIcon
  return (
    <>
      <Table>
        <thead>
          <tr>{renderTableHead}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};
