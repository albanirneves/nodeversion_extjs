# Ext JS Version Controlling for JSON files
This Node.js file is a script that updates your app.json or package.json file for ExtJS apps

## Getting started
### Prerequisite
- Install [Node.js](https://nodejs.org/)

### Syntax
    $ node version.js [versionType] [filePath]

**versionTypes**:
- --build (for daily changes builds)
- --patch (when you make backwards-compatible bug fixes)
- --minor (when you add functionality in a backwards-compatible manner)
- --major (when you make incompatible changes)
- See [Semantic Versioning](https://semver.org/)

**filePath**: The path to app.json or package.json file

### Examples

Changing 1.0.5.256 to 1.0.5.257:

    $ node version.js --build ../app.json

Changing 1.0.5.256 to 1.0.6.0:

    $ node version.js --patch ../app.json

Changing 1.0.6.15 to 1.1.0.0:

    $ node version.js --minor ../app.json

Changing 1.4.2.55 to 2.0.0.0:

    $ node version.js --major ../app.json
