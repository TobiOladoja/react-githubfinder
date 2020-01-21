import React from 'react';

const Finder = props => {
  const { name, login, bio, location, avatar } = props;

  return (
    <div>
      {name && <p>Name: {name}</p>}
      {login && <p>Username: {login}</p>}
      {bio && <p>Bio: {bio}</p>}
      {location && <p>Location: {location}</p>}
      {avatar && (
        <p>
          <img src={avatar} alt='Avatar' />
        </p>
      )}
    </div>
  );
};

export default Finder;
