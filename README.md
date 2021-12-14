# MMM-RSS-FEED
Display any RSS feed on your MagicMirror.

NOTE: This is a fork of the original. I might completely rework it but not sure if I will have the time. I'm not paying attention to pull requests right now, so please save your time; once I am reasonably happy with it I might publish as another name (with thanks to the original author, of course).

[![Preview](https://s28.postimg.org/v6uhxrhbx/github.gif)](https://postimg.org/image/vjlw3xzll/)
Word of the day RSS feed (red border is edit added)
## Installing the module

To install the module, just clone this repository to your _modules_ folder:
`git clone https://github.com/Taolanoz/MMM-RSS-FEED`.

## Updating the module

Pull the git updates: `git pull`.
Then update dependencies in the module folder: `cd MMM-RSS-FEED`.


## Using the module
To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
		 {
			module: 'MMM-RSS-FEED',
			position: 'top_bar',
			config: {
				url: '',
				feedTitle: '',
				maxEntries: 10
			}
		 },
]
````

## Configuration options

| **Option** | **Default** | **Description** |
| :---: | :---: | --- |
| url | '' | <BR>The url of the RSS feed <BR><EM> Must be a string </EM><P> |
| feedTitle | '' | <BR>Optional title for the feed<BR><EM>Must be a string (if provided)</EM><P> |
| maxEntries | 10 | <BR>The maximum number of RSS entries to show<BR><EM>Must be an integer (if provided)</EM><P> |




