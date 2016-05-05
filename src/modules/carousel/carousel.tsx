/// <reference path="../../require.d.ts"/>
/// <reference path="./interfaces.d.ts"/>

import React = require('react');
var css = require<any>('./carousel.css');

export class Carousel extends React.Component<CarouselProps, CarouselState> {
	render() {
		return (
			<div className={css['carousel']}>
				{this.props.children}
			</div>
		);
	}
}
