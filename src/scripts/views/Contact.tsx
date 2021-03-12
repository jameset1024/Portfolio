import * as React from "react";
import {Main, WrapFull} from "../components/elements/Tags";
import {FormEvent} from "react";
import axios from "axios";
import {hideLoading} from "../controllers/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type FormSubmit = {
	[name: string]: string,
	email: string,
	subject: string,
	message: string
}


export default class Contact extends React.Component<any, FormSubmit>{

	state = {
		name: '',
		email: '',
		subject: '',
		message: ''
	}

	async componentDidMount() {
		document.body.className = 'contact';
		await hideLoading();
	}

	onChangeHandler( name: string, value: string){
		this.setState({[name]: value})
	}

	async contactSubmit( e: FormEvent ){
		e.preventDefault();

		//Hide the form on sending
		let sending: HTMLElement = document.querySelector('.sendingControl');
		sending.classList.add('sending');

		//Get the error box
		const error = document.querySelector('.alert-danger');
		
		const {name, email, subject, message} = this.state;

		const from = name + '<' + email + '>';

		const response = await axios({
			method: 'post',
			url: process.env.REACT_APP_MAILGUN,
			auth:{
				username: 'api',
				password: process.env.REACT_APP_MAILGUN_API
			},
			params: {
				from: from,
				to: process.env.REACT_APP_SEND_TO,
				subject: subject,
				text: message
			}
		});

		if(response.status === 200){
			this.handleSuccessfulSend( sending );
		} else {
			error.classList.remove('d-none');
			sending.classList.remove('sending');
		}
	}

	handleSuccessfulSend( wrap:HTMLElement ){
		const form = document.querySelector('.contactWrap');
		form.innerHTML = '<h2>Thanks For Reaching Out!</h2><p>Your message has been sent successfully and I\'ll get back to you as soon as possible.</p>'
		
		wrap.classList.remove('sending');
	}

	render(){
		return(
			<Main>
				<WrapFull className={'contactArea'}>
					<div className={'col-md-5 d-flex align-items-center offset-md-1'}>
						<div className={'sendingControl'}>
							<div>
								<p>Sending...</p>
								<p><FontAwesomeIcon icon={faSpinner} spin /></p>
							</div>
						</div>
						<div className={'contactWrap'}>
							<h1>Reach Out</h1>
							<p>Hey there, I'm currently open to freelance projects or retainer work. I'm generally interested in more challenging or interesting projects as I'm rather busy at the moment.</p>
							
							<form onSubmit={this.contactSubmit.bind(this)} method={'post'} autoComplete={'off'}>
								<div className={'alert alert-danger d-none'}>You're message could not be sent at this time</div>
								<div className={'row'}>
									<div className={'col-md-6 pr-md-1'}>
										<input type={'text'} name={'name'} className={'form-control'} placeholder={'Name'} onChange={(e) => this.onChangeHandler('name', e.target.value)} required autoComplete={'off'} />
										<label className={'input-animation'} />
									</div>
									<div className={'col-md-6 pl-md-1 labelShort'}>
										<input type={'email'} name={'email'} className={'form-control'} placeholder={'Email'} onChange={(e) => this.onChangeHandler('email', e.target.value)} required autoComplete={'off'} />
										<label className={'input-animation'} />
									</div>
									<div className={'col-12 mt-3'}>
										<input type={'text'} name={'subject'} className={'form-control'} placeholder={'Subject'} onChange={(e) => this.onChangeHandler('subject', e.target.value)} required autoComplete={'off'} />
										<label className={'input-animation'} />
									</div>
									<div className={'col-12 mt-3'}>
										<textarea name={'message'} placeholder={'Message'} className={'form-control'} onChange={(e) => this.onChangeHandler('message', e.target.value)} required autoComplete={'off'} />
										<label className={'input-animation'} />
									</div>
									<div className={'col-12 mt-4'}>
										<button type={'submit'} className={'btn blue'}>Send</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className={'col-md-6 homeTown'} />
				</WrapFull>
			</Main>
		)
	}
}
