# NPM use and release
NPM package release management repository

##### What is NPM?

NPM is a package management tool for JavaScript, a landmark product of front-end modularization。

In a simple way, it is to use NPM to download modules and reuse existing code to improve work efficiency。

##### Install

Usually, NPM is automatically installed when nodeJs is installed. If you do not find NPM command in CMD, you need to manually install the installation directory to the global environment variables.

Final:

```javascript
npm -v
5.3.0
```

Installation success!

##### Install dependency package

The dependency packet is divided into two types: local and global installation。

When is the global installation?


When you try to install the command line tool, you want to run out of the current project.Install command

```javascript
npm install <pkg> -g
```

Local installation:

First, switch the directory to the project directory.

Second, install the post dependency through the command `npm install <pkg> --save` (production environment) or the command `npm install <pkg> --save-dev`(development environment).

Third, other developers can install dependency through package.json.

```
# View the installation list
npm ls
# Update package
npm update
# Search package
npm search <pkg>
```

View the installation list

##### unInstall dependency package

Global unInstall: `npm uninstall <pkg> -g`

Local unInstall: `npm uninstall <pkg> --save` or `npm uninstall <pkg> --save-dev`

##### NPM Publish


Create a NPM account: 

Enter `npm addUser` at the CMD, prompt to enter the account, password, and mailbox, and then the prompt is created successfully.

NPM Login: `npm login`(Username/Password/Email)

NPM Publish: `npm pulish` (tips:The name and version of the package are name and version in the package.json in your project.)

Success! You will find the released package in the NPM search!

##### NPM UNPublish

Revocation of a published package is considered a bad behavior, and try not to do this as much as possible!

NPM UNPublish: `npm unpublish <mypkg>`(If there is a question of permission, please add `--force`)

If the above method fails, use the following alternative command:

`npm deprecate <pkg>[@<version>] <message> `

Please use it carefully, and the user will see this package no longer maintained.

Also, By `npm version <update_type>` automatically changed by changing the version(update_type: patch/minor/major,A patch, a small change, a big change).

##### TO UPDATE

Modify the version of the package (the version field in package.json), and then execute the publish command.

At the same time, please follow the principles of community version management.

##### Tips:

1. The package name not published and package name!

2. Package name limit: there can be no capital letter / space / slide line!

3. If there is a private code in the package, write it to `.gitignore ` or `.npmignore`, and the upload will be ignored!

4. unpublish is only allowed with versions published in the last 24 hours!Even if you revoke the published package, you can't repeat the name and version of the revoked package at the time of the package.

   ​





