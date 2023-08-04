# node

## NPM - Node Package Manager

**NPM is the standard package manager for Node.js.(Yarn and pnpm are alternatives to npm.)**

If a project has a **package.json** file, by running **npm install** it will install everything the project needs, in the node_modules folder, creating it if it's not existing already.

You can also install a specific package by running **npm install _package-name_**
Often you'll see more flags added to this command:

- -save-dev : installs and adds the entry to the package.json file devDependencies
- -no-save : installs but does not add the entry to the package.json file dependencies
- -save-optional : installs and adds the entry to the package.json file optionalDependencies
- -no-optional will : prevent optional dependencies from being installed

The difference between devDependencies and dependencies is that the former contains development tools, like a testing library, while the latter is bundled with the app in production.

### Updating packages

**npm update**

You can install a specific version of a package, by running **npm install _package-name_ @ _version_**

## NPX - Node Package Execute

**NPX is an NPM package runner that makes it really easy to install any sort of node executable that would have normally been installed using NPM.**

When you run a package using NPX, it searches for the package in the local and global registry, and then it runs the package.

If the package is not already installed, NPX downloads the package files and installs the package, but it will only cache the files instead of saving it.
