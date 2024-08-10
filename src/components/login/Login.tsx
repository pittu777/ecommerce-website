

import styles from "./login.module.css";
import img from "./../../assets/Raja_s_Chanab_16x20-removebg-preview 2.png";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainDiv}>
        <div className={styles.leftSide}>
          <h3 className={styles.title}>Raja's Handlooms</h3>
          <h1 className={styles.header}>Login now</h1>
          <p className={styles.welcomeText}>Hi, Welcome back</p>
          <button className={styles.googleLoginButton}>
            <span className={styles.googleIcon}><FcGoogle size={20} /></span>
            Login with Google
          </button>
          <p className={styles.orText}>or Login with Email</p>
          <p className={styles.emailLabel}>Email</p>
          <input className={styles.inputField} type="text" placeholder='Enter your email id' />
          <p className={styles.passwordLabel}>Password</p>
          <input className={styles.inputField} type="password" placeholder='Enter your password' />
          <div className={styles.checkboxContainer}>
            <div className={styles.rememberMe}>
              <input className={styles.checkbox} type="checkbox" /><span>Remember Me</span>
            </div>
            <span className={styles.forgotPassword}>Forgot Password?</span>
          </div>
          <button className={styles.loginButton}>Login</button>
          <button className={styles.signUpButton}>Sign Up</button>
          <p className={styles.signUpText}>Not registered yet?<span className={styles.createAccount}>Create an account</span></p>
        </div>
        <div className={styles.rightSide}>
          <img className={styles.image} src={img} alt="img..." />
        </div>
      </div>
    </div>
  );
};

export default Login;
