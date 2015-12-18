/* Hey! 我注释了我暂时还没有开始进行的内容，而不是删除它，更没有修改commit记录
 * 这是不是能让我看起来不那么好高骛远了？（笑
 * 好事情要放到开始了再展示，我猜你也是这么想的——如果真的有人会看的话
 */
var conf = {
	article_title: "Jack Works's Todo list",
	weekMsg: "计划谬误啊啊啊啊啊……;被计划谬误坑了, 本周就不更了".replace(/;/g, "<br>"),
	items: [{title: "哥德尔艾舍尔巴赫".id("book_geb") + "人工智能: 回顾 - 改变问题空间".comment, progress: [804, 982], group: "books"},{
			title: "失控".link("https://github.com/programthink/books/blob/master/README.wiki#107-其它"), progress: [404, 1027], group: "books"},{
			title: "Borland 传奇".link("https://github.com/programthink/books/blob/master/README.wiki#106-it-公司"), progress: [331, 507], group: "books"},{
			title: "猜想与反驳".link("https://github.com/programthink/books/blob/master/README.wiki#88-科学哲学"), progress: [10, 62, 722], group: "books"},{
			title: "Doom 启示录", progress: [7, 30, 433], group: "books"},{
			title: "怎样阅读一本书" + "第一章 阅读的活力与艺术".comment, progress: [6, 114], group: "books"},
	{
		title: "哈利波特与理性之道" + " -读书笔记摘抄".italic + "重读: 第六十四章 平行世界".comment,
		progress: [361, 1283]
	}, {
		title: "魔戒",
		content: ["霍比特人".done.green,
			"魔戒同盟".processing.orange,
			"王者归来",
			"精灵宝钻"
		],
		progress: [217, 706, 2004],
		group: "books_details"
	},{
		title: "网易云课堂 - 计算机网络之网尽其用".link("http://mooc.study.163.com/course/HIT-1000002010?tid=1000003008"),
		content: [
			"第 1 章: 计算机网络概述 (上)".done.green,
			"第 1 章: 计算机网络概述 (下)".orange.processing,
			"第 2 章: 计算机网络应用 (上)".gray,
			"第 2 章: 计算机网络应用 (下)".gray
		],
		progress: [11, 17, 39],
		group: "netease"
	},{
		title: "edX 课程",
		content: {
			headers: [["课程", "进度", "状态"]], 
			body: [
	//			["IELTSx - Listening", "Unit Overview".gray, ""],
	//			["IELTSx - Speaking".clas("sub ieltsx"), "Unit Overview".gray, ""],
	//			["IELTSx - Reading".clas("sub ieltsx"), "Unit Overview".gray, ""],
	//			["IELTSx - Writing".clas("sub ieltsx"), "Unit Overview".gray, ""],
	//			["IT.1.1x", "What is this course about?".gray, ""],
	//			["Think101x", "A taste of things to come".gray, ""],
				["Louv1.1x", "Sum of digits with communicating vases".gray, ""],
				["Louv1.2x", "Motivation for concurrency".green, "".processingL],
				["CloudIntro.x", "计划谬误".red, icon("clear").red],
				["HTML5.1x", "Course syllabus".green, ""],
	//			["HTML5.2x", "".red, ""],
				["LFS101x.2", "Introduction/ Learning Objectives".gray, ""],
				["DEV204x", "Introducing C#".gray, ""],
				["FP101", "计划谬误".red, icon("clear").red],
	//			["PH525.1x", "Getting Started".gray, ""],
				["RTSIx", "Part 1 What are Real-Time Systems".gray, ""],
				["60240013x", "Homework of Week 3".red + "真的看不懂了……".comment, icon("clear").red],
				["6.004.1x", "已退选".red + "不明觉厉".comment, icon("clear").red],
				["6.004.2x", "已退选".red + "……真的。".comment, icon("clear").red],
	//			["M101x", "Introduction to the Course", ""],
	//			["Code101x", "Pre-Course Survey".gray, ""],
	//			["CS50x3", "Important Pre-Course Survey".gray + "我以前上过这课".comment, ""]
			]
		}
	},{
		title: "网易云课堂 - CS 大一".link("http://study.163.com/curricula/cs/grade-1.htm"),
		content: [
	//		"程序设计入门 - Python",
			"程序设计入门 - C 语言 > " + " C 语言程序设计进阶".gray,
			"程序设计入门 - Java > " + " Java 语言程序设计进阶".gray,
	//		"计算机专业导论之思维与系统",
	//		"计算机专业导论之语言与算法",
	//		"计算机专业导论之学科与专业",
			"工科数学分析(1) > " + " 工科数学分析(2)".gray.processing
		],
		progress: [0, 7, 10]
	},{
	//	title: "计算机科学",
	//	content: [
	//		"计算机体系结构",
	//		"计算机网络原理",
	//		"数据结构",
	//		"算法导论",
	//		"计算机组成原理",
	//		"图形学",
	//		"人工智能",
	//		"数据库系统",
	//		"编译原理",
	//		"操作系统",
	//		"网络协议"
	//	]
	//}, {
	//	title: "数学",
		/*content: [
			"微积分",
			"线性代数",
			"数值分析",
			"概率统计",
			"复变函数",
			"高等数学",
			"离散数学".link("#comb").red,
			"抽象代數",
			"拓扑",
			"《什么是数学》",
			"《数学之美》"
		]*/
	//	content: "还是要学习一个",
		//progress: [0, 0, 2]//book only
	//}, {
	//	title: "语言",
	//	content: [
	//		"English".processing.orange,
	//		"Esperanto",
	//		"Latin"
	//	]
	//}, {
		title: "计算机语言",
		content: [
			"JavaScript".done.green,
	//		"Python",
			"Node.js".processing,
	//		"C++",
	//		"Bash",
			"HTML 5 API".processing,
	//		"Go",
	//		"Dart",
	//		"Swift",
			"C#".processing,
	//		"Lisp",
			"ECMAScript 2015".processing,
			"R",
			"Haskell".processing
		]
	}, {
		title: "思维、逻辑、社会、设计、玄学",
		content: [
			"黑客与画家".done.green.id("book_hackers_and_painters"),
	//		"批判性思维工具",
			"哥德尔艾舍尔巴赫".processing,
	//		"不确定状况下的判断",
	//		"影响力:科学与实践",
	//		"给大家看的设计书",
	//		"可笑的思维谬误：批判性思考与查错神经",
	//		"乌合之众",
			"提问的智慧".done.green.id("book_smart_questions"),
	//		"浪潮之巅"
		],
	//	progress: [2, 3, 10]
	}, {
		title: "一些奇怪的东西",
		content: [
			"魔戒".processing,
	//		"DND规则",
	//		"1984",
	//		"美丽新世界",
			"三体".done.green
		]
	}, {
	//	title: "听起来很厉害的样子，说不定会去拜读",
	//	content: [
	//		"重构",
	//		"代码整洁之道",
	//		"代码大全2",
	//		"数学之美",
	//		"Rework中文版",
	//		"高效程序员的45个习惯".gray.del,
	//		"自私的基因",
	//		"失控".processing.green,
	//		"万物由来",
	//		"黑客攻防技术宝典（Web实战篇）".processing.red,
	//		"白帽子讲Web安全",
	//		"Web前端黑客技术揭秘",
	//		"SQL注入攻击与防御",
	//		"JavaScript DOM编程艺术"
	//	],
	//	progress: [0, 1, 14]
	//}, {
		title: "Done!",
		content: {
			headers: [[]],
			body: [
				["提问的智慧".green.link("#book_smart_questions"), "2015/??/??"],
				["黑客与画家".green.link("#book_hackers_and_painters"), "2015/??/??"],
				["Uno", "2015/08/18"],
				["我们的征途，是星辰大海！ - Bilibili 专题".green.link("http://www.bilibili.com/topic/245.html"), "2015/10/4"],
				["平面国", "2015/11/08"],
				["三体", "2015/11/09"],
				["暗时间", "2015/12/03"],
				["A Very Potter Musical".green.link("http://www.bilibili.com/video/av1409326/"), "2015/12/14"]
			].map(function (v){v.push("".done.green);return v})
		}
	}],
	motto: "——在一群出色的人中间，常常误以为自己也是其中一员，然后忘了努力"
}
setInterval(function (){
	$(".page-ribbon").css("background", rgb(~~(Math.random()*255), ~~(Math.random()*255), ~~(Math.random()*255)))
}, 2000);
function rgb(r,g,b){
	return "rgb(" + r + "," + g + "," + b + ")";
}