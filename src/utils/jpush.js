'use strict';

import JPushModule from 'jpush-react-native';
import toast from './toast';
import logArr from '../store/logArr';

let receiveCustomMsgCallback = message => toast(`receive msg : ${message}`);

let receiveNotificationCallback = message => toast(`receive notification : ${message}`);

JPushModule.notifyJSDidLoad(resultCode => {
	if (resultCode === 0) {
		JPushModule.initPush();
	}
});

JPushModule.addReceiveCustomMsgListener(message => {
	receiveCustomMsgCallback(message);
});

JPushModule.addReceiveNotificationListener(message => {
	receiveNotificationCallback(message);
});

export function setReceiveCustomMsgCallback(cb) {
	receiveCustomMsgCallback = cb;
}

export function setReceiveNotificationCallback(cb) {
	receiveNotificationCallback = cb;
}