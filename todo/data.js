var msADay = 1000 * 60 * 60 * 24
var progressed = 1389
//150, 000 is total
//20655 is 1st stage
var need = (20655 - progressed) / (progressed / ((new Date() - new Date('May 25 2016')) / msADay))

var conf = {
	items: [
		//{title: 'Borland 传奇'.link('https://github.com/programthink/books/blob/master/README.wiki#106-it-公司'), progress: [331, 507]},
		//{title: '猜想与反驳'.link('https://github.com/programthink/books/blob/master/README.wiki#88-科学哲学'), progress: [10, 62, 722]},
		//{title: 'Doom 启示录', progress: [7, 30, 433]},
		//{title: '怎样阅读一本书' + '第五章 如何做一个自我要求的读者'.comment, progress: [17, 114]}, 
		//{title: '哈利波特与被诅咒的孩子' + 'Act 2 Scene 1'.comment, progress: [87, 307]},
	//{
	//	title: '哥德尔、埃舍尔、巴赫——集异璧之大成' + ' - 重读'.italic + '尚未开始'.comment,
	//	progress: []
	//},
	{title: '一张空白的地图不等于一块空白的地域', content: '一本空白的日记不等于一段空白的人生<br>"我庄严宣誓我没干好事"'},
	//{title: 'Ingress 清明上河图系列任务', progress: [78, 654]},
	//{title: `Part 1：预计于 ${Math.ceil(need * 3)} 回合后完成；已贡献点数`, progress: [progressed, 20655]},
	/*{
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
			'万万没想到——用理工科思维理解世界'.done.green,
			'失控'.done.green,			
	//		'浪潮之巅'
		]
	},
	{
		title: '一些奇怪的东西',
		content: [
			'DND规则'.processing,
	//		'1984',
	//		'美丽新世界',
		]
	},*/
	//{
	//	title: '听起来很厉害的样子，说不定会去拜读',
	//	content: [
	//		'重构',
	//		'代码整洁之道',
	//		'代码大全2',
	//		'数学之美',
	//		'Rework中文版',
	//		'高效程序员的45个习惯'.gray.del,
	//		'自私的基因',
	//		'万物由来',
	//		'黑客攻防技术宝典（Web实战篇）'.processing.red,
	//		'白帽子讲Web安全',
	//		'Web前端黑客技术揭秘',
	//		'SQL注入攻击与防御',
	//		'JavaScript DOM编程艺术'
	//	]
	//},
	{
		title: '2016年',
		content: {
			headers: [['有趣的事物', '评判一番', '恰好的时间']],
			body: [
				['哥德尔、埃舍尔、巴赫——集异璧之大成'.link('#book_geb'), '这句话没有在自指', '2016/03/06'],
	//			['万万没想到——用理工科思维理解世界'.link('https://www.amazon.cn/gp/product/B015DLP55A'), '相信我，这真的只是一本博客集', '2016/05/20'],
	//			['拆掉思维里的墙'.link('https://www.amazon.cn/gp/product/B009P4OW6U'), '基本全是鸡汤 建议别看', '2016/06/15'],
	//			['果壳中的宇宙'.link('https://www.amazon.cn/gp/product/B01931SPYE'), '"宇宙的目的是什么？"', '2016/07/02'],
				['CS 50'.link('http://open.163.com/special/opencourse/cs50.html'), '极好的入门课程'.bold() + '， 我很后悔 5 年前有人推荐我去看而我没有看完', '2016/07/07'],
				['失控'.link('https://github.com/programthink/books/blob/master/README.wiki#107-其它'), '凯文凯利精准的预见了十余年之后的今日，强烈推荐', '2016/08/05'],
	//			['LAHW@Coursera'.link('https://www.coursera.org/learn/ruhe-xuexi/home/welcome'), '至少我现在知道好好睡觉的重要性了', '2016/08/18'],
	//			['Programming Languages Part A'.link('https://www.coursera.org/learn/programming-languages/'), 'Hooray！是函数式！', '2016/08/28'],
				['Hamilton (Musical)'.link('http://www.bilibili.com/video/av4891480'), '谁人来讲述我们的故事？', '2016/11/19'],
				['魔戒', '有两种人，看过的，和准备看的', '2016/12/05'],
				['霍比特人：意外之旅', '咕噜。', '2016/12/05'],
				['清醒思考的艺术', '不如看维基百科的相关条目', '2016/12/28']
			].map(v => v.length == 3 ? [v[0], v[1], v[2]] : [v[0], '', v[1]])
		}
	},
	{
		title: '2015年',
		content: {
			headers: [['有趣的事物', '评判一番', '恰好的时间']],
			body: [
				['提问的智慧'.link('#book_smart_questions'), 'https://google.com/', '2015'],
				['黑客与画家'.link('#book_hackers_and_painters'), '2015'],
				['我们的征途，是星辰大海！ - Bilibili 专题'.link('http://www.bilibili.com/topic/245.html'), '2015/10/04'],
				['平面国', '2015/11/08'],
				['三体', '消灭人类暴政，世界属于三体!!', '2015/11/09'],
				['暗时间', '2015/12/03'],
				['哈利波特与理性之道'.link('http://hpmor.lofter.com/'), '严肃地对待荒谬，荒谬地对待严肃', '2015/12/10'],
				['A Very Potter Musical'.link('http://www.bilibili.com/video/av1409326/'), 'CP 有毒', '2015/12/14'],
			].map(v => v.length == 3 ? [v[0], v[1], v[2]] : [v[0], '', v[1]])
		}
	}]
}
var vm = new Vue({el: 'body', data: {
	article_title: '测绘文明',
	weekMsg: '快要 2017 年了。',
	motto: '——探索，继续前行',
	hitokoto: null,
	items: []
}})
var final
conf.items.forEach((v, i) => {
	final = i * 150
	setTimeout(() => vm.items.push(v), final)
})
/*$.get('https://apis.vola.xyz/hitokoto', title => 
	setTimeout(
		() => vm.items.unshift({title: title.replace(/\n/g, '<br>'), content: 'Hitokoto powered by hitokoto service'}),
		150//final
	)
)*/