/// <reference path="../../require.d.ts"/>
/// <reference path="./interfaces.d.ts"/>

import React = require('react');
import { ProgressSegment } from '../progress-segment/progress-segment';
var css = require<any>('./progress-bar.css');

export class ProgressBar extends React.Component<BarProps, BarState> {
	constructor(props: BarProps) {
		super(props);
		this.render = this.render.bind(this);
		this.state = {
			activeStage: 2
		}
	}

	render() {
		return (
			<div className={css['progress-bar']}>
				{this.props.stages.map((segment: any, idx: number) =>
					<ProgressSegment
						key={idx}
						index={idx+1}
						label={segment.label}
						cap={(() => {
							if(idx === 0) return 'start';
							else if(idx === this.props.stages.length-1) return 'end';
							else return '';
						})()}
						completion={(() => {
							if(idx < this.state.activeStage) return 'complete';
							else if (idx === this.state.activeStage) return 'active';
							else return 'incomplete';
						})()}
					/>
				)}
			</div>
		);
	}
}
