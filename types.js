function table(headers, body, classes){
	return "<table class='mdl-data-table mdl-shadow--2dp full-width leftAlign" + (classes || "") + "'><thead>" + 
		headers.map(function (v){
			return "<tr>" + v.map(function (t){
				return "<th>" + t + "</th>"
			}).join("") + "</tr>"
		}).join("") + "</thead><tbody>" + 
		body.map(function (v){
			return "<tr>" + v.map(function (t){
				return "<td>" + t + "</td>"
			}).join("") + "</tr>"
		}).join("") + "</tbody></table>";
}
function list(data){
	return "<table class='mdl-data-table mdl-shadow--2dp full-width leftAlign'><tbody>" + 
		data.map(function (v){
			return "<tr><td>" + v + "</td></tr>"
		}).join("") + "</tbody></table>";
}