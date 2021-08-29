import React, { useRef, useEffect} from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container >
      <Messages ref={messagesRef}>
      {Array.from(Array(10).keys()).map((n) =>
          <ChannelMessage
            author='Profas'
            date='22/01/2021'
            content='Vamo de gameplay'
          />
        )}

        <ChannelMessage
          author='FreeStufy'
          date='22/01/2021'
          content={
            <>
              <Mention>@Profas</Mention>, jogos grátis disponíveis!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
          <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;