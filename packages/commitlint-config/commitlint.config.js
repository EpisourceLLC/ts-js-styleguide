const STORY_REGEX = /^sc-\d+$/;
const DEPS_REGEX = /\[[^\]]*\]$/;

const withWhen =
  (when = 'always') =>
  test => {
    if (when === 'always') {
      return !!test;
    }
    return !test;
  };

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', ['kebab-case']],
  },
  plugins: [
    {
      rules: {
        '@episource/dependencies': function dependencies(parsed, when) {
          const testCondition = withWhen(when);
          const { subject } = parsed;
          return [
            testCondition(subject && !!`${subject}`.match(DEPS_REGEX)),
            'Your subject must contain a dependencies array, e.g. "feat: did the thing [dependency1]".\n\tUse an empty array if there are no dependencies.',
          ];
        },
        '@episource/story-link': function storyLink(parsed, when) {
          const testCondition = withWhen(when);
          const { scope } = parsed;
          return [
            testCondition(!scope || !!`${scope}`.match(STORY_REGEX)),
            'Your scope must contain a shortcut story link, e.g. "feat(sc-123): did the thing"',
          ];
        },
      },
    },
  ],
};
