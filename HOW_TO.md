# This guide is a template that contains steps to install the project, technologies used, folder structure, etc.

## Technologies usedul li m

## Setup

## Project structure

* `e2e`
* `node_modules`
* `src`
  * `app`
    * `components`
      * `footer`
      * `header`
      * `todo-input`
      * `todo-item`
      * `todo-list`
    * `models`: Generate a javascript models that expose the properties declared
      * `filtering.model.ts`: export `interface` FilterButton. And export `enum` Filter
      * `todo.model.ts`: export `class` Todo
    * `services`: Connect `components` no have relationship
                  (Ex: can using metadata from component to orther components,...)
      * `local-storage.service.ts`
      * `todo.service.ts`
  * `assets`
  * `environments`
* `.editorconfig`
* `.gitignore`
* `angular.json`
* `browserlist`
* `karma.conf.js`
* `package-log.json`
* `package.json`
* `tsconfig.app.json`
* `tsconfig.json`
* `tsconfig.spec.json`
* `tslint.json`
