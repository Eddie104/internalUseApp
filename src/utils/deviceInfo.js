'use strict';

import DeviceInfo from 'react-native-device-info';
import {
	Platform
} from 'react-native';

export function isIOS() {
	return Platform.OS === "ios";
}

/**
 * Device Unique ID
 * This is IDFV on iOS so it will change if all apps from the current apps vendor have been previously uninstalled.
 * FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9
 */
export function getUniqueID() {
	return DeviceInfo.getUniqueID();
}

/**
 * Device Manufacturer
 * Apple
 */
export function getManufacturer() {
	return DeviceInfo.getManufacturer();
}

/**
 * Device Brand
 * Apple / htc / Xiaomi
 */
export function getBrand() {
	return DeviceInfo.getBrand();
}

/**
 * Device Model
 * iPhone 6
 */
export function getModel() {
	return DeviceInfo.getModel();
}

/**
 * Device ID
 */
export function getDeviceId() {
	return DeviceInfo.getDeviceId();
}

export function getSystemName() {
	return DeviceInfo.getSystemName();
}

export function getSystemVersion() {
	return DeviceInfo.getSystemVersion();
}

export function getBundleId() {
	return DeviceInfo.getBundleId();
}

export function getBuildNumber() {
	return DeviceInfo.getBuildNumber();
}

export function getVersion() {
	return DeviceInfo.getVersion();
}

export function getReadableVersion() {
	return DeviceInfo.getReadableVersion();
}

export function getDeviceName() {
	return DeviceInfo.getDeviceName();
}

export function getUserAgent() {
	return DeviceInfo.getUserAgent();
}

export function getDeviceLocale() {
	return DeviceInfo.getDeviceLocale();
}

export function getDeviceCountry() {
	return DeviceInfo.getDeviceCountry();
}

export function getTimezone() {
	return DeviceInfo.getTimezone();
}

/**
 * ANDROID ONLY - see https://developers.google.com/instance-id/
 */
export function getInstanceID() {
	return DeviceInfo.getInstanceID();
}

export function isEmulator() {
	return DeviceInfo.isEmulator();
}

export function isTablet() {
	return developers.isTablet();
}

/**
 * PIN or fingerprint set
 * Only supported in Android and iOS 9.0 and above
 */
export function isPinOrFingerprintSet() {
	return DeviceInfo.isPinOrFingerprintSet();
}