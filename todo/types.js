/// <reference path="./global.d.ts" />
var conf = { article_title: 'Untitled', items: [{ title: 'Error' }] }

var table = ({ headers, body, classes = '' }) => `
	<table class="${classes}">
		<thead>
			${headers.map(v => `
				<tr>${v.map(t => `
					<th>${t}</th>`).join('')}
				</tr>`).join('')
	}
		</thead>
		
		<tbody>
			${body.map(v => `
				<tr>${v.map(t => `
					<td>${t}</td>`).join('')}
				</tr>`).join('')
	}
		</tbody>
	</table>`

var list = data => `<ul class="collection">${data.map(v => `<li class="collection-item">${v}</li>`).join('')}</ul>`

	; (function generator(/** @type{string|string[]} */name, /** @type{Function|string} */param) {
		if (Array.isArray(name)) { name.forEach(v => generator(v, param)) }
		else if (param instanceof Function) { String.prototype[name] = param }
		else {
			Object.defineProperty(String.prototype, name, {
				get() {
					return param.replace(/Rep/g, name).replace(/This/, this)
				}
			})
		}
		return generator
	})
		(['right', 'del', 'italic'], '<span class="Rep">This</span>')
		(['gray', 'red', 'green', 'orange'], '<span class="s-Rep">This</span>')
		(['done', 'clear'], 'This<i class="material-icons right">Rep</i>')
		(['left'], '<span class="left">This</span>')
		('processing', `This
	<div class="preloader-wrapper small active" style="zoom: 0.5;float: right;margin-top: 6px;">
		<div class="spinner-layer spinner-blue-only">
			<div class="circle-clipper left">
				<div class="circle"></div>
			</div>
			<div class="gap-patch">
				<div class="circle"></div>
			</div>
			<div class="circle-clipper right">
				<div class="circle"></div>
			</div>
		</div>
	</div>`)
		('comment', ' - This'.gray.italic)
		('id', function (id) { return `<span id="${id}">${this}</span>` })
		('clas', function (clas) { return `<span class="${clas}">${this}</span>` })
var icon = icon => `<i class="material-icons">${icon}</i>`

var typeChecker = (_list, _table) => _list ? list : (_table ? table : raw => raw)
var drawer = data => typeChecker(Array.isArray(data), data instanceof Object && 'headers' in data && 'body' in data)(data)
Vue.filter('drawer', drawer)
Vue.filter('progressHelper', arr => {
	if (!arr) return ''
	if (arr.length == 1) return `${arr[0]}%`.comment
	if (arr.length == 2) return `${arr[0]} / ${arr[1]}`.comment
})
Vue.filter('progressCalc', arr => 100 * arr[0] / (arr[1] || 100))
