##Have Node and NPM installed

##Create a project folder

mkdir my-typescript-project
cd my-typescript-project

##Create a turn the project folder into a git repository
git init

##Add Conventional Commits Spec to the project (https://www.conventionalcommits.org/en/v1.0.0/)
yarn add git-commit-msg-linter -D

##Create .gitignore file
mkdir touch .gitignore
echo 'node_modules'> .gitignore

##Add typescript
yarn add typescript ts-node-dev @types/node -D

##Create typescript config file
yarn tsc --init
(or npx tsc --int if you are using npm)

Add "outDir": "./dist" to the tsconfig.json file
Add "target": "es2017" to the tsconfig.json file
Add the dist folder to the .gitignore file

##Add start script for the ts-node-dev to the package.json
"scripts": {
"start": "ts-node-dev --ignore-watch node_modules --respawn src/main.ts"
}

#Create the scr/main.ts file
mkdir src
cd src
touch main.ts

##Eddit the main.ts file
console.log("Hello World");

##Run the first Typescript code on the project root
yarn start
