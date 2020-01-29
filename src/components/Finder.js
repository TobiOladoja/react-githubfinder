import React from 'react';
import finderStyles from './finder.module.scss';

const Finder = props => {
  const { name, login, bio, location, avatar } = props;

  return (
    <div className={finderStyles.center}>
      {avatar && (
        <p>
          <img src={avatar} alt='Avatar' className={finderStyles.imgs} />
        </p>
      )}
      {name && (
        <p>
          Name: <span>{name}</span>
        </p>
      )}
      {login && (
        <p>
          Username: <span>{login}</span>
        </p>
      )}
      {bio && (
        <p>
          Bio: <span>{bio}</span>
        </p>
      )}
      {location && (
        <p>
          Location: <span>{location}</span>
        </p>
      )}
    </div>
  );
};

export default Finder;
