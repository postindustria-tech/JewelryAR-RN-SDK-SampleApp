## After checkout:

### 1. (Re-)install the latest npm package from the cloud:
```
npm remove jewelry-ar-react-native-sdk
npm install "https://pi-ar-sdk-public.storage.googleapis.com/jewelry-ar-react-native-sdk-$(curl https://pi-ar-sdk-public.storage.googleapis.com/_latest_tar.txt).tgz"
```

### 2. [iOS] Install pods
```
cd iOS
pod install
```

## DONE!
