# React Native Insideout

## Developer Environment Requirements

### Android
* Android Studio 3.0 or above/
* Visual Studio Code/Sublime Text
* Android SDK
* Node, Python2, Python2

### iOS
* XCode 8.0 +
* Visual Studio Code/Sublime Text
* Nodejs LTS

## Running a test/dev build

Setup your machine for Android and iOS using react native guideline for [Building Projects with Native Code](https://facebook.github.io/react-native/docs/getting-started.html). 

Clone this repo into new project folder (e.g., `InsideOut`).

    git clone https://github.com/mushfique-dai/react-native-insideout InsideOut
    cd InsideOut

Install npm packages and start react native

    npm install

### Android

    react-native run-android

### iOS

Go to `ios` directory of the project and run the following command: 

    cd ios
    pod update

open `ios/InsideOut.xcworkspace` from now on and run the project.
