## Duluth Public Works Map

This is a civic data experiment in mapping public works information. Check out [the demo](http://stormy-reaches-6967.herokuapp.com/).

## Getting started

1. Clone [the repository](http://github.com/tpwebpros/duluth-publicworks-map)
2. Run a local server rooted in the public directory. Either install the Ruby rack server

        $ bundle install
        $ rackup

or run any other web server you have at hand, e.g.

        $ cd public && python -m SimpleHTTPServer 9876

3. Browse to `http://localhost:9876`

Change, commit, pull request, and so on :)

## Deplyoing to Heroku

1. Add the heroku app as a remote:

        $ git remote add heroku git@heroku.com:stormy-reaches-6967.git

2. Push changes to heroku

        $ git push heroku master
