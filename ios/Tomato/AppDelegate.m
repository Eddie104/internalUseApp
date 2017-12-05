/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"
//#import <RCTJPushModule.h>
#ifdef NSFoundationVersionNumber_iOS_9_x_Max
#import <UserNotifications/UserNotifications.h>
#endif

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "UpdateModule.h"
#import "TalkingData.h"
#import <React/RCTLinkingManager.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
//    if ([[UIDevice currentDevice].systemVersion floatValue] >= 10.0) {
// #ifdef NSFoundationVersionNumber_iOS_9_x_Max
//    JPUSHRegisterEntity * entity = [[JPUSHRegisterEntity alloc] init];
//     entity.types = UNAuthorizationOptionAlert|UNAuthorizationOptionBadge|UNAuthorizationOptionSound;
//     [JPUSHService registerForRemoteNotificationConfig:entity delegate:self];
// 
//#endif
//} else if ([[UIDevice currentDevice].systemVersion floatValue] >= 8.0) {
//    [JPUSHService registerForRemoteNotificationTypes:(UIUserNotificationTypeBadge |
//                                                      UIUserNotificationTypeSound |
//                                                      UIUserNotificationTypeAlert)
//                                          categories:nil];
//  } else {
//    [JPUSHService registerForRemoteNotificationTypes:(UIRemoteNotificationTypeBadge |
//                                                      UIRemoteNotificationTypeSound |
//                                                      UIRemoteNotificationTypeAlert)
//                                          categories:nil];
//  }
//  
//  [JPUSHService setupWithOption:launchOptions appKey:@"5b0b2df9da7569cf8ed2ca0a"
//                        channel:nil apsForProduction:nil];
  [TalkingData sessionStarted:@"CAF0C7D3D33A4FB8B9EEA580503130BC" withChannelId:@"appStore"];
  
  NSURL *jsCodeLocation;

//  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  jsCodeLocation = [UpdateModule bundleURL];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"Tomato"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

// ios 8.x or older
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}

//// ios 9.0+
//- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
//            options:(NSDictionary<NSString*, id> *)options
//{
//  return [RCTLinkingManager application:application openURL:url options:options];
//}

//- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
//[JPUSHService registerDeviceToken:deviceToken];
//}
//- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo {
//[[NSNotificationCenter defaultCenter] postNotificationName:kJPFDidReceiveRemoteNotification object:userInfo];
//}
//- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)   (UIBackgroundFetchResult))completionHandler {
//[[NSNotificationCenter defaultCenter] postNotificationName:kJPFDidReceiveRemoteNotification object:userInfo];
//}
//- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(NSInteger))completionHandler {
// NSDictionary * userInfo = notification.request.content.userInfo;
// if([notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {
// [JPUSHService handleRemoteNotification:userInfo];
// [[NSNotificationCenter defaultCenter] postNotificationName:kJPFDidReceiveRemoteNotification object:userInfo];
//    }
// completionHandler(UNNotificationPresentationOptionAlert);
//}
//- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)())completionHandler {
//NSDictionary * userInfo = response.notification.request.content.userInfo;
//if([response.notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {
//[JPUSHService handleRemoteNotification:userInfo];
//[[NSNotificationCenter defaultCenter] postNotificationName:kJPFOpenNotification object:userInfo];
//}
//completionHandler();
//}
@end
