/// <reference path="../../require.d.ts"/>
/// <reference path="./interfaces.d.ts"/>

import React = require('react');
import ReactDOM = require('react-dom');
var css = require<any>('./progress-segment.css');

export class ProgressSegment extends React.Component<SegProps, SegState> {
	constructor(props: SegProps) {
		super(props);
		this.render = this.render.bind(this);
	}

	render() {
		return (
			<div className={css['column']}>
				<div className={css['label']}>{this.props.label}</div>
				<div className={css['segment'] + ' ' + css[this.props.completion] + ' ' + css[this.props.cap]}>
					<span className={css['index']}>{this.props.index}</span>
				</div>
			</div>
		);
	}
}
