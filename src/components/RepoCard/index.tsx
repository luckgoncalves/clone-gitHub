import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Topside, RepoIcon, Botside, StarIcon, FormIcon } from './styles';

interface Props {
  // key: number;
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username,
  description,
  reponame,
  language,
  stars,
  forks
}) => {

  const laguageClass = language ? language.toLowerCase() : 'other'
  
  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon/>
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{description}</p>
      </Topside>

      <Botside>
        <ul>
          <li>
            <div className={`language ${laguageClass}`} />
            <span>{language}</span>
          </li>

          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>

          <li>
            <FormIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
}

export default RepoCard;