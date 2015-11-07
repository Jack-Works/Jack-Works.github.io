var conf = conf || {
	article_title: "Untitled",
	items: [{
		title: "Untitled",
		content: "Create a data.js to write data",
		progress: [12, 42]
	},{
		title: "Untitled",
		content: "Create a data.js to write data",
		progress: [12, 42]
	}]
}
document.title = conf.article_title;
$("#article_title").html(conf.article_title);
var joined = false;
conf.items.forEach(function (item){
	var d = $(".item-example").clone().removeClass("item-example");
	
	if(Array.isArray(item.content)){
		item.content = "<ul>" + item.content.map(function (i){return "<li>" + i + "</li>";}).join("") + "</ul>";
	}
	
	if(item.content) d.find(".item-content p").html(item.content);
	else d.find(".item-content").remove();
	
	if(item.title) d.find(".item-title h4").html(item.title);
	else d.find(".item-title").remove();

	if(item.progress === undefined){
		d.find(".item-progress").remove();
	} else {
		if(!item.progress[1] === undefined){
			item.progress[1] = item.progress[2] | 100;
		}
		if(item.progress[2]){
			item.progress[0] = item.progress[0] / item.progress[2] * 100;
			item.progress[1] = item.progress[1] / item.progress[2] * 100;
		}
		d.find(".item-progress")[0].addEventListener('mdl-componentupgraded', function() {
			this.MaterialProgress.setProgress(item.progress[0]);
			this.MaterialProgress.setBuffer(item.progress[1]);
		});
	}
	if(item.group){
		var group = $("[data-group=" + item.group + "]");
		group.length == 0 ? d.appendTo(".item-container").attr("data-group", item.group) : d.find("div").appendTo(group);
	}
	else d.appendTo(".item-container");
});