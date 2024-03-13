import React, {useState} from "react";
import styles from  './LogInForm.module.css';
import LogInButton from "./logInButton";
function LogInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);

    const handleSubmit  = (e) => {
        e.preventDefault();
        //logic
        if(isSignUp){
            console.log('Sign Up data submitted:', {email, password, name, lastName})
        }
        else{
            console.log('Log In data submitted: ', {email, password});
        }
    };
    return(
        <div className={styles.loginForm}>
            <h2 className={styles.formTitle}>{isSignUp ? "Sign Up" : "Log In"}</h2>
            <form onSubmit={handleSubmit}>
                {isSignUp && (
                    <>
                    <div className={styles.inputGroup}>
                        <input
                            className={styles.formInput}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input 
                            className={styles.formInput}
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Your Last Name"
                            required
                        />
                    </div>
                    </>
                )}
                <div className={styles.inputGroup}>
                    <input
                        className={styles.formInput}
                        type="email"  
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder="emailexample@gmail.com"
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input
                        className={styles.formInput}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="*******"
                        required
                    />
                </div>
                <button className={styles.formButtonMain} type="submit">
                    {isSignUp ? 'Sign Up' : 'Log In'}
                </button>
            </form>
            <hr />
            <LogInButton />
            <hr />
            <p className={styles.formP}>
                {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
            </p>
            <button className={styles.formButton} onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Log in' : 'Sign Up'}
            </button>
        </div>
    );
};

export default LogInForm;