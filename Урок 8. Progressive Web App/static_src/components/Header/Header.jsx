import React from 'react';
import { Link } from 'react-router-dom';

// import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link className="link-to-profile" to="/profile/">
          Профиль
        </Link>
      </div>
    );
  }
}
