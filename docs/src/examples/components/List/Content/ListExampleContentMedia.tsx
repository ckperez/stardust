import React from 'react'
import { List } from 'stardust'

const items = [
  {
    key: 'sensor',
    content: 'If we program the sensor, we can get to the SAS alarm through the haptic SQL card!',
    contentMedia: '7:26:56 AM',
  },
  {
    key: 'ftp',
    content: 'Use the online FTP application, then you can input the multi-byte application!',
    contentMedia: '11:30:17 PM',
  },
  {
    key: 'gb',
    content: 'The GB pixel is down, navigate the virtual interface!',
    contentMedia: '5:22:40 PM',
  },
]

const ListExample = () => <List items={items} />

export default ListExample
