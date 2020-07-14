const fs = require('fs');
const path = require('path');

var dirpath = "./docs"
var dirs = fs.readdirSync(dirpath).filter((f) => {
  return fs.existsSync(dirpath + "/" + f) && fs.statSync(dirpath + "/" + f).isDirectory()
})
var sidebarArray = ["/"].concat(dirs.map((dir) => {
  return {
    title: dir,
    collapsable: true,
    children: fs.readdirSync(dirpath + "/" + dir).map((childDir) => {
      return dirpath + "/" + dir + "/" + childDir
    })
  }
}))

module.exports = {
  title: 'Brain',
  description: 'Momeemt\'s brain',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  config: (md) => {
    md.options.linkify = true
  },
  themeConfig: {
    sidebar: sidebarArray
  },
  plugins: [
    'markdown-it-task-lists',
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    '@vuepress/pwa'
  ]
}