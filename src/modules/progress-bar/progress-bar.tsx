/// <reference path="../../require.d.ts"/>
/// <reference path="./interfaces.d.ts"/>

import React = require('react');
var css = require<any>('./progress-bar.css');

export class ProgressBar extends React.Component<BarProps, BarState> {
	render() {
		return (
			<div className={css['progress-bar']}>
				{this.props.children}
			</div>
		);
	}
}
