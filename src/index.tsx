/// <reference path="./require.d.ts"/>

import React = require('react');
import ReactDOM = require('react-dom');
import { ProgressBar } from './modules/progress-bar/progress-bar';
import { Carousel } from './modules/carousel/carousel';
import { HeaderBar } from './modules/header-bar/header-bar';

var css = require<any>('./index.css');

interface AppProps {
	stages: string[]
}

interface AppState {
	currentStage: number
}

class App extends React.Component<AppProps, AppState> {
	private stages: string[];

	constructor(props: AppProps) {
		super(props);
		this.render = this.render.bind(this);
	}

	public render() {
		return (
			<div className={css['container']}>
				<HeaderBar>
					<h1>Scav Tracker <small>Nice!</small></h1>
				</HeaderBar>

				<ProgressBar stages={[
					{label: "do a thing"},
					{label: "do another thing"},
					{label: "do third thing"},
					{label: "do fourth thing"},
					{label: "do fifth thing"}
				]} />

				<Carousel>
				</Carousel>
			</div>
		);
	}
}

ReactDOM.render(<App stages={[
	'',
	'',
	''
]}></App>, document.getElementById('mountpoint'));
