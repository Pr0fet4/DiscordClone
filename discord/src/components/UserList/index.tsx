import React from 'react';

import { Container, Role, User, Avatar  } from './styles';

interface UserProps  {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
  return (
    <User>
      <Avatar className={ isBot ? 'bot' : ''}/>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserInfo: React.FC = () => {
  return (
   <Container >
    <Role>Disponível - 1</Role>
    <UserRow nickname="Profas"/>

    <Role>Offiline - 18</Role>
    <UserRow nickname="FreeStuff" isBot/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
    <UserRow nickname="Profas"/>
   </Container>
  )
};

export default UserInfo;