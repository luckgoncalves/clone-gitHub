import React from 'react';

import { Container, Main, LeftSide, RigthSide } from './styles';
import ProfileData from '../../components/ProfileData';


const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'lucasGoncalves'}
            name={'Lucas Gonçalves'}
            avatarUrl={'https://avatars.githubusercontent.com/u/19187675?v=4'}
            followers={887}
            following={7}
            company={'Rocketseat'}
            location={'Paraná, Brazil'}
            email={'lucasleitegoncalves@gmail.com'}
            blog={undefined}
          />
        </LeftSide>

        <RigthSide></RigthSide>
      </Main>
    </Container>
  );
}

export default Profile;