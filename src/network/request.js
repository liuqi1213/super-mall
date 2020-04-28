import axios from 'axios'

export function request(config){
  const instance=axios.create({     //定义配置新建一个 axios 实例
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  instance.interceptors.request.use(config=>{      //拦截器 请求
    return config
  },err=>{
    console.log(err);
  })

  instance.interceptors.response.use(res=>{    //拦截器 响应
    return res.data
  },err=>{
    console.log(err);
  })

  return instance(config)       //把 axios封装成一个函数 所以需要导出
}
