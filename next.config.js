const sass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const withPlugins = require('next-compose-plugins');

module.exports = withCSS(
  sass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000
          }
        },


      });

      return config;
    }
  })
);


// module.exports = {
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//       // Note: we provide webpack above so you should not `require` it
//       // Perform customizations to webpack config
//       // Important: return the modified config
     
//       config.plugins.push(
//         new webpack.ProvidePlugin({
//             WaveSurfer: "wavesurfer.js"
//           })
//           );
//       return config
//     },
//     webpackDevMiddleware: config => {
//       // Perform customizations to webpack dev middleware config
//       // Important: return the modified config
//       return config
//     },
//   }


// // next.js configuration
// const nextConfig = {
//     // useFileSystemPublicRoutes: false,
//     // distDir: 'build',
//   };


//   module.exports = withPlugins([

//     // add a plugin with specific configuration
//     [sass, {
//       cssModules: true,
//         webpack(config, options) {
//           config.module.rules.push({
//             test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
//             use: {
//               loader: "url-loader",
//               options: {
//                 limit: 100000
//               }
//             },
    
      
//           });
    
//           return config;
//         }
//       }],
  
    // add a plugin without a configuration
    //images,
  
    // another plugin with a configuration
    // [typescript, {
    //   typescriptLoaderOptions: {
    //     transpileOnly: false,
    //   },
    // }],
  
  //], nextConfig);