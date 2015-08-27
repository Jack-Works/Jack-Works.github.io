(function (){
	function gen(color){
		return [color, function (){
			return "<span class='color'>text</span>".replace("color", color).replace("text", this);
		}];
	}
	[gen("red"), gen("green"), gen("orange"),
		["processing", function (){return this + "...";}],
		["done", function (){return "✓ " + this;}]
	].forEach(function (value){
		String.prototype.__defineGetter__(value[0], value[1]);
	});
})();
var conf = {
	article_title: "Jack Works 的并没有什么用的书单",
	items: [{
		title: "哥德尔艾舍尔巴赫",
		content: "看到了第 550 页……",
		progress: [550, 982, 982]
	},{
		title: "失控",
		content: "看到了第 216 页……",
		progress: [216, 1027, 1027]
	},{
		title: "魔戒",
		content: "霍比特人 魔戒同盟 双塔殊途 王者归来 精灵宝钻<br>本来已经把霍比特人看完了，后来换了一个翻译版本，于是从头看起<br />现在是第 33 页",
		progress: [33, 706, 2004]
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
		],
		progress: [0, 2, 11],
	}, {
		title: "数学",
		content: [
			"微积分",
			"线性代数",
			"数值分析",
			"概率统计",
			"复变函数",
			"高等数学".processing,
			"离散数学",
			"抽象代數",
			"拓扑",
			"《什么是数学》",
			"《数学之美》"
		],
		progress: [0, 1, 11]
	}, {
		title: "语言",
		content: [
			"English".processing.orange,
			"Esperanto",
			"Latin"
		],
		progress: [0, 1, 3]
	}, {
		title: "物理",
		content: [
			"数学物理方程",
			"量子力学",
			"统计力学",
			"经典力学",
			"电动力学"
		],
		progress: [0, 0, 5]
	}, {
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
			"ECMAScript 2015".processing
		],
		progress: [1, 4, 12]
	}, {
		title: "思维、逻辑、社会、设计、玄学",
		content: [
			"黑客与画家".done.green,
			"批判性思维工具",
			"哥德尔艾舍尔巴赫".processing.orange,
			"不确定状况下的判断",
			"影响力:科学与实践",
			"给大家看的设计书",
			"可笑的思维谬误：批判性思考与查错神经",
			"乌合之众",
			"提问的智慧".done.green,
			"浪潮之巅"
		],
		progress: [2, 3, 10]
	}, {
		title: "一些奇怪的东西",
		content: [
			"魔戒".processing.orange,
			"Uno".done.green,
			"万智牌规则",
			"DND规则",
			"1984",
			"美丽新世界",
			"三体".processing.red
		],
		progress: [1, 2, 4]
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
		title: "我们的征途，是星辰大海！",
		content: [
			"<a href='http://www.bilibili.tv/video/av734504/'>我们所居住的宇宙</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av330634/'>宇宙之死</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av519325/'>旅行者号-冲出太阳系</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av532292/'>上帝创造宇宙</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av366303/'>为什么夜空是黑的</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av705870/'>宇宙中的高速通道-虫洞</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av734155/'>已观测的宇宙</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av375315/'>什么是空间</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av286821/'>宇宙中最大的星球</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av825951/'>3分钟了解宇宙大爆炸</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av411844/'>跳进一个黑洞会怎样</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av306190/'>10个宇宙的古怪事实</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av476783/'>宇宙有多小</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av745860/'>太空中的十个奇迹</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av497776/'>60秒漫画天文学</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av499656/'>宇宙有多大</a>".done.green,
			"<a href='http://www.bilibili.tv/video/av497776/'>60秒漫画天文学</a>".done.green,
			
			"<a href='http://www.bilibili.tv/video/av284084/'>纪录片-宇宙</a>",
			"<a href='http://www.bilibili.tv/video/av821216/'>霍金的宇宙</a>",
			"<a href='http://www.bilibili.tv/video/av298279/'>与弗里曼穿越虫洞</a>",
			"<a href='http://www.bilibili.tv/video/av328469/'>地球君的演化</a>",
			"<a href='http://www.bilibili.tv/video/av335794/'>500亿光年外的深邃宇宙</a>"
		],
		progress: [17, 22, 22]
	}]
}