import React from 'react'
import { List } from 'stardust'
import faker from 'faker'
import { rem } from 'src/lib'

const imgStyle = { display: 'block', width: rem(2.8), borderRadius: rem(999) }
const getAvatar = () => <img src={faker.internet.avatar()} style={imgStyle} />

const listItems = [
  {
    media: getAvatar(),
    header: 'Irving Kuhic',
    headerMedia: '7:26:56 AM',
    content: 'If we program the sensor, we can get to the SAS alarm through the haptic SQL card!',
  },
  {
    media: getAvatar(),
    header: 'Skyler Parks',
    headerMedia: '11:30:17 PM',
    content: 'Use the online FTP application, then you can input the multi-byte application!',
  },
  {
    media: getAvatar(),
    header: 'Dante Schneider',
    headerMedia: '5:22:40 PM',
    content:
      'The GB pixel is down, navigate the virtual interface so we can override the PNG panel!',
  },
]

const ListExampleDefault = ({ knobs }) => <List debug={knobs.debug} items={listItems} />

export default ListExampleDefault