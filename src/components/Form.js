import React from 'react';

const Form = props => {
  const { githubFinder } = props;
  return (
    <div>
      <form onSubmit={githubFinder}>
        <input type='text' name='userInput' placeholder='Username...' />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Form;
