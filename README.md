# vue-material-example

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Steps for setting up the dev environment
``` bash
npm install vue-cli -g
npm install materialize-css
vue init webpack-simple

# modify the files according to necessity.
# Materialize uses sass fir color theming.
# To modify default colors, change the __variables.scss file as needed.
npm install node-sass

# Then sass compile from sass to css and use the new css.

```


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
