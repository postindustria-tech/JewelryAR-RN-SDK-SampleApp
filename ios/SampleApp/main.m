#import <UIKit/UIKit.h>

#import "AppDelegate.h"

#import "UnityUtils.h"

int main(int argc, char *argv[])
{
  @autoreleasepool {
    InitArgs(argc, argv);
    return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
  }
}
