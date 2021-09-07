import React from 'react';

import ProfileData from '../../components/ProfileData';
import RandomCalendar from '../../components/RandomCalendar';
import RepoCard from '../../components/RepoCard';

import { 
  Container, 
  Main, 
  LeftSide, 
  RigthSide, 
  Repos,
  CalendarHeading, 
  Tab,
  RepoIcon } from './styles';

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  )


  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>
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

        <RigthSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Repos</h2>
            <div>
              {Array.from({length: 6}).map((n, index) => (
                <RepoCard
                  key={index}
                  username={'lucasgoncalves'}
                  reponame={'youtube'}
                  description={'Descricao repo'}
                  language={index % 3 === 0? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Ramdom calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RigthSide>
      </Main>
    </Container>
  );
}

export default Profile;