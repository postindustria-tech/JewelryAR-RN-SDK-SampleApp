# Jewelry AR SDK - Sample App

## Requirements

### - `npm` (`8.7.0` or newer)

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

### 1. (Re-)install the latest npm package from the cloud:

```bash
npm remove jewelry-ar-react-native-sdk
npm install "https://pi-ar-sdk-public.storage.googleapis.com/jewelry-ar-react-native-sdk-$(curl https://pi-ar-sdk-public.storage.googleapis.com/_latest_tar.txt).tgz"
```

### 2. [iOS] Install pods

```bash
cd iOS
pod install
```

## Preparing to run the debug build onto device (bundling JS)

### Android

```bash
mkdir -p android/app/src/main/assets/
mkdir -p android/app/src/main/res/
npx react-native bundle --platform android --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

### iOS

```bash
mkdir -p ios/SampleApp/index
npx react-native bundle --entry-file index.js --bundle-output ios/SampleApp/index/main.jsbundle --platform ios
```
