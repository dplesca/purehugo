purehugo
========

Hugo theme based on [purecss](http://purecss.io/) from Yahoo. The theme is based on [the purecss blog layout example](http://purecss.io/layouts/blog/), is responsive and has a few more features: pagination (if enabled), responsive images (through a shortcode), google analytics, disqus comments and even a mini-asset-pipeline using gulp. If you end up using it, I'd love to see what you do with it so please give me a shout on [twitter](https://twitter.com/dragos_plesca).

### Installation

Navigate to your Hugo site's theme folder
```
$ cd themes
$ git clone https://github.com/dplesca/purehugo.git
```

### Config file

The config file for the demo site looks like this:

```toml
baseurl = "http://dplesca.github.io/purehugo/"
languageCode = "en-us"
title = "purehugo"
theme = "purehugo"
Paginate = 10
disqusShortname = "xxxx"

[params]
  twitterName = "dragos_plesca"
  githubName = "dplesca"
  stackOverflowId = "#######"
  linkedinName = "dragos-plesca-52797444"
  description = "Demo site for a hugo theme"
  google_analytics = "UA-xxxxxx-xx"
```

Notice the configuration necessary for disqus comments (just setting the disqusShortname); the twitter, github, stack overflow and linkedin handlers (for the site sidebar); the site description and enabling Google Analytics reporting.

### Syntax Highlighting

Syntax highlighting is enabled by default and it uses the nice [rainbow js](http://craig.is/making/rainbows) library. All you need to do is to let rainbow.js the language of the highlighted code, using something like ````go` when writing the code in markdown.

### Responsive Images

For responsive images you could use the built-in responsive image shortcode (without the `/**/` characters):  
```
{{%/* img-responsive "http://example.com/image.jpg" */%}}
```

### Hide Share Options

If you would like to hide the share options in the single post view, you can add this option in the `params` section of your config file.

```toml
[params]
  # ... other options ...
  hideShareOptions = true
```

### Hide Sidebar icons text Options


If you would like to hide the text next to the icons on the sidebar, you can add this option in the `params` section of your config file.

```toml
[params]
  # ... other options ...
  hideSidebarIconText = true
```

### Screenshot
![Screenshot](http://i.imgur.com/Dsj41Rz.png)
