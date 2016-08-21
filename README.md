## Angular 2 - 2.0.0-rc.4 (typescript@1.9.0-dev.20160409) - Basic template
> Includes Semantic UI - 2.1.6

## Installing node and npm (ex. 4.5.0)
-Download LTS node from https://nodejs.org/en/ -> node-v4.5.0-linux-x64.tar.xz

-sudo tar -C /usr/local --strip-components 1 -xJf node-v4.5.0-linux-x64.tar.xz

-ls -l /usr/local/bin/node

-ls -l /usr/local/bin/npm

-sudo chown yourLinuxUser:group /home/yourLinuxUser/.npm

-sudo chown yourLinuxUser:group -R /home/yourLinuxUser/.npm/*

## Installing node packages globally without sudo:
-npm config set prefix '~/.npm-packages'

-append to .bashrc

>export PATH="$PATH:$HOME/.npm-packages/bin"



## Install TypeScript
npm install -g 'typescript@1.9.0-dev.20160409'

## Install npm packages (inside template root)
```
npm install
```

Then we will

- compile our TypeScript code and
- host the app on local development server

by running the command:

```
npm run go
```

Then visit [http://localhost:8080](http://localhost:8080) in your browser.

## What are all the other files in this repo?

- `tsconfig.json` - this is instructions for our TypeScript compiler
- `tslint.json` - `tslint` is a program and helps enforce rules about code style. The `tslint.json` is the config file that specifies conventions for this project.
- `vendor` - for this project we're using [Semantic-UI](http://semantic-ui.com/) for the CSS. We've included the CSS files from Semantic here.
- `resources` - this is where we store a few images
