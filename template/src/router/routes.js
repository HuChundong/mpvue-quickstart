module.exports = [
  {
    path: 'pages/index/index' // 页面路径，同时是 vue 文件相对于 src 的路径
  }, {
    path: 'pages/counter/index' // 页面路径，同时是 vue 文件相对于 src 的路径
  }, {
    path: 'packageA/logs/index',
    subPackage: true
  }
]
