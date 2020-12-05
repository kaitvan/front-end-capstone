import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

export default function VerticalNavbar(props) {
  const signOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  const signIn = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  const { user } = props;

  return (
    <>
      <div className='my-nav'>
        <div className='nav-items'>
          <div className='nav-brand'>
            <img className='logo' src={Logo} alt='logo'/>
            <Link to='/'>whirly</Link>
          </div>
          <ul className='nav-links'>
            <li><Link to='/explore'><i className="fas fa-search icon"></i>Explore</Link></li>
            { user && <>
            <li><Link to='/my-list'><i className="fas fa-list icon"></i>My List</Link></li>
            <li><Link to='/spin'><i className="fas fa-asterisk icon"></i>Spin</Link></li>
            </>}

          </ul>
        </div>
        <div className='nav-auth'>
          { user ? (
            <>
            <img className='user-img' src={user?.photoURL} alt={user?.displayName} />
            <div className='user-info'>
              <div>{user?.displayName}</div>
              <div className='sign-out btn' onClick={(e) => signOut(e)}>Sign Out</div>
            </div>
            </>) : (<div className='sign-in btn' onClick={(e) => signIn(e)}>Sign In</div>)
          }
        </div>
      </div>
      <div className='content'>
        {props.children}
      </div>
    </>
  );
}
