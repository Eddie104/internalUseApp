package com.tomato;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.tendcloud.tenddata.TCAgent;
import com.tendcloud.tenddata.TDAccount;

import java.util.Map;

/**
 * Created by eddie on 13/9/2017.
 */

public class TalkingDataModule extends ReactContextBaseJavaModule {

    public TalkingDataModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void onEvent(String eventID) {
        TCAgent.onEvent(getReactApplicationContext(), eventID);
    }

    @ReactMethod
    public void onEventWithLabel(String eventID, String label) {
        TCAgent.onEvent(getReactApplicationContext(), eventID, label);
    }

    @ReactMethod
    public void onEventWithLabelAndParams(String eventID, String label, Map params) {
        TCAgent.onEvent(getReactApplicationContext(), eventID, label, params);
    }

    @ReactMethod
    public void onRegister(int type, String accountID, String accountName) {
        TDAccount.AccountType accountType = TDAccount.AccountType.values()[type];
        TCAgent.onRegister(accountID, accountType, accountName);
    }

    @ReactMethod
    public void onLogin(int type, String accountID, String accountName) {
        TDAccount.AccountType accountType = TDAccount.AccountType.values()[type];
        TCAgent.onLogin(accountID, accountType, accountName);
    }

    @ReactMethod
    public void trackPageBegin(String pageName) {
        TCAgent.onPageStart(getReactApplicationContext(), pageName);
    }

    @ReactMethod
    public void trackPageEnd(String pageName) {
        TCAgent.onPageEnd(getReactApplicationContext(), pageName);
    }

    @Override
    public String getName() {
        return "TalkingDataModule";
    }
}
