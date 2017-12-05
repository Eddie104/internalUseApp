'use strict';

import { StackNavigator } from 'react-navigation';
// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

import TestScene1 from '../test/TestScene1';
import TestScene2 from '../test/TestScene2';
import TestScene3 from '../test/TestScene3';

import LogScene from '../scene/log/LogScene';
import MainScene from '../scene/main/MainScene';

// const TransitionConfiguration = (e) => ({
// 	screenInterpolator: (sceneProps) => {
// 		const { scene } = sceneProps;
// 		const { route } = scene;
// 		const params = route.params || { };
// 		const isModal = params.isModal;
// 		if (isModal) {
// 			return CardStackStyleInterpolator.forVertical(sceneProps);
// 		} else {
// 			return CardStackStyleInterpolator.forHorizontal(sceneProps);
// 		}
// 	}
// });

export default StackNavigator({
	'main': {
		screen: MainScene
	},
	'test1': {
		screen: TestScene1
	},
	'test2': {
		screen: TestScene2
	},
	'test3': {
		screen: TestScene3
	},
	'logScene': {
		screen: LogScene
	}
}, {
	initialRouteName: 'test1',
	mode: 'modal'
	// headerMode: 'none',
	// transitionConfig: TransitionConfiguration
	// transitionConfig: () => {
	// 	return { screenInterpolator: CardStackStyleInterpolator.forVertical }
	// }
});