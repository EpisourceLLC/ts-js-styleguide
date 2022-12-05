# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.18.2 (2022-12-05)

**Note:** Version bump only for package @episource/eslint-config

## 0.18.1 (2022-11-09)

**Note:** Version bump only for package @episource/eslint-config

# 0.18.0 (2022-11-09)

### Features

- add pr rules ([#212](https://github.com/EpisourceLLC/ts-js-styleguide/issues/212)) ([3d79ddf](https://github.com/EpisourceLLC/ts-js-styleguide/commit/3d79ddf5fd4d15068cee42b1d3c69deeaaaf783a))

## 0.17.1 (2022-08-24)

### Bug Fixes

- upgrade react eslint dependencies ([#208](https://github.com/EpisourceLLC/ts-js-styleguide/issues/208)) ([b3a0789](https://github.com/EpisourceLLC/ts-js-styleguide/commit/b3a078926e61e5803a5dd21f36b8b051445aacb6))

# 0.17.0 (2022-08-05)

### Features

- **sc-48732:** add security linter to base ([#207](https://github.com/EpisourceLLC/ts-js-styleguide/issues/207)) ([4509754](https://github.com/EpisourceLLC/ts-js-styleguide/commit/4509754d570edd6ddee8623423a25ad12c4ffa6f))

### BREAKING CHANGES

- **sc-48732:** new rules will cause builds to fail if linting issues are found.

- feat(sc-48732): add security linter to base

- fix(sc-48732): move security plugin to index.js

- fix(sc-48732): properly set up rules for security-node plugin

- feat(sc-48732): make security-node plugin cause errors, include docs

Co-authored-by: Isaac Hernandez <isaac.hernandez@LAX-LM11746.local>

## 0.16.2 (2022-06-02)

### Bug Fixes

- correct reference to ts base config ([#195](https://github.com/EpisourceLLC/ts-js-styleguide/issues/195)) ([6f897e0](https://github.com/EpisourceLLC/ts-js-styleguide/commit/6f897e0a68bf5f5e6cfa46f00a3fafe86ed68aa3))

## 0.16.1 (2022-02-17)

**Note:** Version bump only for package @episource/eslint-config

# 0.16.0 (2022-02-16)

### Features

- update commitlint rule ([#181](https://github.com/EpisourceLLC/ts-js-styleguide/issues/181)) ([9884d51](https://github.com/EpisourceLLC/ts-js-styleguide/commit/9884d51fbc81b1852049405d6f38302a4f257438))

### BREAKING CHANGES

- case rules have been reversed for shortcut. Commits should now take the form of `feat(sc-123): did the thing`

- chore: update husky

- fix: correct husky command

- fix: enforce kebab-case
- only kebab-case will be allowed after this change

- chore: remove unused script

Co-authored-by: Elliott Foster <elliott.foster@episource.com>

## 0.15.1 (2022-02-14)

### Bug Fixes

- when using ts, use correct no-shadow ([#176](https://github.com/EpisourceLLC/ts-js-styleguide/issues/176)) ([e41d81d](https://github.com/EpisourceLLC/ts-js-styleguide/commit/e41d81db1d61d3a4b0ffde611060f9ba658e0bbe))

# 0.15.0 (2021-12-16)

### Features

- disable import/prefer-default-export ([#165](https://github.com/EpisourceLLC/ts-js-styleguide/issues/165)) ([4528cec](https://github.com/EpisourceLLC/ts-js-styleguide/commit/4528cec3763fb3d607f31bb1fd7c4b2d0fac9772))

## 0.14.4 (2021-12-16)

**Note:** Version bump only for package @episource/eslint-config

## 0.14.3 (2021-12-15)

**Note:** Version bump only for package @episource/eslint-config

## 0.14.2 (2021-12-15)

**Note:** Version bump only for package @episource/eslint-config

## 0.14.1 (2021-12-14)

**Note:** Version bump only for package @episource/eslint-config

# 0.14.0 (2021-12-14)

### Features

- make commitlint-config public ([#164](https://github.com/EpisourceLLC/ts-js-styleguide/issues/164)) ([3cb8423](https://github.com/EpisourceLLC/ts-js-styleguide/commit/3cb8423da220c54a82d9b359556aae22bf2594fd))

# 0.13.0 (2021-09-23)

### Features

- **EPAMCD-431:** enable complexity rule ([#119](https://github.com/EpisourceLLC/ts-js-styleguide/issues/119)) ([4b77fab](https://github.com/EpisourceLLC/ts-js-styleguide/commit/4b77fab892151559eaffe565d910b3ac0d0260f1))

# 0.12.0 (2021-09-10)

### Features

- enable arrow-body-style rule ([#116](https://github.com/EpisourceLLC/ts-js-styleguide/issues/116)) ([0e66f67](https://github.com/EpisourceLLC/ts-js-styleguide/commit/0e66f67506dd3fa017d83250e49c64649690703e))

## 0.11.8 (2021-08-13)

**Note:** Version bump only for package @episource/eslint-config

## 0.11.7 (2021-08-05)

### Bug Fixes

- update commit message for independent versioning ([05632d7](https://github.com/EpisourceLLC/ts-js-styleguide/commit/05632d765182a9181ec1d29d52bc14b1c101c8ac))

## 0.11.6 (2021-08-05)

### Bug Fixes

- skip ci ([869bbec](https://github.com/EpisourceLLC/ts-js-styleguide/commit/869bbec8ae0ca77acd7ec98eaa097fd640414931))

## 0.11.5 (2021-08-05)

**Note:** Version bump only for package @episource/eslint-config

## 0.11.4 (2021-08-05)

**Note:** Version bump only for package @episource/eslint-config

## 0.11.3 (2021-08-05)

**Note:** Version bump only for package @episource/eslint-config

## 0.11.2 (2021-08-05)

**Note:** Version bump only for package @episource/eslint-config

## 0.11.1 (2021-08-03)

**Note:** Version bump only for package @episource/eslint-config

# [0.11.0](https://github.com/EpisourceLLC/ts-js-styleguide/compare/@episource/eslint-config@0.10.3...@episource/eslint-config@0.11.0) (2021-08-03)

### Features

- **EPAMCD-369:** add common commitlint config ([#84](https://github.com/EpisourceLLC/ts-js-styleguide/issues/84)) ([5e6de36](https://github.com/EpisourceLLC/ts-js-styleguide/commit/5e6de36e31e9c65a338f78f851e1c27b4a2616b3))

### BREAKING CHANGES

- **EPAMCD-369:** support for node < 14 has been dropped.

## [0.10.3](https://github.com/EpisourceLLC/ts-js-styleguide/compare/@episource/eslint-config@0.10.2...@episource/eslint-config@0.10.3) (2021-05-20)

### Bug Fixes

- make packages public ([5c9afa9](https://github.com/EpisourceLLC/ts-js-styleguide/commit/5c9afa92ce5e3b86d86b95309ff7a2acfd007878))

## [0.10.2](https://github.com/EpisourceLLC/ts-js-styleguide/compare/@episource/eslint-config@0.10.1...@episource/eslint-config@0.10.2) (2021-05-20)

**Note:** Version bump only for package @episource/eslint-config

## [0.10.1](https://github.com/EpisourceLLC/ts-js-styleguide/compare/@episource/eslint-config@0.10.0...@episource/eslint-config@0.10.1) (2021-05-20)

### Bug Fixes

- correct dependencies ([f32200b](https://github.com/EpisourceLLC/ts-js-styleguide/commit/f32200b2f678054029b98c637901a7fe3ef67fa4))

# 0.10.0 (2021-05-20)

### Bug Fixes

- disable rules conflicting with prettier ([db58d7c](https://github.com/EpisourceLLC/ts-js-styleguide/commit/db58d7c7d34207cbe5be07e13a1d157be6730e82))
- namespace package names ([13c9f1d](https://github.com/EpisourceLLC/ts-js-styleguide/commit/13c9f1dc1cc97bf3039d76a5bd2f3d0baa77ebaa))
- revert version on eslint config pkg ([61cddd0](https://github.com/EpisourceLLC/ts-js-styleguide/commit/61cddd05bddfc531f24e4d6532548e0c453f4ab7))

### Features

- **EPAMCD-294:** upgrade eslint-plugin-jest dependency ([#69](https://github.com/EpisourceLLC/ts-js-styleguide/issues/69)) ([93fe8e0](https://github.com/EpisourceLLC/ts-js-styleguide/commit/93fe8e05fe2dfdd9af584652e6189157bf05cd1d))
- **REDUX_DEVTOOLS_EXTENSION** ignored on react ([c6a1ed3](https://github.com/EpisourceLLC/ts-js-styleguide/commit/c6a1ed3130fb98f169e8671be3bb08fbd3edf4c9))
- add configs for eslint config for react ([96d6df6](https://github.com/EpisourceLLC/ts-js-styleguide/commit/96d6df6e2dbc261c60f3d44b5ccfae8b4ea4ab7f))
- add prettier config support to eslint main pkg ([8d2c097](https://github.com/EpisourceLLC/ts-js-styleguide/commit/8d2c0971ff61763f8931141830be9e94eb8865f4))
- add README for eslint-config-episource ([c5fd182](https://github.com/EpisourceLLC/ts-js-styleguide/commit/c5fd182f2358fa538771cd726a70f6d257b3130e))
- add typescript rules to base and general eslint ([ff44fe9](https://github.com/EpisourceLLC/ts-js-styleguide/commit/ff44fe9f76b9f5440ae35ac20c71be68525a5fcc))
- bump versions and support typescript ([21b2522](https://github.com/EpisourceLLC/ts-js-styleguide/commit/21b2522a103cbeb771dfd94a3db892d5e9880257))
- remove deprecated rules ([95b8b44](https://github.com/EpisourceLLC/ts-js-styleguide/commit/95b8b448159b7261d78a57a1382aeaa82d079460))
- update internal workspace packages ([1edb83c](https://github.com/EpisourceLLC/ts-js-styleguide/commit/1edb83c265c3ebde0e350bf73567ac51269813a1))

### BREAKING CHANGES

- updated package name to be namespaced in the @episource organization.
- **EPAMCD-294:** This implicitly updates the jest dependency to ^26.0.0.

# [0.9.0](https://github.com/EpisourceLLC/ts-js-styleguide/compare/eslint-config-episource@0.8.0...eslint-config-episource@0.9.0) (2021-05-20)

### Features

- **EPAMCD-294:** upgrade eslint-plugin-jest dependency ([#69](https://github.com/EpisourceLLC/ts-js-styleguide/issues/69)) ([93fe8e0](https://github.com/EpisourceLLC/ts-js-styleguide/commit/93fe8e05fe2dfdd9af584652e6189157bf05cd1d))

### BREAKING CHANGES

- **EPAMCD-294:** This implicitly updates the jest dependency to ^26.0.0.

# [0.8.0](https://github.com/EpisourceLLC/ts-js-styleguide/compare/eslint-config-episource@0.7.0...eslint-config-episource@0.8.0) (2020-10-19)

### Features

- remove deprecated rules ([95b8b44](https://github.com/EpisourceLLC/ts-js-styleguide/commit/95b8b448159b7261d78a57a1382aeaa82d079460))

# [0.7.0](https://github.com/EpisourceLLC/ts-js-styleguide/compare/eslint-config-episource@0.6.0...eslint-config-episource@0.7.0) (2020-10-09)

### Features

- update internal workspace packages ([1edb83c](https://github.com/EpisourceLLC/ts-js-styleguide/commit/1edb83c265c3ebde0e350bf73567ac51269813a1))

# [0.6.0](https://github.com/EpisourceLLC/ts-js-styleguide/compare/eslint-config-episource@0.5.1...eslint-config-episource@0.6.0) (2020-06-08)

### Features

- bump versions and support typescript ([21b2522](https://github.com/EpisourceLLC/ts-js-styleguide/commit/21b2522))

## [0.5.1](https://github.com/EpisourceLLC/ts-js-styleguide/compare/eslint-config-episource@0.5.0...eslint-config-episource@0.5.1) (2019-11-27)

**Note:** Version bump only for package eslint-config-episource

# [0.5.0](https://github.com/EpisourceLLC/ts-js-styleguide/compare/eslint-config-episource@0.4.0...eslint-config-episource@0.5.0) (2019-09-10)

### Features

- **REDUX_DEVTOOLS_EXTENSION** ignored on react ([c6a1ed3](https://github.com/EpisourceLLC/ts-js-styleguide/commit/c6a1ed3))

# [0.4.0](https://github.com/EpisourceLLC/ts-js-styleguide/compare/eslint-config-episource@0.3.0...eslint-config-episource@0.4.0) (2019-08-16)

### Features

- add typescript rules to base and general eslint ([ff44fe9](https://github.com/EpisourceLLC/ts-js-styleguide/commit/ff44fe9))

# [0.3.0](https://github.com/EpisourceLLC/ts-js-styleguide/compare/eslint-config-episource@0.2.0...eslint-config-episource@0.3.0) (2019-08-15)

### Bug Fixes

- disable rules conflicting with prettier ([db58d7c](https://github.com/EpisourceLLC/ts-js-styleguide/commit/db58d7c))

### Features

- add README for eslint-config-episource ([c5fd182](https://github.com/EpisourceLLC/ts-js-styleguide/commit/c5fd182))

# [0.2.0](https://github.com/EpisourceLLC/ts-js-styleguide/compare/eslint-config-episource@0.1.1...eslint-config-episource@0.2.0) (2019-08-14)

### Features

- add prettier config support to eslint main pkg ([8d2c097](https://github.com/EpisourceLLC/ts-js-styleguide/commit/8d2c097))

## [0.1.1](https://github.com/EpisourceLLC/ts-js-styleguide/compare/eslint-config-episource@0.1.0...eslint-config-episource@0.1.1) (2019-08-14)

**Note:** Version bump only for package eslint-config-episource

# 0.1.0 (2019-08-14)

### Bug Fixes

- revert version on eslint config pkg ([61cddd0](https://github.com/EpisourceLLC/ts-js-styleguide/commit/61cddd0))

### Features

- add configs for eslint config for react ([96d6df6](https://github.com/EpisourceLLC/ts-js-styleguide/commit/96d6df6))
