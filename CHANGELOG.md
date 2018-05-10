# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.11.0] - 2018-05-10
### Added
- Firebase realtime database

### Updated
- Opens up the local server to the local network

### Removes
- The JSON Server setup

## [0.10.0] - 2018-04-26
### Added
- a `fetchCollections()` action
- a `setCollections()` mutation
- a test for safely getting an undefined collection
- a json file for the collections data

### Fixed
- an issue with fetching undefined collections

### Removed
- The hard-coded data from the cards store

### Broke
- I have knowingly broke the tests, but will rectify this in a patch shortly

## [0.9.0] - 2018-04-11
### Added
- Routing via vue-router
- a `<TestScreen>` component
- a `<CardScreen>` component

## [0.8.0] - 2018-03-22
### Added
- Unit tests for the follwing components
  - `<Deck>`
  - `<Hand>`
  - `<PlayArea>`
  - `<Card>`

### Changed
- Moved the store test next to the store itself

## [0.7.0] - 2018-03-08
### Added
- transitions to the `<Card>` component

### Changed
- the way the `<Deck>` component renders

## [0.6.0] - 2018-02-22
### Added
- more tests for the `moveCardTo` mutation

### Changed
- the data structure in the card store
- the `moveCardTo` mutation and `getCardsIn` getters to handle the aforementioned data change

### Removed
- the `flipCard` mutation

## [0.5.0] - 2018-02-08
### Added
- a `<Deck>` component
- a `<Hand>` component
- a `<PlayArea>` component
- a `<Card>` component

### Changed
- Pulled the aforementioned `<Card>` component out of the `<CardList>` component.

## [0.4.0] - 2018-01-25
### Added
- A `flipCard` mutation
- A `moveCardTo` mutation

### Changed
- Updated the test suite to include mutations

## [0.3.0] - 2018-01-11
### Added
- A basic testing suite
- A `card-type` prop for `<card-list>`
- Getters for the cards module

### Changed
- The cards data to an array

## [0.2.0] - 2017-12-28
### Added
- A `<card-list>` component
- Basic data for a hand of cards
- This changelog

### Removed
- Create logger

## [0.1.0] - 2017-12-14

### Added
- Initialised the project
