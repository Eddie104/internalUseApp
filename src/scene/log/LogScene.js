'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ScrollView
} from 'react-native';

import { observer, inject } from 'mobx-react/native';
import * as datetime from '../../utils/datetime';
import * as dimensions from '../../utils/dimensions';
import toast from '../../utils/toast';

import { FloatingAction } from 'react-native-floating-action';

@inject('logArr')
@observer
export default class LogScene extends Component {
	
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: `log scene`,
	});

	constructor(props) {
		super(props);
	}

	render() {
		const { navigate, goBack } = this.props.navigation;
		const { logArr } = this.props;
		return (
			<View style={styles.container}>
				<ScrollView style={styles.container}>
					{
						logArr.arr.map(this.renderLog)
					}
				</ScrollView>
				<FloatingAction
					actions={ [{
						text: '清空',
						// icon: require('./images/ic_language_white.png'),
						name: 'clear',
						position: 1
  					}] }
					onPressItem={(name) => {
						if (name === 'clear') {
							logArr.clear();
						}
					}}
				/>
			</View>
		);
	}

	renderLog(log, index) {
		const { level } = log;
		let textStyle = styles.infoText;
		let prefix = '[info] => ';
		if (level === global.DEBUG) {
			textStyle = styles.debugText;
			prefix = '[debug] => ';
		} else if (level == global.WARN) {
			textStyle = styles.warnText;
			prefix = '[warn] => ';
		} else if (level == global.ERROR) {
			textStyle = styles.errorText;
			prefix = '[error] => ';
		}
		return (
			<Text style={[styles.text, textStyle]} key={index}>
				[{ datetime.formatDateTime() }]{ prefix }{ log.log }
			</Text>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	text: {
		backgroundColor: 'transparent',
		marginLeft: 6,
		color: 'black',
		width: dimensions.screenWidth(),

	},
	errorText: {
		color: 'red'
	},
	warnText: {
		color: 'gold'
	},
	debugText: {

	},
	infoText: {

	}
});
