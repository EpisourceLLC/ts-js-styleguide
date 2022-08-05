module.exports = {
  // plugin npm page: https://www.npmjs.com/package/eslint-plugin-security-node
  // plugin rule docs on git: https://github.com/gkouziik/eslint-plugin-security-node/tree/master/docs/rules
  rules: {
    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-absence-of-name-option-in-exrpress-session.md
    'security-node/detect-absence-of-name-option-in-exrpress-session': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-buffer-unsafe-allocation.md
    'security-node/detect-buffer-unsafe-allocation': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-child-process.md
    'security-node/detect-child-process': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-crlf.md
    'security-node/detect-crlf': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-dangerous-redirects.md
    'security-node/detect-dangerous-redirects': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-eval-with-expr.md
    'security-node/detect-eval-with-expr': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-html-injection.md
    'security-node/detect-html-injection': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-improper-exception-handling.md
    'security-node/detect-improper-exception-handling': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-insecure-randomness.md
    'security-node/detect-insecure-randomness': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-non-literal-require-calls.md
    'security-node/detect-non-literal-require-calls': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-nosql-injection.md
    'security-node/detect-nosql-injection': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-option-multiplestatements-in-mysql.md
    'security-node/detect-option-multiplestatements-in-mysql': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-option-rejectunauthorized-in-nodejs-httpsrequest.md
    'security-node/detect-option-rejectunauthorized-in-nodejs-httpsrequest': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-option-unsafe-in-serialize-javascript-npm-package.md
    'security-node/detect-option-unsafe-in-serialize-javascript-npm-package': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-possible-timing-attacks.md
    'security-node/detect-possible-timing-attacks': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-runinthiscontext-method-in-nodes-vm.md
    'security-node/detect-runinthiscontext-method-in-nodes-vm': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-security-missconfiguration-cookie.md
    'security-node/detect-security-missconfiguration-cookie': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-sql-injection.md
    'security-node/detect-sql-injection': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-unhandled-async-errors.md
    'security-node/detect-unhandled-async-errors': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/detect-unhandled-event-errors.md
    'security-node/detect-unhandled-event-errors': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/disable-ssl-across-node-server.md
    'security-node/disable-ssl-across-node-server': 'error',

    // https://github.com/gkouziik/eslint-plugin-security-node/blob/master/docs/rules/non-literal-reg-expr.md
    'security-node/non-literal-reg-expr': 'error',
  },
};
