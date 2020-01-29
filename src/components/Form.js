import React from 'react';
import formStyles from './form.module.scss';

const Form = props => {
  const { githubFinder } = props;
  return (
    <div className={formStyles.form}>
      <form onSubmit={githubFinder}>
        <input type='text' name='userInput' placeholder='Username...' />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Form;
