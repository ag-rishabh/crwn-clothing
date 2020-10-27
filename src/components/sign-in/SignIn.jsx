import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import './sign-in.scss';

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        } catch (e) {
            console.log(e);
        }

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput  
                        name='email' 
                        value={this.state.email}
                        type="email"
                        required
                        handleChange={this.handleChange}
                        label='email'
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label='password'
                    />
                    <div className="buttons">
                        <CustomButton type='submit'>Sing In</CustomButton>
                        <CustomButton type='button' isGoogleSingIn onClick={signInWithGoogle}>Sing In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;