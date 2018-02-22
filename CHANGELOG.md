# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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
- A flipCard mutation
- A moveCardTo mutation

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
