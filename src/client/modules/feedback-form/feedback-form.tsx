/// <reference path="../../require.d.ts"/>
/// <reference path="./interfaces.d.ts"/>

import React = require('react');
import jQuery = require('jquery');
var css = require<any>('./feedback-form.css');

const SLACK_PROXY_URL = 'http://localhost:9000';

export class FeedbackForm extends React.Component<FormProps, FormState> {
	constructor(props: FormProps) {
		super(props);
		this.state = {
			name: '',
			message: ''
		};
		this.handleNameInput = this.handleNameInput.bind(this);
		this.handleMessageInput = this.handleMessageInput.bind(this);
		this.postMessage = this.postMessage.bind(this);
		this.render = this.render.bind(this);
	}

	handleNameInput(e) {
		this.setState({
			name: e.target.value
		});
	}

	handleMessageInput(e) {
		this.setState({
			message: e.target.value
		});
	}

	postMessage(e) {
		var body = JSON.stringify(this.state);
		console.log(body);

		jQuery.ajax({
			method: 'POST',
			url: SLACK_PROXY_URL,
			data: body,
			contentType: 'application/json; charset=utf-8',
			dataType: 'json'
		}).then(function(err, data) {
			if(err) console.error(err);
			else console.log(data);
		});

		this.setState({
			name: '',
			message: ''
		});
	}

	render() {
		return (
			<form className={css['wrapper']}>
				<h2>Help Us Get Better</h2>
				<em>Your feedback matters</em>
				<input placeholder="Your Name" className={css['name']} type="text" name="name" value={this.state.name} onInput={this.handleNameInput}></input>
				<textarea placeholder="Message" name="message" className={css['message']} value={this.state.message} onInput={this.handleMessageInput}></textarea>
				<input className={css['submit']} type="button" onClick={this.postMessage} value="Send"></input>
			</form>
		);
	}
}
