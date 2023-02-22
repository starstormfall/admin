/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';

import { Group, ScrollArea, Space, Table } from '@mantine/core';
import { ActionButton } from './components';
import { backendAnnouncementData } from './data/AnnouncementList';
import { useAnnouncementTableStyles } from './styles';

export const AnnouncementTable: React.FunctionComponent = () => {
  const { classes, cx } = useAnnouncementTableStyles();
  const [scrolled, setScrolled] = useState(false);
  const announcementData = backendAnnouncementData;

  const convertUnixToDatetime = (unixTime: number) => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    const date = new Date(unixTime * 1000);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const year = date.getFullYear();
    const month = date.toLocaleString('en-SG', { month: 'long' });
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${dayOfWeek}, ${day} ${month} ${year}, ${hours}:${minutes}`;
  };

  const rows = announcementData.map((announcement) => (
    <tr key={announcement.id}>
      <td>{announcement.status}</td>
      <td>{announcement.preview}</td>
      <td>{convertUnixToDatetime(parseInt(announcement.displayStart))}</td>
      <td>{convertUnixToDatetime(parseInt(announcement.displayEnd))}</td>
      <td>{announcement.announcementType}</td>
      <td>
        {announcement.lastUpdatedBy}
        <Space h="xs" />
        {convertUnixToDatetime(parseInt(announcement.lastUpdatedTimestamp))}
      </td>
      <td>
        <Group>
          <ActionButton type="edit" announcementId={announcement.id} />
          <ActionButton type="delete" announcementId={announcement.id} />
        </Group>
      </td>
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
      <ScrollArea
        sx={{ height: 300 }}
        onScrollPositionChange={({ y }) => {
          setScrolled(y !== 0);
        }}>
        <Table horizontalSpacing="sm" verticalSpacing="md" highlightOnHover>
          <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
            <tr>{renderTableHead}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </>
  );
};
