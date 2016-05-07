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
				<h1>Showcase Tracker</h1>

				<ProgressBar stages={[
					{label: "do a thing"},
					{label: "do another thing"},
					{label: "do third thing"},
					{label: "do fourth thing"},
					{label: "do fifth thing"}
				]} />

				<h2></h2>

				<FeedbackForm />
			</div>
		);
	}
}

ReactDOM.render(<App></App>, document.getElementById('mountpoint'));
