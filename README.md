### Create react app typescript

 ````
    npx create-react-app my-app typescript
 ````

### Base configs

#### ESlint config

--
Dependences
dev:

  ````
    npm install eslint --save-dev
  ````

--
Init
eslint
config
file:

  ````
     npm init @eslint/config
  ````

--
Eslint
ignore
file: (
ex:
/.git,
node_modules
folders)

#### Prettier Config

--
Dependence
dev:
````
npm install --save-dev --save-exact prettier
````

--
Init
config
file:

--
Ignore
file: (
ex:
/.git,
node_modules
folders)

#### Editor config

--
@key:
editor
config
react

`https://github.com/facebook/react/blob/main/.editorconfig`

#### Tsconfig file

--
Dependence
dev:
````
npm install --save-dev @tsconfig/recommended
````
--
Init
config
file:
`"extend": "@tsconfig/create-react-app/tsconfig.json",`
--- `compileOptions`
----
baseUrl
----
paths
--- `excludes`:
ex:
node_modules
--- `includes`:
ex:
src

#### Babel config

--
Dependence
dev:
````
npm install --save-dev @babel/core @babel/cli @babel/preset-env
````
--
Init
config
file:
` "presets": ["@babel/core", "@babel/cli", "@babel/preset-env"]`
--- `plugins`

#### Env

--
prefix
with
REACT_APP_

````
  REACT_APP_GOOGLE_CLIENT_ID=529945423192-unva5f60666d7m39l2t5ojgibe32321k.apps.googleusercontent.com
  REACT_APP_URL=http://localhost:3000
````
