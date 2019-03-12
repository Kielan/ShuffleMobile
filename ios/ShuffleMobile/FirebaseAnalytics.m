//
//  FirebaseAnalytics.m
//  ShuffleMobile
//
//  Created by Kielan Lemons on 3/11/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "AppDelegate.h"
#import <Firebase/Firebase.h>
#import "FirebaseAnalytics.h"
#import <React/RCTLog.h>

@implementation FirebaseAnalytics

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(logEventWithName:(NSString *)eventName parameters:(nullable NSDictionary<NSString *, id> *)params)
{
  RCTLog(@"Firbase Analytics event: %@", eventName);
  [FIRAnalytics logEventWithName: eventName parameters: params];
}

@end
