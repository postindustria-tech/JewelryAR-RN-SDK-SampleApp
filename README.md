## After the checkout:

### 1. Download the package 1.15.0 and install modules:
```
curl -O "https://pi-ar-sdk-public.storage.googleapis.com/jewelry-ar-react-native-sdk-1.15.0.tgz"
npm install
```
### - (or) Remove the locally installed package and install the latest from the cloud:
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
