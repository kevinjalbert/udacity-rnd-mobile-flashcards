
# Mobile Flashcards

A React Native mobile flashcards application for the Udacity React Nanodegree.

[Demo video (2 mins)](https://monosnap.com/file/2oMsYNz8eTNrHKh65ekB2hWScIkaej) of the basic functionalty.

## Getting Started

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

### Prerequisites

Ensure you have everything needed to run a React Native Application (i.e., XCode or Android Studio, node, yarn).

### Installing

The following will install all the required dependencies:

```
yarn
```

### Running

Both iOS and Android will work, although the iOS version has been better battle-tested and is the preferred platform.

For iOS:

```
yarn run ios
```

For Android:

```
yarn run android
```

### Linting

[ESLint](https://github.com/eslint/eslint) and [Prettier](https://github.com/prettier/prettier) are used for this project. You can run them via:

```
yarn run lint
```

## Features

- Ability to create decks
- Ability to add cards to decks
- Ability to quiz yourself on a deck
- A daily notification at 8:00pm to take a quiz (if you have not yet)

## Future work

- Delete/edit decks
- Delete/edit cards
- Persistence of redux state using something like [redux-persist](https://github.com/rt2zz/redux-persist)
