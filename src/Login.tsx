import React from 'react';
import './assets/styles/login.scss';
import VisibilityOnIcon from './assets/visible_black.svg';
import VisibilityOffIcon from './assets/visibility_off_black.svg';
import GoogleIcon from './assets/google.svg';
import LockIcon from './assets/icon_lock.svg';
import Header from './components/Header';
import Footer from './components/Footer';

class LoginComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: { name: 'email', value: undefined },
      password: { name: 'password', value: undefined },
      passwordVisibility: false,
    }
  }
  handleChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
  }
  handleVisibility = () => {
    this.setState({ passwordVisibility: !this.state.passwordVisibility });
  }
  render() {
    const { email, password, passwordVisibility } = this.state;
    return (
      <div className='login-container'>
        <Header />
        <div className="login-page-container">
          <form onSubmit={this.handleSubmit} className='login-form-wrapper' autoComplete='off'>
            <div className='login-form'>
              <h3 className='login-form-title'>Sign in securely to your account</h3>
              <div className='login-form-field-container'>
                <label className='login-form-field-label'>Email <span className='validation-info'>*</span></label>
                <input
                  name={email.name}
                  value={email.value}
                  type='email'
                  className='login-form-field-input'
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </div>
              <div className='login-form-field-container'>
                <label className='login-form-field-label login-form-field-password-label'>
                  Password <span className='validation-info'>*</span>
                  <span className='forgot-password-link'>Forgot your password?</span>
                </label>
                <input
                  name={password.name}
                  value={password.value}
                  type={passwordVisibility === true ? 'text' : 'password'}
                  className='login-form-field-input'
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <button onClick={this.handleVisibility} className="icon">
                  {passwordVisibility === true ?
                    <img src={VisibilityOnIcon} alt='visivility-icon' />
                    :
                    <img src={VisibilityOffIcon} alt='visivility-icon' />
                  }
                </button>
              </div>
              <button className='login-form-button login-form-submit-button' type="submit">
                <img src={LockIcon} className="lock-icon" alt='login' />
                Secure Login
              </button>
              <span className='or-text'>or</span>
              <button className='login-form-button login-form-google-button'>
                <img src={GoogleIcon} className="google-icon" alt='google' />
                Login via Google</button>
              <p className='terms-condition-text'>By Logging in, you agree to our
                <span className='terms-condition-highlighted-link'> Terms </span>
                and
                <span className='terms-condition-highlighted-link'> Privacy policy </span>
              </p>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
export default LoginComponent;
