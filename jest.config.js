module.exports = {
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx"
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    testMatch: [
        "**/*.(test|spec).(js|jsx)"
    ],
    testMatch: [
        "**/*.(test|spec).(ts|tsx)"
    ],
    globals: {
        "ts-jest": {
            useBabelrc: true,
            tsConfigFile: "jest.tsconfig.json"
        }
    },
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "enzyme.js"
    ],
    setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
    coverageReporters: [
        "json",
        "lcov",
        "text",
        "text-summary"
    ],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '(webp|jpeg)$': 'identity-obj-proxy',
    },
};