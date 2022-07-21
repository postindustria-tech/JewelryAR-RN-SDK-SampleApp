# Jewelry AR SDK - Sample App

:warning: All the commands below are written in BASH with Mac OS in mind. Some of them might not work in Windows `cmd` console.

If you are on Windows, please consider (re-)running them in:

- emulated Git BASH shell (if you are using [[Git for Windows]](https://gitforwindows.org/))
- [[PowerShell]](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2)
- [[WSL]](https://docs.microsoft.com/en-us/windows/wsl/install) (if you are on Windows 10+)

## Requirements (for React Native)

See [[Setting up the development environment]](https://reactnative.dev/docs/environment-setup).

## Requirements (for Jewelry AR SDK)

### - `npm` (`8.7.0` or newer)

:warning: We have encountered issues while attempting to run Sample App with an outdated version of `npm` (v. `6.14.15`). So please make sure you have an up-to-date one.

Check with:

```bash
npm --version
```

expected output example:

```text
8.14.0
```

To update run:

```bash
npm install -g npm@latest
```

See [[Downloading and installing Node.js and npm]](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for more info.

## Installing the dependencies

### 1. (Re-)install the latest npm package from the cloud

```bash
npm remove jewelry-ar-react-native-sdk
npm install "https://pi-ar-sdk-public.storage.googleapis.com/jewelry-ar-react-native-sdk-$(curl https://pi-ar-sdk-public.storage.googleapis.com/_latest_tar.txt).tgz"
```

### 2. [iOS] Install pods

```bash
cd ios
pod install --repo-update
```

❓ If you get and error like

```text
Invalid `Podfile` file: cannot load such file
```

➡️ try

```bash
cd ..
npm audit fix
cd ios
pod update
```

## Preparing to run the debug build on device (bundling JS)

The steps mentioned below are supposed to enable the autonomy of debug builds:

- By default, React Native relies on [Metro](https://facebook.github.io/metro/) to bundle and transfer the files from development machine onto device via WiFi in run time.

- On iOS, Metro is automatically started when the application is run in Debug scheme from Xcode, so the steps below _might_ be unnecessary.

- When built with Release scheme, the files get properly bundled into the final IPA/APK, so the steps below _are_ unnecessary.

- For running to Android with Debug scheme from Android Studio, the steps below are _usually_ necessary.

Otherwise, the JS bundle in the resulting application archive/bundle will be outdated (or not exist at all).

Also, non-existence of `main.jsbundle` _might_ cause a compilation failure of Debug scheme on iOS.

⚠️ Run the following commands at the **root folder** of the project.

⚠️ NOT inside `android`/`ios` !!!

### Android

#### - Create destination folders

```bash
mkdir -p android/app/src/main/assets/
mkdir -p android/app/src/main/res/
```

#### - Create JS bundle (`index.android.bundle`)

```bash
npx react-native bundle --platform android --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

If the command fails, check whether the destination paths exist in the filesystem.

### iOS

#### - Create the destination folder

```bash
mkdir -p ios/SampleApp/index
```

#### - Create JS bundle (`main.jsbundle`)

```bash
npx react-native bundle --entry-file index.js --bundle-output ios/SampleApp/index/main.jsbundle --platform ios
```

If the command fails, check whether the destination paths exist in the filesystem.

## Running the app

### Running On Simulator

:warning: iOS Simulator does not support ARKit. The application will crash as soon as you reach the screen with AR experience.

See React Native documentation on running the first app:

- [iOS + macOS](https://reactnative.dev/docs/running-on-device#3-build-and-run-your-app)
- [Android + macOS](https://reactnative.dev/docs/running-on-device#3-run-your-app)
- [Android + Windows](https://reactnative.dev/docs/running-on-device#3-run-your-app-1)

### Running On Device

See [[Running On Device]](https://reactnative.dev/docs/running-on-device).
