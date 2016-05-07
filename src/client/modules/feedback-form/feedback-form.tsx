/// <reference path="../../require.d.ts"/>
/// <reference path="./interfaces.d.ts"/>

import React = require('react');
var css = require<any>('./feedback-form.css');

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
		console.log(this.state);
	}

	render() {
		return (
			<form>
				<h2>Help Us Get Better</h2>
				<input type="text" name="name" onInput={this.handleNameInput}></input>
				<textarea name="message" className={css['message']} onInput={this.handleMessageInput}></textarea>
				<input type="button" onClick={this.postMessage} value="Send!"></input>
			</form>
		);
	}
}
