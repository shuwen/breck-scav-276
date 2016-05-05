/// <reference path="./require.d.ts"/>

import React = require('react');
import ReactDOM = require('react-dom');
import { ProgressBar } from './modules/progress-bar/progress-bar';
import { ProgressSegment } from './modules/progress-segment/progress-segment';
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
	private currentStage: number;

	constructor(props: AppProps) {
		super(props);
		this.currentStage = 0;
		this.render = this.render.bind(this);
	}

	public render() {
		return (
			<div className={css['container']}>
				<HeaderBar>
					<h1>Scav Tracker</h1>
				</HeaderBar>

				<ProgressBar>
					{this.props.stages.map((segment, idx) =>
						<ProgressSegment key={idx}>{idx}</ProgressSegment>
					)}
				</ProgressBar>

				<Carousel>
					Cat facts
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
