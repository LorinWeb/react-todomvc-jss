# JSS Todomvc Example

Most of this code was lifted from [Matt Delambo's Aphrodite Todomvc Example](https://github.com/delambo/react-todomvc-aphrodite) (which in turn is lifted from [TJ's Frontend Boilerplate](https://github.com/tj/frontend-boilerplate)).

I replaced [Aphrodite](https://github.com/Khan/aphrodite) inline styles with [JSS](https://github.com/jsstyles/jss).

## Development

```
npm start
```

## Production Build and Run

The following commands will build the app to `static/` with the styles dehydrated and included inline in the html, and run it:

```
npm run build
cd static/
python -m SimpleHTTPServer 3001
```
