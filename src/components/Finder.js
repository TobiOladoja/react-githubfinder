import React from 'react';

const Finder = props => {
  const { name, login, bio, location, avatar } = props;
  return (
    <div>
      <p>{name}</p>
      <p>{login}</p>
      <p>{bio}</p>
      <p>{location}</p>
      <p>{avatar}</p>
    </div>
  );
};

export default Finder;
