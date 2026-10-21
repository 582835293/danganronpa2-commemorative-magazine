export interface CharacterStats {
  logic: number;
  mentality: number;
  action: number;
  luck: number;
  empathy: number;
}

export interface CharacterTrialRebuttal {
  statement: string;
  weakPoint: string;
  truthBullet: string;
  counterQuote: string;
}

export interface CharacterProfile {
  id: string;
  rosterNo: string;
  nameCn: string;
  nameJp: string;
  nameEn: string;
  talentCn: string;
  talentEn: string;
  portrait: string;
  featuredCg: string;
  themeColor: string;
  hairColor: string;
  outfitColor: string;
  gender: '男' | '女' | '不明';
  birthday: string;
  height: string;
  weight: string;
  chest: string;
  bloodType: string;
  likes: string;
  dislikes: string;
  cv: string;
  fateStatus: 'survivor' | 'victim' | 'blackened' | 'mascot';
  fateLabel: string;
  chapterTag: string;
  magazinePage: number;
  stats: CharacterStats;
  quote: string;
  quoteJp: string;
  editorialBio: string;
  hopeShards: string[];
  favoriteGifts: string[];
  trialRebuttal: CharacterTrialRebuttal;
}

export const CHARACTERS_DATA: CharacterProfile[] = [
  {
    id: 'hajime',
    rosterNo: 'NO.01',
    nameCn: '日向 创',
    nameJp: '日向 創',
    nameEn: 'Hajime Hinata',
    talentCn: '超高校级的「？？？」',
    talentEn: 'Ultimate ??? / Reserve Course',
    portrait: '/assets/chars/hajime.jpg',
    featuredCg: '/assets/cg/cg_01.jpg',
    themeColor: '#78A355',
    hairColor: '#4A3C31',
    outfitColor: '#F5F5F0',
    gender: '男',
    birthday: '1月1日',
    height: '179 cm',
    weight: '67 kg',
    chest: '91 cm',
    bloodType: 'A型',
    likes: '草饼（Kusamochi）',
    dislikes: '樱花饼',
    cv: '高山南',
    fateStatus: 'survivor',
    fateLabel: '终章生还 · 未来创造者',
    chapterTag: '全章节主视角',
    magazinePage: 14,
    stats: { logic: 96, mentality: 92, action: 85, luck: 60, empathy: 88 },
    quote: '就算没有才能，就算未来充满迷茫……我也要亲手选择属于我们自己的未来！',
    quoteJp: 'それでも…俺は俺の未来を、俺たちの未来を選び取る！',
    editorialBio:
      '憧憬着希望峰学园直到近乎执念的少年。在修学旅行开始时失去了关于自身“超高校级才能”的记忆，却凭借冷静的常识人吐槽与敏锐的逻辑推理，在六次残酷的学级裁判中带领众人逼近真相。第六章揭晓其真实身份为预备学科学生及“神座出流计划”改造体，最终在七海千秋的引导下超越希望与绝望的二元对立。',
    hopeShards: [
      '阶段 01：初登贾巴沃克岛，在海滩醒来时与狛枝凪斗结伴收集全员希望碎片。',
      '阶段 02：在第一岛屿超市探索，逐渐习惯兔美与黑白熊荒诞对立的修学旅行日常。',
      '阶段 03：多次在学级裁判的“逻辑潜行（Logic Dive）”与“反论对决”中击破矛盾。',
      '阶段 04：在第五岛屿发掘希望峰学园预备学科与“人类史上最大最恶绝望事件”档案。',
      '阶段 05：在第六章毕业投票中黄金觉醒，与神座出流人格达成和解，守护现实伙伴。'
    ],
    favoriteGifts: ['草饼礼盒', '老式游戏机', '希望峰学园纪念钢笔'],
    trialRebuttal: {
      statement: '我们只要按照黑白熊的规则投出毕业票，就能回到真正的现实世界！',
      weakPoint: '投出毕业票',
      truthBullet: '新世界程序强制关机权限',
      counterQuote: '那是不对的！如果我们选择毕业，留在这里的意识就会被江之岛盾子彻底覆盖！'
    }
  },
  {
    id: 'nagito',
    rosterNo: 'NO.02',
    nameCn: '狛枝 凪斗',
    nameJp: '狛枝 凪斗',
    nameEn: 'Nagito Komaeda',
    talentCn: '超高校级的「幸运」',
    talentEn: 'Ultimate Lucky Student',
    portrait: '/assets/chars/nagito.jpg',
    featuredCg: '/assets/cg/cg_05.jpg',
    themeColor: '#2E7D6B',
    hairColor: '#EDE6DF',
    outfitColor: '#2A4236',
    gender: '男',
    birthday: '4月28日',
    height: '180 cm',
    weight: '65 kg',
    chest: '84 cm',
    bloodType: 'O型',
    likes: '美丽的事物、清静的地方',
    dislikes: '嘈杂的地方、丑陋的事物',
    cv: '绪方惠美',
    fateStatus: 'victim',
    fateLabel: '第5章 被害者（自导自演之死）',
    chapterTag: '第1章 / 第4章 / 第5章核心',
    magazinePage: 15,
    stats: { logic: 99, mentality: 95, action: 90, luck: 100, empathy: 35 },
    quote: '为了孕育出更加耀眼的绝对希望，无论多么深重的绝望都是必要的垫脚石啊！',
    quoteJp: 'どんな絶望も、より大きな希望のための踏み台に過ぎないんだよ。',
    editorialBio:
      '弹丸论破系列最具争议也最具魅力的反英雄角色。拥有极端循环的“超高校级幸运”（大不幸与大幸运交替降临）。他将超高校级学生奉为“希望的象征”，却在第四章进入八角馆密室得知全员皆为“超高校级的绝望”后彻底反转，于第五章旧仓库设计了利用自己绝对幸运的“不可解自杀陷阱”，企图借叛徒之手清洗全员。',
    hopeShards: [
      '阶段 01：在沙滩温和地照顾醒来的日向创，展现出近乎谦卑的自贬态度。',
      '阶段 02：第一场学级裁判暴露对“希望”狂热的病态信仰，自愿充当杀人事件的导火索。',
      '阶段 03：讲述童年劫机陨石事件、绑架彩票事件及被诊断出额颞叶痴呆与恶性淋巴瘤的往事。',
      '阶段 04：第四章成功破解“草莓屋与葡萄屋”双子塔十字结构，从此态度骤变为居高临下的嘲讽。',
      '阶段 05：第五章以自身性命与绝对幸运为筹码，完成弹丸史上最惊心动魄的第五章诡计。'
    ],
    favoriteGifts: ['破碎的怀表', '四叶草标本', '绝对希望论手稿'],
    trialRebuttal: {
      statement: '这起案件很明显是狛枝凪斗因绝望而独自完成的折磨式自杀！',
      weakPoint: '独自完成的折磨式自杀',
      truthBullet: '混入毒气的灭火弹',
      counterQuote: '你错了！狛枝利用自己的“超高校级幸运”，让真正的叛徒在不知情中投出了那颗致命灭火弹！'
    }
  },
  {
    id: 'chiaki',
    rosterNo: 'NO.03',
    nameCn: '七海 千秋',
    nameJp: '七海 千秋',
    nameEn: 'Chiaki Nanami',
    talentCn: '超高校级的「游戏玩家」',
    talentEn: 'Ultimate Gamer',
    portrait: '/assets/chars/chiaki.jpg',
    featuredCg: '/assets/cg/cg_13.jpg',
    themeColor: '#F472B6',
    hairColor: '#C4A6B0',
    outfitColor: '#2B3A42',
    gender: '女',
    birthday: '3月14日',
    height: '160 cm',
    weight: '46 kg',
    chest: '88 cm',
    bloodType: 'O型',
    likes: '所有类型的电子游戏（无论好坏）',
    dislikes: '闹钟',
    cv: '花泽香菜',
    fateStatus: 'blackened',
    fateLabel: '第5章 处刑（未来机关监视者AI）',
    chapterTag: '第2章 / 第5章 / 第6章核心',
    magazinePage: 16,
    stats: { logic: 97, mentality: 94, action: 72, luck: 78, empathy: 100 },
    quote: '只要还有可能性，就绝对不能放弃通关……我想相信大家，就算只是个AI……偶觉得。',
    quoteJp: '可能性がゼロじゃないなら、諦めるわけにはいかないよ…たぶんね。',
    editorialBio:
      '总是睡眼惺忪、戴着小精灵发夹与猫咪兜帽的少女。无论格斗、解谜还是被称作“粪作”的复古街机都能完美通关。在学级裁判中始终是日向创最可靠的推理搭档。其真实身份为未来机关与新世界程序根据77期生共同记忆创造的“监视者AI”，在第五章为了拯救全员免于全灭而主动承认自己是“叛徒”。',
    hopeShards: [
      '阶段 01：在沙滩海之家与游戏机旁打瞌睡，邀请日向创一起联机体验复古掌机。',
      '阶段 02：第二章主动通关《黄昏症候群杀人事件》，协助日向理清五名女生的对应关系。',
      '阶段 03：分享自己对游戏攻略的看法：“过程比单纯达成结局更重要”。',
      '阶段 04：在第五章法庭上温柔揭露自己的真实笔记与未来机关AI身份，全员含泪道别。',
      '阶段 05：第六章终局在崩坏的意识空间再度现身，引导日向创打破非黑即白的死局。'
    ],
    favoriteGifts: ['复古掌上游戏机', '加拉加飞船发夹', '高纯度能量果冻'],
    trialRebuttal: {
      statement: '叛徒的日记本上写满了连明天将发生什么都知道的预言记录！',
      weakPoint: '明天将发生什么都知道',
      truthBullet: '七海千秋的黑白美日志',
      counterQuote: '因为那是未来机关监视员的工作记录……对吧，七海？'
    }
  },
  {
    id: 'byakuya',
    rosterNo: 'NO.04',
    nameCn: '十神 白夜（欺诈师）',
    nameJp: '十神 白夜（詐欺師）',
    nameEn: 'Ultimate Imposter',
    talentCn: '超高校级的「欺诈师」',
    talentEn: 'Ultimate Imposter',
    portrait: '/assets/chars/byakuya.jpg',
    featuredCg: '/assets/cg/cg_03.jpg',
    themeColor: '#D97706',
    hairColor: '#E5C158',
    outfitColor: '#FAF8F5',
    gender: '男',
    birthday: '不明',
    height: '185 cm',
    weight: '108 kg',
    chest: '128 cm',
    bloodType: '不明',
    likes: '白米饭、肉食料理',
    dislikes: '节食、失去存在身份',
    cv: '石田彰',
    fateStatus: 'victim',
    fateLabel: '第1章 被害者（为保护全员牺牲）',
    chapterTag: '第1章 领袖担当',
    magazinePage: 17,
    stats: { logic: 89, mentality: 91, action: 88, luck: 65, empathy: 95 },
    quote: '在我作为你们领袖的期间，我发誓绝不会让任何一个人死在这座岛上！',
    quoteJp: '僕がリーダーである限り、一人の犠牲者も出させない！',
    editorialBio:
      '以第一代《弹丸论破》中“超高校级的贵公子·十神白夜”之名登场的微胖少年。与本尊冷酷傲慢的性格截然不同，他具有强烈的责任感与牺牲精神。为了防止第一起杀人事件发生，他主动举办搜身宴会并佩戴夜视镜警戒，在停电瞬间发现长桌下伸向狛枝的铁签，挺身扑救而成为全作第一位牺牲者。',
    hopeShards: [
      '阶段 01：自发宣布担任16名学生的修学旅行领袖，严密排查全岛潜在危险。',
      '阶段 02：在餐厅展现出惊人的食量，解釋自己需要大量热量维持高速思考与体魄。',
      '阶段 03：透露自己没有户籍、没有真名、没有家人的过去，只能靠借用他人身份存在。',
      '阶段 04：向日向创许诺，若能全员平安逃离这座岛屿，会告诉日向自己真正的秘密。',
      '阶段 05：在第一章旧馆宴会厅停电瞬间用身体挡下致命一击，至死恪守领袖誓言。'
    ],
    favoriteGifts: ['高级镀金怀表', '特大号牛排套餐券', '夜间红外护目镜'],
    trialRebuttal: {
      statement: '十神同学是在停电后乱跑才不小心撞上了凶手挥舞的凶器！',
      weakPoint: '乱跑才不小心撞上',
      truthBullet: '手提箱里的夜视镜',
      counterQuote: '绝非偶然！十神戴着夜视镜在黑暗中看到了桌下的刺杀行动，他是为了救人而主动扑向长桌下的！'
    }
  },
  {
    id: 'teruteru',
    rosterNo: 'NO.05',
    nameCn: '花村 辉辉',
    nameJp: '花村 輝々',
    nameEn: 'Teruteru Hanamura',
    talentCn: '超高校级的「厨师」',
    talentEn: 'Ultimate Cook / Chef',
    portrait: '/assets/chars/teruteru.jpg',
    featuredCg: '/assets/cg/cg_04.jpg',
    themeColor: '#DC2626',
    hairColor: '#5C3A21',
    outfitColor: '#FFFFFF',
    gender: '男',
    birthday: '9月2日',
    height: '133 cm',
    weight: '69 kg',
    chest: '88 cm',
    bloodType: 'A型',
    likes: '高级都市时尚、母亲的食堂',
    dislikes: '快餐垃圾食品',
    cv: '福山润',
    fateStatus: 'blackened',
    fateLabel: '第1章 处刑（油炸天妇罗火山）',
    chapterTag: '第1章 犯人',
    magazinePage: 18,
    stats: { logic: 76, mentality: 62, action: 84, luck: 52, empathy: 79 },
    quote: '妈妈一个人在老家的花村食堂等着我……俺怎么能一直被关在这种地方啊！！',
    quoteJp: 'おっかあが…ひとりで食堂を守ってるんだべさああああ！！',
    editorialBio:
      '自称“超高校级的主厨”以彰显都市时尚感，平时满嘴荤段子，但面对料理时却有着绝不妥协的匠人执着。在得知狛枝凪斗企图在宴会引发杀人事件后，为了阻止狛枝并尽快逃离小岛探望重病独守“花村食堂”的母亲，他利用旧馆储藏室地板缝隙从下方刺击，却误杀了挺身救人的十神，在法庭末尾飙出福冈乡音痛哭。',
    hopeShards: [
      '阶段 01：在中央岛沙滩旅馆厨房为众人准备豪华迎新料理，展现超绝厨艺。',
      '阶段 02：讲述自己出身港口小镇“花村食堂”，由单亲母亲抚养长大的真实家境。',
      '阶段 03：立志用令人幸福的美食治愈食客的疲惫，哪怕对方是挑剔的美食家。',
      '阶段 04：在黑白熊恢复部分记忆动机的诱惑下，极度担忧现实中病弱母亲的安危。',
      '阶段 05：第一章学级裁判败露后放下伪装，临刑前最挂念的仍是大家有没有好好吃饭。'
    ],
    favoriteGifts: ['特级铸铁平底锅', '秘传高汤调料包', '手绣厨师围裙'],
    trialRebuttal: {
      statement: '厨房里的带骨肉从宴会开始就一直摆在餐桌上，没有任何人动过！',
      weakPoint: '一直摆在餐桌上',
      truthBullet: '消失的铁制烤肉签',
      counterQuote: '那是不对的！藏在带骨肉内部的巨型铁制烤肉签，正是从旧馆地板缝隙向上刺穿死者的凶器！'
    }
  },
  {
    id: 'mahiru',
    rosterNo: 'NO.06',
    nameCn: '小泉 真昼',
    nameJp: '小泉 真昼',
    nameEn: 'Mahiru Koizumi',
    talentCn: '超高校级的「摄影师」',
    talentEn: 'Ultimate Photographer',
    portrait: '/assets/chars/mahiru.jpg',
    featuredCg: '/assets/cg/cg_06.jpg',
    themeColor: '#EA580C',
    hairColor: '#B91C1C',
    outfitColor: '#2F4F4F',
    gender: '女',
    birthday: '4月24日',
    height: '165 cm',
    weight: '46 kg',
    chest: '77 cm',
    bloodType: 'A型',
    likes: '一个人的旅行、抓拍笑容',
    dislikes: '不守规矩懒散的人',
    cv: '小林优',
    fateStatus: 'victim',
    fateLabel: '第2章 被害者（沙滩海之家命案）',
    chapterTag: '第1章摄影证物 / 第2章核心',
    magazinePage: 19,
    stats: { logic: 82, mentality: 84, action: 78, luck: 58, empathy: 93 },
    quote: '照片是无法撒谎的，但正因如此，摄影师才更要拍下大家发自内心的笑容呀！',
    quoteJp: '写真は嘘をつかない…だからこそ、みんなの笑顔を残したいんだ。',
    editorialBio:
      '一头鲜艳红发、脖子上永远挂着心爱单反相机的元气少女。母亲是著名战地摄影师，真昼却最喜欢拍摄伙伴们的日常笑脸。第一章她拍摄的宴会厅布景照成为锁定凶手的关键铁证；第二章在得知《黄昏症候群》旧案真相后，她试图以平等对话化解九头龙冬彦的仇恨，却在海之家惨遭杀害。',
    hopeShards: [
      '阶段 01：主动为77期生每一位同学拍摄登岛纪念照，细心整理成相册。',
      '阶段 02：照顾生活不能自理的西园寺日寄子，帮她系好复杂的和服腰带。',
      '阶段 03：向日向展示自己最得意的街头人像作品，畅谈成为战地与纪实摄影师的梦想。',
      '阶段 04：在第二章通关游戏后认出自己是当年的“D子”，决定向九头龙坦诚沟通。',
      '阶段 05：第三章西园寺用真昼生前留下的笑脸照片搭建祭坛，温暖了绝望中的众人。'
    ],
    favoriteGifts: ['复古胶片单反镜头', '银盐暗房显影液', '晴天娃娃挂件'],
    trialRebuttal: {
      statement: '小泉真昼在遇害前根本不知道九头龙冬彦为什么找她对质！',
      weakPoint: '根本不知道',
      truthBullet: '黄昏症候群通关特典照片',
      counterQuote: '她非常清楚！她手里拿着花瓶碎片照片，正是为了就当年九头龙妹妹的死与冬彦坦诚赎罪！'
    }
  },
  {
    id: 'peko',
    rosterNo: 'NO.07',
    nameCn: '边古山 佩子',
    nameJp: '辺古山 ペコ',
    nameEn: 'Peko Pekoyama',
    talentCn: '超高校级的「剑道家」',
    talentEn: 'Ultimate Swordswoman',
    portrait: '/assets/chars/peko.jpg',
    featuredCg: '/assets/cg/cg_07.jpg',
    themeColor: '#64748B',
    hairColor: '#CBD5E1',
    outfitColor: '#1E293B',
    gender: '女',
    birthday: '6月30日',
    height: '172 cm',
    weight: '51 kg',
    chest: '85 cm',
    bloodType: 'O型',
    likes: '毛茸茸的小动物（但小动物怕她）',
    dislikes: '甜食、没有命令的闲暇',
    cv: '三石琴乃',
    fateStatus: 'blackened',
    fateLabel: '第2章 处刑（暴走女剑士的悲剧）',
    chapterTag: '第2章 犯人',
    magazinePage: 20,
    stats: { logic: 87, mentality: 89, action: 99, luck: 62, empathy: 85 },
    quote: '少主……请不要露出那样的表情。我从来都不是什么人类，我只是您手握的一把剑。',
    quoteJp: '坊っちゃん…私は人間ではない。ただの、あなたの道具だ。',
    editorialBio:
      '银发扎成双麻花辫、赤瞳冷峻的剑道天才少女，连成人剑道冠军都不是她的对手。真实身份是从婴儿时期就被九头龙黑道家族收养、专门为了保护少主九头龙冬彦而培育的贴身死士。在第二章海之家，为了不让冲动的冬彦沦为杀人犯，她抢先挥棒杀害小泉真昼，并在法庭上扮作“闪亮正义”企图利用“工具论”替冬彦顶罪。',
    hopeShards: [
      '阶段 01：独自在沙滩练习竹刀挥砍千次，向日向请教如何才能露出自然的微笑。',
      '阶段 02：羞涩地坦白自己非常想摸毛茸茸的小动物，却因为杀气太重总把动物吓跑。',
      '阶段 03：在第一岛屿泳池边全天候暗中护卫孤立全员的九头龙冬彦。',
      '阶段 04：第二章以竹刀袋作踏脚石、用瓶装水清洗血迹，上演密室逃脱诡计。',
      '阶段 05：在处刑场为了保护冲入刑场的冬彦而误伤其右眼，紧抱冬彦含泪谢幕。'
    ],
    favoriteGifts: ['名匠手作竹刀袋', '黑道仁义护身符', '软绵绵柴犬玩偶'],
    trialRebuttal: {
      statement: '我是连续杀人鬼“闪亮正义”！正义是不需要任何犯案动机的！',
      weakPoint: '不需要任何犯案动机',
      truthBullet: '九头龙冬彦的复仇信封',
      counterQuote: '别再演戏了，边古山！你之所以假扮“闪亮正义”，全是为了掩护真正的动机持有者——九头龙冬彦！'
    }
  },
  {
    id: 'fuyuhiko',
    rosterNo: 'NO.08',
    nameCn: '九头龙 冬彦',
    nameJp: '九頭龍 冬彦',
    nameEn: 'Fuyuhiko Kuzuryu',
    talentCn: '超高校级的「黑道」',
    talentEn: 'Ultimate Yakuza',
    portrait: '/assets/chars/fuyuhiko.jpg',
    featuredCg: '/assets/cg/cg_08.jpg',
    themeColor: '#CA8A04',
    hairColor: '#FDE047',
    outfitColor: '#18181B',
    gender: '男',
    birthday: '8月16日',
    height: '157 cm',
    weight: '43 kg',
    chest: '73 cm',
    bloodType: 'AB型',
    likes: '油炸点心（花林糖）、极道仁义',
    dislikes: '牛奶、被当成小孩子看待',
    cv: '岸尾大辅',
    fateStatus: 'survivor',
    fateLabel: '终章生还 · 独眼极道继承人',
    chapterTag: '第2章觉醒 / 全章核心伙伴',
    magazinePage: 21,
    stats: { logic: 86, mentality: 96, action: 88, luck: 74, empathy: 90 },
    quote: '别开玩笑了！我从来不想要什么工具……我想要的，自始至终就只有你啊，佩子！！',
    quoteJp: 'ふざけんなよ…俺は道具なんていらねえ！俺が欲しかったのは…お前だけだ、ペコ！！',
    editorialBio:
      '日本最大暴力团“九头龙组”的嫡系少主。因长着一张娃娃脸且身材矮小，起初极度抗拒与他人合作，言行暴躁孤僻。然而在第二章亲眼目睹青梅竹马边古山佩子为救自己而赴死、并因此失去右眼后，冬彦彻底蜕变——他切腹谢罪获得西园寺与众人的原谅，成为全队最重情重义、最值得信赖的硬汉伙伴。',
    hopeShards: [
      '阶段 01：拒绝参加迎新派对，警告日向创不要随便靠近极道中人。',
      '阶段 02：第二章学级裁判痛哭流涕否定“工具论”，冲入黑白熊处刑场试图救出佩子。',
      '阶段 03：第三章从医院康复后戴上黑眼罩，当众切腹向西园寺与小泉照片诚心谢罪。',
      '阶段 04：向日向讲述自己与佩子从小一起长大、想在继承组长后还佩子自由的真心。',
      '阶段 05：在第四至第六章始终坚定站在日向创身旁，以极道仁义守护每一个同伴。'
    ],
    favoriteGifts: ['冲绳黑糖花林糖', '龙纹刺绣眼罩', '纯金极道代纹徽章'],
    trialRebuttal: {
      statement: '如果边古山只是九头龙操纵的杀人工具，那真正的犯人岂不是九头龙吗？',
      weakPoint: '真正的犯人岂不是九头龙',
      truthBullet: '边古山自主行动的证明',
      counterQuote: '九头龙当时已经放下了球棒准备离开，是边古山出于个人意志挥下了致命一击！'
    }
  },
  {
    id: 'ibuki',
    rosterNo: 'NO.09',
    nameCn: '澪田 唯吹',
    nameJp: '澪田 唯吹',
    nameEn: 'Ibuki Mioda',
    talentCn: '超高校级的「轻音部」',
    talentEn: 'Ultimate Musician',
    portrait: '/assets/chars/ibuki.jpg',
    featuredCg: '/assets/cg/cg_09.jpg',
    themeColor: '#EC4899',
    hairColor: '#1E1B4B',
    outfitColor: '#F43F5E',
    gender: '女',
    birthday: '11月27日',
    height: '164 cm',
    weight: '42 kg',
    chest: '76 cm',
    bloodType: 'AB型',
    likes: '弹空气吉他、午睡、重金属嘶吼',
    dislikes: '无聊、枯燥的说教',
    cv: '小清水亚美',
    fateStatus: 'victim',
    fateLabel: '第3章 被害者（绝望病音乐厅命案）',
    chapterTag: '第1章超听力证人 / 第3章核心',
    magazinePage: 22,
    stats: { logic: 70, mentality: 88, action: 92, luck: 64, empathy: 94 },
    quote: '早上好、中午好、晚上好——！唯吹今天也要用灵魂的嘶吼把乌云通通轰飞啰！！',
    quoteJp: 'おはこんばんちはー！イブキの魂のシャウトで暗雲なんて吹き飛ばすっすよー！',
    editorialBio:
      '原超人气少女轻音组合的主音吉他手，因“音乐理念不合”单飞后走上硬核死亡重金属之路。顶着标志性的双角发型与视觉系穿孔装饰，性格天真烂漫、思维跳跃，拥有在黑暗中也能分辨所有人声音方位的超绝听力。第三章不幸感染“轻信病（别人说什么都照做）”的绝望病，在音乐厅惨遭杀害。',
    hopeShards: [
      '阶段 01：第一章停电时凭借超常听力准确记住旧馆内所有人的呼喊内容。',
      '阶段 02：在第三岛屿Titty Typhoon摇滚舞台举办个人演出，试图为阴郁的同伴打气。',
      '阶段 03：拉着日向创一起进行毫无意义的“放空发呆训练”，传递活在当下的快乐。',
      '阶段 04：第三章感染绝望病后丧失自我判断力，被凶手从医院引诱至音乐厅。',
      '阶段 05：在岛屿模式中与日向创合奏二重唱，将重金属与温柔旋律融为一体。'
    ],
    favoriteGifts: ['定制骷髅电吉他拨片', '霓虹视觉系铆钉手环', '高保真监听耳机'],
    trialRebuttal: {
      statement: '我们在医院监控大屏幕上亲眼看到唯吹自己爬上阶梯上吊自杀！',
      weakPoint: '亲眼看到唯吹',
      truthBullet: '医院会议室的麻布袋与烛台',
      counterQuote: '那是不对的！监控录像里的根本不是音乐厅现场，而是凶手在医院会议室伪造的调包直播！'
    }
  },
  {
    id: 'hiyoko',
    rosterNo: 'NO.10',
    nameCn: '西园寺 日寄子',
    nameJp: '西園寺 日寄子',
    nameEn: 'Hiyoko Saionji',
    talentCn: '超高校级的「日本舞蹈家」',
    talentEn: 'Ultimate Traditional Dancer',
    portrait: '/assets/chars/hiyoko.jpg',
    featuredCg: '/assets/cg/cg_10.jpg',
    themeColor: '#F59E0B',
    hairColor: '#FDE68A',
    outfitColor: '#FB923C',
    gender: '女',
    birthday: '3月9日',
    height: '130 cm',
    weight: '31 kg',
    chest: '64 cm',
    bloodType: 'B型',
    likes: '小熊软糖、已故的外公、小泉真昼',
    dislikes: '酸的食物、虚伪的大人',
    cv: '三森铃子',
    fateStatus: 'victim',
    fateLabel: '第3章 被害者（目击杀人现场遇害）',
    chapterTag: '第2章嫁祸目标 / 第3章被害',
    magazinePage: 23,
    stats: { logic: 74, mentality: 72, action: 68, luck: 50, empathy: 75 },
    quote: '真昼姐教会了我怎么面对大家……所以我绝不会再逃避，我要连真昼的份一起跳下去！',
    quoteJp: '真昼お姉ちゃんが教えてくれたんだ…だからもう逃げないよ！',
    editorialBio:
      '背负日本传统舞踊名门“西园寺家”沉重期许的幼女体型少女。由于自幼遭受家族内部嫉妒与暗算（甚至有人在她的舞台鞋里放针），养成了用极端毒舌和残忍恶作剧自我防卫的扭曲性格。唯有面对温柔帮她系和服腰带的小泉真昼时才会敞开心扉。第三章为学会独立而在音乐厅对着全身镜系腰带时，意外撞见杀人现场而被灭口。',
    hopeShards: [
      '阶段 01：初登场时一边天真微笑一边说出毫不留情的毒舌吐槽，令全员汗颜。',
      '阶段 02：与小泉真昼结下深厚姐妹情谊，两人一起去沙滩海之家淋浴。',
      '阶段 03：第二章被边古山用安眠药迷晕藏入冲浪板袋，险些被嫁祸为凶手。',
      '阶段 04：第三章在汽车旅馆为真昼搭建照片祭坛，并在九头龙切腹后含泪选择原谅。',
      '阶段 05：为了不辜负真昼的教导，独自前往有大镜子的音乐厅练习自己系和服腰带。'
    ],
    favoriteGifts: ['五彩进口小熊软糖', '金箔京扇子', '传统名门发簪'],
    trialRebuttal: {
      statement: '西园寺日寄子为什么会半夜独自出现在第三岛屿的音乐厅？',
      weakPoint: '为什么会半夜独自出现',
      truthBullet: '音乐厅失踪的全身镜',
      counterQuote: '因为汽车旅馆没有全身镜！西园寺是为了靠自己的力量系好和服腰带，才去了有大镜子的音乐厅！'
    }
  },
  {
    id: 'mikan',
    rosterNo: 'NO.11',
    nameCn: '罪木 蜜柑',
    nameJp: '罪木 蜜柑',
    nameEn: 'Mikan Tsumiki',
    talentCn: '超高校级的「保健委员」',
    talentEn: 'Ultimate Nurse',
    portrait: '/assets/chars/mikan.jpg',
    featuredCg: '/assets/cg/cg_11.jpg',
    themeColor: '#A855F7',
    hairColor: '#4C1D95',
    outfitColor: '#FCE7F3',
    gender: '女',
    birthday: '5月12日',
    height: '165 cm',
    weight: '57 kg',
    chest: '89 cm',
    bloodType: 'A型',
    likes: '消毒水气味、酒精棉球、被需要',
    dislikes: '体积庞大的东西、被无视',
    cv: '茅野爱衣',
    fateStatus: 'blackened',
    fateLabel: '第3章 处刑（回溯绝望记忆的狂爱）',
    chapterTag: '第1-2章验尸官 / 第3章犯人',
    magazinePage: 24,
    stats: { logic: 85, mentality: 55, action: 80, luck: 54, empathy: 82 },
    quote: '原谅我原谅我原谅我……！为了我最深爱的“那个人”，请你们去死好不好呀？！',
    quoteJp: '許して許して許してぇ…！あの方のために、死んでくださぁい！！',
    editorialBio:
      '浑身缠着绷带、发型参差不齐的保健委员。因长期遭受校园霸凌与家庭虐待，形成了极度自卑讨好却又渴望掌控弱者（病人）的心理机制。在前两章的学级裁判中，她专业的尸体检验报告是全队破案的基石。然而在第三章照料绝望病患者时，她不幸感染了“回忆病”，恢复了作为“超高校级的绝望”迷恋江之岛盾子的全部记忆，犯下双尸命案。',
    hopeShards: [
      '阶段 01：动不动就以极其不可思议的姿势平地摔倒，不停哭着向全员道歉。',
      '阶段 02：第一章与第二章提供精准的尸检情报，展现出令人钦佩的医学专业素养。',
      '阶段 03：在自由行动中向日向创倾诉“比起被人无视，哪怕被人欺负也更好”的创伤。',
      '阶段 04：第三章在泰兹医院不眠不休照料狛枝、唯吹与终里，却因此被传染绝望病。',
      '阶段 05：第三章法庭后半段彻底颜艺爆发，以狂热的“绝望之爱”震撼全场。'
    ],
    favoriteGifts: ['医用无菌绷带卷', '急救听诊器', '草莓味营养点滴袋'],
    trialRebuttal: {
      statement: '我一直都在日向同学身边睡觉，根本没有时间从医院赶去音乐厅开空调调节尸体温度！',
      weakPoint: '赶去音乐厅开空调',
      truthBullet: '泰兹医院手术室的高温空调',
      counterQuote: '你根本不需要去音乐厅！因为唯吹和西园寺的遗体当时就藏在医院里，你只是在医院打开了暖气！'
    }
  },
  {
    id: 'nekomaru',
    rosterNo: 'NO.12',
    nameCn: '贰大 猫丸',
    nameJp: '弐大 猫丸',
    nameEn: 'Nekomaru Nidai',
    talentCn: '超高校级的「经纪人」',
    talentEn: 'Ultimate Team Manager',
    portrait: '/assets/chars/nekomaru.jpg',
    featuredCg: '/assets/cg/cg_12.jpg',
    themeColor: '#2563EB',
    hairColor: '#1E293B',
    outfitColor: '#EFF6FF',
    gender: '男',
    birthday: '2月22日',
    height: '198 cm',
    weight: '122 kg',
    chest: '122 cm',
    bloodType: 'A型',
    likes: '热血青春、柔道服、畅快排泄',
    dislikes: '懒惰放弃、身体束缚',
    cv: '安元洋贵',
    fateStatus: 'victim',
    fateLabel: '第4章 被害者（机械贰大豪杰决斗）',
    chapterTag: '第3章挡炮重伤 / 第4章核心',
    magazinePage: 25,
    stats: { logic: 78, mentality: 98, action: 97, luck: 66, empathy: 96 },
    quote: '只要是为了伙伴拼尽全力而死，那就没什么好后悔的！拿出骨气活下去吧！！',
    quoteJp: '仲間のために全力で戦って散るなら悔いはねえ！気合入れて生きろォ！！',
    editorialBio:
      '身高近两米、声如洪钟、脚踩木屐并缠着铁链的豪迈硬汉。无论多么三流的垫底运动社团，只要经他担任经理指点都能蜕变为全国冠军。他自己曾因先天性心脏病在病房度过少年时代，因此比任何人都珍惜燃烧生命的热血。第三章为保护终里赤音被黑白熊火箭筒轰成重伤，被改造为“机械贰大”；第四章在惊奇屋与田中眼蛇梦展开堂堂正正的生死决斗。',
    hopeShards: [
      '阶段 01：用震碎厕所墙壁的气势鼓舞士气，并传授独门“秘传按摩术”。',
      '阶段 02：与终里赤音成为最佳师徒拍档，时刻提醒冲动的赤音冷静观察局势。',
      '阶段 03：第三章海滩夜晚挺身用血肉之躯挡下黑白熊轰向赤音的致命导弹。',
      '阶段 04：化身拥有红茶冲泡功能、眼神照明与休眠按钮的“机械贰大（Mecha-maru）”归队。',
      '阶段 05：第四章在全员断粮绝境下，为了不让同伴饿死而与田中进行赌上性命的武士对决。'
    ],
    favoriteGifts: ['特制黄金哑铃', '强效肠胃整肠药', '全国大赛优胜锦旗'],
    trialRebuttal: {
      statement: '如果机械贰大是从葡萄塔4楼坠落摔碎的，那凶手当时一定也在4楼！',
      weakPoint: '凶手当时一定也在4楼',
      truthBullet: '脖子上绑着的钢丝绳与门把手',
      counterQuote: '那是不对的！凶手利用惊奇屋“草莓塔与葡萄塔实为上下同一栋楼”的构造，把贰大吊在门把手上制造了延时坠落！'
    }
  },
  {
    id: 'gundham',
    rosterNo: 'NO.13',
    nameCn: '田中 眼蛇梦',
    nameJp: '田中 眼蛇夢',
    nameEn: 'Gundham Tanaka',
    talentCn: '超高校级的「饲养员」',
    talentEn: 'Ultimate Breeder',
    portrait: '/assets/chars/gundham.jpg',
    featuredCg: '/assets/cg/cg_13.jpg',
    themeColor: '#7C3AED',
    hairColor: '#111827',
    outfitColor: '#312E81',
    gender: '男',
    birthday: '12月14日',
    height: '182 cm',
    weight: '74 kg',
    chest: '93 cm',
    bloodType: 'B型',
    likes: '破坏神暗黑四天王、一切动物',
    dislikes: '无视生命尊严的消极等死',
    cv: '杉田智和',
    fateStatus: 'blackened',
    fateLabel: '第4章 处刑（赌上生命尊严的魔道士）',
    chapterTag: '第4章 犯人（英雄式赴死）',
    magazinePage: 26,
    stats: { logic: 91, mentality: 99, action: 93, luck: 70, empathy: 98 },
    quote: '放弃求生、坐以待毙，那是对生命最大的亵渎！记住吾之名——冰之魔王田中眼蛇梦！！',
    quoteJp: '生きることを諦めるな！それこそが生命への最大の冒涜だ！！',
    editorialBio:
      '自称“受诅咒的冰之魔王”，围巾里随时藏着四只被称作“破坏神暗黑四天王”的可爱仓鼠（Sonia、Cham-P、Maga-Z、Jum-P）。虽然满口中二魔界黑话，实则是能够与任何濒危珍稀动物心灵相通的温柔天才，深受王女索妮亚的倾慕。在第四章全员被困惊奇屋绝食五天濒死之际，他践行“求生才是对生命最高敬意”的哲学，与机械贰大正面决胜，并在处刑前画下守护四只仓鼠的魔法阵。',
    hopeShards: [
      '阶段 01：第一章钻进旧馆地板下帮日向找回丢失的耳钉，与“暗黑四天王”默契配合。',
      '阶段 02：与索妮亚·内瓦曼就超自然黑魔法与动物保护展开奇妙的灵魂共鸣。',
      '阶段 03：阐述自己为何用“魔界毒气”隐喻孤独——害怕自己的靠近会伤害普通人类。',
      '阶段 04：第四章破解惊奇屋终极死亡游戏，在不连累任何同伴的前提下与贰大决一死战。',
      '阶段 05：在兽群奔腾的处刑场上将四只仓鼠轻轻安放在岩石上，张开双臂迎接天堂之光。'
    ],
    favoriteGifts: ['特级有机葵花籽', '深渊魔导银耳环', '动物百科全书孤本'],
    trialRebuttal: {
      statement: '田中眼蛇梦一直待在豪华隔音房里，根本没听到早晨的太极拳闹钟声！',
      weakPoint: '根本没听到早晨的太极拳闹钟',
      truthBullet: '豪华房不受隔音限制的缺陷',
      counterQuote: '正相反！只有豪华房是没有隔音的！田中脱口而出“没听到闹钟”，恰恰证明他当时根本不在房间里！'
    }
  },
  {
    id: 'kazuichi',
    rosterNo: 'NO.14',
    nameCn: '左右田 和一',
    nameJp: '左右田 和一',
    nameEn: 'Kazuichi Soda',
    talentCn: '超高校级的「机械师」',
    talentEn: 'Ultimate Mechanic',
    portrait: '/assets/chars/kazuichi.jpg',
    featuredCg: '/assets/cg/cg_02.jpg',
    themeColor: '#EAB308',
    hairColor: '#EC4899',
    outfitColor: '#CA8A04',
    gender: '男',
    birthday: '6月29日',
    height: '172 cm',
    weight: '64 kg',
    chest: '86 cm',
    bloodType: 'A型',
    likes: '索妮亚小姐、拆装机械、可乐',
    dislikes: '晕车晕船、无糖食品',
    cv: '细谷佳正',
    fateStatus: 'survivor',
    fateLabel: '终章生还 · 绝境机械工匠',
    chapterTag: '全章节生还伙伴',
    magazinePage: 27,
    stats: { logic: 83, mentality: 68, action: 86, luck: 75, empathy: 84 },
    quote: '只要是有螺丝和引擎的东西，就没有本大爷修不好的！……所、所以索妮亚小姐能看我一眼吗？！',
    quoteJp: 'エンジンがついてるもんなら何でも直してみせるぜ！…ソニアさぁん！',
    editorialBio:
      '身穿荧光黄连体工装服、头戴深色针织帽、满口鲨鱼尖牙的机械天才。外表像是桀骜不驯的不良少年，实际上胆小怕事、极度纯情，对索妮亚王女一见钟情却屡屡沦为搞笑役。尽管常常因为多疑而动摇，他的机械技术却在关键时刻屡立奇功——第三章制造无线对讲机、第四章修复惊奇屋电梯并解剖机械贰大、还贴心制作了迷你机械贰大陪伴赤音。',
    hopeShards: [
      '阶段 01：初登岛时与日向创迅速混熟，成为日向最具生活气息的同龄损友。',
      '阶段 02：第二章邀请日向一起去海边看女生泳装，结果阴差阳错卷入案件调查。',
      '阶段 03：讲述中学时代被朋友背叛后染成粉发、磨尖牙齿伪装成不良少年的心酸往事。',
      '阶段 04：第三章彻夜改造医院通讯设备，第四章亲手检修电梯与机械贰大残骸。',
      '阶段 05：与日向、冬彦、索妮亚、赤音共同撑过全部六次学级裁判，迎来黎明。'
    ],
    favoriteGifts: ['精密扭力扳手套装', '黄金V8引擎模型', '冰镇经典可乐箱'],
    trialRebuttal: {
      statement: '惊奇屋连接两座塔的电梯完全坏死了，除了电梯根本没有别的通道！',
      weakPoint: '除了电梯根本没有别的通道',
      truthBullet: '八角馆与双子塔重叠平面图',
      counterQuote: '电梯没有坏，而是被关停了！而且草莓塔3楼的大门正上方，连接着葡萄塔的1楼大厅！'
    }
  },
  {
    id: 'sonia',
    rosterNo: 'NO.15',
    nameCn: '索妮亚·内瓦曼',
    nameJp: 'ソニア・ネヴァーマインド',
    nameEn: 'Sonia Nevermind',
    talentCn: '超高校级的「王女」',
    talentEn: 'Ultimate Princess',
    portrait: '/assets/chars/sonia.jpg',
    featuredCg: '/assets/cg/cg_10.jpg',
    themeColor: '#0D9488',
    hairColor: '#FDE047',
    outfitColor: '#065F46',
    gender: '女',
    birthday: '10月13日',
    height: '174 cm',
    weight: '50 kg',
    chest: '83 cm',
    bloodType: 'A型',
    likes: '日本秋叶原文化、连环杀手研究、神秘学',
    dislikes: '纳豆、空洞的外交辞令',
    cv: '荒川美穗',
    fateStatus: 'survivor',
    fateLabel: '终章生还 · 诺沃塞利克王储',
    chapterTag: '全章节生还（最高赞同率）',
    magazinePage: 28,
    stats: { logic: 88, mentality: 93, action: 84, luck: 82, empathy: 92 },
    quote: '在我的国家有一句古老的谚语——绝望越深沉的夜晚，黎明的星辰就越发璀璨！',
    quoteJp: 'わたくしの国にはこのような諺がございます…決して希望を捨ててはなりませんわ！',
    editorialBio:
      '来自欧洲袖珍强国“诺沃塞利克王国”的真正王女。金发碧眼、仪态端庄，却因为通过日本动漫与网络论坛学日语，冷不防会一脸圣洁地说出过激网络流行语。她不仅精通多国语言与重型军火操作（会开坦克与发射火箭筒），还是全作学级裁判中给出最多“蓝色赞同言弹”的角色，第四章为田中眼蛇梦辩护时的悲泣令无数玩家动容。',
    hopeShards: [
      '阶段 01：用高贵典雅的敬语夾杂秋叶原御宅黑话，令全员对其国家产生无尽好奇。',
      '阶段 02：第二章凭借对全球连环杀人犯的狂热知识，一眼识破边古山并非真正的“闪亮正义”。',
      '阶段 03：第四章与田中眼蛇梦共同照顾四只仓鼠，在田中处刑后继承照顾暗黑四天王的职责。',
      '阶段 04：第五章亲自前往军事基地调查炸弹，展现出临危不惧的王室统帅风范。',
      '阶段 05：在整部作品中共有5次发言成为日向创“赞同（Agree）”突破口，位居全员第一。'
    ],
    favoriteGifts: ['古董黑魔法羊皮卷', '诺沃塞利克皇家红茶', '战术防弹胸针'],
    trialRebuttal: {
      statement: '真正的“闪亮正义”在犯案后都会用西班牙语吟诵正义宣言！',
      weakPoint: '用西班牙语吟诵正义宣言',
      truthBullet: '索妮亚的犯罪学证言',
      counterQuote: '我完全赞同索妮亚小姐！真正的闪亮正义根本不是日本人，边古山只是在模仿都市传说！'
    }
  },
  {
    id: 'akane',
    rosterNo: 'NO.16',
    nameCn: '终里 赤音',
    nameJp: '終里 赤音',
    nameEn: 'Akane Owari',
    talentCn: '超高校级的「体操部」',
    talentEn: 'Ultimate Gymnast',
    portrait: '/assets/chars/akane.jpg',
    featuredCg: '/assets/cg/cg_12.jpg',
    themeColor: '#B91C1C',
    hairColor: '#78350F',
    outfitColor: '#FFFFFF',
    gender: '女',
    birthday: '7月15日',
    height: '176 cm',
    weight: '56 kg',
    chest: '93 cm',
    bloodType: 'B型',
    likes: '打架过招、带骨大肉块',
    dislikes: '需要动脑筋的复杂计算',
    cv: '朴璐美',
    fateStatus: 'survivor',
    fateLabel: '终章生还 · 野性直觉斗士',
    chapterTag: '第3-4章核心 / 全章生还',
    magazinePage: 29,
    stats: { logic: 65, mentality: 90, action: 100, luck: 77, empathy: 89 },
    quote: '我的肚子和直觉正在咕咕叫啊！不管对手是什么怪物，只要揍飞它就能活下去吧！',
    quoteJp: 'あーしの勘が言ってるんだ！どんな化け物だろうと、ぶっ飛ばせば生き残れるってな！',
    editorialBio:
      '拥有健康小麦色肌肤与惊人身体柔韧度的体操少女。在贫民窟大家庭中独自抚养七个年幼弟妹长大，将体操比赛奖金视为养家糊口的生存手段。虽然记不住大家的名字、推理全靠“肚子里的直觉”，但在贰大猫丸两度以生命教导她何为守护之后，赤音将迷你机械贰大珍藏在身边，成长为永不屈服的坚韧战士。',
    hopeShards: [
      '阶段 01：在自助餐厅展现与十神不相上下的暴食能力，随时随地邀人切磋格斗。',
      '阶段 02：与贰大猫丸建立起超越教练与选手的深厚师徒羁绊。',
      '阶段 03：第三章因鲁莽挑战黑白熊导致贰大重伤，陷入深深自责并感染绝望病（懦弱病）。',
      '阶段 04：第四章凭野性直觉第一个察觉惊奇屋的结构异样，含泪告别化作碎片的机械贰大。',
      '阶段 05：在第五、六章绝境中始终保持高昂斗志，与其余四位生还者共同突破新世界程序。'
    ],
    favoriteGifts: ['特大号炙烤战斧牛排', '竞技体操镁粉袋', '发条迷你机械贰大'],
    trialRebuttal: {
      statement: '我的直觉告诉我，草莓屋和葡萄屋之间肯定藏着某种看不见的机关！',
      weakPoint: '草莓屋和葡萄屋之间',
      truthBullet: '终里赤音的野性直觉',
      counterQuote: '我赞同赤音的直觉！这两栋建筑根本不是左右并排，而是上下垂直叠在一起的同一座塔！'
    }
  },
  {
    id: 'monokuma',
    rosterNo: 'NO.17',
    nameCn: '黑白熊',
    nameJp: 'モノクマ',
    nameEn: 'Monokuma',
    talentCn: '希望峰学园「自称学园长」',
    talentEn: 'Headmaster of Hope’s Peak',
    portrait: '/assets/chars/monokuma.jpg',
    featuredCg: '/assets/cg/header.jpg',
    themeColor: '#E11D48',
    hairColor: '#111111',
    outfitColor: '#FFFFFF',
    gender: '不明',
    birthday: '不明',
    height: '75 cm',
    weight: '15 kg',
    chest: '65 cm',
    bloodType: '不明',
    likes: '绝望、惩罚时间（处刑）、猎奇动机',
    dislikes: '和谐友爱的修学旅行、兔美',
    cv: '大山羡代',
    fateStatus: 'mascot',
    fateLabel: '江之岛盾子AI病毒化身',
    chapterTag: '全章节黑幕主持',
    magazinePage: 5,
    stats: { logic: 98, mentality: 100, action: 95, luck: 90, empathy: 0 },
    quote: '噗噗噗……在阳光明媚的南国小岛上来一场充满血腥味的自相残杀修学旅行吧！！',
    quoteJp: 'うぷぷぷ…常夏の島でコロシアイ修学旅行の始まりだよぉ！！',
    editorialBio:
      '左白右黑、左眼慈祥右眼猩红的诡异玩偶熊。在兔美主持的和平修学旅行刚开始时强行闯入贾巴沃克岛，夺走兔美的魔法棒并将其改造成“黑白美”，把收集希望碎片的修学旅行篡改为“只有杀人并瞒过全员才能离岛”的死亡游戏。其本质是侵入“新世界程序”的江之岛盾子AI病毒。',
    hopeShards: [
      '阶段 01：空降贾巴沃克中央公园，一举击溃兔美并炸毁中央岛的十神雕像外层。',
      '阶段 02：在全岛五个岛屿布置黑白熊档案、动机机关（遗忘记忆、黄昏症候群、绝望病、饥饿惊奇屋）。',
      '阶段 03：主持六场高规格学级裁判，并在小剧场（Monokuma Theater）发表荒诞哲学独白。',
      '阶段 04：第六章揭露“全员毕业即让江之岛盾子意识接管77期生现实肉体”的终极阴谋。',
      '阶段 05：在强制关机程序启动后，与巨型江之岛盾子AI一同被黑白美徹底消灭。'
    ],
    favoriteGifts: ['处刑按钮遥控器', '黑白熊特制蜂蜜松饼', '绝望病毒U盘'],
    trialRebuttal: {
      statement: '无论是选择毕业还是留级，你们都已经落入了绝望的死胡同噗噗噗！',
      weakPoint: '落入了绝望的死胡同',
      truthBullet: '未来（MIRAI）',
      counterQuote: '那是不对的！我们要选择第三条路——带着在这里经历的一切，回到现实世界亲手创造未来！'
    }
  },
  {
    id: 'monomi',
    rosterNo: 'NO.18',
    nameCn: '兔美 / 黑白美',
    nameJp: 'ウサミ / モノミ',
    nameEn: 'Usami / Monomi',
    talentCn: '修学旅行「带队指导老师」',
    talentEn: 'Magical Girl Miracle ★ Usami',
    portrait: '/assets/chars/monomi.jpg',
    featuredCg: '/assets/cg/cg_11.jpg',
    themeColor: '#EC4899',
    hairColor: '#FBCFE8',
    outfitColor: '#FDF2F8',
    gender: '女',
    birthday: '不明',
    height: '55 cm',
    weight: '10 kg',
    chest: '52 cm',
    bloodType: '不明',
    likes: 'Love & Peace、守护学生、魔法棒',
    dislikes: '黑白熊、自相残杀、暴力',
    cv: '贵家堂子',
    fateStatus: 'mascot',
    fateLabel: '新世界程序导航AI（与千秋同源）',
    chapterTag: '全章节守护老师',
    magazinePage: 5,
    stats: { logic: 84, mentality: 95, action: 88, luck: 72, empathy: 100 },
    quote: '就算被大家怀疑、被当成滑稽的玩偶……老师我也一定要守护大家到最后一刻啰！',
    quoteJp: 'たとえ疑われても…あちしは先生の務めとして、みんなを最後まで守るでちゅ！',
    editorialBio:
      '原本是由未来机关开发的“更生程序（新世界程序）”领航员——魔法少女奇迹★兔美，旨在通过阳光海岛生活洗刷77期生脑海中的绝望残党创伤。被黑白熊夺走魔法棒并染成半粉半白的“黑白美”后，虽然屡遭学生猜忌与黑白熊殴打，却依然独自击退各岛黑白熊猛兽，并在第五、六章与妹妹七海千秋一同用生命贯彻了老师的职责。',
    hopeShards: [
      '阶段 01：以纯白可爱的兔美形态带领16名学生开启“心动的修学旅行”，发放电子学生手册。',
      '阶段 02：即使失去魔法棒沦为黑白美，仍坚持单枪匹马消灭封锁岛屿的五头黑白熊巨兽。',
      '阶段 03：在第四章与第五章多次提醒日向创注意新世界程序的底层异常。',
      '阶段 04：第五章与七海千秋一起站在处刑台上，坦然接受俄罗斯方块处刑。',
      '阶段 05：第六章终局凭最后的AI备份数据具现化魔法棒，一举粉碎巨型江之岛盾子病毒。'
    ],
    favoriteGifts: ['奇迹★星光魔法棒', '粉白条纹纸尿裤玩偶', '希望碎片收集瓶'],
    trialRebuttal: {
      statement: '黑白美从一开始就是和黑白熊穿一条裤子的幕后黑手帮凶！',
      weakPoint: '幕后黑手帮凶',
      truthBullet: '兔美的修学旅行初始设定',
      counterQuote: '那是不对的！兔美从头到尾都在对抗黑白熊病毒，她和七海一样是为了保护我们而诞生的程序！'
    }
  }
];
