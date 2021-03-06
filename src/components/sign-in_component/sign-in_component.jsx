import React from 'react';
import './sign-in_component.scss'
import CustomButton from '../custom-button/custom-button'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }
        catch (error) { alert(error) }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });

    }


    render() {


        return (
            <div className='Sign-in'>
                <h1>Already has an account</h1>
                <span>Sign In with your Email and Password</span>
                <br></br>
                <br></br>
                <br></br>

                <form onSubmit={this.handleSubmit}>
                    <input className="form-input-email" name='email' type='email' value={this.state.email} onChange={this.handleChange} required />
                    <label className={`${(this.state.email) ? 'shrink' : ''}Label-email`}>Email</label>
                    <input className="form-input-password" name='password' type='password' onChange={this.handleChange} value={this.state.password} required />
                    <label className={`${(this.state.password) ? 'shrink' : ''}Label-password`}>Password</label>
                    <br></br>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <button type='button' className='custom-button_google-sign-in' onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</button>

                </form>



            </div>
        )
    }
}
export default SignIn;