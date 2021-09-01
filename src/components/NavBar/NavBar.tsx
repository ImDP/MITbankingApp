import React from 'react';
import styles from './NavBar.module.css';

 
const NavBar = () => (
  <div className={styles.NavBar} data-testid="NavBar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link" href="/" title="Or just hit the BadBank logo">Home</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" title="I wouldn't do this if I were you.">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" title="Did I mention we're not FDIC insured?">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" title="Good Luck!">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" title="All customer data we have.">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
  </div>
);

export default NavBar;
