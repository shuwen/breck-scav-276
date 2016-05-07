/// <reference path="./require.d.ts"/>

import React = require('react');
import ReactDOM = require('react-dom');
import { ProgressBar } from './modules/progress-bar/progress-bar';
import { FeedbackForm } from './modules/feedback-form/feedback-form';

var css = require<any>('./index.css');

interface AppProps {
}

interface AppState {
}

class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.render = this.render.bind(this);
	}

	public render() {
		return (
			<div className={css['container']}>
				<h1>Showcase Tracker <small>(Item 82)</small></h1>

				<ProgressBar stages={[
					{label: "Obtaining Contraband"},
					{label: "Rigging Switches"},
					{label: "Rotating Board"},
					{label: "Reticulating Door Splines"},
					{label: "Out for Delivery"}
				]} />

				<h2></h2>

				<FeedbackForm />
			</div>
		);
	}
}

ReactDOM.render(<App></App>, document.getElementById('mountpoint'));
