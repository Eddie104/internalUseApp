//
//  TalkingDataModule.m
//  Tomato
//
//  Created by Eddie Zhou on 7/9/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "TalkingDataModule.h"
#import "TalkingData.h"

@implementation TalkingDataModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(onEvent:(NSString *)eventID){
  [TalkingData trackEvent:eventID];
}

RCT_EXPORT_METHOD(onEventWithLabel:(NSString *)eventID EvnetLabel:(NSString *)EvnetLabel){
  [TalkingData trackEvent:eventID label:EvnetLabel];
}

RCT_EXPORT_METHOD(onEventWithLabelAndParams:(NSString *)eventID EvnetLabel:(NSString *)EvnetLabel parameters:(NSDictionary *)parameters){
  [TalkingData trackEvent:eventID label:EvnetLabel parameters:parameters];
}

RCT_EXPORT_METHOD(onRegister:(NSUInteger)type accountID:(NSString *)accountID accountName:(NSString *)accountName){
  [TalkingData onRegister:accountID type:type name:accountName];
}

RCT_EXPORT_METHOD(onLogin:(NSUInteger)type accountID:(NSString *)accountID accountName:(NSString *)accountName){
  [TalkingData onLogin:accountID type:type name:accountName];
}

RCT_EXPORT_METHOD(trackPageBegin:(NSString *)pageName){
  [TalkingData trackPageBegin:pageName];
}

RCT_EXPORT_METHOD(trackPageEnd:(NSString *)pageName){
  [TalkingData trackPageEnd:pageName];
}

@end
