Module.register("MMM-RSS-FEED",{
	
	defaults: {
		url: ""
	},
	getScripts: function() {
		return ["modules/MMM-RSS-FEED/js/jquery-3.1.1.min.js","modules/MMM-RSS-FEED/js/feednami.js"];
	},
		getStyles: function() {
		return ["modules/MMM-RSS-FEED/css/style.css"];
	},
	start: function() {
		Log.info("Starting module: " + this.name);
	},
	
	// TODO: Allow for array of feeds
	// TODO: Create timer to refresh feeds
	// TODO: Create class for feed heading
	// TODO: Allow more sizing options
	// TODO: Allow extraction of other elements in config
	getDom: function () {
		var wrapper = document.createElement("div");
    		var url = this.config.url;
		var feedTitle = "";
		var maxEntries = 10;
		if (this.config.hasOwnProperty('feedTitle')) {
			feedTitle = this.config.feedTitle;
		}
		if (this.config.hasOwnProperty('maxEntries')) {
			maxEntries = parseInt(Number(this.config.maxEntries));
		}
		feednami.load(url,function(result){
			if(result.error) {
				console.log(result.error);
			} else {
				var content = "";
				content = "<b>" + feedTitle + "</b>";
				var entries = result.feed.entries;
				var processedEntries = [];
				var entryCount = entries.length;
				console.log("MMM-RSS-FEED: entryCount" + entryCount);
				if (entryCount > 0) {
					for (var i = 0; i < entryCount; i++) {
						var entry = entries[i];
						if (!(processedEntries.includes(entry.title))) {
							content = content + "<br/>" + entry.title;
							processedEntries.push(entry.title);
						}
						if (processedEntries.length > maxEntries) {
							break;
						}
					}
				}
				wrapper.innerHTML = content;
			}
		});
		return wrapper;
	}
});
