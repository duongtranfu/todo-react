# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 1.1.7

### Fixed
- Position first sliding panel using `fixed` positioning, nested panels are positioned absolutely. Fixes an issue where panels are rendered off screen when the parent page is scrolled.

## 1.1.6

### Added
- SovosRaisedButton: Add action prop. This allows apply a type to button, for example 'submit', by default the prop is empty.

### Fixed
- SovosToolbarTitle: Now children prop can be a node or string.

## 1.1.5

### Fixed
- Allow babel to correctly transpile individual component files during builds

## 1.1.4

### Fixed
- Corrected bad import in `SovosTabCardHistory`

## 1.1.3

### Changed
- Converted table sub-components to extend `React.PureComponent` in order to improve render times for large tables. The interface of the table remains the same but it is assumed that `columns` and `data` properties are immutable.  
- Use Jest for a test runner rather than Karma
- Remove unused Babel presets and plugins

## 1.1.2

### Fixed
- SovosSlidingPanel: Fixed issue where nested sliding panels where using all space instead of using the parent as reference

## 1.1.1

### Added
- SovosToolbarSearch: Added value prop, by default is empty.

## 1.1.0

### Added
- Sovos Buttons Group component: A group of buttons that will be next to each other with 10px of spacing between them except the first and the last one that won't have margin on the edges. It also exposes an align attribute to show the buttons on the left, center or right section of its parent.
- Default implementation of a comments card for use in `SovosTabCard` [S1UI-34](https://jira.corp.sovos.local/browse/S1UI-34)
- Includes a simple form for adding a new comment with an application specified callback

### Changed
- Size of the buttons in general are 30px.
- Space of the Sliding panel buttons are 10px.

### Fixed
- Fixed a problem of sliding panel additional buttons not showing changes (like disabled state).
- Allow scrolling of drawers so that long content will be displayed [S1UI-37](https://jira.corp.sovos.local/browse/S1UI-37)
- Use Enterprise theme as the base theme/default for `SovoSThemeProvider` to ensure all required theme attributes are available [S1UI-2](https://jira.corp.sovos.local/browse/S1UI-2)

## 1.0.0
### Added
- `titleStyle` in `SovosSlidingPanel` to allow styling the panel title text

### Changed
- Column first layout for tables
 - Better support for greedy columns
 - Better responsiveness, columns no longer jump on size changes
- Action buttons are no longer always rendered as primary buttons in `SovosSlidingPanel`
- Fixed conflicts with box sizing in the footer of `SovosSlidingPanel`
- Add ES2015 polyfill to StyleGuide in order to support IE 11

## 1.0.0-rc13 - 2018-4-10
### Changed
- Fixed error with `SovosNavigation` height and scrolling of app content in `SovosGlobalLayout`
- Renamed `footerElements` to `footerProps` in `SovosGlobalLayout` and pass property correctly to `SovosNavigation`

## 1.0.0-rc12 - 2018-4-9
### Changed
- Fixed sizing of content column in `SovosGlobalLayout`
- Updated `SovosAvatar` Readme to reflect new name

## 1.0.0-rc11 - 2018-4-5
### Changed
- StyleGuide updates
 - Group related components
 - Added `displayName` property to several components
- `SovosAuthorAvatar` renamed to `SovosAvatar`
- Use `display:flex` to create columns in `SovosGlobalLayout`
- Include `react-transition-group` in the library [S1UI-9](https://jira.corp.sovos.local/browse/S1UI-9)
- Hide year if not present in `ContextSwitcher` [S1UI-26](https://jira.corp.sovos.local/browse/S1UI-26)
- Add configurable buttons and tabs to `SovosSlidingPanel` [S1UI-29](https://jira.corp.sovos.local/browse/S1UI-26)
- Add panel to store when initially rendering `SovosSlidingPanel` in open state [S1UI-6](https://jira.corp.sovos.local/browse/S1UI-6)
- Remove unused `ref` in `SovosMonthSelector` [S1UI-8](https://jira.corp.sovos.local/browse/S1UI-8)
- Update "Clear" button text in `SovosFilterDrawer` [S1UI-30](https://jira.corp.sovos.local/browse/S1UI-30)
- Update `PrimaryNavy` color [S1UI-33](https://jira.corp.sovos.local/browse/S1UI-33)
- Added multiple sizes and custom colors to `SovosAvatar` [S1UI-35](https://jira.corp.sovos.local/browse/S1UI-35)
- Lighten drop shadow, change selected color, and center labels in `SovosToolbar` [S1UI-32](https://jira.corp.sovos.local/browse/S1UI-32)
- Add row hover highlighting and row click events in `SovosTable` [S1UI-13](https://jira.corp.sovos.local/browse/S1UI-13)
- Add avatar and actions to footer in `SovosNavigation` [S1UI-25](https://jira.corp.sovos.local/browse/S1UI-25)

## [1.0.0-rc1] - 2018-2-1
### Added
- Initial release of the rebranded shared component library. See the old [fusionui-shared-components-react](https://bitbucket.dev.sovos.local/projects/PTFM/repos/fusionui-shared-components-react/browse) for an in depth history.

- Rename `AuthorAvatar` to `SovosAuthorAvatar`
- Renamed `PaginationFooter` to `SovosPaginationFooter`


[1.0.0-rc1]: https://bitbucket.dev.sovos.local/projects/PTFM/repos/s1-ui/browse?at=refs%2Ftags%2F1.0.0-rc1
