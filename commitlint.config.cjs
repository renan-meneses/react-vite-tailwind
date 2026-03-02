module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Tipo obrigatório
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "refactor",
        "chore",
        "docs",
        "style",
        "test",
        "perf",
        "build",
        "ci",
        "revert",
      ],
    ],

    // Escopo obrigatório
    "scope-empty": [2, "never"],

    // Assunto não pode começar com maiúscula
    "subject-case": [2, "never", ["start-case", "pascal-case"]],

    // Tamanho máximo
    "header-max-length": [2, "always", 100],
  },
};
