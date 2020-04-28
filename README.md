# super-mall

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


配置别名
vue-cli@2
build/webpack.base/conf.js
 alias: {
      '@': resolve('src'),
	    'assets': '@/assets'
    }
    
    
    props 默认值
    refAge: {
    type: Number,
    default: 0
    },
    refName: {
    type: String,
    default: ''
    },
    hotDataLoading: {
    type: Boolean,
    default: false
    },
    hotData: {
    type: Array,
    default: () => {
    return []
    }
    },
    getParams: {
    type: Function,
    default: () => () => {}
    },
    meta: {
    type: Object,
    default: () => ({})
    }