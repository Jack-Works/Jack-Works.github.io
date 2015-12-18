document.title = conf.article_title;
$("#article_title").html(conf.article_title);
$("#motto").html(conf.motto);
$("#weekMsg").html(conf.weekMsg);

conf.items.forEach(function (item){
	var d = $(".item-example").clone().removeClass("item-example");
	
	item.content = typeChecker(item.content, {
		array: function () {
			d.find(".item-content").css({width: "auto", "padding": "0 16px"});
		}, table: function () {
			d.find(".item-content").css({width: "auto", "padding": "0 16px"});			
		}
	});
	
	item.content ? d.find(".item-content p").html(item.content) : d.find(".item-content").remove();
	item.title   ? d.find(".item-title h4").html(item.title)    : d.find(".item-title").remove();

	if(item.progress === undefined){
		d.find(".item-progress").remove();
	} else {
		var a = item.progress[0], b = item.progress[1], c = item.progress[2] || b;
		a = a / (c || b || 1) * 100;
		b = b / (c || 1) * 100;
		d.find(".item-progress")[0].addEventListener('mdl-componentupgraded', function() {
			this.MaterialProgress.setProgress(a);
			c && this.MaterialProgress.setBuffer(b);
		});
	}
	
	if(item.group){
		var group = $("[data-group=" + item.group + "]");
		group.length == 0 ? d.appendTo(".item-container").attr("data-group", item.group) : d.find("div").appendTo(group);
	}
	else d.appendTo(".item-container");
});

function typeChecker(content, callback){
	var type = "default";
	
	if(!content) type = "none";
	else if(Array.isArray(content)) content = list(content), type = "array";
	else if(content instanceof Object && "headers" in content && "body" in content) content = table(content.headers, content.body), type="table";
	
	(callback[type] || function(){})(content);
	return content;
}