package com.tomato;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.remobile.zip.RCTZipPackage;
import com.remobile.toast.RCTToastPackage;
import com.remobile.filetransfer.RCTFileTransferPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.theweflex.react.WeChatPackage;
import com.rnfs.RNFSPackage;

import java.util.Arrays;
import java.util.List;

import cn.jpush.reactnativejpush.JPushPackage;

public class MainApplication extends Application implements ReactApplication {

  // 设置为 true 将不弹出 toast
  private boolean JPUSH_SHUTDOWN_TOAST = false;
  // 设置为 true 将不打印 log
  private boolean JPUSH_SHUTDOWN_LOG = false;

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new MyPackage(),
          new RCTZipPackage(),
          new RCTToastPackage(),
          new RCTFileTransferPackage(),
          new RNDeviceInfo(),
          new RNFSPackage(),
          new WeChatPackage(),
          new JPushPackage(JPUSH_SHUTDOWN_TOAST, JPUSH_SHUTDOWN_LOG)
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
