# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [8.1.0] - 2024-10-17

### Added

- Added padding on column header buttons
- Hover state for column header buttons
- Active state for column header filter buttons

### Changed

- Removed column header hover color

## [8.0.0] - 2024-09-12

### Added

- Astro Light theme class designation for AG Grid
- Changelog

### Fixed

- Improvements to Astro theme adherence for components inside of the grid (checkboxes, spacing, colors, borders, hover and focus states).

### Changed

- SCSS Astro file now uses new Ag Grid SASS API (new @include for extending Alpine Dark theme).
- Upgrade dependency: AG Grid 32.1.0
