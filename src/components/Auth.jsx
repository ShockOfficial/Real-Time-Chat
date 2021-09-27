import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpg';

const initialState = {
	fullName: '',
	username: '',
	password: '',
	confirmPassword: '',
	phoneNumber: '',
	avatarURL: '',
};

const Auth = () => {
	const [form, setForm] = useState(initialState);
	const [isSignup, setIsSignup] = useState(true);

	const switchMode = () => {
		setIsSignup((prevState) => !prevState);
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { fullName, username, password, phoneNumber, avatarURL } = form;
	};

	return (
		<div className='auth__form-container'>
			<div className='auth__form-container_fields'>
				<div className='auth__form-container_fields-content'>
					<p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
					<form onSubmit={handleSubmit}>
						{isSignup && (
							<div className='auth__form-container_fields-content_input'>
								<label htmlFor='fullName'>Full Name</label>
								<input
									id='fullName'
									type='text'
									name='fullName'
									placeholder='Full Name'
									onChange={handleChange}
									required
								/>
							</div>
						)}
						<div className='auth__form-container_fields-content_input'>
							<label htmlFor='username'>Username</label>
							<input
								type='text'
								id='username'
								name='username'
								placeholder='Username'
								onChange={handleChange}
								required
							/>
						</div>

						{isSignup && (
							<div className='auth__form-container_fields-content_input'>
								<label htmlFor='phoneNumber'>Phone Number</label>
								<input
									id='phoneNumber'
									type='text'
									name='phoneNumber'
									placeholder='Phone Number'
									onChange={handleChange}
									required
								/>
							</div>
						)}

						{isSignup && (
							<div className='auth__form-container_fields-content_input'>
								<label htmlFor='avatarURL'>Avatar RUL</label>
								<input
									id='avatarURL'
									type='text'
									name='avatarURL'
									placeholder='e.g https://www.mypicture.com/1f13daff2ab'
									onChange={handleChange}
									required
								/>
							</div>
						)}
						<div className='auth__form-container_fields-content_input'>
							<label htmlFor='password'>Password</label>
							<input
								id='password'
								type='password'
								name='password'
								placeholder='Password'
								onChange={handleChange}
								required
							/>
						</div>

						{isSignup && (
							<div className='auth__form-container_fields-content_input'>
								<label htmlFor='confirmPassword'>Confirm Password</label>
								<input
									id='confirmPassword'
									type='password'
									name='confirmPassword'
									placeholder='Password'
									onChange={handleChange}
									required
								/>
							</div>
						)}

						<div className='auth__form-container_fields-content_button'>
							<button>{isSignup ? 'Sign Up' : 'Sign In'}</button>
						</div>
					</form>
					<div className='auth__form-container_fields-account'>
						<p>
							{isSignup ? 'Already have an account?' : "Don't have an account?"}
							<span onClick={switchMode}>
								{isSignup ? ' Sign In' : ' Sign Up'}{' '}
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className='auth__form-container_image'>
				<img src={signinImage} alt='sign in' />
			</div>
		</div>
	);
};

export default Auth;
