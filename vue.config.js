module.exports = {
  pages: {
    'login': {
      // entry for the page
      entry: 'src/pages/login/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'login.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'login',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'login']
    },
    'NavMain': {
      // entry for the page
      entry: 'src/pages/NavMain/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'NavMain.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'NavMain',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'NavMain']
    },

    // pages of fullstack vue projects.
    'WeekCalendar': {
      // entry for the page
      entry: 'src/pages/WeekCalendar/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'WeekCalendar.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'WeekCalendar',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'WeekCalendar']
    },
    // vuex version of Notes in fullstack vue project.
    'Notes': {
      // entry for the page
      entry: 'src/pages/Notes/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'Notes.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Notes',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'Notes']
    },
  },
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/proxy': {
        target: 'http://localhost:8010/',
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': ''
        }
      }
    }
  },
}
