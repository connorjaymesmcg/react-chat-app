import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import ChannelContainer from './Components/ChannelContainer';
import ChannelListContainer from './Components/ChannelListContainer';

const apiKey = process.env.REACT_APP_STREAM_KEY;

// Create instance of Stream chat with API key
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team light'>
        <ChannelContainer />
        <ChannelListContainer />
      </Chat>
    </div>
  );
};

export default App;
