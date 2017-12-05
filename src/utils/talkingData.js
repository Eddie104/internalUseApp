'use strict';

import { NativeModules } from 'react-native';

let { TalkingDataModule } = NativeModules;

export const ACCOUNT_TYPE = {
	Anonymous      : 0,    // 匿名帐户
	Registered     : 1,    // 显性注册帐户
	SinaWeibo      : 2,    // 新浪微博
	QQ             : 3,    // QQ帐户
	TencentWeibo   : 4,    // 腾讯微博
	ND91           : 5,    // 91帐户
	WeiXin         : 6,    // 微信
	Type1          : 11,   // 自定义类型1
	Type2          : 12,   // 自定义类型2
	Type3          : 13,   // 自定义类型3
	Type4          : 14,   // 自定义类型4
	Type5          : 15,   // 自定义类型5
	Type6          : 16,   // 自定义类型6
	Type7          : 17,   // 自定义类型7
	Type8          : 18,   // 自定义类型8
	Type9          : 19,   // 自定义类型9
	Type10         : 20    // 自定义类型10
};

export function onEvent(eventID) {
	TalkingDataModule.onEvent(eventID);
}

export function onEventWithLabel(eventID, label) {
	TalkingDataModule.onEventWithLabel(eventID, label);
}

export function onEventWithLabelAndParams(eventID, label, params) {
	TalkingDataModule.onEventWithLabelAndParams(eventID, label, params);
}

export function onRegister(type, accountID, accountName) {
	TalkingDataModule.onRegister(type, accountID, accountName);
}

export function onLogin(type, accountID, accountName) {
	TalkingDataModule.onLogin(type, accountID, accountName);
}

export function trackPageBegin(pageName) {
	TalkingDataModule.trackPageBegin(pageName);
}

export function trackPageEnd(pageName) {
	TalkingDataModule.trackPageEnd(pageName);
}