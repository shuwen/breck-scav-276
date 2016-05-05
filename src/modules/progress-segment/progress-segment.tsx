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
			<div className={css['segment']}>
				<span>{this.props.children}</span>
			</div>
		);
	}
}
