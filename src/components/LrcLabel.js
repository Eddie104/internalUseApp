'use strict';

import React, { PureComponent, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Animated
} from 'react-native';

import ColorPropType from 'ColorPropType';

/**
 * lrc组件
 */
export default class LrcLabel extends PureComponent {

	static propTypes = {
		content: PropTypes.string,
		maskColor: ColorPropType,
		onAnimationEnded: PropTypes.func
	};

	static defaultProps = {
		content: '我是测试用的文本',
		maskColor: 'red',
		onAnimationEnded: () => {}
	};
	
	constructor(props) {
		super(props);

		this.state = {
			maskAnimatedWidth: new Animated.Value(0),
			maskWidth: 0,
			maskHeight: 0
		};

		this._labelWidth = -1;
	}

	render() {
		const { maskHeight } = this.state;
		return (
			<View style={ [styles.container, { height: maskHeight }] }>
				{ 
					this.createLabel() 
				}
				{ 
					this.createMaskLabel()
				}
			</View>
		);
	}

	createLabel() {
		const { content } = this.props;
		return (
			<Text style={ styles.text } onLayout={ ({ nativeEvent }) => {
				this._labelWidth = nativeEvent.layout.width;
				this.setState({
					maskWidth: nativeEvent.layout.width,
					maskHeight: nativeEvent.layout.height
				}, () => {
					this.startAnimation();
				});
			} }>
				{ content }
			</Text>
		);
	}

	createMaskLabel() {
		const { content, maskColor } = this.props;
		const { maskAnimatedWidth, maskWidth, maskHeight } = this.state;
		return (
			<Animated.View
				style={ [styles.text, styles.container, {
					width: maskAnimatedWidth,
					height: maskHeight,
					overflow: 'hidden'
				}] }>
				<Text style={ [styles.text, { color: maskColor, width: maskWidth }] }>
					{ content }
				</Text>
			</Animated.View>
		);
	}

	startAnimation(duration = 5000) {
		Animated.timing(this.state.maskAnimatedWidth, {
			toValue: this._labelWidth,
			duration
		}).start(({ finished }) => {
			if (finished) {
				const { onAnimationEnded } = this.props;
				onAnimationEnded && onAnimationEnded();
			}
		});
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white'
	},
	text: {
		backgroundColor: 'transparent',
		padding: 0,
		position: 'absolute',
		left: 0,
		top: 0
	}
});
