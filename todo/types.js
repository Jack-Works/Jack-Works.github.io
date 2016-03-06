var conf = {article_title: 'Untitled',items: [{title: 'Error'}]}

function table(headers, body, classes){
	return '<table class="mdl-data-table mdl-shadow--2dp full-width leftAlign ' + (classes || '') + '"><thead>' + 
		headers.map(function (v){
			return '<tr>' + v.map(function (t){
				return '<th>' + t + '</th>'
			}).join('') + '</tr>'
		}).join('') + '</thead><tbody>' + 
		body.map(function (v){
			return '<tr>' + v.map(function (t){
				return '<td>' + t + '</td>'
			}).join('') + '</tr>'
		}).join('') + '</tbody></table>';
}

function list(data){
	return '<table class="mdl-data-table mdl-shadow--2dp full-width leftAlign"><tbody>' + 
		data.map(function (v){
			return '<tr><td>' + v + '</td></tr>'
		}).join('') + '</tbody></table>';
}

/* generator name::String param::String||Function => generator
 *           name::Array param::String||Function  => generator(name[x], param)
 */
(function generator(name, param){
	if(Array.isArray(name)) {name.forEach(function (value){generator(value, param)})}
	else if(param instanceof Function) {
		String.prototype[name] = param;
	} else {
		String.prototype.__defineGetter__(name, function () {
			return param.replace(/Rep/g, name).replace(/This/, this)
		});
	}
	return generator;
})
(['red', 'green', 'orange', 'right', 'gray', 'del' ,'italic'], '<span class="Rep">This</span>')
(['done' ,'clear'], 'This<i class="material-icons right">Rep</i>')
('processing', 'This<div style="zoom: 0.8;" class="mdl-spinner mdl-js-spinner is-active right"></div>')
('processingL', 'This<div style="zoom: 0.8;" class="mdl-spinner mdl-js-spinner is-active"></div>')
('comment', '<span class="gray italic"> - This</span>')
('id', function (id) {return '<span id="" + id + "">' + this + '</span>'})
('clas', function (clas) {return '<span class="" + clas + "">' + this + '</span>'})

function icon(icon){
	return '<i class="material-icons">' + icon + '</i>';
}