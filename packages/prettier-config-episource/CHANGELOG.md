# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.10.0 (2022-11-09)


### Features

* add pr rules ([#212](https://github.com/EpisourceLLC/ts-js-styleguide/issues/212)) ([3d79ddf](https://github.com/EpisourceLLC/ts-js-styleguide/commit/3d79ddf5fd4d15068cee42b1d3c69deeaaaf783a))





## 0.9.1 (2022-08-24)


### Bug Fixes

* upgrade react eslint dependencies ([#208](https://github.com/EpisourceLLC/ts-js-styleguide/issues/208)) ([b3a0789](https://github.com/EpisourceLLC/ts-js-styleguide/commit/b3a078926e61e5803a5dd21f36b8b051445aacb6))





# 0.9.0 (2022-08-05)


### Features

* **sc-48732:** add security linter to base ([#207](https://github.com/EpisourceLLC/ts-js-styleguide/issues/207)) ([4509754](https://github.com/EpisourceLLC/ts-js-styleguide/commit/4509754d570edd6ddee8623423a25ad12c4ffa6f))


### BREAKING CHANGES

* **sc-48732:** new rules will cause builds to fail if linting issues are found.

* feat(sc-48732): add security linter to base

* fix(sc-48732): move security plugin to index.js

* fix(sc-48732): properly set up rules for security-node plugin

* feat(sc-48732): make security-node plugin cause errors, include docs

Co-authored-by: Isaac Hernandez <isaac.hernandez@LAX-LM11746.local>





## 0.8.2 (2022-06-02)


### Bug Fixes

* correct reference to ts base config ([#195](https://github.com/EpisourceLLC/ts-js-styleguide/issues/195)) ([6f897e0](https://github.com/EpisourceLLC/ts-js-styleguide/commit/6f897e0a68bf5f5e6cfa46f00a3fafe86ed68aa3))





## 0.8.1 (2022-02-17)

**Note:** Version bump only for package @episource/prettier-config





# 0.8.0 (2022-02-16)


### Features

* update commitlint rule ([#181](https://github.com/EpisourceLLC/ts-js-styleguide/issues/181)) ([9884d51](https://github.com/EpisourceLLC/ts-js-styleguide/commit/9884d51fbc81b1852049405d6f38302a4f257438))


### BREAKING CHANGES

* case rules have been reversed for shortcut. Commits should now take the form of `feat(sc-123): did the thing`

* chore: update husky

* fix: correct husky command

* fix: enforce kebab-case
* only kebab-case will be allowed after this change

* chore: remove unused script

Co-authored-by: Elliott Foster <elliott.foster@episource.com>





## 0.7.1 (2022-02-14)


### Bug Fixes

* when using ts, use correct no-shadow ([#176](https://github.com/EpisourceLLC/ts-js-styleguide/issues/176)) ([e41d81d](https://github.com/EpisourceLLC/ts-js-styleguide/commit/e41d81db1d61d3a4b0ffde611060f9ba658e0bbe))





# 0.7.0 (2021-12-16)


### Features

* disable import/prefer-default-export ([#165](https://github.com/EpisourceLLC/ts-js-styleguide/issues/165)) ([4528cec](https://github.com/EpisourceLLC/ts-js-styleguide/commit/4528cec3763fb3d607f31bb1fd7c4b2d0fac9772))





## 0.6.4 (2021-12-16)

**Note:** Version bump only for package @episource/prettier-config





## 0.6.3 (2021-12-15)

**Note:** Version bump only for package @episource/prettier-config





## 0.6.2 (2021-12-15)

**Note:** Version bump only for package @episource/prettier-config





## 0.6.1 (2021-12-14)

**Note:** Version bump only for package @episource/prettier-config





# 0.6.0 (2021-12-14)


### Features

* make commitlint-config public ([#164](https://github.com/EpisourceLLC/ts-js-styleguide/issues/164)) ([3cb8423](https://github.com/EpisourceLLC/ts-js-styleguide/commit/3cb8423da220c54a82d9b359556aae22bf2594fd))





# 0.5.0 (2021-09-23)


### Features

* **EPAMCD-431:** enable complexity rule ([#119](https://github.com/EpisourceLLC/ts-js-styleguide/issues/119)) ([4b77fab](https://github.com/EpisourceLLC/ts-js-styleguide/commit/4b77fab892151559eaffe565d910b3ac0d0260f1))





# 0.4.0 (2021-09-10)


### Features

* enable arrow-body-style rule ([#116](https://github.com/EpisourceLLC/ts-js-styleguide/issues/116)) ([0e66f67](https://github.com/EpisourceLLC/ts-js-styleguide/commit/0e66f67506dd3fa017d83250e49c64649690703e))





## 0.3.8 (2021-08-13)

**Note:** Version bump only for package @episource/prettier-config





## 0.3.7 (2021-08-05)


### Bug Fixes

* update commit message for independent versioning ([05632d7](https://github.com/EpisourceLLC/ts-js-styleguide/commit/05632d765182a9181ec1d29d52bc14b1c101c8ac))





## 0.3.6 (2021-08-05)


### Bug Fixes

* skip ci ([869bbec](https://github.com/EpisourceLLC/ts-js-styleguide/commit/869bbec8ae0ca77acd7ec98eaa097fd640414931))





## 0.3.5 (2021-08-05)

**Note:** Version bump only for package @episource/prettier-config





## 0.3.4 (2021-08-05)

**Note:** Version bump only for package @episource/prettier-config





## 0.3.3 (2021-08-05)

**Note:** Version bump only for package @episource/prettier-config





## 0.3.2 (2021-08-05)

**Note:** Version bump only for package @episource/prettier-config





## 0.3.1 (2021-08-03)

**Note:** Version bump only for package @episource/prettier-config





# [0.3.0](https://github.com/EpisourceLLC/ts-js-styleguide/compare/@episource/prettier-config@0.2.1...@episource/prettier-config@0.3.0) (2021-08-03)


### Features

* **EPAMCD-369:** add common commitlint config ([#84](https://github.com/EpisourceLLC/ts-js-styleguide/issues/84)) ([5e6de36](https://github.com/EpisourceLLC/ts-js-styleguide/commit/5e6de36e31e9c65a338f78f851e1c27b4a2616b3))


### BREAKING CHANGES

* **EPAMCD-369:** support for node < 14 has been dropped.





## [0.2.1](https://github.com/EpisourceLLC/ts-js-styleguide/compare/@episource/prettier-config@0.2.0...@episource/prettier-config@0.2.1) (2021-05-20)


### Bug Fixes

* make packages public ([5c9afa9](https://github.com/EpisourceLLC/ts-js-styleguide/commit/5c9afa92ce5e3b86d86b95309ff7a2acfd007878))





# 0.2.0 (2021-05-20)


### Bug Fixes

* namespace package names ([13c9f1d](https://github.com/EpisourceLLC/ts-js-styleguide/commit/13c9f1dc1cc97bf3039d76a5bd2f3d0baa77ebaa))
* remove spacing on package.json for prettier config pkg ([995609e](https://github.com/EpisourceLLC/ts-js-styleguide/commit/995609e539b0ebe37d2cfe06494659e0bf7a9fbe))


### Features

* add .editorconfig on prettier config package ([304e04e](https://github.com/EpisourceLLC/ts-js-styleguide/commit/304e04eb29e029b761010a7df115d17b3b410988))


### BREAKING CHANGES

* updated package name to be namespaced in the @episource organization.





## [0.1.1](https://github.com/EpisourceLLC/ts-js-styleguide/compare/prettier-config-episource@0.1.0...prettier-config-episource@0.1.1) (2019-08-14)

**Note:** Version bump only for package prettier-config-episource





# 0.1.0 (2019-08-14)


### Bug Fixes

* remove spacing on package.json for prettier config pkg ([995609e](https://github.com/EpisourceLLC/ts-js-styleguide/commit/995609e))


### Features

* add .editorconfig on prettier config package ([304e04e](https://github.com/EpisourceLLC/ts-js-styleguide/commit/304e04e))
