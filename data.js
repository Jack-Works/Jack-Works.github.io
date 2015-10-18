(function (){
	function gen(color){
		return [color, function (){
			return "<span class='color'>text</span>".replace("color", color).replace("text", this);
		}];
	}
	[gen("red"), gen("green"), gen("orange"), gen("gray"), gen("del"),
		["processing", function (){return this + "...";}],
		["done", function (){return "✓ " + this;}]
	].forEach(function (value){
		String.prototype.__defineGetter__(value[0], value[1]);
	});
	String.prototype.id = function (id){return "<span id='" + id + "'>" + this + "</span>";}
	String.prototype.link = function (url){return "<a href='" + url + "'>" + this + "</a>";}
})();
var conf = {
	article_title: "Jack Works's Todo list",
	items: [{
		title: "哥德尔艾舍尔巴赫",
		progress: [748, 982, 982]
	},{
		title: "失控".link("https://github.com/programthink/books/blob/master/README.wiki#107"),
		progress: [284, 1027, 1027]
	},{
		title: "魔戒",
		content: ["霍比特人".done.green,
			"魔戒同盟".processing.orange,
			"王者归来",
			"精灵宝钻", 
		],
		progress: [204, 706, 2004]
	},{
		title: "暗时间".link("https://github.com/programthink/books/blob/master/README.wiki#107"),
		progress: [76, 174, 179]
	},{
		title: "网易云课堂 - 计算机网络之网尽其用",
		content: [
			"第 1 章: 计算机网络概述 (上)".done.green + " > " + "计算机网络概述 (下)".orange.processing,
			"第 2 章: 计算机网络应用 (上) > 计算机网络应用 (下)".gray
		],
		progress: [11, 17, 39]
	},{
		title: "edX - 60240013x 组合数学".link("https://courses.edx.org/courses/course-v1:TsinghuaX+60240013x+3T2015").id("comb"),
		content: "当前进度：Various Permutations"
	},{
		title: "网易云课堂 - CS 大一",
		content: [
			"程序设计入门 - Python",
			"程序设计入门 - C 语言 > " + "C 语言程序设计进阶".gray,
			("程序设计入门 - Java".red + " > " + "Java 语言程序设计进阶".gray).del,
			"计算机专业导论之思维与系统",
			"计算机专业导论之语言与算法",
			"计算机专业导论之学科与专业",
			"工科数学分析(1) > " + "工科数学分析(2)".gray
		],
		progress: [0, 7, 10]
	},{
		title: "计算机科学",
		content: [
			"计算机体系结构",
			"计算机网络原理",
			"数据结构".processing,
			"算法导论",
			"计算机组成原理",
			"图形学",
			"人工智能",
			"数据库系统",
			"编译原理".processing,
			"操作系统",
			"网络协议"
		]
	}, {
		title: "数学",
		content: [
			"微积分",
			"线性代数",
			"数值分析",
			"概率统计",
			"复变函数",
			"高等数学".red.processing,
			"离散数学".link("#comb").processing,
			"抽象代數",
			"拓扑",
			"《什么是数学》",
			"《数学之美》"
		],
		progress: [0, 0, 2]//book only
	}, {
		title: "语言",
		content: [
			"English".processing.orange,
			"Esperanto",
			"Latin"
		]
	}, /*{ 
		//Not now, maybe never
		 title: "物理",
		content: [
			"数学物理方程",
			"量子力学",
			"统计力学",
			"经典力学",
			"电动力学"
		]
	}*/, {
		title: "计算机语言",
		content: [
			"JavaScript".done.green,
			"Python".processing,
			"Node.js".processing,
			"C++",
			"Bash",
			"HTML 5 API".processing,
			"Go",
			"Dart",
			"Swift",
			"C#(momo)",
			"Lisp",
			"ECMAScript 2015".processing,
			"R",
			"Haskell".processing
		]
	}, {
		title: "思维、逻辑、社会、设计、玄学",
		content: [
			"黑客与画家".done.green.id("book_hackers_and_painters"),
			"批判性思维工具",
			"哥德尔艾舍尔巴赫".processing.orange,
			"不确定状况下的判断",
			"影响力:科学与实践",
			"给大家看的设计书",
			"可笑的思维谬误：批判性思考与查错神经",
			"乌合之众",
			"提问的智慧".done.green.id("book_smart_questions"),
			"浪潮之巅"
		],
		progress: [2, 3, 10]
	}, {
		title: "一些奇怪的东西",
		content: [
			"魔戒".processing.orange,
			"DND规则",
			"1984",
			"美丽新世界",
			"三体".processing.red
		]
	}, {
		title: "听起来很厉害的样子，说不定会去拜读",
		content: [
			"重构",
			"代码整洁之道",
			"代码大全2",
			"数学之美",
			"Rework中文版",
			"高效程序员的45个习惯",
			"自私的基因",
			"失控",
			"万物由来",
			"黑客攻防技术宝典（Web实战篇）".processing.red,
			"白帽子讲Web安全",
			"Web前端黑客技术揭秘",
			"SQL注入攻击与防御",
			"JavaScript DOM编程艺术"
		],
		progress: [0, 1, 14]
	}, {
		title: "Done!",
		content: [
			"提问的智慧".done.green.link("#book_smart_questions") + " 2015/??/??",
			"黑客与画家".done.green.link("#book_hackers_and_painters") + " 2015/??/??",
			"Uno".done.green + " 2015/08/18",
			"我们的征途，是星辰大海！ - Bilibili 专题".done.green.link("http://www.bilibili.com/topic/245.html") + " 2015/10/4"
		]
	}]
}