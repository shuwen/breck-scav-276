/// <reference path="../../require.d.ts"/>
/// <reference path="./interfaces.d.ts"/>

import React = require('react');
var css = require<any>('./header-bar.css');

export class HeaderBar extends React.Component<HeaderProps, HeaderState> {
	render() {
		return (
			<div className={css['header']}>
				{this.props.children}
			</div>
		);
	}
}
