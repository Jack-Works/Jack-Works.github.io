/// <reference path="./global.d.ts" />
// 人名 (书名) 代表虚拟人物
// 《书名》，人名 代表作品作者
const hitokoto = [
    ['没有回忆就去创造回忆 没有道路就去开辟道路', '平安夜的噩梦'],
    ['「呼神护卫！」', '哈利·波特 (哈利波特与阿兹卡班的囚徒)'],
    ['事情正在起变化', '毛泽东选集，毛泽东，1957 年 5 月 15 日'],
    ['曙神星的尘埃 镶嵌漆黑缎带', '尘降，Cop'],
    ['星辰各自旋转 轨迹精密切开', '尘降，Cop'],
    ['就会连时间的流逝也开始惧怕', 'Core Pride - 青之驱魔师 OP, UVERworld'],
    ['星环号将在 180 秒后进入光速，请指定航线', '星环号服务机 (三体Ⅲ：死神永生)'],
    ["Once it's on the Internet, it's forever on the Internet"],
    ['苟利国家生死以 岂因祸福避趋之', '赴戍登程口占示家人，林则徐'],
    ['我们从星尘中来', '卡尔·萨根'],
    [
        `只有一枚棋子是无价之宝，这枚棋子不是世界，而是世界里的人们——所有的一切。
        哪怕星星在天国中死去，只要我们的种族不致灭绝，这枚棋子就仍然活着。
        认清你所有其他棋子的价值，为了胜利博弈吧。`,
        '邓布利多 (哈利波特与理性之道), Eliezer S. Yudkowsky',
    ],
    ['为了更伟大的利益', '格林德沃 (哈利波特与死亡圣器)'],
    ['最后一个要消灭的敌人是死亡', '詹姆·波特与莉莉·波特的墓志铭 (哈利波特与死亡圣器)'],
    ['我们必须知道 我们必将知道', '大卫·希尔伯特'],
    ['We realize the importance of light when we see darkness.', 'Malala Yousafzai'],
    [
        `救援者无人救援 勇士没有主人
        无父无母 在他之上 空无所有`,
        '戈德里克·格兰芬多 (哈利波特与理性之道), Eliezer S. Yudkowsky',
    ],
    ['一颗星照耀着我们相遇的时刻', '魔戒'],
    ['无论怎样嘶喊「等等」却徒劳无功', 'バイバイ yesterday - 暗杀教室 OP, 3年E組うた担'],
    ['There is no utopia, desire for euphoria', '飞跃乌托邦, 动点'],
    ['最后我们终于明白 指引前方黑暗的不是某天的星光', '星屑碎片, 花之祭P'],
    ['我注视坐标是行星 我错过彗星的叹息', 'Gravity, 便器P'],
    ['你得多去和人聊天、卖萌、使坏，什么人都可以。', '采铜'],
    ['朦胧中 的旋律 悠扬若身处梦境', '星临 Transit of Star, 夜明挽歌√'],
    ['沉睡几世纪 星光落眼里', '星临 Transit of Star, 夜明挽歌√'],
    ['我感觉，我们都已经处于风暴的前夕。我们曾经在历史课本里看着历史，如今我们则在亲身见证着历史。'],
    [
        `「这个是啥？」
        「这个是东西」`,
        'Nat Morichika',
    ],
    ['所有人都疯了，休会吧。', '1789 年 8 月 4 日，法国'],
    ['我永远不再谈论星星 还有蟒蛇和热带的花朵', "C'est un chapeau - 音乐剧《小王子》"],
    ['我不知为何无人看见 事物与自我的另一面', "C'est un chapeau - 音乐剧《小王子》"],
    ['思教陈规 统统作废', '思想悼亡者, 老虎欧巴'],
    ['Though you died, La Resistance lives on!', 'La Resistance - South Park 插曲'],
    ['愿风指引着你的道路，愿你的刀刃永远锋利。', '魔兽世界'],
    [
        '要让人能够真正做到计算并遵守数学结果，其现实程度就和你通过计算夸克运动去预言股票市场差不多。',
        '理性：从人工智能到僵尸，我所谓的理性到底是什么意思？, Eliezer S. Yudkowsky',
    ],
    ['我觉得，我这辈子最灿烂的笑容，大概都奉献给我电脑屏幕了。'],
    ['一个人一生之中得癌症的概率是 44.29%，最终因癌症而死的概率则是 21.15%'],
    ['珍宝在何处，心也在何处', '马太福音 6:20-21'],
    ['星空多美啊，想一想，那一块光斑的直径，是你穷尽一生都无法完成的航行', '占星者'],
    ['所有秩序都终归于混沌，所有火焰都将熄灭，所有变异都趋于平淡，所有结构都终将自行消亡。', '失控, 凯文·凯利'],
    ['不将爱国主义剔除出人类，世界将永无宁日。', 'George Bernard Shaw'],
    ['谁坚持住做出决定之前看得完全清楚，谁就永远也做不出决定。', 'Henri-Frederic Amiel'],
    ['你的身份变了。但你原来是谁？现在又是谁？', '狼人游戏 Bot'],
    ['上路吧！上路吧！黎明之前就出发！', '歌曲：告别温暖的炉火与厅堂，魔戒同盟'],
    ['光子箱里的粒子难测踪迹，黑暗盒子里的猫咪不知死生，知识为信仰铺路，人们为真理抗争。', '量子群星闪耀时'],
    ['大地上，星星们找到了彼此。', '量子群星闪耀时'],
    ['大教堂撑起这信仰的时代 人类企图攀及星星 赋予生命更高的意义', '大教堂时代 - 音乐剧《巴黎圣母院》'],
    [
        'We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard',
        'John F. Kennedy',
    ],
    ['但是没有事，一切都很好，斗争已经结束了。他战胜了自己。他热爱老大哥。', '1984'],
    [
        '玻尔兹曼，毕生研究统计物理，在  1906 年选择了自杀；埃伦费斯特继续着他的工作，在  1933 年时，他选择了相似的方法结束自己的生命。现在轮到我们来学习统计物理了。恐怕我们在接触它的时候要小心些。',
        '物质的状态',
    ],
    ['USB Type-A 接口的自旋是 1/2'],
    [
        '我们是靠追随自己的欲望成为我们注定成为之人的，无论这欲望会把我们引向何方。',
        '奎里纳斯·奇洛 (哈利波特与理性之道), Eliezer S. Yudkowsky',
    ],
    ['不自然的行为会导致不自然的混乱。染上疾病的心会在睡梦中吐出秘密。', '莎士比亚'],
    [
        '正因为人类对自己一无所知，因此许多人尽管健康，却相信自己正步向死亡；并且亦有许多人，明明正步向死亡却相信自己健康。',
        '布莱兹·帕斯卡',
    ],
    ['装配脑袋病故。各位保重身体。', 'Ben Wang'],
    ['幽灵依然在互联网上飘荡，直到崩溃为止', '比尔盖子'],
    ['我是 ADA，我是 Resistance，我回来了。', 'Ingress'],
    ["I'm you. I'm me. The echo unforeseen.", '哈利波特与被诅咒的孩子'],
    ['他们正跌跌撞撞走在一个不祥的梦里，永远不会醒来。', '魔戒'],
    [
        '不要总是用难以抉择的道德问题刁难别人，因为当他在此类问题下积累了足够的经验，你会发现他变得毫无道德可言',
        'Giles Lee',
    ],
    ['冷灰中热火苏醒 暗影中光明跳荡', '魔戒'],
    ['我愿意带走魔戒，尽管我不知道路在何方', '弗罗多 (魔戒)'],
    ['以夏尔之名！', '魔戒'],
    ['You shall not pass', '米斯兰迪尔 (魔戒)'],
    ['我在借来的时间里活着。也许我们都是。但我知道何时何地我的债务会到期。', '狄拉克海的涟漪, Geoffrey A. Landis'],
    ['把树唤醒，教他们说话，并学习树的语言。精灵总是想跟所有的东西说话，古时的精灵也确实这么做。', '魔戒'],
    ['赤道和极地对谈 黑夜与白昼交流', '朱利安·赫胥黎'],
    [
        `“说实话，如果在大灾难达到顶峰前就叫停，我都不能原谅我自己。你们的一个士兵甚至是四重间谍。”
        “四重？但战争只有三方参与啊！”`,
        '哈利波特与理性之道, Eliezer S. Yudkowsky',
    ],
    ['王者之手乃医者之手，于是众人就能得知谁是真正合法的国王。', '魔戒'],
    [
        `记忆变得抽象，知识蒙蔽空洞，随后一忘皆空。
        然后，有黑暗，有光明，这是第一日，1830 年 4 月 14 日。`,
        '光之手扎',
    ],
    ['如此美丽的故事。本应该成真的。本应该成真的。', '哈利波特与理性之道, Eliezer S. Yudkowsky'],
    ['仔细一想，她并没有真正努力过。只是在做家庭作业——你拯救过谁？', '哈利波特与理性之道, Eliezer S. Yudkowsky'],
    ['我们之中有一个人在滥用英语，我觉得并不是我。', '理查德·道金斯'],
    ['最后的一位科学知识丰富的总统可能只有托马斯·杰斐逊', '魔鬼出没的世界, 卡尔·萨根'],
    ['Everything not saved will be lost.', 'Nintendo 游戏机的退出提示'],
    [
        '太多学生会记得我是那个邪恶的人。不，我要去一个新的地方，换一个新的名字，找一个新的人去爱。',
        '西弗勒斯·斯内普 (哈利波特与理性之道), Eliezer S. Yudkowsky',
    ],
    ['我不要舒适。我要神，我要诗，我要真实的危险，我要自由，我要善良，我要罪孽。', 'John (美丽新世界)，阿道司·赫胥黎'],
    ['相信事情还有三个糟糕的理由。它们分别是“传统”、“权威”和“启示”。', '相信事情的充分理由和糟糕的理由，理查德·道金斯'],
    [
        '这是一套很标准的模式：光荣时代的堕落，为了保护仅存的珍贵部分必须保持纯洁，抗拒污染，过去是上坡路而未来是下坡路。而这个模式也有它的天敌……',
        '哈利波特与理性之道, Eliezer S. Yudkowsky',
    ],
    ['文明在高度发达之中摇晃', '亚特兰蒂斯 - 神明 Project'],
    [
        '毫无疑问，你有些堂兄弟或伯祖父是早年夭折的，但你的祖先中一个也没有是幼年夭折的。祖先是不会年幼丧生的。',
        '自私的基因，理查德·道金斯',
    ],
    [
        '我在服装店里遇见你的时候，并不知道你是谁，而我那时候就喜欢你了。',
        '哈利·维瑞斯 (哈利波特与理性之道), Eliezer S. Yudkowsky',
    ],
    ['虽然半数的国家有民选政府，但民主正在失败', '克莱尼尔 Khraynell vo Phraniicz'],
    [
        `还有许多问题我愿意告诉你们，但是你们现在尚不能接受
        摘自福音书 16:12`,
        '代数学引论第一卷结束语',
    ],
    [
        `凡是有关本党与国家生存之事件，一概不许有人讨论。
        胆敢质疑国家社会主义思想是否正确者，均作叛国论。`,
        '国家社会主义德国工人党 Herr Sauckel，1923 年 1 月 20 日',
    ],
    [
        '所以，对你们，无论你们是谁，来说，我们，地球的人民，和异常抑制基金会第六梯队，希望你们未来的事业幸运常在。我们留下的这信息提醒你们，就如我们被前任的信息提醒一样；无论我们之间有多少距离或深渊，只要我们继续寻求生存下去，我们从不孤单。',
        '团结号飞船 铭文 - SCP 基金会',
    ],
    ['部分原因是由于“动物”的范围不包括植物，而且在某些人的心目中也不包括人类。', '自私的基因，理查德·道金斯'],
    ['我看见过不一样的自己', 'Scorpius Malfoly (哈利波特与被诅咒的孩子)'],
    ['问题：是否会出现能击败任何人都下棋程序？推测：不会。', '哥德尔、艾舍尔、巴赫：集异璧之大成，侯世达'],
    ['《国际海洋研究联合会不知去向》', 'Deep in the sea - 神明 Project'],
    ['精灵的“魔法”是“艺术”，他们将艺术从人类的诸多局限中解放出来：更轻易、更迅速、更完整。', '精灵宝钻'],
    [
        '如今人类可以向西航行了，只要愿意，航行多远都行，却再也到不了维林诺或蒙福之地，而是返回东方，再次回到原地。因为世界变圆了，变得有限，变成一个除了死亡无法逃脱的循环。',
        '精灵宝钻',
    ],
    ['我……我想起来了……在遇见你们之前……就遇见过你们了……', '山田一二三 (弹丸论破：希望的学园与绝望高中生)'],
    [
        '牢不可破的联盟就此解体，再没有国家计划委员会，也没有克格勃，更不会有强大的武装力量来保卫祖国。我们的资源会被掠夺，我们的女人会成为婊子，我们的科技会停滞不前，只有索尔仁尼琴那样的小丑会为您的英明决策而欢呼，而那些大洋彼岸的扬基佬们则达到了他们想都不敢想的目标。',
    ],
    ['死亡是他们的命运，是伊露维塔的礼物，随着时间流逝，连众神亦会嫉羡。', '精灵宝钻'],
    ['万物之中他们首先看见的是天上的繁星。因此，他们永生永世热爱星光。', '精灵宝钻'],
    [
        `既得可见平凡，仿照上例显然，留作习题答案略，读者自证不难
        反之亦然同理，推论自然成立，略去过程 QED，由上可知证毕`,
        '西江月·证明',
    ],
    [
        "If you're making a ton of things optional, you're probably trying to represent a state machine poorly.",
        'https://jaredforsyth.com/type-systems-js-dev/#/54',
        'https://jaredforsyth.com/type-systems-js-dev/#/54',
    ],
    [
        `#Alex
        "人们不像你，走不进去别人的内心。"
        "除非死过一次。"`,
        'Nebelwerfer',
    ],
    [
        '日记本是“年少时光”，戒指是“炽热的情感”，冠冕是“智慧的隐士”，之后曾听冠冕在寥寥无几的数次简短对话中，提到挂坠里是“留恋”，金杯里是“悔意”。',
        '本本战记',
    ],
    ['我习惯了案子一头是谜， 两头都是迷就太麻烦了，再见', '夏洛克·福尔摩斯 (神探夏洛克)，试图拒绝一位匿名客户时'],
    [
        '你的情况很复杂，但是不要放弃希望。每个人或早或晚都是能够被治愈的，枪毙只是最后一道程序。',
        '奥勃良 (1984)，乔治·奥威尔',
    ],
    ['Stay focused so I can stay strong', 'Never say never, 弹丸论破：希望的学园与绝望高中生 OP, TKDz2b'],
    [
        '乔治韩德尔已不再知道时间和钟点，也分不清白天和黑夜。他完全生活在一个只用旋律和节拍来计量时间的环境里。',
        '人类群星闪耀时, 斯蒂芬·茨威格',
    ],
    ['正是科学的光芒告诉了我们并不是人类大众生来便背着枷锁。', 'Thomas Jefferson'],
    ['名字背后有强大的魔法。你若知晓了一个人的真名实姓，你便可支配它名字背后的魔法力量。', '真名实姓，弗诺文奇'],
    [
        '“幸福新生活”这个词，在电屏中出现了好几次，这个词现在已经成了富裕部的口头禅，人人张口必讲“幸福新生活”。',
        '1984, 乔治·奥威尔',
    ],
    ['对天文学家来说，任何不是氢又不是氦的元素都是金属。', '巫师、外星人与星舰，查尔斯·阿德勒'],
    [
        '安布，简称安，是国际单位制中魔力的基本单位，符号是 M。同时它也是国际单位制中八个基本单位之一。安布是以英国魔法师梅林·安布罗修斯命名的，为了纪念他在经典魔力学方面的贡献。',
    ],
    [
        `#Alex
        "可有些人认为不作为就是作恶。"
        "我见到过光明，我能拥抱黑暗，因为我什么都没做过。"`,
        'Nebelwerfer',
    ],
    ['【稍不小心就会从云端坠落下来的日子。】', '日刊文本生成器 2017/8/20, benpigchu'],
    ['以自身需求为迫切需求 以他人需求为迫真需求', 'Giga Fang'],
    ['【世界的未来就这样被电视里的大人们擅自决定了。】', '日刊文本生成器 2017/8/23, benpigchu'],
    ['然后第三次死亡来的比第一次早。', '光之手札'],
    [
        '“有这样的人在里头！”这动听的话语是多么讽刺，他不禁笑了起来，“人类有多么美！啊，美丽的新世界……”',
        '美丽新世界，阿道司·赫胥黎',
    ],
    ['我们赢不了的。不要对骂了，让我们体面一点的死去吧。', '平凡的屠杀，没有风暴之眼的风暴'],
    ['I vas only followink orders'],
    [
        '在前几代人中，写日记只给自己看是很常见的人文主义习惯，但现在很多年轻人会觉得这完全没道理。如果没有其他人读到，写了岂不是白写？',
        '未来简史，尤瓦尔•赫拉利',
    ],
    ['Notre seul espoir est de tout reprogrammer', 'Un Monde Sans Danger - Code Lyoko OP'],
    [
        '你们相信你们会死吗？是的，人是会死的，而我是一个人。因此……不，这不是我想说的。我知道你们清楚这一点。我是问：你们有没有真的相信过？完全的相信，不止心里，身体也相信，有一天你们拿着这页纸的手会变得冰冷，一如死灰……',
        '我们，叶·扎米亚京',
    ],
    [
        '然而，在第 40 跨镇大道上，我们已经成功建立起了高压电墙。不止如此，我确信我们会胜利。因为理性必胜。',
        '我们，叶·扎米亚京',
    ],
    ['无法原谅自己的懦弱与无用 徜徉于巨鲸掠过的洋流', 'deep in the sea - 神明 Project'],
    [
        'Du bist nichts. Dein Volk ist alles. / 没有祖国，你什么都不是。',
        '1924 年，海因里希·德斯特，时任 sozialdemokratischer Ministerpräsident des Landes Anhalt',
    ],
    ['我们一直在填坑，还奢望能赶在技术债务把我们拖垮之前把网站发布出去。', '前端架构设计'],
    ['切记，诺多族的最后希望来自大海。', '未完的传说'],
    [
        `夜深人静从梦中醒来 躺在床上思考着未来
        想来想去却没有答案 心中反而越来越迷乱`,
        '循环',
    ],
    [
        '总而言之十月还是离开了，在这万圣节的日子里。再见万圣节，再见十月。',
        '再见万圣节',
        'https://plumz.me/archives/7246/',
    ],
    ['【没有人会看见划过天边的你，你也不会实现谁的愿望】', '日刊文本生成器 2017/11/13, benpigchu'],
    ['【胆小到不敢离开这个世界】', '日刊文本生成器 2017/11/15, benpigchu'],
    [
        '当遵循一个道德准则的结果是遭受痛苦时，我们就需要仔细审视一下我们的道德准则，并且怀疑我们是否过于生硬地应用了这个准则。……以别人的痛苦为代价去追求一种道德清白感，这是有悖常理的。',
        '牛津通识读本：医学伦理',
    ],
    [
        '你们吹嘘的自由只是一种亵渎的放肆，你们标榜的民族伟大充满骄横自负，你们的喧闹声空虚而毫无心肝，你们对暴君专制的谴责无异于厚颜无耻的言辞，你们所唱的自由平等的高调更是虚伪至极，是对这些口号本身的嘲弄。',
        '弗雷德里克·道格拉斯，1854 年美国国庆节，谴责奴隶制的演说',
    ],
    ['我家大门常打开 开怀容纳天地', '北京欢迎你，2008 年北京奥运会主题歌'],
    [
        '国际联盟已经结束了。愿联合国长存。',
        'Scott, George. The Rise and Fall of the League of Nations. Hutchinson & Co LTD. 1973. ISBN 0-09-117040-0.',
    ],
    ['不以谎言为生', '1974 年 2 月 18 日《华盛顿邮报》，Alexander Solzhenitsyn'],
    ['讓莪們冋菿舊ㄖ溡洸，冋忆起蛧仩沖烺哋洎甴。', '《火星文复兴倡议》，火星文字工作委员会，2017 年 11 月 30 日'],
    ['离开书店的时候，我留下了一把伞，希望拎着它回家的人，是你。', '另一个大冒险, ThankCreate Studio'],
    ['Before I die, I want to ______________', 'Before I Die Project', 'https://beforeidieproject.com/'],
    ['我年轻的时候的确犯过错误。但是我现在长大了，更加成熟了，我学会了如何犯下更大的错误。', 'Kevin Farzad'],
    [
        '有少数的时候，你也许会为了绕过其他一些代码的设计问题，采用一些违反直觉的作法。这时候你可以使用很短注释，说明为什么要写成那奇怪的样子。',
        '编程的智慧, Yinwang',
        'http://www.yinwang.org/blog-cn/2015/11/21/programming-philosophy',
    ],
    ['该醒了', '终末之诗, Minecraft'],
    ['What doesn’t kill us, kills us later.', 'Cry'],
    ['他在左右之间的道路迷失，我看着他', '光之手札'],
    [
        `事件 ID：akx.9321 （命中相会：明日船长）
        内容：[mirrored_syzygy_admiral] 在随后的这几天一直沉默。毕竟听说自己实际已经死了是一件不小的事情。但是恰到好处的，沉默变成了果断，并最终成为笑对危险的豁达。

        已行之事，终将再行；将行之事，必为已行。`,
        '群星 DLC: 地平线信号',
    ],
    ['Remember me.', 'remember me, 寻梦环游记 主题曲'],
    ['欢呼吧，崩坏的日子开始了', '谁动了我的名字'],
    ['与其听信谣言，不如相信乌云', '乌云'],
    ['在遮荫的粟树下，你出卖了我，我出卖了你。', '1984, 乔治·奥威尔'],
    ['我一直假装着自己是计算机系的人在生活着。', 'raffica', 'https://zhuanlan.zhihu.com/p/33573003'],
    ['Design is never done.', 'Google Material Design Team'],
    [
        '如果你的心中没有清晰简单的思维模型，你用任何语言表述出来都是一堆乱麻。',
        '如何掌握所有的程序语言, Yin Wang',
        'http://www.yinwang.org/blog-cn/2017/07/06/master-pl',
    ],
    [
        `残された灯が 消えるころには / 残留的灯光熄灭之时
        仆が仆であることも 忘れてしまって / 我将连自己都忘却掉`,
        '永眠童话, まふまふ',
    ],
    [
        `明日も僕は夢うつつ / 明天我依旧是半梦半醒
        このまま僕は消えていいのに / 这样的我还是消失算了`,
        '自伤无色, ねこぼーろ',
    ],
    ['生命逐渐苍白 季节没有终点', '虚无勇者, FFF君'],
    [
        "永别了，我重复深爱的人！A Túrin Turambar Turún' ambartanen -- 命运的主宰却为命运所主宰了！死乃为欢，生方为苦！",
        '涅诺尔 (未完的传说)',
    ],
    [
        `戊戌双甲子，诸君拒做犬儒，
        北大一二〇，师生挺直脊梁。`,
        '《挺直脊梁拒做犬儒》，李沉简，北京大学元培学院常务副院长、生命科学学院教授，2018 年 2 月 28 日',
    ],
    [
        `总有人说温度要骤降，我们没有相信。
        我们期盼春天的来临，直到失去理性。
        直到太阳不再提供热量的那一天，
        我们微笑着在冰封中告别。`,
        '冻结日 / 引言',
    ],
    ['我们不能活在尚未来临的日子里，为了追求自身构想的幻影而丧失了现在。', '未完的传说'],
    [
        `“至少死者当中有您的敌人”？
        “至少我的双手未曾染血”？`,
        '未完的传说',
    ],
    [
        `#Alex
        "等我三四十岁，他三四十岁，他们她们三四十岁，你该三四十岁的时候，如何呢?"
        "我不知道。我想不到。"
        "可爱的人不再可爱，无论性别认同如何恐怕大多数都要像一般人一样生活。甚至这个世界也会有很多很多变化。"
        "我真的不愿去想，哪怕我活着也一样。"`,
        'Nebelwerfer',
    ],
    ['我果然还是讨厌夏天。', '雨宫响也 (阳炎 - in a daze -), じん'],
    [
        '【在大雨的城市街道上行走的时候似乎更喜欢只踩白线一些，一定是以为白线以外的地方都是深不见底的水潭吧。】',
        '日刊文本生成器 2018/4/5, benpigchu',
    ],
    [
        `8月は何度でも過ぎ去って / 八月无数次的过去
        「また来年だね」と笑いあう  / 互相笑著说「明年见」
        そんな未来なら？ / 如果是那样的未来？`,
        'コノハの世界事情 - 阳炎 Project',
    ],
    ['“……不会好起来了。”', '九之濑遥 (阳炎6 - over the dimension -)'],
    [
        '【为什么会害怕未来呢？我想，害怕的不是意外的灾难，而是被一点点侵蚀之后，变得不成样子的日常吧。】',
        '日刊文本生成器 2018/4/20, benpigchu',
    ],
    [
        `これが未来だと言うならいっそ / 如果这就是所谓的未来的话
        遣り切れない明日を手放して / 那么就干脆的将致命的明天放开`,
        'days - 目隐都市的演绎者 ED, じん/Lia',
    ],
    ['感觉群里就像个鸟笼，就养两种鸟，鸽子和鹦鹉。', '霞之丘诗羽厨@新浪微博'],
    ['【待到太阳再次升起之时，我们已然不是当初的我们。】', '日刊文本生成器 2018/4/25, benpigchu'],
    [
        '如果只是消失……那么自己一个人也能办到。而且我也知道那种做法有多么简单。',
        '木户蕾 (阳炎眩乱 7 - from the darkness -)，じん',
    ],
    ['被遗忘的还有那无尽噩梦的惆怅', 'Death and Dormancy - 神明 Project'],
    [
        `现在还 活着 活着 活着吗
        反正无论怎样梦都不会实现`,
        'mede:mede, Reol',
    ],
    ['目醒めない僕は見ていた', 'コノハの世界事情 - 阳炎 Project'],
    ['终于连最后一个词组也被有关部门屏蔽了。', '寂静之城，马伯庸'],
    ['粉笔、一组夸克微粒、质数、真理和美都是，或都曾被认为是构成实在的备选项。', '牛津通识读本：亚里士多德的世界'],
    ['【把棒棒糖叼在嘴上的样子，可爱之余还有一分帅气呢。】', '日刊文本生成器 2018/6/1, benpigchu'],
    ['不过说是白天，也只是灯开的亮一点的黑夜罢了。', '二重原罪'],
    [
        `悒々と堕ちては / 若郁郁坠落的话
        终幕が来るのなら / 终幕就会到来
        明日を夢見るより / 那就勿要梦见明日`,
        '永眠童话，まふまふ',
    ],
    ['他必须比现在做得更好，变成一个不那么愚蠢的人。', '哈利·维瑞斯 (哈利波特与理性之道), Eliezer S. Yudkowsky'],
    ['「那么，故事就结束了。」', '光之手札'],
    [
        `朦胧、今日も不自然でいよう / 朦胧，今天也不自然地活着吧
        昨日のペースを守っていよう / 保持住昨天的步调`,
        'ロスタイムメモリー - 阳炎 Project',
    ],
    [
        `叶わない梦を愿うのならいっそ / 如果要祈愿无法实现的梦的话
        掠れた过去を抱いて / 不如索性去拥抱断续的过往
        覚めない夢を見よう / 做不会醒来的梦吧
        当然の様に闭じ篭って / 理所当然似地壳居着`,
        'ロスタイムメモリー - 阳炎 Project',
    ],
    ['天空既为极限', 'Minecraft'],
    ['那是你抓不住的幻梦。是你永远无法揭露的秘密，是谎言，是活的阴谋。', '谈谈 055 - SCP 基金会'],
    ['此番告别，既是终场', '与光比邻 - 时之歌 Project'],
    [
        '長いはずの一日がもう暮れる / 原本漫长的一天却已日暮西山',
        '生きていたんだよな - 只想住在吉祥寺吗？OP, あいみょん',
    ],
    ['终将燃尽余温 坠落向冰冷黄昏', '扭转晨星的舵轮 - 时之歌 Project'],
    ['我们根本不可能不再次发现它！我们太他妈聪明了！', '无色之绿事件 - SCP 基金会'],
    ["I wasn't really planning on landing it.", 'Richard Russell'],
    ['【机器没有感情，所以才会被大家喜欢。】', '日刊文本生成器 2018/9/2, benpigchu'],
    ['⚠️', '橙华箱庭垃圾转运中心'],
    ["Feeling hazy, let's remain unaffected today too", 'Lost time memory (English Cover), Jubyphonic'],
    [
        '而至于窗外那黑暗中的空气又稀薄了几分，电视上除了火箭发射的消息以外其他频道拨来拨去都是雪花，其他人被扼住咽喉随时会死，也有人正在死去，……，是谁也不预备管，也不预备知道的。',
        '笔记：Q的人生, DanbaoFauna',
        'http://mp.weixin.qq.com/s/gmDh0OsTIjBwaf2vJ_mfHg',
    ],
    [
        '音乐电视天衣无缝地变换着为洗发水、李维斯牛仔服、牙膏甚至武器、万事达卡、凯迪拉克和人寿保险等激起购买欲望的广告服务。',
        '牛津通识读本 - 西方艺术新论',
    ],
    [
        `「思い出して、終わったって。 / 【即便回忆着 而终结也好
        秘密基地も、冒険も /  秘密基地和冒险
        あの日に迷い込んだ話の事も。」 / 还有误闯进那些日子 这种种故事】
        独りぼっちが集まった / 聚集起了孤独的人`,
        'サマータイムレコード - 阳炎 Project',
    ],
    [
        '无聊的人生是一种负担；丰衣足食的生活不能带来平和。Carpe diem（抓住每一天）——但是你无法做到，任凭你怎么努力，时光总归要流逝。',
        '牛津通识读本 - 我们时代的伦理学，用于描述一些哲学家的观点',
    ],
    [
        '一切将消失于深渊，没有什么永恒不变。宇宙将变得冰凉，一切终将被忘却。',
        '牛津通识读本 - 我们时代的伦理学，用于描述一些哲学家的观点',
    ],
    ['只有逝去的人令人羡慕，死亡令人奢望。', '牛津通识读本 - 我们时代的伦理学，用于描述一些哲学家的观点'],
    [
        '软件不会自己更新自己，它保持一开始被编写出来的样子。Windows 7 并非由于自然选择而进化成 Windows 8。',
        '修改软件的艺术',
    ],
    [
        `「Don't wonder why,
        Wanna die! wanna die!」
        Grabbing my own hand`,
        'Lost time memory (English cover), JubyPhonic',
    ],
    ['我们大概不会从道德之镜中看到自己成为圣人，但也不会看到自己成为妖魔。', '牛津通识读本 - 我们时代的伦理学'],
    [
        '如果我有一种美化死亡的倾向，那只是因为我们的社会对它的丑化太过严重。',
        '如果它是一个游戏, 9@indienova',
        'https://indienova.com/indie-game-news/if-it-is-a-game/',
    ],
    [
        '人人生而自由，在尊严和权利上一律平等。他们赋有理性和良心，并应以兄弟关系的精神相对待。',
        '联合国世界人权宣言，第一条',
    ],
    [
        '据米罗所知，这个世界的血液对维持身体机能有更直接的作用。失血并不是问题的标志，而是问题本身。',
        '哈利波特与确认重击, Sir Poley',
    ],
    [
        '人人有思想、良心和宗教自由的权利；此项权利包括改变他的宗教或信仰的自由，以及单独或集体、公开或秘密地以教义、实践、礼拜和戒律表示他的宗教或信仰的自由。',
        '联合国世界人权宣言，第十八条',
    ],
    [
        '人人有权享有主张和发表意见的自由；此项权利包括持有主张而不受干涉的自由，和通过任何媒介和不论国界寻求、接受和传递消息和思想的自由。',
        '联合国世界人权宣言，第十九条',
    ],
    [
        '小朋友看到魔女宅急便，非常惊讶，大声地提问，为什么扫把会飞。我听得有些难过。在我们小时候，所有小朋友都知道，扫把就是会飞的。',
        'tRedxz@twitter',
        'https://twitter.com/tRedxz/status/1044137084024307722?s=19',
    ],
    [
        '一个普通人，生活在一个待了很久但依然陌生的城市。下着雨。这个人平静地完成枯燥重复的工作。撑起伞。平静地回到住处，伴随着路边的噪声。躺下。平静地结束一天。周而复始。',
        'Yikouniao@twitter',
        'https://twitter.com/Yikouniao/status/946644235620573184',
    ],
    ['廻る世界のイデア 枯れる太陽、炎天下 / 回转世界的理想 枯萎的太阳 炎天之下', 'サマータイムレコード - 阳炎 Project'],
    [
        `……给了平凡的人一个机会，在那一天卷入不平凡的事
        剩下的日子都是令人窒息的燥热
        仿佛树叶下看骄阳伴着蝉鸣，没有风
        现在蝉鸣又响起来了……`,
    ],
    [
        `痛いくらいに現実は / 叫人痛苦的现实
        足早に駆け抜けた / 飞快地走过
        選んだ今日は平凡で / 选择的今天是平凡
        崩れそうになる日々さ / 又快要崩溃的日常呀`,
        'サマータイムレコード - 阳炎 Project',
    ],
    ['看来你是对的，就算魂器也受不了被变形成阳电子。不过那个岛余下的部分真是可怜。', '哈利波特与天然 20'],
    [
        `该如何留住线索
        来逆转命运的因果
        别犯下同样的错`,
        '风不定 - 时之歌 Project',
    ],
    ['完成したいよ ズルしたいよ 今、解答を / 我想完成啊 想蒙混过关啊 现在就把答案……', '東京テディベア'],
    [
        '作为西方节日庆典最关键的主要食材，每年圣诞节都有成千上万的火鸡帮助餐桌上的人们恢复了80点的HP。',
        '美食与美景兼具的月下夜想曲',
        'https://www.gcores.com/articles/102647',
    ],
    ['政府尽其所能颁布命令，威胁——但是你能用来威胁一个立意寻死的人的手段是有限的。', '三个世界的碰撞'],
    ['Even if the future seems uncertain', 'Never Say Never - 弹丸论破：希望的学园与绝望高中生 OP, TKDz2b'],
    [
        '在黑魔王崛起时，有很多为成年人的耳朵所作的演讲。这些成年人欢呼鼓掌，把这些演讲当成是他们的日常娱乐，享受完后便各自回家。',
        '奎里纳斯·奇洛 (哈利波特与理性之道), Eliezer S. Yudkowsky',
    ],
    ['不是每天都能从书店买到调查的关键信息，只要四十英镑，还能找零。', '汉尼根 （哈利波特与确认重击, Sir Poley）'],
    ['意识像潜水艇慢慢、慢慢地下沉 无息又无声叫人越发清醒的冷', '迷局 - 时之歌 Project'],
    ['陌生人互相拥抱', '柏林墙 - 维基百科'],
    [
        `The safe computer swing.
        Are you ready?
        Let's Go!!`,
        'Safe Computer - Wing',
        'http://music.163.com/song/28941615/',
    ],
    [
        "She couldn't take it living with a heart that only wants to disappear",
        'Toumei Answer (English Cover) - Jubyphonic',
    ],
    ['"Stop this already" quite the plea', 'Outer Science (English Cover) - Jubyphonic'],
    [
        '米罗有个理论，就像他每天固定要花一小时记忆法术，这里的巫师每天要花4到8小时（通过比较赫敏和罗恩，具体数值应该是8-智力调整值个小时）坐在扶手椅上谈论天气。',
        '哈利波特与天然 20',
    ],
    ['然后他叹了口气：“你怎么这么年轻，就变得如此睿智……？”', '哈利波特与理性之道, Eliezer S. Yudkowsky'],
    ['“什么？”  瑞安·菲尔松大吃一惊，嫌恶地说道，“她才一年级啊！变态！”', '哈利波特与理性之道, Eliezer S. Yudkowsky'],
    [
        "This might have once been part of a specification, but nobody seems to remember. It certainly isn't anymore. Just avoid it like the plague.",
        'Mozilla Developer Network',
        'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/image',
    ],
    [
        '“好吧，那太他妈的棒了。”他说。“我们要他妈的怎么逮捕一个能从他妈的警察局里他妈的传送出去的人呢？”',
        '哈利波特与确认重击, Sir Poley',
        'https://zhuanlan.zhihu.com/p/54556303',
    ],
    [
        'AI safety is about agents with IQ 150 trying to control agents with IQ 6000, whereas cryptoeconomics is about agents with IQ 5 trying to control agents with IQ 150',
        'Vitalik Buterin',
        'https://medium.com/@VitalikButerin/why-cryptoeconomics-and-x-risk-researchers-should-listen-to-each-other-more-a2db72b3e86b',
    ],
    [
        '所以用不了多久，你也会成为一个回忆，能感觉到，却记不起来，出现在我的下一个警告里面...',
        '分院帽 (哈利波特与理性之道), Eliezer S. Yudkowsky',
    ],
    [
        `Yeah so, watching the sun go down
        Til the day comes again, I guess it's bye bye bye`,
        '砂の惑星 (English Cover) - Jubyphonic',
    ],
    [
        'For many a “good death” is a foreign concept.',
        'How to Die Well, According to a Palliative Care Doctor - Mark Starmach',
        'https://medium.com/s/story/what-really-happens-when-we-die-95a34bba8669',
    ],
    ['有谁会讨厌浪漫主义的？那可是维克多•雨果！', '异数定理'],
    ['福尔摩斯没有走到哪死到哪的光环。古典时期很多侦探都没有这种倾向。这是现代侦探才有的毛病。', '异数定理'],
    [
        `酷く小さなこのセカイが / 这个残酷狭小的世界
        大きく牙を剥いて / 露出了大大的獠牙`,
        'オツキミ Recital',
        'https://music.163.com/#/song?id=26440338',
    ],
    [
        `Because it's mocking us, this painful small world
        Stabbing holes with fangs, you crumble`,
        'Otsukimi Recital (English Cover) - Jubyphonic',
        'https://www.youtube.com/watch?v=gumQsN28UgU',
    ],
    ['【凭空消失的三天。】', '日刊文本生成器 2019/2/28, benpigchu'],
    [
        '他准备着用惊人的话语来谈论“洪水奔流而下的强大的、不可抗拒的冲击力，磁铁始终指向北极的毅力和决心，铁器飞向磁体的迫切渴望”（《作》第一卷，117——118）。这又当如何理解？如果从字面来理解，不免令人难堪。',
        '牛津通识读本 - 叔本华',
    ],
    [
        '自我们在1月份发布博客以来，尽管面临着众多的不确定性和困难，他们仍然坚守在工作岗位，专注于服务我们的中国用户和客户。我们为拥有这样的员工感到深深的骄傲。',
        '关于谷歌中国的最新声明 - Google, 2010 年 3 月 23 日',
    ],
    [
        '肾虚在现代医学会被视为精神障碍，肾虚已被收录在精神疾病诊断与统计手册第四版（第五版则简要提及）及ICD-10第五章附件二- 文化特有的疾病中',
        '维基百科：肾虚',
    ],
    [
        `だんだん目が回って / 一点点地 感到头晕目眩
        夕焼けが燦々空に散って行った / 灼灼晚霞 于天空中蔓延消散
        滲み出す雲に 言葉が出なくなるのは何故？ / 望着开始浸染的云层 却为什么哑言？`,
        'RED - 剧场版《阳炎Daze》主题曲',
    ],
    [
        `あぁ、溶け落ちていく 燃ゆる日の秘密を / 啊啊 溶解坠落 阳炎的秘密
        鮮やかに閉じ込めて 忘れよう / 令人焦躁的鲜明 忘却吧`,
        'RED - 剧场版《Daze》主题曲',
    ],
    ['【黑影跳跃于屋顶之间，时不时留下喵的一声。】', '日刊文本生成器 2019/4/14, benpigchu'],
    [
        `どうせ幾年経って車が空飛べど / 反正即使再过几年 汽车就能在空中飞翔
        きっと何年経って機械が喋れども / 即使再过多少年 机械也一定能说话也好
        何だって言いたいんだ / 想要说些什么呢`,
        'ハウトゥー世界征服',
    ],
    [
        '幻想的生物触碰到这种金属，就有三种完全不同的结局。有些生物根本无法感觉到这来自现实的力量，有些生物则无法抵御，被直接切开。甚至，有些或然神仅仅因为触碰费钢，就发生了类似于“神话否定”的现象。',
        '异数定理',
    ],
    ['孤独は孤独に変わりゃしねえ / 孤独就是孤独这点是不会改变的吧', 'ハウトゥー世界征服'],
    ['【试着重新点亮灰掉了的选择支。】', '日刊文本生成器 2019/5/16, benpigchu'],
    ['现在，怀疑的对象还有零个。', '异数定理'],
    ['他们知道自己不属于奇迹，却不知道自己是否仍旧属于平凡。', '异数定理'],
    ['而现在，终于，一个不属于人类的神秘学系统独立发生了。', '异数定理'],
    [
        '“我们在悲剧中看到最高尚的人们，在经历长期的矛盾和痛苦之后，最终永远地抛弃了生活的一切乐趣和一直以来热切追求的目标，或者高兴地自愿放弃了生活本身。”（《作》第一卷，253）',
        '牛津通识读本 - 叔本华',
    ],
    [
        '这种悲剧“向我们展示了摧毁幸福和生命的强大力量，而且发生在主人公身上的悲剧也可能随时降临在我们头上……于是，一阵战栗中，我们感觉自己已经身在地狱了”（《作》第一卷，255）',
        '牛津通识读本 - 叔本华',
    ],
    [
        `“正义可能会迟到，但绝不会缺席。”
        这句话的原文是“Justice delayed is justice denied”。
        原意是“迟到的正义已非正义”。`,
        'https://www.zhihu.com/question/27096289/answer/199999560',
    ],
    ['【明日宛如昨日一般明亮，未来如同过去一般黑暗。】', '日刊文本生成器 2019/7/6, benpigchu'],
    ['与不存在相比，存在并非更可取。现实如果从未存在过就更好了。', '牛津通识读本 - 叔本华'],
    ['虽然生活包含苦难，却不能用苦难有任何积极意义来弥补。', '牛津通识读本 - 叔本华'],
    [
        '如果死亡的过程涉及痛苦，那么畏惧死亡也许是正当的。但那样一来，畏惧的对象就是痛苦而非死亡。……我们出生以前并没有无限期的存在，而那对我们而言是一件无关痛痒的事情，那么我们也应该同样看待自己的不再存在。',
        '牛津通识读本 - 叔本华',
    ],
    ['“万年前再威风又如何？今日还不是一局游戏里的一张卡？”', '走进修仙'],
    ['君と僕とじゃ違うから / 但你与我是不同的', 'RED - 剧场版《Daze》主题曲'],
    ['【我不喜欢现实世界，因为希望只存在于虚拟的幻象之中。】', '日刊文本生成器 2019/7/31, benpigchu'],
    [
        `“我施展了学者之触。我读了你的书。”
        “你不仅仅是读了它，”里德尔说。“你做了以前没人做过的事。你读了每一页。每一页。可能读到的每一页。我能说的，做的，记得的一切。一切。一切的可能。你不仅仅是读了我的书，”里德尔说，“你复制了我。”`,
        '哈利波特与确认重击',
    ],
    [
        `こんな世界の色に 染まってしまうというなら / 如果要被那样的世界浸染的话
        あなたが嫌い？ボクラも嫌いさ / 你不喜欢？我们也不喜欢
        もう放っておいてよ / 别管它了
        さよならしよう / 来说再见吧
        Goodbye underclass`,
        'ベルセルク',
    ],
    ['【也许明天早上醒来之后，又是一个新的八月。】', '日刊文本生成器 2019/8/31, benpigchu'],
    [
        '【病情发展至童话期，休谟计数器读数显著降低，拟采取现实增强疗法以避免坠入或然世界。】',
        '日刊文本生成器 2019/8/31, Jack Works',
    ],
    [
        '突然惊醒，发现只是梦。然后夏天就结束了。',
        '盛夏光年和未完的梦',
        'https://jesor.me/2019/summer-time-and-uncontinued-dream/',
    ],
    // Until 9/14/2019
]

function getHitokoto() {
    var len = Math.floor(Math.random() * hitokoto.length)
    return hitokoto[len]
}
