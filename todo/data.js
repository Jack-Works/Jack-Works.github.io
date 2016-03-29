var conf = {
	article_title: 'Todo list of Jack Works',
	weekMsg: 'Erised stra ehym tah wwonk tonodi'.replace(/;/g, '<br>'),
	items: [{
	//		title: '失控'.link('https://github.com/programthink/books/blob/master/README.wiki#107-其它'), progress: [404, 1027], group: 'books'},{
	//		title: 'Borland 传奇'.link('https://github.com/programthink/books/blob/master/README.wiki#106-it-公司'), progress: [331, 507], group: 'books'},{
	//		title: '猜想与反驳'.link('https://github.com/programthink/books/blob/master/README.wiki#88-科学哲学'), progress: [10, 62, 722], group: 'books'},{
	//		title: 'Doom 启示录', progress: [7, 30, 433], group: 'books'},{
	//		title: '怎样阅读一本书' + '第五章 如何做一个自我要求的读者'.comment, progress: [17, 114], group: 'books'},
	}, {
		title: '哥德尔、埃舍尔、巴赫——集异璧之大成' + ' - 重读'.italic + '尚未开始'.comment,
		group: 'book_review'
	}, {
		title: 'Ingress 清明上河图系列任务' + '30 / 654'.comment,
		progress: [30, 654]
	},  // {
	//	title: '魔戒',
	//	content: ['霍比特人'.done.green,
	//		'魔戒同盟'.processing.orange,
	//		'王者归来',
	//		'精灵宝钻'
	//	],
	//	progress: [217, 706, 2004],
	//	group: 'books_details'
	//},{
	//	title: '网易云课堂 - 计算机网络之网尽其用'.link('http://mooc.study.163.com/course/HIT-1000002010?tid=1000003008'),
	//	content: [
	//		'第 1 章: 计算机网络概述 (上)'.done.green,
	//		'第 1 章: 计算机网络概述 (下)'.orange.processing,
	//		'第 2 章: 计算机网络应用 (上)'.gray,
	//		'第 2 章: 计算机网络应用 (下)'.gray
	//	],
	//	progress: [11, 17, 39],
	//	group: 'netease'
	//},
	//{
	//	title: 'edX 课程',
	//	content: {
	//		headers: [['课程', '进度', '状态']], 
	//		body: [
	//			['IELTSx - Listening', 'Unit 2: Listening Strategies'.green, ''.processingL],
	//			['IELTSx - Speaking'.clas('sub ieltsx'), 'Unit 1: Unit Overview'.green, ''],
	//			['IELTSx - Reading'.clas('sub ieltsx'), 'Unit 2: Skills and Strategies'.green, ''.processingL],
	//			['IELTSx - Writing'.clas('sub ieltsx'), 'Unit 1: Unit Overview'.green, ''],
	//			['IT.1.1x', 'What is this course about?'.gray, ''],
	//			['Think101x', 'A taste of things to come'.gray, ''],
	//			['Louv1.1x', 'Sum of digits with communicating vases'.gray, ''],
	//			['Louv1.2x', 'Motivation for concurrency'.green, ''.processingL],
	//			['CloudIntro.x', '计划谬误'.red, icon('clear').red],
	//			['HTML5.1x', 'Course syllabus'.green, ''],
	//			['HTML5.2x', ''.red, ''],
	//			['LFS101x.2', 'Introduction/ Learning Objectives'.gray, ''],
	//			['DEV204x', 'Introducing C#'.gray, ''],
	//			['FP101', '计划谬误'.red, icon('clear').red],
	//			['PH525.1x', 'Getting Started'.gray, ''],
	//			['RTSIx', 'Part 1 What are Real-Time Systems'.gray, ''],
	//			['60240013x', 'Homework of Week 3'.red + '真的看不懂了……'.comment, icon('clear').red],
	//			['6.004.1x', '已退选'.red + '不明觉厉'.comment, icon('clear').red],
	//			['6.004.2x', '已退选'.red + '……真的。'.comment, icon('clear').red],
	//			['M101x', 'Introduction to the Course', ''],
	//			['Code101x', 'Pre-Course Survey'.gray, ''],
	//			['CS50x3', 'Important Pre-Course Survey'.gray + '我以前上过这课'.comment, '']
	//		]
	//	}
	//}, //{
	//	title: '网易云课堂 - CS 大一'.link('http://study.163.com/curricula/cs/grade-1.htm'),
	//	content: [
	//		'程序设计入门 - Python',
	//		'程序设计入门 - C 语言 > ' + ' C 语言程序设计进阶'.gray,
	//		'程序设计入门 - Java > ' + ' Java 语言程序设计进阶'.gray,
	//		'计算机专业导论之思维与系统',
	//		'计算机专业导论之语言与算法',
	//		'计算机专业导论之学科与专业',
	//		'工科数学分析(1) > ' + ' 工科数学分析(2)'.gray.processing
	//	],
	//	progress: [0, 7, 10]
	//},{
	//	title: '计算机科学',
	//	content: [
	//		'计算机体系结构',
	//		'计算机网络原理',
	//		'数据结构',
	//		'算法导论',
	//		'计算机组成原理',
	//		'图形学',
	//		'人工智能',
	//		'数据库系统',
	//		'编译原理',
	//		'操作系统',
	//		'网络协议'
	//	]
	//}, {
	//	title: '数学',
	//	content: [
	//		'微积分',
	//		'线性代数',
	//		'数值分析',
	//		'概率统计',
	//		'复变函数',
	//		'高等数学',
	//		'离散数学'.link('#comb').red,
	//		'抽象代數',
	//		'拓扑',
	//		'《什么是数学》',
	//		'《数学之美》'
	//	]
	//	progress: [0, 0, 2]//book only
	//}, {
	//	title: '语言',
	//	content: [
	//		'English'.processing.orange,
	//		'Esperanto',
	//		'Latin',
	//		'昆雅语的书写'
	//	]
	//}, {
	//	title: '计算机语言',
	//	content: [
	//		'JavaScript'.done.green,
	//		'Python',
	//		'Node.js'.processing,
	//		'C++',
	//		'Bash',
	//		'HTML 5 API'.processing,
	//		'Go',
	//		'Dart',
	//		'Swift',
	//		'C#'.processing,
	//		'Lisp',
	//		'ECMAScript 2015'.processing,
	//		'R',
	//		'Haskell'.processing
	//	]
	//},
	{
		title: '思维、逻辑、社会、设计、玄学',
		content: [
			'黑客与画家'.done.green.id('book_hackers_and_painters'),
	//		'批判性思维工具',
			'哥德尔、埃舍尔、巴赫——集异璧之大成'.done.green.id('book_geb'),
	//		'不确定状况下的判断'.processing,
	//		'影响力:科学与实践',
	//		'给大家看的设计书',
	//		'可笑的思维谬误：批判性思考与查错神经',
	//		'乌合之众',
			'提问的智慧'.done.green.id('book_smart_questions'),
	//		'浪潮之巅'
		],
	//	progress: [2, 3, 10]
	}, {
		title: '一些奇怪的东西',
		content: [
	//		'魔戒'.processing,
	//		'DND规则'.processing,
	//		'1984',
	//		'美丽新世界',
			'三体'.done.green
		]
	}, {
	//	title: '听起来很厉害的样子，说不定会去拜读',
	//	content: [
	//		'重构',
	//		'代码整洁之道',
	//		'代码大全2',
	//		'数学之美',
	//		'Rework中文版',
	//		'高效程序员的45个习惯'.gray.del,
	//		'自私的基因',
	//		'失控'.processing.green,
	//		'万物由来',
	//		'黑客攻防技术宝典（Web实战篇）'.processing.red,
	//		'白帽子讲Web安全',
	//		'Web前端黑客技术揭秘',
	//		'SQL注入攻击与防御',
	//		'JavaScript DOM编程艺术'
	//	],
	//	progress: [0, 1, 14]
	//}, */, {
		title: '2016年',
		content: {
			headers: [[]],
			body: [
				['哥德尔、埃舍尔、巴赫——集异璧之大成'.link('#book_geb') + '这句话没有在自指'.comment, '2016/03/06']
			]
		}
	}, {
		title: '2015年',
		content: {
			headers: [[]],
			body: [
				['提问的智慧'.link('#book_smart_questions') + 'https://google.com/'.comment, '2015/??/??'],
				['黑客与画家'.link('#book_hackers_and_painters'), '2015/??/??'],
				['Uno' + '+2 +2 +2 +2 +2!'.comment, '2015/08/18'],
				['我们的征途，是星辰大海！ - Bilibili 专题'.link('http://www.bilibili.com/topic/245.html'), '2015/10/4'],
				['平面国', '2015/11/08'],
				['三体' + '消灭人类暴政，世界属于三体'.comment, '2015/11/09'],
				['暗时间', '2015/12/03'],
				['哈利波特与理性之道'.link('http://hpmor.lofter.com/') + '严肃地对待荒谬，荒谬地对待严肃'.comment, '2015/12/10'],
				['A Very Potter Musical'.link('http://www.bilibili.com/video/av1409326/') + '不 我不吃这对 CP'.comment, '2015/12/14'],
			]//.map(function (v){v.push(''.done.green);return v})
		}
	}],
	motto: '——在一群出色的人中间，常常误以为自己也是其中一员，然后忘了努力'
}