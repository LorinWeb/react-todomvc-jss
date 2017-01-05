
// This script will create a static index.html
// with styles compiled inline. To build a static
// production version of the app, run the following:
//
//  npm run build
//  cd docs/
//  python -m SimpleHTTPServer 3001
//

import React from 'react'
import {SheetsRegistryProvider, SheetsRegistry} from 'react-jss'
import { renderToString } from 'react-dom/server'
import App from './containers/App/'
import fs from 'fs'
import cleancss from 'clean-css'
import { Provider } from 'react-redux'
import configure from './store'

const store = configure()
const sheets = new SheetsRegistry()

// Render the app to generate the css and html.
const html = renderToString(
  <SheetsRegistryProvider registry={sheets}>
    <Provider store={store}>
      <App />
    </Provider>
  </SheetsRegistryProvider>
)

fs.writeFile('./docs/index.html', `

<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Boilerplate Todos</title>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
      }

      body {
        font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        line-height: 1.4em;
        background: #f5f5f5;
        color: #4d4d4d;
        min-width: 230px;
        max-width: 550px;
        margin: 0 auto;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        -ms-font-smoothing: antialiased;
        font-smoothing: antialiased;
        font-weight: 300;
      }
      .btn {
        display: inline-block;
        padding: .5rem 1.25rem;
        font-weight: 500;
        color: #fff;
        text-decoration: none;
        text-shadow: 0 -1px 0 rgba(0,0,0,.5);
        background-color: #3072b3; /* Old browsers */
        background-repeat: repeat-x; /* Repeat the gradient */
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #599bdc), color-stop(100%, #3072b3)); /* Chrome,Safari4+ */
        background-image: -webkit-linear-gradient(top, #599bdc 0, #3072b3 100%); /* Chrome 10+,Safari 5.1+ */
        background-image: -moz-linear-gradient(top, #599bdc 0, #3072b3 100%); /* FF3.6+ */
        background-image: -ms-linear-gradient(top, #599bdc 0, #3072b3 100%); /* IE10+ */
        background-image: -o-linear-gradient(top, #599bdc 0, #3072b3 100%); /* Opera 11.10+ */
        background-image: linear-gradient(top, #599bdc 0, #3072b3 100%); /* W3C */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#599bdc', endColorstr='#3072b3', GradientType=0); /* IE6-9 */
        border: 1px solid #2967a4;
        border-radius: 6px;
        box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
        -webkit-transition: none;
           -moz-transition: none;
             -o-transition: none;
                transition: none;
        font-family: "Helvetica Neue", Helvetica;
      }
      .btn:hover {
        text-decoration: none;
        background-position: 0 -15px;
      }
      .btn:active {
        background-image: none;
        background-color: #3072b3; /* Old browsers */
        box-shadow: inset 0 5px 10px rgba(0,0,0,.125), 0 1px 2px rgba(0,0,0,.2);
      }
    </style>
    <style type="text/css" id="server-side-styles">
      ${new cleancss().minify(sheets.toString()).styles}
    </style>
  </head>
  <body>
    <a href="https://github.com/cssinjs/react-todomvc-jss" class="btn" target="_blank">View on Github</a>
    <div id="root"></div>
    <!-- This script adds the Roboto font to our project. For more detail go to this site:  http://www.google.com/fonts#UsePlace:use/Collection:Roboto:400,300,500 -->
    <script>
      var WebFontConfig = {
        google: { families: [ 'Roboto:400,300,500:latin' ] }
      };
      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
    </script>

    <script src="./vendor.bundle.js"></script>
    <script src="./bundle.js"></script>

  </body>
</html>

`, function (err) {
  if (err) throw err
  console.log('Saved docs/index.html')
})
