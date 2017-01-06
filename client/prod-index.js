
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
      /*!
       * "Fork me on GitHub" CSS ribbon v0.2.0 | MIT License
       * https://github.com/simonwhitaker/github-fork-ribbon-css
      */

      .github-fork-ribbon {
        width: 12.1em;
        height: 12.1em;
        position: absolute;
        overflow: hidden;
        top: 0;
        right: 0;
        z-index: 9999;
        pointer-events: none;
        font-size: 13px;
        text-decoration: none;
        text-indent: -999999px;
      }
      .github-fork-ribbon:before, .github-fork-ribbon:after {
        /* The right and left classes determine the side we attach our banner to */
        position: absolute;
        display: block;
        width: 15.38em;
        height: 1.54em;

        top: 3.23em;
        right: -3.23em;

        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;

        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      .github-fork-ribbon:before {
        content: "";

        /* Add a bit of padding to give some substance outside the "stitching" */
        padding: .38em 0;

        /* Set the base colour */
        background-color: #333;

        /* Set a gradient: transparent black at the top to almost-transparent black at the bottom */
        background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.15)));
        background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
        background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
        background-image: -ms-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
        background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));

        /* Add a drop shadow */
        -webkit-box-shadow: 0 .15em .23em 0 rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0 .15em .23em 0 rgba(0, 0, 0, 0.5);
        box-shadow: 0 .15em .23em 0 rgba(0, 0, 0, 0.5);

        pointer-events: auto;
      }

      .github-fork-ribbon:after {
        /* Set the text from the title attribute */
        content: attr(title);

        /* Set the text properties */
        color: #fff;
        font: 700 1em "Helvetica Neue", Helvetica, Arial, sans-serif;
        line-height: 1.54em;
        text-decoration: none;
        text-shadow: 0 -.08em rgba(0, 0, 0, 0.5);
        text-align: center;
        text-indent: 0;

        /* Set the layout properties */
        padding: .15em 0;
        margin: .15em 0;

        /* Add "stitching" effect */
        border-width: .08em 0;
        border-style: dotted;
        border-color: #fff;
        border-color: rgba(255, 255, 255, 0.7);
      }
    </style>
    <style type="text/css" id="server-side-styles">
      ${new cleancss().minify(sheets.toString()).styles}
    </style>
  </head>
  <body>
    <a href="https://github.com/cssinjs/react-todomvc-jss" title="View on Github" class="github-fork-ribbon" target="_blank">View on Github</a>
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
