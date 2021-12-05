module.exports = {
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        parser: "babel-eslint",
    },
    plugins: [
        "vue"
    ],
    rules: {
    }
};