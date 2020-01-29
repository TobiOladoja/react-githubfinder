import React from 'react';
import headerStyles from './header.module.scss';

export default function Header() {
  return (
    <div>
      <h1 className={headerStyles.header}>Github Finder</h1>
    </div>
  );
}
