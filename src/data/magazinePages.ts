export type MagazineSectionId = 'cover' | 'island' | 'cast' | 'trials' | 'systems' | 'staff';

export type PageLayoutType =
  | 'cover'
  | 'toc'
  | 'feature-spread'
  | 'island-atlas'
  | 'character-spotlight'
  | 'trial-casefile'
  | 'trial-debate'
  | 'system-breakdown'
  | 'interview'
  | 'back-cover';

export interface InteractiveTrialDebate {
  trialChapter: number;
  caseTitle: string;
  speakerName: string;
  speakerPortrait: string;
  mode: 'rebuttal' | 'consent'; // 反驳(粉) or 赞同(蓝)
  statements: {
    id: string;
    text: string;
    highlightWord?: string;
    isTarget: boolean;
  }[];
  bullets: {
    id: string;
    name: string;
    description: string;
  }[];
  correctBulletId: string;
  breakthroughText: string;
}

export interface MagazinePageData {
  pageNumber: number;
  sectionId: MagazineSectionId;
  sectionLabel: string;
  layoutType: PageLayoutType;
  kicker: string;
  title: string;
  subtitle: string;
  heroImage: string;
  secondaryImage?: string;
  imageCaption: string;
  leadParagraph: string;
  bodyColumns: string[];
  pullQuote: string;
  sidebarTitle: string;
  sidebarItems: { label: string; value: string }[];
  relatedCharacterId?: string;
  interactiveTrial?: InteractiveTrialDebate;
  themeAccent?: string;
}

export const MAGAZINE_SECTIONS: { id: MagazineSectionId; name: string; range: string; startPage: number }[] = [
  { id: 'cover', name: '卷首与世界观', range: 'P.01–P.06', startPage: 1 },
  { id: 'island', name: '群岛全境地理志', range: 'P.07–P.12', startPage: 7 },
  { id: 'cast', name: '77期生独占档案', range: 'P.13–P.30', startPage: 13 },
  { id: 'trials', name: '六大学级裁判卷宗', range: 'P.31–P.42', startPage: 31 },
  { id: 'systems', name: '高速推理系统剖析', range: 'P.43–P.46', startPage: 43 },
  { id: 'staff', name: '主创访谈与音乐终章', range: 'P.47–P.50', startPage: 47 }
];

export const MAGAZINE_PAGES: MagazinePageData[] = [
  {
    pageNumber: 1,
    sectionId: 'cover',
    sectionLabel: 'COVER ISSUE NO.77-B',
    layoutType: 'cover',
    kicker: 'WEEKLY HOPE’S PEAK ARCHIVE · 纪念周刊特辑 VOL.02',
    title: '超级弹丸论破2：再见绝望学园 完全纪念周刊',
    subtitle: 'PSYCHO-TROPICAL PARADISE // 盛夏南国群岛、第77期生16人全档案与六大学级裁判终极解密',
    heroImage: '/assets/cg/header.jpg',
    secondaryImage: '/assets/cg/logo.png',
    imageCaption: '封面视觉：Spike Chunsoft《超级弹丸论破2：再见绝望学园》官方主视觉与纪念刊头',
    leadParagraph:
      '当纯白海浪拍打贾巴沃克岛的盛夏沙滩，蔚蓝晴空下却悄然拉开“自相残杀修学旅行”的帷幕。本刊以50页全彩纪念周刊规格，完整收录官方实机CG、16名超高校级学生电子通信簿、群岛五岛建筑解剖及六场学级裁判的逻辑轨迹。',
    bodyColumns: [
      '特别企划一：第77期生全员互动电子手册（e-Handbook），支持实时检索希望碎片、礼物喜好与学级裁判名言反驳。',
      '特别企划二：六大学级裁判现场还原，内置“不间断讨论（Nonstop Debate）”言弹发射交互模块，亲手击穿凶手证言矛盾。'
    ],
    pullQuote: '“即使未来充满迷茫，我们也要带着这里的一切踏出这片海岸。”',
    sidebarTitle: '本期特刊收录要目',
    sidebarItems: [
      { label: '刊号 / 规格', value: 'NO.77-B · 全50页精装电子周刊' },
      { label: '核心舞台', value: '贾巴沃克群岛（中央岛+五座分岛）' },
      { label: '收录角色', value: '第77期生16名 + 黑白熊 & 兔美' },
      { label: '互动系统', value: '通信簿档案库 + 6章言弹实机模拟' }
    ],
    relatedCharacterId: 'hajime',
    themeAccent: '#FF007F'
  },
  {
    pageNumber: 2,
    sectionId: 'cover',
    sectionLabel: 'SECTION I · 卷首特辑',
    layoutType: 'feature-spread',
    kicker: 'EDITOR’S NOTE · 美术与基调革新',
    title: 'Psycho-Tropical：当波普荧光粉溅上盛夏蔚蓝海岸',
    subtitle: '从初代幽闭压抑的旧校舍，迈向阳光刺眼的开放式南国度假村',
    heroImage: '/assets/cg/library_hero.jpg',
    secondaryImage: '/assets/chars/monokuma.jpg',
    imageCaption: 'Fig. 02 — 官方全景视觉：阳光灿烂的南国椰林与潜伏其中的黑白熊阴影',
    leadParagraph:
      '如果说初代《弹丸论破：希望的学园和绝望的高中生》定义的“Psycho-Pop（迷幻波普）”是用铁板封死的窗户与幽暗走廊构筑幽闭恐惧，那么第二代《再见绝望学园》则大胆提出了“Psycho-Tropical（迷幻热带）”这一极具反差感的美术命题。',
    bodyColumns: [
      '为什么在阳光越是明媚、海水越是清澈的度假胜地，尸体被发现时的寒意反而越发彻骨？制作团队用高饱和度的碧海蓝天与标志性的荧光粉血迹（Magenta Blood）正面碰撞，让玩家在悠闲的海岛探索与突如其来的凄惨命案之间经历剧烈的情感过山车。',
      '在UI与过场动画层面，二代全面升级了2.5D纸片人立体弹跳演出（Pop-up Diorama）。无论是推开房门时家具如立体书般层层立起，还是学级裁判圆桌旋转时的广角镜头畸变，都让整部作品呈现出宛如前卫青年周刊般的先锋平面设计感。'
    ],
    pullQuote: '越是灿烂耀眼的南国阳光，投射出的绝望阴影便越是深邃浓重。',
    sidebarTitle: '视觉美学三大支柱',
    sidebarItems: [
      { label: '色彩对撞', value: '南国绿松石蓝 × 荧光品红血迹' },
      { label: '空间叙事', value: '2.5D立体剪纸舞台与旋转走廊' },
      { label: '像素符号', value: '8-Bit复古街机精灵贯穿UI与转场' },
      { label: '精神内核', value: '在虚构的乐园中寻找真实的自我' }
    ],
    themeAccent: '#00B4D8'
  },
  {
    pageNumber: 3,
    sectionId: 'cover',
    sectionLabel: 'SECTION I · 卷首特辑',
    layoutType: 'toc',
    kicker: 'MASTER INDEX · 全50页总目录导航',
    title: 'TABLE OF CONTENTS // 50页希望与绝望完全索引',
    subtitle: '点击任意章节页码即可直接翻阅对应跨页专题',
    heroImage: '/assets/cg/cg_01.jpg',
    imageCaption: 'Fig. 03 — 实机画面：日向创在贾巴沃克岛与超高校级伙伴们的初次邂逅',
    leadParagraph:
      '本纪念周刊严格按照日本游戏纪念特刊（Famitsu / 电击PlayStation周年增刊）的编辑体例编排，全书共分六大特辑、整整50页内容。读者既可按页码顺序沉浸式翻阅，也可随时通过本页目录或顶部“全50页速览”直达任意专题。',
    bodyColumns: [
      '【第一部 P.01-06】创刊封面、Psycho-Tropical美学、双吉祥物对决与修学旅行七大校规全解。',
      '【第二部 P.07-12】贾巴沃克群岛全境地理志：从第一岛屿度假旅馆到第五岛屿军事基地与第六章崩坏旧校舍。',
      '【第三部 P.13-30】第77期生16人+隐藏人格完全独占档案：每名角色独立专页，直通电子学生手册。',
      '【第四部 P.31-42】六大学级裁判推理卷宗：每章2页（案发现场平面解析 + 互动式言弹论破模拟）。',
      '【第五部 P.43-46 & 第六部 P.47-50】赞同言弹/反论斩击系统剖析、小高和刚×小松崎类访谈、高田雅史配乐与封底毕业证书。'
    ],
    pullQuote: '翻开这本50页的修学旅行日志，每一个页码都记录着第77期生不可磨灭的羁绊。',
    sidebarTitle: '六大特辑页码分布',
    sidebarItems: [
      { label: 'P.01 - P.06', value: '卷首特辑 & 修学旅行规则' },
      { label: 'P.07 - P.12', value: '贾巴沃克群岛五岛地图志' },
      { label: 'P.13 - P.30', value: '第77期生16人完全独占档案' },
      { label: 'P.31 - P.42', value: '第1章至第6章学级裁判卷宗' },
      { label: 'P.43 - P.50', value: '裁判系统革新、访谈与封底' }
    ],
    themeAccent: '#FF007F'
  },
  {
    pageNumber: 4,
    sectionId: 'cover',
    sectionLabel: 'SECTION I · 卷首特辑',
    layoutType: 'feature-spread',
    kicker: 'WORLDVIEW · 世界观导读',
    title: '什么是“心动的修学旅行”？从希望峰学园教室到孤岛海滩',
    subtitle: '失去入学记忆的16名新生，与一扇通往热带海岸的诡异教室大门',
    heroImage: '/assets/cg/cg_02.jpg',
    secondaryImage: '/assets/chars/hajime.jpg',
    imageCaption: 'Fig. 04 — 官方CG：七海千秋在海之家泳池畔回眸，阳光下的日常暗藏玄机',
    leadParagraph:
      '故事始于主角日向创踏入梦寐以求的“私立希望峰学园”大门的那一刻。这所由政府公认的特权学府，聚集了全国各领域最具天赋的高中生——只要从这里毕业，就等于握住了通往成功人生的绝对门票。',
    bodyColumns: [
      '然而当强烈的眩晕袭来，日向创在一间上锁的教室中醒来，身边是同样收到入学通知的15名“超高校级”同班同学。正当众人困惑之际，自称带队老师的粉白玩偶“兔美（Usami）”挥动魔法棒，教室的四面墙壁轰然倒塌——映入眼帘的竟是一望无际的南国碧海与洁白沙滩！',
      '兔美宣布这是一场旨在培养同窗情谊、收集“希望碎片”的和平修学旅行。可还未等学生们享受夏日海风，熟悉的黑白熊便从天而降，将宁静的度假村瞬间拖入“不杀人就无法离岛”的深渊。'
    ],
    pullQuote: '推开希望峰学园教室大门的瞬间，等待他们的是没有退路的盛夏孤岛。',
    sidebarTitle: '序章关键时间节点',
    sidebarItems: [
      { label: '01. 入学眩晕', value: '日向创踏入校门即失去后续记忆' },
      { label: '02. 教室集合', value: '16名新生齐聚，唯独日向忘记才能' },
      { label: '03. 墙壁崩塌', value: '教室瞬间切换为贾巴沃克岛海滩' },
      { label: '04. 黑白熊降临', value: '和平修学旅行被篡改为自相残杀' }
    ],
    relatedCharacterId: 'hajime',
    themeAccent: '#10B981'
  },
  {
    pageNumber: 5,
    sectionId: 'cover',
    sectionLabel: 'SECTION I · 卷首特辑',
    layoutType: 'feature-spread',
    kicker: 'MASCOT RIVALRY · 双吉祥物对决',
    title: '黑白熊 VS 兔美（黑白美）：修学旅行主导权争夺战',
    subtitle: '散播绝望的病毒学园长，与死守学生安全的温柔魔法少女AI',
    heroImage: '/assets/chars/monokuma.jpg',
    secondaryImage: '/assets/chars/monomi.jpg',
    imageCaption: 'Fig. 05 — 官方立绘对比：自称学园长的黑白熊（左）与带队老师兔美/黑白美（右）',
    leadParagraph:
      '《超级弹丸论破2》在叙事结构上的一大妙笔，是引入了与黑白熊针锋相对的第二吉祥物——兔美（被黑白熊改造后强行更名为“黑白美 Monomi”）。两只玩偶在每个章节的相声式互殴，既是紧张推理间隙的调味剂，更是底层程序攻防战的具象化体现。',
    bodyColumns: [
      '黑白熊在本作中掌控着学级裁判、处刑机关与岛屿动机发布，他不断抛出“失忆真相”、“复古杀人街机”、“绝望病病毒”与“饥饿密室”逼迫学生跨过底线。',
      '而看似弱小、失去魔法棒后连耳朵都被染成半粉半白的黑白美，却从未放弃作为老师的职责。每当新岛屿桥梁被五头“黑白熊猛兽”封锁，都是黑白美孤身奋战将其击败，甚至在终章拼尽最后一丝数据助日向创击败巨型盾子。'
    ],
    pullQuote: '“就算被大家怀疑、被当成滑稽的玩偶，老师我也一定要保护大家到最后啰！”',
    sidebarTitle: '双吉祥物机能对照表',
    sidebarItems: [
      { label: '黑白熊本质', value: '侵入新世界程序的江之岛盾子病毒' },
      { label: '兔美本质', value: '未来机关开发的心理更生领航AI' },
      { label: '核心冲突', value: '自相残杀毕业规则 vs 希望碎片收集' },
      { label: '名场面', value: '兔美最终章持魔法棒全歼黑白熊大军' }
    ],
    relatedCharacterId: 'monomi',
    themeAccent: '#EC4899'
  },
  {
    pageNumber: 6,
    sectionId: 'cover',
    sectionLabel: 'SECTION I · 卷首特辑',
    layoutType: 'feature-spread',
    kicker: 'SCHOOL TRIP RULES · 电子学生手册铁则',
    title: '《修学旅行之心得》七大铁则与黑白熊追加条款全解',
    subtitle: '为什么黑白熊绝对不能亲自违反兔美最初制定的底层校规？',
    heroImage: '/assets/cg/cg_03.jpg',
    secondaryImage: '/assets/chars/monokuma.jpg',
    imageCaption: 'Fig. 06 — 实机画面：电子学生手册（e-Handbook）中记载的岛屿生存规则与搜查档案',
    leadParagraph:
      '仔细研读电子学生手册中的《修学旅行之心得》，会发现一个贯穿全作的重要伏笔：黑白熊虽然夺取了岛屿控制权，但他只能在兔美原有规则之上“追加条款”，而绝对无法删除兔美设定的基础保护条例。',
    bodyColumns: [
      '例如，兔美设定的“禁止破坏岛屿自然环境”、“指导老师不得直接攻击或杀害学生（违反校规者除外）”始终有效。正因如此，在第四章狛枝进入八角馆得知真相后，黑白熊依然无法直接对任何守规矩的学生动手，只能通过切断惊奇屋食物供应来制造间接动机。',
      '这一设定在第六章迎来了惊天回收：由于《新世界程序》受未来机关安全协议保护，哪怕是篡夺管理员权限的江之岛盾子AI，也必须取得“过半数学生主动按下毕业键”的授权，才能将虚拟人格覆写进现实肉体。'
    ],
    pullQuote: '规则既是束缚学生的囚笼，也是限制黑幕无法直接抹杀众人的防火墙。',
    sidebarTitle: '修学旅行核心校规摘录',
    sidebarItems: [
      { label: '第一条', value: '禁止极端暴力，须与其他学生和睦相处' },
      { label: '追加条款A', value: '杀害同伴并瞒过学级裁判者即可单独离岛' },
      { label: '追加条款B', value: '若投票指认错误，除真凶外全员处刑' },
      { label: '追加条款C', value: '单名犯人最多只能杀害两名学生（第3章后认知）' }
    ],
    relatedCharacterId: 'monokuma',
    themeAccent: '#E11D48'
  },
  {
    pageNumber: 7,
    sectionId: 'island',
    sectionLabel: 'SECTION II · 群岛地理志',
    layoutType: 'island-atlas',
    kicker: 'ISLAND ATLAS 01 · 中央岛与第一岛屿',
    title: '第一岛屿 & 中央公园：渡假旅馆、火箭拳超市与旧馆命案现场',
    subtitle: '修学旅行的起点，每一座悠闲的热带设施都将成为第一章的证言坐标',
    heroImage: '/assets/cg/cg_04.jpg',
    secondaryImage: '/assets/chars/byakuya.jpg',
    imageCaption: 'Fig. 07 — 实机探索画面：第一岛屿设施内部与立体展开的室内装潢',
    leadParagraph:
      '贾巴沃克群岛由正中央的“中央岛（贾巴沃克公园）”以及呈五角放射状分布的五座分岛组成，各岛之间通过跨海大桥与中央岛相连。游戏初期，唯有中央岛与第一岛屿对外开放。',
    bodyColumns: [
      '第一岛屿汇聚了全员居住的“贾巴沃克旅馆（含16间独立小屋与露天餐厅）”、堆满奇怪礼物的“火箭拳超市”、停放着小型飞机的“贾巴沃克机场”以及偏僻的“牧场”。',
      '而位于旅馆旁的“旅馆旧馆”，因其餐厅地板下直通海面、且与储藏室地板存在缝隙，成为了第一章《绝望的起航》中花村辉辉实施暗杀与十神白夜英勇牺牲的第一案发现场。'
    ],
    pullQuote: '连接五座岛屿的桥梁随每一场命案逐一开启，仿佛用鲜血铺就的探索版图。',
    sidebarTitle: '第一岛屿核心地标档案',
    sidebarItems: [
      { label: '贾巴沃克公园', value: '矗立巨型雕像与倒计时牌的集会广场' },
      { label: '度假旅馆小屋', value: '16栋按学生个性装饰的私人海景木屋' },
      { label: '火箭拳超市', value: '投掷黑白熊金币抽取礼物的补给中心' },
      { label: '旅馆旧馆', value: '第1章迎新宴会停电杀人事件现场' }
    ],
    relatedCharacterId: 'byakuya',
    themeAccent: '#0EA5E9'
  },
  {
    pageNumber: 8,
    sectionId: 'island',
    sectionLabel: 'SECTION II · 群岛地理志',
    layoutType: 'island-atlas',
    kicker: 'ISLAND ATLAS 02 · 第二岛屿',
    title: '第二岛屿：古代遗迹、沙滩海之家与《黄昏症候群》街机厅',
    subtitle: '埋藏着希望峰学园本篇档案的藤蔓废墟，与映照旧日罪孽的碧海沙滩',
    heroImage: '/assets/cg/cg_06.jpg',
    secondaryImage: '/assets/chars/mahiru.jpg',
    imageCaption: 'Fig. 08 — 第二岛屿调查记录：沙滩海之家与《黄昏症候群杀人事件》关键证物',
    leadParagraph:
      '跨越第二座大桥后解锁的第二岛屿，兼具文化设施与海滨娱乐。这里坐落着藏书丰富的“图书馆”、极具日式风情的“钱汤（公共浴场）”、“家庭餐厅”以及面朝大海的“沙滩海之家（Beach House）”。',
    bodyColumns: [
      '岛屿中央最引人注目的是被热带藤蔓覆盖的“古代遗迹”。细心的玩家与学生们很快认出，这座神秘遗迹的外观结构，竟与私立希望峰学园旧校舍一模一样！这处违和感极强的建筑，正是第六章揭开虚拟世界真相的核心钥匙。',
      '而在海之家边摆放的复古街机《黄昏症候群杀人事件》，则以像素AVG的形式重演了九头龙冬彦妹妹遇害、小泉真昼销毁照片证物的校园旧案，直接点燃了第二章的连环悲剧。'
    ],
    pullQuote: '被热带藤蔓缠绕的“古代遗迹”，实则是被锁在记忆深处的希望峰学园校舍。',
    sidebarTitle: '第二岛屿核心地标档案',
    sidebarItems: [
      { label: '古代遗迹', value: '酷似希望峰学园旧校舍的神秘封锁建筑' },
      { label: '沙滩海之家', value: '设有前后门与淋浴间的第2章命案现场' },
      { label: '岛屿图书馆', value: '可查阅过往机密文献与狛枝读书之处' },
      { label: '药局', value: '边古山获取安眠药与医疗物资的场所' }
    ],
    relatedCharacterId: 'mahiru',
    themeAccent: '#F97316'
  },
  {
    pageNumber: 9,
    sectionId: 'island',
    sectionLabel: 'SECTION II · 群岛地理志',
    layoutType: 'island-atlas',
    kicker: 'ISLAND ATLAS 03 · 第三岛屿',
    title: '第三岛屿：霓虹灯火下的泰兹医院与 Titty Typhoon 音乐厅',
    subtitle: '利用相似房间结构与双向远程直播完成的第3章“不可能犯罪”舞台',
    heroImage: '/assets/cg/cg_08.jpg',
    secondaryImage: '/assets/chars/ibuki.jpg',
    imageCaption: 'Fig. 09 — 实机画面：第三岛屿医疗与娱乐街区，绝望病蔓延的霓虹之夜',
    leadParagraph:
      '第三岛屿一改前两座岛屿的自然热带风光，呈现出充满美式复古霓虹气息的商业街区面貌。这里有设备先进的“泰兹医院（Towa/Tazu Hospital）”、摇滚Livehouse“Titty Typhoon”、“电影院”以及“望月汽车旅馆”。',
    bodyColumns: [
      '在第三章中，黑白熊释放了由绝望蚊传播的“绝望病”：狛枝感染了“说谎病”高烧昏迷，唯吹感染了“轻信病”，赤音感染了“懦弱病”。众人被迫分为医院看护组与汽车旅馆隔离组。',
      '罪木蜜柑巧妙利用了“泰兹医院二楼会议室”与“Titty Typhoon音乐厅后台”布局高度相似的特点，在医院会议室录制虚假的吊死直播引诱日向创赶往音乐厅，再趁机将真正的遗体运往现场，上演了精密的空间调包计。'
    ],
    pullQuote: '霓虹闪烁的摇滚舞台与冰冷洁白的医院走廊，在第三章交织成双重密室幻影。',
    sidebarTitle: '第三岛屿核心地标档案',
    sidebarItems: [
      { label: '泰兹医院', value: '隔离绝望病患者并设有远程监控终端' },
      { label: 'Titty Typhoon', value: '唯吹举办演唱会及第3章双尸发现现场' },
      { label: '望月汽车旅馆', value: '西园寺搭建真昼祭坛与无全身镜房间' },
      { label: '电影院', value: '播放《黑白熊与苗木君》恶搞电影之地' }
    ],
    relatedCharacterId: 'ibuki',
    themeAccent: '#A855F7'
  },
  {
    pageNumber: 10,
    sectionId: 'island',
    sectionLabel: 'SECTION II · 群岛地理志',
    layoutType: 'island-atlas',
    kicker: 'ISLAND ATLAS 04 · 第四岛屿',
    title: '第四岛屿：游乐园与“草莓屋×葡萄屋”惊奇屋十字建筑大解剖',
    subtitle: '推理游戏史上最令人拍案叫绝的建筑叙述性诡计——上下叠合的双子塔',
    heroImage: '/assets/cg/cg_10.jpg',
    secondaryImage: '/assets/chars/gundham.jpg',
    imageCaption: 'Fig. 10 — 建筑结构解析：表面看似左右相连、实则垂直叠放的草莓屋与葡萄屋',
    leadParagraph:
      '第四岛屿是一座巨大的主题游乐园，包含过山车、鬼屋、老鼠城（Monokuma Nezumiland）以及单轨列车。然而在第四章，全员在乘坐单轨列车后被困在了没有一丝食物的诡异建筑——“惊奇屋（Funhouse）”之中。',
    bodyColumns: [
      '惊奇屋表面上由粉色的“草莓屋（3层）”与紫色的“葡萄屋（3层）”通过一扇圆型升降电梯左右相连，两屋中心都围绕着神秘的“八角馆（Octagon）”。学生们一直以为自己是在左右两栋平行的建筑之间往返。',
      '直到狛枝凪斗通关“最终死亡房间”并在学级裁判中由日向创揭晓真相，众人才惊觉：草莓屋与葡萄屋根本不是左右两栋楼，而是上下叠在一起的同一座6层高塔！草莓屋位于上层（4-6F），葡萄屋位于下层（1-3F），唯有八角馆是贯穿底层的通天柱！'
    ],
    pullQuote: '当你以为电梯在水平移动时，它其实正在旋转180度并将你送往正下方的楼层。',
    sidebarTitle: '惊奇屋建筑诡计四要素',
    sidebarItems: [
      { label: '垂直叠合构造', value: '草莓屋在上、葡萄屋在下，呈十字交错' },
      { label: '旋转升降电梯', value: '在封闭运行中垂直升降并旋转方向误导感官' },
      { label: '草莓厅直通葡萄厅', value: '草莓3F正门打开即垂直坠入葡萄1F塔底' },
      { label: '最终死亡房间', value: '以俄罗斯轮盘赌通关即可解锁八角馆武器库' }
    ],
    relatedCharacterId: 'gundham',
    themeAccent: '#7C3AED'
  },
  {
    pageNumber: 11,
    sectionId: 'island',
    sectionLabel: 'SECTION II · 群岛地理志',
    layoutType: 'island-atlas',
    kicker: 'ISLAND ATLAS 05 · 第五岛屿',
    title: '第五岛屿：军事基地、黑白熊玩偶工厂与旧仓库的绝望烈焰',
    subtitle: '重工业废土与高科技军火库并存的第五岛，狛枝凪斗布下最后的审判舞台',
    heroImage: '/assets/cg/cg_12.jpg',
    secondaryImage: '/assets/chars/nagito.jpg',
    imageCaption: 'Fig. 11 — 第五岛屿实机画面：布满黑白熊生产线的工厂与阴森的旧仓库',
    leadParagraph:
      '第五岛屿呈现出与度假村截然不同的军事重工业面貌。岛上林立着存放真实装甲车与导弹的“军事基地”、源源不断生产备用机体的“黑白熊工厂”、“海神工业”以及堆满塑胶海豚与焰火的“旧仓库”。',
    bodyColumns: [
      '在得知全员真实身份后，狛枝凪斗利用第五岛屿军事基地的炸药发动了全岛恐怖袭击威胁，将剩余的五名同伴全部引向旧仓库。他巧妙利用仓库内的音乐盒、多米诺骨牌式的黑幕道具以及被偷梁换柱的“灭火弹（内装剧毒气体）”，完成了连黑白熊都无法干预的绝对幸运杀局。',
      '与此同时，第五岛屿深处的海神工业实验室与工厂终端，也首次向日向创等人展露了“新世界程序（Neo World Program）”与预备学科集体自杀事件的冰山一角。'
    ],
    pullQuote: '满箱的灭火弹里只有一颗装着剧毒——而超高校级的幸运，绝不会让叛徒抽错。',
    sidebarTitle: '第五岛屿核心地标档案',
    sidebarItems: [
      { label: '旧仓库', value: '第5章狛枝凪斗火灾与毒气复合命案现场' },
      { label: '黑白熊工厂', value: '制造量产型黑白熊与藏匿虚假炸弹之处' },
      { label: '军事基地', value: '索妮亚率队搜查军火与炸药来源的据点' },
      { label: '海神工业', value: '保存着希望峰学园极秘资料的科研大楼' }
    ],
    relatedCharacterId: 'nagito',
    themeAccent: '#10B981'
  },
  {
    pageNumber: 12,
    sectionId: 'island',
    sectionLabel: 'SECTION II · 群岛地理志',
    layoutType: 'island-atlas',
    kicker: 'ISLAND ATLAS 06 · 终章秘境',
    title: '第六章秘境：崩坏的希望峰学园旧校舍与虚拟世界底层空间',
    subtitle: '当热带天空碎裂为绿色网格线，77期生直面“人类史上最大最恶绝望事件”',
    heroImage: '/assets/cg/cg_13.jpg',
    secondaryImage: '/assets/chars/junko.jpg',
    imageCaption: 'Fig. 12 — 终章实机CG：数据错乱的旧校舍走廊与揭晓世界真相的最终审判',
    leadParagraph:
      '当第五场学级裁判落幕、倒计时牌归零，贾巴沃克岛的蓝天白云突然像发生故障的显示器般闪烁起刺眼的荧光绿线框与粉色乱码。第二岛屿的“古代遗迹”大门轰然敞开，内部竟是初代《弹丸论破》的舞台——希望峰学园旧校舍！',
    bodyColumns: [
      '在这座纯白与故障色块交织的虚拟校舍中，幸存的五名学生（日向、冬彦、左右田、索妮亚、赤音）逐一打开教室里的档案：原来他们在现实中早已陷入脑死亡或昏迷状态，眼前的南国岛屿只是未来机关苗木诚等人为了将他们从“绝望残党”恢复正常而构建的心理治疗虚拟空间。',
      '然而日向创在当年化身为“神座出流”时，亲手将存有江之岛盾子AI的芯片带入了新世界程序。盾子设下死局：若选“毕业”，死去同伴的空壳肉体与全员大脑都将被盾子意识克隆接管；若选“留级”，则永远困死在循环重启的虚拟岛屿中。'
    ],
    pullQuote: '“毕业”即是毁灭人类，“留级”即是永恒囚禁——唯有强制关机才能开辟第三条路。',
    sidebarTitle: '新世界程序核心架构',
    sidebarItems: [
      { label: '开发机构', value: '未来机关（苗木诚、雾切响子、十神白夜介入）' },
      { label: '原始目的', value: '消除77期生在校期间被盾子洗脑的绝望记忆' },
      { label: '病毒入侵源', value: '神座出流携入的江之岛盾子Alter Ego' },
      { label: '破局条件', value: '半数以上存活者同时按下强制关机（Shutdown）' }
    ],
    relatedCharacterId: 'hajime',
    themeAccent: '#FF007F'
  },
  {
    pageNumber: 13,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'feature-spread',
    kicker: 'CLASS 77-B ROSTER · 群像关系总览',
    title: '私立希望峰学园第77期生：羁绊、主从、恋心与绝望的锁链',
    subtitle: '为什么这群原本最团结友爱的同班同学，会沦为震惊世界的“绝望残党”？',
    heroImage: '/assets/cg/cg_05.jpg',
    secondaryImage: '/assets/chars/chiaki.jpg',
    imageCaption: 'Fig. 13 — 官方实机群像：围坐在学级裁判圆桌上的第77期生全员',
    leadParagraph:
      '与初代第78期生各自为战的冷峻氛围不同，第77期生的16名学生在性格塑造上充满了浓厚的人情味与互补羁绊。正因他们彼此之间有着如此深厚的守护欲，当残酷的黑白熊规则降临时，每一场命案的动机才都显得如此令人心碎。',
    bodyColumns: [
      '纵观全6章，几乎没有一起案件是出于自私的恶意：第一章节十神为救人而死、花村为探望病母而犯案；第二章边古山为护少主冬彦而挥刀；第四章田中与贰大为了不让全员饿死在惊奇屋而展开武士决斗；第五章七海千秋为了拯救全员而主动赴死。',
      '点击下方或顶部导航栏的“互动角色档案”，即可调出电子学生手册，查看全部18名角色的能力五维雷达图、自由行动希望碎片与专属言弹反驳模拟。接下来P.14至P.30将为您逐一呈现每位角色的独占周刊档案。'
    ],
    pullQuote: '第77期生的悲剧不在于背叛，而在于每个人都在用自己笨拙的方式试图保护重要的东西。',
    sidebarTitle: '第77期生核心羁绊组合',
    sidebarItems: [
      { label: '推理铁三角', value: '日向创 × 七海千秋 × 狛枝凪斗' },
      { label: '极道主从契约', value: '九头龙冬彦 × 边古山佩子' },
      { label: '魔界与王室共鸣', value: '田中眼蛇梦 × 索妮亚 ← 左右田和一' },
      { label: '热血师徒与姐妹', value: '贰大猫丸 × 终里赤音 / 小泉真昼 × 西园寺' }
    ],
    relatedCharacterId: 'chiaki',
    themeAccent: '#EC4899'
  },
  {
    pageNumber: 14,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 01 · 日向 创 (HAJIME HINATA)',
    title: '日向创：在“毫无才能的平凡”与“全能的神座出流”之间撕裂的少年',
    subtitle: '超高校级的「？？？」 · CV：高山南 · 身高 179cm · 生日 1月1日',
    heroImage: '/assets/chars/hajime.jpg',
    secondaryImage: '/assets/cg/cg_01.jpg',
    imageCaption: 'Fig. 14 — 角色档案01：日向创官方立绘与新世界程序初醒画面',
    leadParagraph:
      '作为玩家操纵的主视角人物，日向创不同于初代乐观坚定的苗木诚。他敏感、现实、偶尔带着几分讽刺与自卑，却在每一次同伴陷入绝境时挺身而出，用最扎实的逻辑一步步撬动看似无解的密室。',
    bodyColumns: [
      '日向创内心最大的创伤源于“没有才能”。作为希望峰学园靠高额学费入学的“预备学科”普通学生，他对本科生的耀眼天赋既无比憧憬又深感自卑。这份渴望被学园高层利用，使他自愿接受了抹去人格与记忆的脑改造手术，化身为拥有一切才能的“超高校级的希望·神座出流”。',
      '在第六章审判台上，当盾子嘲笑他一旦关机就会作为日向创彻底消失时，七海千秋的幻影唤醒了他：未来不是由既定的才能决定的，而是由自己当下的每一个选择共同创造的。黄金觉醒的日向创，成为了全系列最燃的英雄蜕变。'
    ],
    pullQuote: '“就算我是被制造出来的虚伪存在，我和大家在这座岛上共度的时光也绝不是虚假的！”',
    sidebarTitle: '日向创 电子手册通信簿',
    sidebarItems: [
      { label: '真实身份', value: '希望峰学园预备学科第77期学生' },
      { label: '改造代号', value: '神座出流（人工全才计划结晶）' },
      { label: '最喜爱的礼物', value: '草饼礼盒 / 复古掌机' },
      { label: '终章状态', value: '双瞳异色觉醒，率领生还者回归现实' }
    ],
    relatedCharacterId: 'hajime',
    themeAccent: '#78A355'
  },
  {
    pageNumber: 15,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 02 · 狛枝 凪斗 (NAGITO KOMAEDA)',
    title: '狛枝凪斗：以绝望为垫脚石的“超高校级的幸运”狂信徒',
    subtitle: '超高校级的「幸运」 · CV：绪方惠美 · 身高 180cm · 生日 4月28日',
    heroImage: '/assets/chars/nagito.jpg',
    secondaryImage: '/assets/cg/cg_05.jpg',
    imageCaption: 'Fig. 15 — 角色档案02：狛枝凪斗官方立绘与学级裁判狂气演出',
    leadParagraph:
      '如果将初代主角苗木诚的名字（Naegi Makoto）罗马音重组，就会得到“Komaeda Nagito（狛枝凪斗）”。同为“超高校级的幸运”，并由同一位声优绪方惠美献声，狛枝却是苗木诚最极端的镜像反转。',
    bodyColumns: [
      '从童年起，狛枝的人生就被荒诞的“幸运与不幸守恒定律”支配：全家旅游遭遇劫机却因陨石砸死劫匪而独活；被绑架却在垃圾袋里捡到头奖彩票；随后又被查出患有绝症。为了不让自己的人生变成毫无意义的荒谬剧，他建立起了扭曲的“绝对希望论”——唯有经历最惨烈的绝望，才能绽放出最耀眼的希望。',
      '无论是第一章在桌下贴刀主动挑起杀戮，第四章以5颗子弹的俄罗斯轮盘赌通关死亡房间，还是第五章用自己的生命布下“不可解的毒气灭火弹陷阱”，狛枝凪斗以一己之力将整部作品的悬疑张力推向了巅峰。'
    ],
    pullQuote: '“像我这种连渣滓都不如的垫脚石，能为了你们这些耀眼的希望而死，真是太幸运了啊。”',
    sidebarTitle: '狛枝凪斗 电子手册通信簿',
    sidebarItems: [
      { label: '才能机制', value: '极端不幸与极端大幸运周期性交替' },
      { label: '转折节点', value: '第4章通关最终死亡房间阅览全员档案' },
      { label: '第五章诡计', value: '借绝对幸运诱使叛徒投出剧毒灭火弹' },
      { label: '名字彩蛋', value: 'Naegi Makoto Daa（我就是苗木诚）字谜' }
    ],
    relatedCharacterId: 'nagito',
    themeAccent: '#2E7D6B'
  },
  {
    pageNumber: 16,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 03 · 七海 千秋 (CHIAKI NANAMI)',
    title: '七海千秋：永远在存档点守候大家的温柔游戏玩家与监视者AI',
    subtitle: '超高校级的「游戏玩家」 · CV：花泽香菜 · 身高 160cm · 生日 3月14日',
    heroImage: '/assets/chars/chiaki.jpg',
    secondaryImage: '/assets/cg/cg_13.jpg',
    imageCaption: 'Fig. 16 — 角色档案03：七海千秋官方立绘与终局审判台',
    leadParagraph:
      '戴着粉白猫咪连帽卫衣、别着复古射击游戏《Galaga》飞船发夹的七海千秋，是《超级弹丸论破2》当之无愧的灵魂女主角。她说话总是慢半拍，口头禅是“……偶觉得（たぶんね）”，却一旦拿起手柄或进入学级裁判就展现出惊人的洞察力。',
    bodyColumns: [
      '在前四章的调查中，七海始终毫无保留地信任并支持着日向创。当第五章狛枝设下旨在团灭所有“绝望残党”的毒气陷阱时，正是作为未来机关监视者AI的七海在不知情中被狛枝的幸运选中，投出了那瓶混有剧毒的灭火弹。',
      '明明只要保持沉默，全员就会因为猜错凶手而替她陪葬；但七海却微笑着主动用日记本的破绽引导日向指认自己。在俄罗斯方块与吃豆人交织的处刑台前，她留给日向的那句“绝对不要忘记我哦”，成为了无数玩家心中最难忘的眼泪。'
    ],
    pullQuote: '“玩游戏的时候，比起只看结局，和大家一起努力攻略的过程才是最宝贵的……偶觉得。”',
    sidebarTitle: '七海千秋 电子手册通信簿',
    sidebarItems: [
      { label: '真实构造', value: '新世界程序根据77期生记忆生成的AI' },
      { label: '标志饰品', value: '南梦宫经典街机《Galaga》飞船发夹' },
      { label: '第五章选择', value: '主动暴露监视者日志，牺牲自己拯救全员' },
      { label: '终章奇迹', value: '在日向意识深处重现，助其突破毕业死局' }
    ],
    relatedCharacterId: 'chiaki',
    themeAccent: '#F472B6'
  },
  {
    pageNumber: 17,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 04 · 十神 白夜（欺诈师）',
    title: '超高校级的欺诈师：背负“十神白夜”之名的无名守护领袖',
    subtitle: '超高校级的「欺诈师」 · CV：石田彰 · 身高 185cm · 体重 108kg',
    heroImage: '/assets/chars/byakuya.jpg',
    secondaryImage: '/assets/cg/cg_03.jpg',
    imageCaption: 'Fig. 17 — 角色档案04：十神白夜（欺诈师）官方立绘与领袖宣言',
    leadParagraph:
      '初次进入游戏的系列老玩家，无一不会对这位体型发福了一大圈的“十神白夜”感到震惊。然而随着第一章剧情推进，人们很快发现这位自称十神的少年，比任何人都渴望守护同伴的生命。',
    bodyColumns: [
      '他的真实身份是连户籍、真名、生日与家人都一概不存在的“超高校级的欺诈师”。因为没有属于自己的身份，他只能通过完美扮演他人来证明自己的存在。但当他作为第77期生的班长站出来时，那份“绝不让任何一名同伴死去”的誓言却完全出自他本人的真心。',
      '在第一章旧馆宴会厅停电的瞬间，佩戴着红外夜视镜的他在黑暗中看到长桌下有一道黑影正举刀刺向狛枝凪斗。他没有丝毫犹豫便冲上前推开狛枝，用自己的胸膛挡下了从地板缝隙刺出的巨型铁签。'
    ],
    pullQuote: '即便连自己的真名都不曾拥有，他在最后一刻依然是当之无愧的“超高校级的领袖”。',
    sidebarTitle: '十神（欺诈师） 电子手册通信簿',
    sidebarItems: [
      { label: '伪装对象', value: '初代《弹丸论破》超高校级的贵公子十神白夜' },
      { label: '防备措施', value: '搜缴全岛刀具、采购夜视镜、封锁旧馆通道' },
      { label: '牺牲原因', value: '黑暗中推开狛枝，替其挡下地板下的刺杀' },
      { label: '未竟之约', value: '曾答应日向在平安离岛后告知自己的真实身世' }
    ],
    relatedCharacterId: 'byakuya',
    themeAccent: '#D97706'
  },
  {
    pageNumber: 18,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 05 · 花村 辉辉 (TERUTERU HANAMURA)',
    title: '花村辉辉：都市时尚主厨假面下，思念病母的港町食堂少年',
    subtitle: '超高校级的「厨师」 · CV：福山润 · 身高 133cm · 生日 9月2日',
    heroImage: '/assets/chars/teruteru.jpg',
    secondaryImage: '/assets/cg/cg_04.jpg',
    imageCaption: 'Fig. 18 — 角色档案05：花村辉辉官方立绘与旧馆厨房搜查记录',
    leadParagraph:
      '总是自诩为“超高校级的主厨（Chef）”、满脑子桃色妄想的花村辉辉，起初看似只是典型的搞笑滑稽角色。然而一旦站在灶台前，他便展现出令所有学生折服的顶级料理技艺。',
    bodyColumns: [
      '在自由行动与第一章法庭的最后阶段，花村极力掩饰的真实身世浮出水面：他并非出身什么大都市法式餐厅，而是来自偏僻港口小镇的“花村食堂”。年迈多病的母亲独自一人支撑着小店，供他前往希望峰学园求学。',
      '当他撞见狛枝凪斗在宴会厅长桌下布置荧光涂料与利刃、企图引发屠杀时，急于离岛探望病母的焦灼与阻止狛枝的念头交织在一起。他钻入储藏室地板下刺出铁制烤肉签，却在黑暗中误杀了救人的十神。法庭末尾福山润从华丽腔调瞬间切换为嘶哑乡音的哭喊，堪称声优演技的教科书。'
    ],
    pullQuote: '“俺不喜欢被人叫做乡巴佬厨子……可是妈妈一个人在店里等着俺回去啊！！”',
    sidebarTitle: '花村辉辉 电子手册通信簿',
    sidebarItems: [
      { label: '伪装头衔', value: '自称都市派“超高校级的主厨”' },
      { label: '核心凶器', value: '藏在巨型带骨肉内部的铁制烤肉签' },
      { label: '犯案手法', value: '利用储藏室与餐厅地板缝隙从下方盲刺' },
      { label: '处刑名称', value: '《加油啊花村！深海炸猪排火山地狱》' }
    ],
    relatedCharacterId: 'teruteru',
    themeAccent: '#DC2626'
  },
  {
    pageNumber: 19,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 06 · 小泉 真昼 (MAHIRU KOIZUMI)',
    title: '小泉真昼：定格日常微笑的单反快门，与《黄昏症候群》的赎罪',
    subtitle: '超高校级的「摄影师」 · CV：小林优 · 身高 165cm · 生日 4月24日',
    heroImage: '/assets/chars/mahiru.jpg',
    secondaryImage: '/assets/cg/cg_06.jpg',
    imageCaption: 'Fig. 19 — 角色档案06：小泉真昼官方立绘与取景器中的海岛记忆',
    leadParagraph:
      '性格爽朗、富有大姐姐责任感的小泉真昼，是77期女生群体中的核心凝聚者。因为家里有一个懒散不顾家的父亲，她平时总对男生（尤其是日向创）严格说教，但实际上比任何人都温柔体贴。',
    bodyColumns: [
      '她的母亲是享誉国际的战地摄影师，但真昼却坚持认为“摄影不该只记录苦难与死亡，更应该留下人们幸福的笑容”。在第一章旧馆宴会开始前，她随手为大家拍下的纪念照片，成为了还原餐桌布局、锁定凶手花村的决定性铁证。',
      '然而在第二章，黑白熊通过街机游戏《黄昏症候群》揭开了真昼入学前曾帮好友佐藤隐瞒误杀九头龙妹妹现场的往事。面对愤怒质问的九头龙冬彦，真昼没有逃避，而是带着花瓶照片前往海之家希望诚心道歉，却倒在了边古山的金属球棒之下。'
    ],
    pullQuote: '她留给世界的最后一份礼物，是挂满西园寺祭坛的、全班每一个人的灿烂笑脸。',
    sidebarTitle: '小泉真昼 电子手册通信簿',
    sidebarItems: [
      { label: '随身爱机', value: '专业级复古全画幅胶片单反相机' },
      { label: '挚友羁绊', value: '西园寺日寄子（亲手教其系和服腰带）' },
      { label: '黄昏症候群代号', value: '街机游戏中的“D子（摄影部成员）”' },
      { label: '关键遗产', value: '第1章宴会俯拍图 & 第3章全员笑脸相册' }
    ],
    relatedCharacterId: 'mahiru',
    themeAccent: '#EA580C'
  },
  {
    pageNumber: 20,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 07 · 边古山 佩子 (PEKO PEKOYAMA)',
    title: '边古山佩子：甘为少主手中利刃的银发剑士，与最后一刻的泪水',
    subtitle: '超高校级的「剑道家」 · CV：三石琴乃 · 身高 172cm · 生日 6月30日',
    heroImage: '/assets/chars/peko.jpg',
    secondaryImage: '/assets/cg/cg_07.jpg',
    imageCaption: 'Fig. 20 — 角色档案07：边古山佩子官方立绘与竹刀袋证物',
    leadParagraph:
      '背负竹刀袋、目光如寒星般锐利的边古山佩子，从登岛之初就保持着军人般的克制与距离感。除了在第一岛屿泳池边默默站岗外，几乎没有人看穿她与九头龙冬彦之间隐藏数十年的宿命羁绊。',
    bodyColumns: [
      '在第二章沙滩海之家命案中，边古山展示了极其严密的行动能力：她提前给西园寺下安眠药将其藏入衣柜，在冬彦与真昼对质即将失控的瞬间冲出挥棒行凶；随后利用淋浴间瓶装水洗净血迹，踩着竹刀袋从高窗翻出制造密室，甚至把苏醒的西园寺引回现场按上血脚印。',
      '在学级裁判被识破后，她先是戴上面具伪装成连环杀手“闪亮正义”，继而又坚称自己只是九头龙家族养大的“无心工具”，试图让黑白熊判定冬彦才是真凶而放冬彦一人离岛。直到冬彦哭喊着只想要她这个人，佩子冰封的心才终于融化。'
    ],
    pullQuote: '当她为了护住冲进刑场的冬彦而挥刀挡向傀儡大军时，她不再是工具，而是深爱着少主的人类。',
    sidebarTitle: '边古山佩子 电子手册通信簿',
    sidebarItems: [
      { label: '隐藏身世', value: '九头龙组自幼收养培育的少主专属护卫' },
      { label: '密室手法', value: '以竹刀袋垫脚翻越海之家气窗 + 瓶装水洗血' },
      { label: '法庭博弈', value: '提出“工具与使用者谁才是凶手”的哲学悖论' },
      { label: '处刑名称', value: '《暴走女剑士 · 傀儡军团死斗》' }
    ],
    relatedCharacterId: 'peko',
    themeAccent: '#64748B'
  },
  {
    pageNumber: 21,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 08 · 九头龙 冬彦 (FUYUHIKO KUZURYU)',
    title: '九头龙冬彦：以右眼伤痕与切腹之血完成救赎的极道少主',
    subtitle: '超高校级的「黑道」 · CV：岸尾大辅 · 身高 157cm · 生日 8月16日',
    heroImage: '/assets/chars/fuyuhiko.jpg',
    secondaryImage: '/assets/cg/cg_08.jpg',
    imageCaption: 'Fig. 21 — 角色档案08：九头龙冬彦官方立绘与极道仁义觉醒',
    leadParagraph:
      '如果要在整个《弹丸论破》系列中评选人物弧光最饱满、成长最令人动容的角色，九头龙冬彦必定名列前茅。第一章的他满嘴威胁、拒绝合群，是个拼命想用凶狠外表掩饰娃娃脸自卑的叛逆少主。',
    bodyColumns: [
      '然而第二章的悲剧彻底击碎了他的傲慢。他原本以为自己想要的是能为家族争光的部下，直到边古山佩子为了替他顶罪而走向处刑台，冬彦才撕心裂肺地喊出真心话——他从头到尾都不想要什么工具，只想要青梅竹马的佩子活下去。他不顾性命冲进刑场，付出了失去右眼的代价。',
      '第三章伤愈归队后，戴上龙纹眼罩的冬彦在餐厅当众用短刀切腹向西园寺与小泉谢罪。从此以后，他把佩子的生命与小泉的遗愿一同背负在肩上，在惊奇屋绝境与终章审判中始终是日向创最铁血可靠的战友。'
    ],
    pullQuote: '右眼的眼罩与腹部的刀痕，铭刻着一位极道少主从男孩蜕变为真正男人的誓言。',
    sidebarTitle: '九头龙冬彦 电子手册通信簿',
    sidebarItems: [
      { label: '家族背景', value: '日本最大指定暴力团“九头龙组”继承人' },
      { label: '挚爱羁绊', value: '边古山佩子（幼年相伴的青梅竹马）' },
      { label: '转折壮举', value: '第2章冲入刑场救人 / 第3章切腹求得原谅' },
      { label: '终章归宿', value: '五名终局生还者之一，留守贾巴沃克岛照顾伙伴' }
    ],
    relatedCharacterId: 'fuyuhiko',
    themeAccent: '#CA8A04'
  },
  {
    pageNumber: 22,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 09 · 澪田 唯吹 (IBUKI MIODA)',
    title: '澪田唯吹：打破孤岛死寂的元气重金属吉他手与超绝顺风耳',
    subtitle: '超高校级的「轻音部」 · CV：小清水亚美 · 身高 164cm · 生日 11月27日',
    heroImage: '/assets/chars/ibuki.jpg',
    secondaryImage: '/assets/cg/cg_09.jpg',
    imageCaption: 'Fig. 22 — 角色档案09：澪田唯吹官方立绘与Titty Typhoon舞台演出',
    leadParagraph:
      '顶着黑粉挑染的尖角发型、穿着水手服配铆钉袜的澪田唯吹，是整座贾巴沃克岛最耀眼的气氛制造机。无论局势多么绝望，只要她跳出来喊一声“唯吹闪亮登场！”，沉闷的空气就会瞬间活跃起来。',
    bodyColumns: [
      '别看唯吹平时言行脱线、创作的歌曲名字叫《在生出孩子前还不知道怀的是什么》之类怪诞的重金属嘶吼，她在危急关头却异常敏锐。在第一章旧馆全黑停电期间，正是唯吹凭借音乐家超常的绝对听觉，准确还原了黑暗中每个人说话的内容与方位。',
      '在自由行动中，玩家会发现唯吹其实比任何人都通透——她看穿了日向创紧绷的焦虑，用看似胡闹的“发呆比赛”教会日向倾听自己内心的声音。正因她如此阳光纯粹，第三章她感染“轻信病”后毫无防备地遇害才更令人扼腕。'
    ],
    pullQuote: '“正因为大家平时都太拼命思考了，才更需要唯吹用重金属吉他把烦恼统统轰上天呀！”',
    sidebarTitle: '澪田唯吹 电子手册通信簿',
    sidebarItems: [
      { label: '特殊能力', value: '黑暗中分辨全员声源方位的超绝听力' },
      { label: '代表曲目', value: '《把心爱的他切碎放进搅拌机（暂译）》' },
      { label: '绝望病症', value: '轻信病（丧失怀疑能力，对指令言听计从）' },
      { label: '第三章真相', value: '并非上吊自杀，而是被勒毙后伪装成吊死现场' }
    ],
    relatedCharacterId: 'ibuki',
    themeAccent: '#EC4899'
  },
  {
    pageNumber: 23,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 10 · 西园寺 日寄子 (HIYOKO SAIONJI)',
    title: '西园寺日寄子：毒舌面具下的名门孤女，与未系完的和服腰带',
    subtitle: '超高校级的「日本舞蹈家」 · CV：三森铃子 · 身高 130cm · 生日 3月9日',
    heroImage: '/assets/chars/hiyoko.jpg',
    secondaryImage: '/assets/cg/cg_10.jpg',
    imageCaption: 'Fig. 23 — 角色档案10：西园寺日寄子官方立绘与真昼纪念照片祭坛',
    leadParagraph:
      '身穿华丽橘色振袖和服、扎着巨大的双马尾香蕉发髻，西园寺日寄子外表宛如精雕细琢的日本市松人偶，一张嘴却是全班最刻薄的毒舌机关枪，尤其喜欢捉弄软弱的罪木蜜柑与胆小的左右田。',
    bodyColumns: [
      '然而这份令人讨厌的攻击性背后，是传统舞踊名门“西园寺宗家”腐朽残酷的家族内斗。自幼与疼爱她的外公分离、屡遭族人下毒与放针暗算的她，唯一学会的生存方式就是先一步刺伤别人，并且因为过度保护而连自己的和服腰带都不会系。',
      '小泉真昼的死成为了日寄子人生的转折点。她在第三章亲手用真昼拍下的照片搭建祭坛，含泪原谅了切腹谢罪的九头龙冬彦，并为了实现“不再依赖别人”的诺言，半夜独自前往有大镜子的音乐厅练习系腰带——却在那里撞见了正在行凶的罪木蜜柑。'
    ],
    pullQuote: '那条散落在音乐厅壁纸血泊中的和服腰带，见证了少女想要独自站立起来的最后努力。',
    sidebarTitle: '西园寺日寄子 电子手册通信簿',
    sidebarItems: [
      { label: '流派头衔', value: '日本传统舞踊界西园寺宗家次期家元' },
      { label: '心灵支柱', value: '小泉真昼（唯一教会她信任与系腰带的人）' },
      { label: '藏尸现场', value: '遗体被罪木用胶带封在音乐厅雷神壁纸柱上' },
      { label: '成长高光', value: '第3章从复仇执念转向宽恕九头龙冬彦' }
    ],
    relatedCharacterId: 'hiyoko',
    themeAccent: '#F59E0B'
  },
  {
    pageNumber: 24,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 11 · 罪木 蜜柑 (MIKAN TSUMIKI)',
    title: '罪木蜜柑：绷带缠绕的渴爱灵魂，与第三章“绝望记忆”的狂气觉醒',
    subtitle: '超高校级的「保健委员」 · CV：茅野爱衣 · 身高 165cm · 生日 5月12日',
    heroImage: '/assets/chars/mikan.jpg',
    secondaryImage: '/assets/cg/cg_11.jpg',
    imageCaption: 'Fig. 24 — 角色档案11：罪木蜜柑官方立绘与学级裁判狂气反转',
    leadParagraph:
      '在前两章的修学旅行中，罪木蜜柑虽然动不动就哭泣道歉、平地摔出匪夷所思的姿势，但她凭借精湛的医学常识完成的尸检报告，却是日向创破解花村与边古山诡计不可或缺的基石。',
    bodyColumns: [
      '罪木蜜柑的性格悲剧源于从小到大无休止的校园欺凌（被剪碎头发、被当成飞镖靶子、被涂鸦羞辱）。为了不被彻底无视，她发现唯有照顾“比自己更脆弱、离开自己就活不下去的病人”时，自己才能获得掌控感与存在价值。',
      '这一心理弱点在入学希望峰学园期间被江之岛盾子彻底利用。第三章在泰兹医院不眠不休照料病患的罪木，不幸感染了“回忆病”，瞬间恢复了作为“超高校级的绝望”的全部记忆。为了向最爱的盾子献祭，她冷静地完成了全作最复杂的直播调包双尸命案。'
    ],
    pullQuote: '当她撕下怯懦的假面、露出狂热的笑容质问“为什么不原谅我”时，整个新世界程序的裂痕已然显现。',
    sidebarTitle: '罪木蜜柑 电子手册通信簿',
    sidebarItems: [
      { label: '专业贡献', value: '第1、2章精准测定死因与凶器创口特征' },
      { label: '绝望病症', value: '回忆病（恢复在校期间成为绝望残党的记忆）' },
      { label: '核心诡计', value: '医院会议室伪造直播 + 音乐厅胶带封门密室' },
      { label: '声优演出', value: '茅野爱衣从软弱哭腔到病娇狂笑的极致切换' }
    ],
    relatedCharacterId: 'mikan',
    themeAccent: '#A855F7'
  },
  {
    pageNumber: 25,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 12 · 贰大 猫丸 (NEKOMARU NIDAI)',
    title: '贰大猫丸：两度为伙伴燃尽生命的雷霆硬汉与“机械贰大”传奇',
    subtitle: '超高校级的「经纪人」 · CV：安元洋贵 · 身高 198cm · 生日 2月22日',
    heroImage: '/assets/chars/nekomaru.jpg',
    secondaryImage: '/assets/cg/cg_12.jpg',
    imageCaption: 'Fig. 25 — 角色档案12：贰大猫丸官方立绘与惊奇屋葡萄塔决战',
    leadParagraph:
      '浓眉怒目、肌肉虬结、周身跳跃着蓝色雷电特效的贰大猫丸，乍看之下像是热血格斗漫画里走出来的魔鬼教头。但作为“超高校级的经纪人”，他最大的天赋并非自己上场竞技，而是激发每一个伙伴潜藏的生命力。',
    bodyColumns: [
      '很少有人知道，拥有如此强悍体魄的贰大，在少年时代曾因严重的心脏病常年卧床，被医生断言活不过二十岁。正因为亲历过与死神擦肩而过的绝望，并在病友经理的激励下创造医学奇迹，他才立誓要用尽每一秒生命去托举他人的梦想。',
      '在第三章海滩上，他毫不犹豫地用身体替鲁莽的终里赤音挡下黑白熊的火箭筒；被改造成搞笑又可靠的“机械贰大（Mecha-maru）”后，他又在第四章全员饥饿濒死的惊奇屋里，接受了田中眼蛇梦赌上尊严的正面决斗，用第二次死亡换取了全体同伴的生路。'
    ],
    pullQuote: '第一次为保护徒弟挡下导弹，第二次为拯救全员死于决斗——贰大猫丸从未输给过绝望。',
    sidebarTitle: '贰大猫丸 电子手册通信簿',
    sidebarItems: [
      { label: '独门绝技', value: '瞬间提升运动员潜能的“极意按摩”' },
      { label: '机械化机能', value: '双眼强光照明、胸部红茶热饮、后脑休眠开关' },
      { label: '第四章死因', value: '与田中决战中被仓鼠按下休眠键后高空坠落' },
      { label: '遗留信物', value: '左右田用其零件修复的“迷你机械贰大”' }
    ],
    relatedCharacterId: 'nekomaru',
    themeAccent: '#2563EB'
  },
  {
    pageNumber: 26,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 13 · 田中 眼蛇梦 (GUNDHAM TANAKA)',
    title: '田中眼蛇梦：冰之魔王与破坏神暗黑四天王谱写的生命赞歌',
    subtitle: '超高校级的「饲养员」 · CV：杉田智和 · 身高 182cm · 生日 12月14日',
    heroImage: '/assets/chars/gundham.jpg',
    secondaryImage: '/assets/cg/cg_13.jpg',
    imageCaption: 'Fig. 26 — 角色档案13：田中眼蛇梦官方立绘与破坏神暗黑四天王仓鼠',
    leadParagraph:
      '左眼戴着魔导隐形眼镜、紫白围巾里探出四只圆滚滚的仓鼠，田中眼蛇梦每次开口都是“吾乃受诅咒的冰之魔王”、“混沌契约”之类的中二台词。然而随着剧情深入，所有玩家都会被这位“魔王”骨子里的温柔与高贵彻底折服。',
    bodyColumns: [
      '在第四章全员被囚禁在惊奇屋、断水断粮整整五天濒临集体饿死的绝境下，田中眼蛇梦闯过了死亡率极高的“最终死亡房间”，掌握了八角馆密室与双子塔重叠的秘密。他本可以轻易暗杀任何一个虚弱的人类，却选择了实力最强的机械贰大进行堂堂正正的决斗。',
      '在法庭最后，面对索妮亚含泪的挽留，田中道出了自己的生命哲学：“如果为了不违背道德而选择全员坐以待毙，那才是对大自然与生命最大的亵渎！”在狂奔的兽群处刑前，他细心地将四只仓鼠放在安全的高石上，画下最后的守护魔方阵从容赴死。'
    ],
    pullQuote: '他以“恶魔”自居，却在最残酷的饥饿牢笼里，用最温柔的魔法守护了所有的同伴与生灵。',
    sidebarTitle: '田中眼蛇梦 电子手册通信簿',
    sidebarItems: [
      { label: '暗黑四天王', value: 'Sonia、Cham-P（胖）、Maga-Z、Jum-P四只仓鼠' },
      { label: '第四章动机', value: '拒绝全员消极饿死，以决斗打破无食僵局' },
      { label: '致命破绽', value: '不知道豪华房其实没有隔音，暴露不在场证明' },
      { label: '处刑名称', value: '《田中眼蛇梦魔界大葬礼 · 兽群奔腾》' }
    ],
    relatedCharacterId: 'gundham',
    themeAccent: '#7C3AED'
  },
  {
    pageNumber: 27,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 14 · 左右田 和一 (KAZUICHI SODA)',
    title: '左右田和一：鲨鱼牙与荧光粉背后的纯情机械匠人',
    subtitle: '超高校级的「机械师」 · CV：细谷佳正 · 身高 172cm · 生日 6月29日',
    heroImage: '/assets/chars/kazuichi.jpg',
    secondaryImage: '/assets/cg/cg_02.jpg',
    imageCaption: 'Fig. 27 — 角色档案14：左右田和一官方立绘与机械检修工具',
    leadParagraph:
      '如果整座贾巴沃克岛上的学生全都是像狛枝或田中那样深不可测的怪人，那么读者或许很难产生真实代入感。而一惊一乍、胆小惜命、对着索妮亚王女疯狂献殷勤却屡屡吃瘪的左右田和一，正是连接普通人情感的温度计。',
    bodyColumns: [
      '左右田出生于一家经营惨淡的自行车修理铺，中学时代因为老实懦弱被所谓的朋友当成替罪羊。升入高中后，他特意把头发染成刺眼的荧光粉、戴上美瞳并磨尖牙齿，拼命想把自己包装成没人敢惹的不良少年，骨子里却依然是个渴望真诚友情的直率男孩。',
      '在六章的历程中，他的“超高校级机械师”才能多次挽救全队：第三章连夜架设医院与旅馆之间的无线电监控系统；第四章解剖机械贰大查明延时坠落真相，并修复双子塔电梯；第五章更用零件制作了迷你贰大安慰悲伤的赤音，最终作为五名生还者之一走到了最后。'
    ],
    pullQuote: '虽然总是大呼小叫地喊着害怕，但他手里的扳手却从未在同伴需要时掉过链子。',
    sidebarTitle: '左右田和一 电子手册通信簿',
    sidebarItems: [
      { label: '专长领域', value: '内燃机、无线通讯改装、精密机器人拆解' },
      { label: '单恋对象', value: '索妮亚·内瓦曼（全作最执着单箭头）' },
      { label: '关键贡献', value: '第3章监控通讯安装 / 第4章电梯与机械尸检' },
      { label: '终章状态', value: '五名终局生还者之一，协助修复现实舱体' }
    ],
    relatedCharacterId: 'kazuichi',
    themeAccent: '#EAB308'
  },
  {
    pageNumber: 28,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 15 · 索妮亚·内瓦曼 (SONIA NEVERMIND)',
    title: '索妮亚·内瓦曼：通晓军事与神秘学的诺沃塞利克王储，学级裁判的赞同之光',
    subtitle: '超高校级的「王女」 · CV：荒川美穗 · 身高 174cm · 生日 10月13日',
    heroImage: '/assets/chars/sonia.jpg',
    secondaryImage: '/assets/cg/cg_10.jpg',
    imageCaption: 'Fig. 28 — 角色档案15：索妮亚·内瓦曼官方立绘与王室威仪',
    leadParagraph:
      '金发编成优雅的皇冠发辫、举手投足散发着欧洲古典王室气场的索妮亚·内瓦曼，绝非传统童话里等待王子救援的柔弱公主。在诺沃塞利克王国的精英教育下，她既能优雅地品鉴红茶，也能熟练地驾驶装甲坦克与拆解军用炸药。',
    bodyColumns: [
      '索妮亚对日本次文化、世界连环杀手档案与超自然黑魔法有着近乎狂热的兴趣。这份独特的知识储备在第二章学级裁判中立下大功——正是她指出真正的连环杀人鬼“闪亮正义”习惯用外语发表宣言，从而一举击穿了边古山佩子的顶罪伪装。',
      '更值得一提的是，在《超级弹丸论破2》新增的“蓝色赞同言弹（Agree）”系统中，索妮亚是全作被日向创赞同次数最多的角色（累计高达5次）。无论是守护田中留下的四只仓鼠，还是在第五章哭着拒绝怀疑七海，索妮亚始终是团队的精神脊梁。'
    ],
    pullQuote: '她既有王室统帅的果敢决断，也有为每一个同伴流泪的柔软慈悲。',
    sidebarTitle: '索妮亚 电子手册通信簿',
    sidebarItems: [
      { label: '出身国度', value: '欧洲袖珍强国·诺沃塞利克王国王女' },
      { label: '特殊纪录', value: '全作学级裁判“赞同言弹”触发次数第一（5次）' },
      { label: '第五章行动', value: '亲自勘查军事基地，识破黑白熊工厂假炸弹' },
      { label: '终章状态', value: '五名终局生还者之一，继承照顾暗黑四天王' }
    ],
    relatedCharacterId: 'sonia',
    themeAccent: '#0D9488'
  },
  {
    pageNumber: 29,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'STUDENT FILE 16 · 终里 赤音 (AKANE OWARI)',
    title: '终里赤音：凭野性直觉撕开迷雾的体操斗士，与贰大猫丸的生死师徒情',
    subtitle: '超高校级的「体操部」 · CV：朴璐美 · 身高 176cm · 生日 7月15日',
    heroImage: '/assets/chars/akane.jpg',
    secondaryImage: '/assets/cg/cg_12.jpg',
    imageCaption: 'Fig. 29 — 角色档案16：终里赤音官方立绘与惊奇屋调查',
    leadParagraph:
      '永远敞着白衬衫领口、不是在大口吃肉就是在找人过招的终里赤音，是77期生中生命力最旺盛的野性少女。在贫民窟复杂的家庭环境中，身为长女的她为了喂饱七个年幼的弟妹，练就了在任何绝境中都绝不低头的生存本能。',
    bodyColumns: [
      '虽然在学级裁判里她经常连死者和同伴的名字都记混，但赤音那句“我的直觉（肚子）是这么告诉我的！”却屡屡在逻辑陷入僵局时直指核心——例如第四章正是她凭直觉第一个提出草莓屋和葡萄屋之间隐藏着结构机关。',
      '她与贰大猫丸的羁绊贯穿了整部作品的中后段。第三章因她的冲动导致贰大替她挡炮重伤，令她深陷自责；第四章当机械贰大在惊奇屋再度陨落时，赤音终于学会了将鲁莽的怒火转化为守护伙伴的坚韧意志，带着迷你贰大一路奋战至终章生还。'
    ],
    pullQuote: '逻辑或许会被精密的诡计欺骗，但野兽般纯粹的求生直觉永远指向真实。',
    sidebarTitle: '终里赤音 电子手册通信簿',
    sidebarItems: [
      { label: '身体素质', value: '第77期生近身格斗与闪避能力顶尖水准' },
      { label: '师徒羁绊', value: '贰大猫丸（一生铭记的教练与恩人）' },
      { label: '裁判特技', value: '不讲逻辑却命中真相的“野性直觉”发言' },
      { label: '终章状态', value: '五名终局生还者之一，重返现实世界' }
    ],
    relatedCharacterId: 'akane',
    themeAccent: '#B91C1C'
  },
  {
    pageNumber: 30,
    sectionId: 'cast',
    sectionLabel: 'SECTION III · 77期生独占档案',
    layoutType: 'character-spotlight',
    kicker: 'SPECIAL ARCHIVE · 神座出流 & 江之岛盾子 AI',
    title: '神座出流与江之岛盾子AI：希望峰学园人工全才计划与零号教室的罪孽',
    subtitle: '“超高校级的希望”与“超高校级的绝望”在新世界程序中的终极博弈',
    heroImage: '/assets/chars/junko.jpg',
    secondaryImage: '/assets/chars/hajime.jpg',
    imageCaption: 'Fig. 30 — 特别机密档案：巨型江之岛盾子AI（左）与日向创/神座出流（右）',
    leadParagraph:
      '为什么原本善良团结的第77期生，会在现实世界中变成毁灭世界的“超高校级的绝望（绝望残党）”？第六章揭开的“神座出流计划（Izuru Kamukura Project）”，将希望峰学园傲慢腐朽的本质彻底暴露在阳光之下。',
    bodyColumns: [
      '学园高层为了人工制造出集所有才能于一身的“超高校级的希望”，秘密挪用预备学科的巨额资金，对日向创实施了前额叶与大脑皮层改造手术。失去了一切情感与过往记忆的“神座出流”，因拥有全知全能的预测力而对世界感到极度无聊。',
      '江之岛盾子趁虚而入，利用希望峰学园掩盖零号教室杀人事件的丑闻煽动预备学科暴动，并向神座出流展示了“绝望是不可预测的未知”。为了验证希望与绝望究竟哪一方更有趣，神座出流在盾子死后将她的AI植入新世界程序，开启了这场赌上全员命运的修学旅行。'
    ],
    pullQuote: '当人工制造的“全能神明”感到厌倦时，唯有作为普通人“日向创”的羁绊能创造奇迹。',
    sidebarTitle: '绝望残党与更生程序机密',
    sidebarItems: [
      { label: '神座出流本质', value: '植入全部超高校级才能但抹除情感的日向创' },
      { label: '绝望残党行为', value: '在现实中夺取盾子遗骸部位（如狛枝移植左手）' },
      { label: '盾子AI图谋', value: '借“毕业”规则将自身意识下载至全员肉体' },
      { label: '破局关键', value: '日向创与神座出流人格融合，拒绝二元宿命' }
    ],
    relatedCharacterId: 'hajime',
    themeAccent: '#FF007F'
  },
  {
    pageNumber: 31,
    sectionId: 'trials',
    sectionLabel: 'SECTION IV · 六大学级裁判卷宗',
    layoutType: 'trial-casefile',
    kicker: 'CASE FILE 01 · 第一章《绝望的起航》搜查卷宗',
    title: '旧馆宴会厅停电杀人事件：地板缝隙、夜视镜与荧光涂料的交叉陷阱',
    subtitle: '被害者：十神白夜（欺诈师） · 案发地点：第一岛屿旅馆旧馆宴会厅',
    heroImage: '/assets/cg/cg_04.jpg',
    secondaryImage: '/assets/chars/byakuya.jpg',
    imageCaption: 'Fig. 31 — 第1章搜查卷宗：旧馆宴会厅平面布局与长桌下方荧光标记',
    leadParagraph:
      '为了阻止黑白熊预告的杀戮，十神白夜在旅馆旧馆举办迎新派对，并在门口对所有人进行了严格的搜身。然而当旧馆突然因三台高功率空调同时启动而跳闸停电时，惨叫声划破黑暗——亮灯后，十神浑身是血死在了铺着桌布的长桌下方。',
    bodyColumns: [
      '【现场三大谜团】第一：十神在门口搜查了所有人的随身物品，凶手究竟把直径5毫米的刺杀凶器藏在了哪里？第二：在伸手不见五指的绝对黑暗中，凶手如何在不戴夜视镜的情况下精准刺中长桌下的人？第三：为什么狛枝凪斗承认是自己布置了电源线与荧光刀柄，却不是真正的凶手？',
      '【现场勘查关键】通过小泉真昼在停电前拍摄的照片与田中在地板下找耳钉的证言，日向创发现旧馆地板存在5毫米宽的缝隙，且正下方就是海面。而花村辉辉负责的厨房储藏室，恰好处在宴会厅长桌的正下方！'
    ],
    pullQuote: '两个怀着截然不同目的的阴谋在停电的同一秒相撞，酿成了旧馆宴会厅的悲剧。',
    sidebarTitle: '第1章 黑白熊档案 & 关键言弹',
    sidebarItems: [
      { label: '死亡时间', value: '晚间11:30 宴会厅跳闸停电期间' },
      { label: '致命伤特征', value: '全身多处直径约5毫米的锐器刺穿伤' },
      { label: '核心言弹01', value: '手提箱里的红外夜视镜（十神所有）' },
      { label: '核心言弹02', value: '旧馆地板缝隙与消失的带骨肉铁签' }
    ],
    relatedCharacterId: 'byakuya',
    themeAccent: '#E11D48'
  },
  {
    pageNumber: 32,
    sectionId: 'trials',
    sectionLabel: 'SECTION IV · 六大学级裁判卷宗',
    layoutType: 'trial-debate',
    kicker: 'CLASS TRIAL 01 · 第一章学级裁判实机互动',
    title: '论破模拟 #01：击穿花村辉辉的“不在场与无凶器”辩词',
    subtitle: '选择正确的言弹（Truth Bullet），点击下方黄色高亮矛盾发言完成【論破 / BREAK】！',
    heroImage: '/assets/cg/cg_05.jpg',
    secondaryImage: '/assets/chars/teruteru.jpg',
    imageCaption: 'Fig. 32 — 第1章学级裁判高潮：锁定隐藏在美食之中的致命铁签',
    leadParagraph:
      '在第一章学级裁判前半段，狛枝凪斗主动承认自己给壁橱里的熨斗定时、并在桌下贴了涂有荧光剂的小刀，企图引诱他人杀害自己。然而日向创敏锐地指出：杀死十神的凶器伤口直径与小刀完全不符，真正的凶手是从储藏室地板下方发动偷袭的花村辉辉！',
    bodyColumns: [
      '花村察觉了狛枝的危险计划，本想在停电时根据桌底荧光标记从地板缝隙向上刺杀狛枝以阻止惨案并离岛探母，却没料到戴着夜视镜的十神看到了桌底的异动，挺身推开狛枝替其受死。',
      '在下方互动模块中，请先点击选择正确的言弹【消失的带骨肉铁签】，再点击花村证言中的矛盾词句，重现第一章一锤定音的论破瞬间！'
    ],
    pullQuote: '“藏在带骨肉正中央的巨型铁制烤肉签，既能躲过十神的搜身，又能穿过5毫米的地板缝隙！”',
    sidebarTitle: '第1章 处刑与案件总结',
    sidebarItems: [
      { label: '真凶身份', value: '花村辉辉（超高校级的厨师）' },
      { label: '共犯/诱因', value: '狛枝凪斗（布置停电熨斗与荧光刀）' },
      { label: '铁证锁链', value: '桌布无血迹 → 从地板下方刺击 → 带骨肉铁签' },
      { label: '处刑结果', value: '花村被直升机裹上面衣投入火山口油炸' }
    ],
    relatedCharacterId: 'teruteru',
    interactiveTrial: {
      trialChapter: 1,
      caseTitle: '第1章：旧馆宴会厅停电杀人事件',
      speakerName: '花村 辉辉',
      speakerPortrait: '/assets/chars/teruteru.jpg',
      mode: 'rebuttal',
      statements: [
        { id: 's1', text: '十神同学在旧馆门口把所有人的随身物品都搜查得干干净净，', isTarget: false },
        { id: 's2', text: '厨房端上桌的料理也一直摆在餐桌上从来没人动过，', highlightWord: '一直摆在餐桌上从来没人动过', isTarget: true },
        { id: 's3', text: '我手里根本不可能凭空变出刺穿地板的凶器啊！', isTarget: false }
      ],
      bullets: [
        { id: 'b1_goggles', name: '手提箱里的夜视镜', description: '十神用来在停电黑暗中监视全场的安全装备。' },
        { id: 'b1_skewer', name: '消失的带骨肉铁签', description: '原本插在巨型带骨肉中央的粗长铁签，案发后不翼而飞。' },
        { id: 'b1_irons', name: '储藏室的三台熨斗', description: '狛枝凪斗用来令旧馆电力超载跳闸的定时装置。' }
      ],
      correctBulletId: 'b1_skewer',
      breakthroughText: '論破成功（SORE WA CHIGAU YO）！带骨肉里的铁制烤肉签不仅避开了门口的刀具搜身，而且其直径刚好能穿过储藏室与餐厅地板之间5毫米的缝隙！'
    },
    themeAccent: '#FF007F'
  },
  {
    pageNumber: 33,
    sectionId: 'trials',
    sectionLabel: 'SECTION IV · 六大学级裁判卷宗',
    layoutType: 'trial-casefile',
    kicker: 'CASE FILE 02 · 第二章《海与罚，罪与椰子》搜查卷宗',
    title: '沙滩海之家杀人事件：《黄昏症候群》街机旧案与血脚印嫁祸迷局',
    subtitle: '被害者：小泉真昼 · 案发地点：第二岛屿沙滩海之家（Beach House）',
    heroImage: '/assets/cg/cg_06.jpg',
    secondaryImage: '/assets/chars/mahiru.jpg',
    imageCaption: 'Fig. 33 — 第2章搜查卷宗：沙滩海之家双门结构与街机游戏人物映射表',
    leadParagraph:
      '黑白熊在第二岛屿海之家旁放置了一台名为《黄昏症候群杀人事件》的复古街机。这款游戏改编自希望峰学园真实发生过的悬案：五名女生（A子至E子）卷入了一起音乐教室花瓶碎裂命案。通关者会收到一封装有真实现场照片的黑色信封。',
    bodyColumns: [
      '【人物映射解码】经过日向创与七海千秋的调查，游戏中的五名少女全部对应着岛上的学生：A子是罪木蜜柑，B子是西园寺日寄子，C子是澪田唯吹，D子是小泉真昼，而杀害被害者“F子”的E子则是小泉的好友佐藤。至于遇害的F子——正是九头龙冬彦年幼的亲妹妹九头龙菜摘！',
      '【海之家密室】小泉真昼被金属球棒一击毙命，尸体堵住了通往沙滩的后门；储藏柜里发现了涂满番茄酱的胶皮衣与冲浪板袋，沙地上留有一串通向正门的血脚印，所有表面证据都指向被迷晕后惊慌逃离现场的西园寺日寄子。'
    ],
    pullQuote: '一台看似粗糙的像素街机，撕开了极道兄妹与摄影少女之间尘封的血色因果。',
    sidebarTitle: '《黄昏症候群》代号对照表',
    sidebarItems: [
      { label: 'A子 / B子 / C子', value: '罪木蜜柑 / 西园寺日寄子 / 澪田唯吹' },
      { label: 'D子（销毁证物）', value: '小泉真昼（捡走碎花瓶中的相机胶卷）' },
      { label: 'E子（真凶）', value: '佐藤（为保护真昼失手杀害九头龙妹妹）' },
      { label: 'F子（被害者）', value: '九头龙菜摘（九头龙冬彦的亲妹妹）' }
    ],
    relatedCharacterId: 'mahiru',
    themeAccent: '#EA580C'
  },
  {
    pageNumber: 34,
    sectionId: 'trials',
    sectionLabel: 'SECTION IV · 六大学级裁判卷宗',
    layoutType: 'trial-debate',
    kicker: 'CLASS TRIAL 02 · 第二章学级裁判实机互动',
    title: '论破模拟 #02：识破边古山佩子的“闪亮正义”伪装与工具悖论',
    subtitle: '点击选择正确的言弹，配合索妮亚王女的犯罪学证言完成【赞同 / AGREE】突破！',
    heroImage: '/assets/cg/cg_07.jpg',
    secondaryImage: '/assets/chars/peko.jpg',
    imageCaption: 'Fig. 34 — 第2章学级裁判高潮：边古山佩子戴上“闪亮正义”面具替少主顶罪',
    leadParagraph:
      '当淋浴间散落的空塑料水瓶与作为踏脚石的竹刀袋将嫌疑彻底锁定在浑身湿透的边古山佩子身上时，边古山突然戴上诡异面具，宣称自己是连环杀手“闪亮正义（Sparkling Justice）”，企图彻底隐瞒九头龙冬彦在现场的事实。',
    bodyColumns: [
      '关键时刻，酷爱研究全球连环杀人犯的索妮亚王女指出：真正的“闪亮正义”在每次制裁罪犯时都会用西班牙语高喊正义格言，因为其真身根本不是日本人！这一关键证言成为二代新系统“蓝色赞同言弹”的经典教学时刻。',
      '随后边古山又抛出“我只是九头龙少主手中的剑，所以杀人的不是我而是九头龙”的逻辑陷阱，企图诱使全员投给九头龙从而保住少主性命。请在下方的互动裁判模块中选择正确的言弹，赞同索妮亚的证言拆穿伪装！'
    ],
    pullQuote: '“我完全赞同索妮亚小姐！边古山之所以假扮闪亮正义，全是为了替九头龙冬彦掩盖动机！”',
    sidebarTitle: '第2章 处刑与案件总结',
    sidebarItems: [
      { label: '真凶身份', value: '边古山佩子（超高校级的剑道家）' },
      { label: '洗血手法', value: '因淋浴间停水，使用冰箱里的5瓶饮用水冲洗' },
      { label: '嫁祸布局', value: '用安眠药迷晕西园寺藏入衣柜，诱其踩出脚印' },
      { label: '处刑悲剧', value: '冬彦冲入刑场失去右眼，佩子含泪护主身亡' }
    ],
    relatedCharacterId: 'peko',
    interactiveTrial: {
      trialChapter: 2,
      caseTitle: '第2章：沙滩海之家与黄昏症候群命案',
      speakerName: '索妮亚·内瓦曼',
      speakerPortrait: '/assets/chars/sonia.jpg',
      mode: 'consent',
      statements: [
        { id: 's1', text: '我读过关于“闪亮正义”的全部海外犯罪学文献，', isTarget: false },
        { id: 's2', text: '真正的闪亮正义其实是一名外国连环杀手，', highlightWord: '外国连环杀手', isTarget: true },
        { id: 's3', text: '边古山同学的日语台词完全不符合犯人的真实特征！', isTarget: false }
      ],
      bullets: [
        { id: 'b2_sonia', name: '闪亮正义的海外文献', description: '记录了连环杀手“闪亮正义”惯用西班牙语的犯罪学档案。' },
        { id: 'b2_bottles', name: '淋浴间的空水瓶', description: '散落在海之家淋浴间地板上的5个空矿泉水瓶。' },
        { id: 'b2_gummy', name: '掉落在现场的小熊软糖', description: '西园寺日寄子随身携带的黄色软糖。' }
      ],
      correctBulletId: 'b2_sonia',
      breakthroughText: '赞同成立（I AGREE WITH THAT）！索妮亚小姐的犯罪学知识彻底拆穿了边古山的“闪亮正义”角色扮演，迫使法庭追查她替九头龙冬彦隐瞒动机的真正原因！'
    },
    themeAccent: '#00B4D8'
  },
  {
    pageNumber: 35,
    sectionId: 'trials',
    sectionLabel: 'SECTION IV · 六大学级裁判卷宗',
    layoutType: 'trial-casefile',
    kicker: 'CASE FILE 03 · 第三章《海风吹拂的绝望病》搜查卷宗',
    title: '音乐厅双尸命案：远程监控直播诡计与壁纸柱背后的第二具遗体',
    subtitle: '被害者：澪田唯吹 & 西园寺日寄子 · 案发地点：第三岛屿 Titty Typhoon 音乐厅',
    heroImage: '/assets/cg/cg_08.jpg',
    secondaryImage: '/assets/chars/ibuki.jpg',
    imageCaption: 'Fig. 35 — 第3章搜查卷宗：Titty Typhoon舞台吊死现场与医院远程监控器',
    leadParagraph:
      '第三章绝望病爆发期间，日向创在泰兹医院大厅的监控屏幕上，突然看到一段毛骨悚然的实时画面：套着麻布袋的身影在音乐厅舞台上踢翻梯子上吊自杀！当大惊失色的日向联合九头龙、左右田撞开被强力胶带从内部封死的音乐厅大门时，最初只看到了吊在舞台中央的澪田唯吹。',
    bodyColumns: [
      '【凭空出现的第二具遗体】众人返回医院通报情况并再次折返音乐厅时，之前贴着雷神壁纸的装饰柱上壁纸被撕开——被割喉并反绑和服腰带的西园寺日寄子遗体赫然显露！大门明明是从内部用胶带封死的，凶手是如何在日向眼皮底下完成“直播自杀”与“藏匿双尸”的？',
      '【时空与空间的双重错觉】破案的关键在于颠覆尸体发现顺序：实际上唯吹与西园寺早在半夜就已在音乐厅遇害！凶手把音乐厅空调开到最高温延缓尸僵，并在次日早晨于“泰兹医院二楼会议室”利用布景、麻布袋与烛台自导自演了那段假上吊录像！'
    ],
    pullQuote: '你在监控屏幕里亲眼目睹的“自杀直播”，其实就发生在你头顶二楼的医院会议室里。',
    sidebarTitle: '第3章 黑白熊档案 & 诡计拆解',
    sidebarItems: [
      { label: '被害者01', value: '澪田唯吹（死因为勒颈窒息，伪装成上吊）' },
      { label: '被害者02', value: '西园寺日寄子（练习系腰带时撞见现场被割喉）' },
      { label: '假直播摄影棚', value: '泰兹医院2F会议室（利用安全门标志与烛台）' },
      { label: '延时封门手法', value: '凶手引导众人撞门时趁乱撕掉雷神壁纸露出二尸' }
    ],
    relatedCharacterId: 'ibuki',
    themeAccent: '#A855F7'
  },
  {
    pageNumber: 36,
    sectionId: 'trials',
    sectionLabel: 'SECTION IV · 六大学级裁判卷宗',
    layoutType: 'trial-debate',
    kicker: 'CLASS TRIAL 03 · 第三章学级裁判实机互动',
    title: '论破模拟 #03：撕开罪木蜜柑“焦急看护”假面下的绝望狂爱',
    subtitle: '选择关键言弹，一举戳穿罪木蜜柑关于“黑色麻布袋”的致命失言！',
    heroImage: '/assets/cg/cg_11.jpg',
    secondaryImage: '/assets/chars/mikan.jpg',
    imageCaption: 'Fig. 36 — 第3章学级裁判高潮：因“回忆病”苏醒绝望本性的罪木蜜柑',
    leadParagraph:
      '在第三章学级裁判前半段，罪木蜜柑凭借与日向创同床共枕的不在场证明，以及第一名冲进音乐厅验尸的保健委员身份，几乎洗清了所有嫌疑。然而当讨论聚焦到“监控录像里死者头上套着的麻布袋款式”时，罪木终于露出了无可挽回的马脚。',
    bodyColumns: [
      '在音乐厅发现遗体时，唯吹头上的电影院周边麻布袋早已被凶手替换成了普通麻袋；而监控录像里出现的则是印有《黑白熊与苗木君》图案的限定袋子。当时并没有去过医院看监控录像的罪木，为什么会脱口而出录像里袋子的具体图案？',
      '当被日向逼入绝境，罪木蜜柑彻底卸下怯懦伪装，为心中“挚爱之人（江之岛盾子）”献上疯狂告白。请在下方的互动裁判模块中选择正确的言弹，击穿罪木的失言矛盾！'
    ],
    pullQuote: '“根本没看过监控录像的你，为什么会知道假直播里使用的是电影院限定麻布袋？！”',
    sidebarTitle: '第3章 处刑与案件总结',
    sidebarItems: [
      { label: '真凶身份', value: '罪木蜜柑（感染回忆病的超高校级保健委员）' },
      { label: '决定性失言', value: '未看监控却主动提及“电影院周边麻布袋”' },
      { label: '运尸路线', value: '趁日向跑去音乐厅时，将操作台与幕布销毁' },
      { label: '处刑名称', value: '《暴力注射器 · 巨型手臂冲出大气层》' }
    ],
    relatedCharacterId: 'mikan',
    interactiveTrial: {
      trialChapter: 3,
      caseTitle: '第3章：绝望病与音乐厅双尸直播命案',
      speakerName: '罪木 蜜柑',
      speakerPortrait: '/assets/chars/mikan.jpg',
      mode: 'rebuttal',
      statements: [
        { id: 's1', text: '你们怎么能怀疑一直辛苦照顾病人的我呢……呜呜，', isTarget: false },
        { id: 's2', text: '况且监控画面里唯吹头上套着的明明是电影院周边麻布袋，', highlightWord: '电影院周边麻布袋', isTarget: true },
        { id: 's3', text: '任何人只要去过电影院都能拿到那种袋子呀！', isTarget: false }
      ],
      bullets: [
        { id: 'b3_camera', name: '摔碎的无线监控摄像机', description: '在音乐厅地板上被踩碎的通讯摄像头。' },
        { id: 'b3_bag', name: '死者头上的普通麻布袋', description: '在音乐厅发现遗体时，唯吹头上戴的是无图案的普通麻袋，只有看过监控录像的日向知道录像里是周边袋。' },
        { id: 'b3_glue', name: '快干强力胶水', description: '用来封死音乐厅门锁孔的胶水。' }
      ],
      correctBulletId: 'b3_bag',
      breakthroughText: '論破成功（SORE WA CHIGAU YO）！在音乐厅现场发现尸体时袋子早已被换成普通麻袋，当时不在医院看监控的罪木之所以知道那是“电影院周边麻布袋”，正是因为她就是拍摄假直播的犯人本人！'
    },
    themeAccent: '#FF007F'
  },
  {
    pageNumber: 37,
    sectionId: 'trials',
    sectionLabel: 'SECTION IV · 六大学级裁判卷宗',
    layoutType: 'trial-casefile',
    kicker: 'CASE FILE 04 · 第四章《究极机械会梦到发条装置吗？》搜查卷宗',
    title: '惊奇屋机械贰大坠亡案：五日断粮绝境、时钟陷阱与双子塔十字重叠',
    subtitle: '被害者：机械贰大猫丸 · 案发地点：第四岛屿惊奇屋（葡萄塔1F大厅）',
    heroImage: '/assets/cg/cg_10.jpg',
    secondaryImage: '/assets/chars/nekomaru.jpg',
    imageCaption: 'Fig. 37 — 第4章搜查卷宗：惊奇屋草莓塔与葡萄塔三维重叠剖面图',
    leadParagraph:
      '第四章堪称整个《弹丸论破》系列在密室建筑诡计上的最高杰作。黑白熊将幸存的9名学生关进第四岛屿的“惊奇屋”，并宣布：“只要不发生杀人事件，就绝对不提供任何食物与饮水”。在断粮的第五天清晨，随着太极拳闹钟响起，众人打开葡萄屋大门，发现机械贰大摔得粉碎的残骸悬挂在十神铜像与断裂的柱子旁。',
    bodyColumns: [
      '【不可能的密室与不在场证明】葡萄屋大门被倒塌的巨大石柱从内部彻底堵死，而连接草莓屋与葡萄屋的唯一圆形电梯在夜间也处于故障停运状态！如果住在草莓屋的男生们无法前往葡萄屋，凶手究竟是如何跨越建筑杀害机械贰大的？',
      '【惊天建筑真相】通过狛枝凪斗带出的八角馆视角与终里赤音的直觉，日向创画出了惊奇屋的真实立体图：草莓屋根本就在葡萄屋的正上方！凶手只需通关“最终死亡房间”穿过八角馆，在草莓屋3F葡萄厅将机械贰大制服，再用钢丝将其拴在门把手上，就能制造出清晨无人触碰的延时高空坠落！'
    ],
    pullQuote: '当平面的地图在脑海中立起为垂直的高塔，所有关于“电梯不通”的不在场证明瞬间土崩瓦解。',
    sidebarTitle: '第4章 黑白熊档案 & 关键物证',
    sidebarItems: [
      { label: '致命死因', value: '从草莓屋3F直坠葡萄屋1F地面造成的冲击损毁' },
      { label: '延时坠落机关', value: '将休眠的机械贰大用钢丝挂在自动关闭的门把上' },
      { label: '时间诡计', value: '将休息室时钟调快2小时，打乱全员守夜排班表' },
      { label: '决斗证明', value: '机械贰大没有逃跑，而是正面迎战直至被按休眠键' }
    ],
    relatedCharacterId: 'nekomaru',
    themeAccent: '#2563EB'
  },
  {
    pageNumber: 38,
    sectionId: 'trials',
    sectionLabel: 'SECTION IV · 六大学级裁判卷宗',
    layoutType: 'trial-debate',
    kicker: 'CLASS TRIAL 04 · 第四章学级裁判实机互动',
    title: '论破模拟 #04：揭穿“冰之魔王”田中眼蛇梦唯一的隔音房破绽',
    subtitle: '选择关键言弹，用“豪华房不隔音”的事实击破田中眼蛇梦最后的不在场证明！',
    heroImage: '/assets/cg/cg_11.jpg',
    secondaryImage: '/assets/chars/gundham.jpg',
    imageCaption: 'Fig. 38 — 第4章学级裁判高潮：田中眼蛇梦与破坏神暗黑四天王的尊严谢幕',
    leadParagraph:
      '即使日向创解开了惊奇屋上下叠合的建筑秘密，并指出凶手利用体积娇小的宠物钻进窄缝按下了贰大后脑勺的休眠开关，田中眼蛇梦依然沉着地以“我当时住在草莓屋的豪华房里休息，甚至因为隔音太好没听到早上的闹钟”来抗辩。',
    bodyColumns: [
      '然而，正是这句看似天衣无缝的辩词暴露了他！在分房抽签时，住在普通房与简陋房的日向等人因为房间全完隔音，确实听不到走廊的闹钟；但唯独九头龙曾经证实过——草莓屋的“豪华房”隔音设备是坏的，走廊里的太极拳广播吵得根本睡不着！',
      '田中之所以不知道豪华房会听到闹钟，恰恰证明闹钟响起时他正在八角馆布置现场！请在下方互动裁判模块中选择正确的言弹，向这位为了拯救全员免于饿死而战的“冰之魔王”致以最高敬意的论破！'
    ],
    pullQuote: '“只有豪华房是没有隔音的！田中，你没听到闹钟，是因为当时你根本不在房间里！”',
    sidebarTitle: '第4章 处刑与案件总结',
    sidebarItems: [
      { label: '真凶身份', value: '田中眼蛇梦（超高校级的饲养员）' },
      { label: '决胜奇招', value: '指挥暗黑四天王仓鼠按下机械贰大后脑休眠键' },
      { label: '武士默契', value: '贰大与田中均拒绝偷生，以死战换取全员食物' },
      { label: '处刑泪点', value: '田中画下魔法阵护住四只仓鼠，被动物天使接引' }
    ],
    relatedCharacterId: 'gundham',
    interactiveTrial: {
      trialChapter: 4,
      caseTitle: '第4章：惊奇屋双子塔与机械贰大坠落案',
      speakerName: '田中 眼蛇梦',
      speakerPortrait: '/assets/chars/gundham.jpg',
      mode: 'rebuttal',
      statements: [
        { id: 's1', text: '哼，凡人休要胡言乱语！清晨太极拳广播响起之时，', isTarget: false },
        { id: 's2', text: '吾正身处隔音完美的豪华房内沉睡，根本未曾听见半点闹钟声响！', highlightWord: '隔音完美的豪华房', isTarget: true },
        { id: 's3', text: '汝等又有何证据断言吾离开了房间？！', isTarget: false }
      ],
      bullets: [
        { id: 'b4_wire', name: '断裂的粗钢丝绳', description: '用来把机械贰大悬挂在葡萄厅大门把手上的钢丝。' },
        { id: 'b4_soundproof', name: '豪华房隔音故障证言', description: '草莓屋三种房型中，普通房与简陋房完全隔音，唯有豪华房隔音损坏，在房内必定会听到震耳欲聋的闹钟。' },
        { id: 'b4_hamster', name: '暗黑四天王的体型', description: '能够钻入细小空隙按下机械贰大后脑勺按钮的小仓鼠。' }
      ],
      correctBulletId: 'b4_soundproof',
      breakthroughText: '論破成功（SORE WA CHIGAU YO）！草莓屋唯有豪华房是没有隔音的！如果田中真的待在豪华房里，绝不可能听不到震耳欲聋的太极拳广播——这句辩词彻底证明他当时正在八角馆布置现场！'
    },
    themeAccent: '#7C3AED'
  },
  {
    pageNumber: 39,
    sectionId: 'trials',
    sectionLabel: 'SECTION IV · 六大学级裁判卷宗',
    layoutType: 'trial-casefile',
    kicker: 'CASE FILE 05 · 第五章《对着绝望微笑以希望之名》搜查卷宗',
    title: '旧仓库剧毒灭火弹事件：狛枝凪斗赌上性命与绝对幸运的“无解阳谋”',
    subtitle: '被害者：狛枝凪斗 · 案发地点：第五岛屿旧仓库（Old Warehouse）',
    heroImage: '/assets/cg/cg_12.jpg',
    secondaryImage: '/assets/chars/nagito.jpg',
    imageCaption: 'Fig. 39 — 第5章搜查卷宗：旧仓库火灾现场与贯穿掌心的长枪机关',
    leadParagraph:
      '第五章的案件被全球推理游戏爱好者公认为《弹丸论破》全系列最巅峰的诡计设计。为了揪出潜伏在学生中的“未来机关叛徒”并清洗全体“超高校级的绝望”，狛枝凪斗在旧仓库引发火灾，诱使冲进来的同伴向幕布投掷灭火弹。当烈火熄灭、幕布拉开，狛枝浑身多处刀伤、右手被长枪刺穿、双脚捆绑惨死在塑胶海豚之下。',
    bodyColumns: [
      '【伪装成他杀的折磨式自杀】日向创首先识破了狛枝的第一层伪装：他嘴里塞着胶带、四肢被绑，实则是他自己用打火机烧断绳索，松开右手吊在梁上的长枪刺穿自己！既然一切伤痕都是狛枝自残造成的，难道这是一场彻底的自杀吗？',
      '【隐藏在自杀背后的真正死因】不！根据罪木留下的尸检笔记与黑白熊档案，狛枝真正的死因并非失血或长枪刺穿，而是吸入了八角馆武器库里的“剧毒气体”！狛枝事先把毒气灌入唯一一颗灭火弹中混入箱底，并利用自己“超高校级的幸运”，百分之百确信那个投出毒气灭火弹的人，一定就是唯一的叛徒！'
    ],
    pullQuote: '连凶手自己都不知道自己杀了人——唯有信赖“超高校级的幸运”，才能揭开这赌命的阳谋。',
    sidebarTitle: '第5章 狛枝诡计的三重反转',
    sidebarItems: [
      { label: '第一层表象', value: '遭神秘黑幕残忍虐杀并被长枪刺穿他杀' },
      { label: '第二层反转', value: '狛枝利用烧绳机关与塑胶海豚自导自演自杀' },
      { label: '第三层真相', value: '真正死因为吸入灭火弹毒气，属不可知论他杀' },
      { label: '终极杀招', value: '利用“超高校级幸运”指定叛徒抽中唯一毒气弹' }
    ],
    relatedCharacterId: 'nagito',
    themeAccent: '#2E7D6B'
  },
  {
    pageNumber: 40,
    sectionId: 'trials',
    sectionLabel: 'SECTION IV · 六大学级裁判卷宗',
    layoutType: 'trial-debate',
    kicker: 'CLASS TRIAL 05 · 第五章学级裁判实机互动',
    title: '论破模拟 #05：忍痛射向挚友的言弹——指认“叛徒”七海千秋',
    subtitle: '哪怕内心万分抗拒，为了不让全员陪葬，请向七海千秋发射最后那枚言弹！',
    heroImage: '/assets/cg/cg_13.jpg',
    secondaryImage: '/assets/chars/chiaki.jpg',
    imageCaption: 'Fig. 40 — 第5章学级裁判高潮：七海千秋微笑承认未来机关监视者AI身份',
    leadParagraph:
      '当法庭推理得出“唯有依靠狛枝的超高校级幸运，才能判断投出毒气灭火弹的人就是未来机关叛徒”时，全场陷入了死一般的寂静。因为狛枝在房间里留下的黑白美日记本，指向了那个从第一章起就一直温柔陪伴大家的少女——七海千秋。',
    bodyColumns: [
      '七海千秋明明是由未来机关开发的善良AI，她之所以成为狛枝计划里的“凶手”，仅仅因为狛枝想让除七海以外的所有绝望残党因投错票而全灭！看穿这一点的七海，主动在法庭上露出破绽，请求日向创把票投给自己。',
      '“只要还有可能性，就不能放弃通关哦。”请在下方互动裁判模块中选择【七海千秋的黑白美日志】，完成这场令人含泪的指认！'
    ],
    pullQuote: '“谢谢你，日向君……能和大家一起度过这次修学旅行，我真的很开心……偶觉得。”',
    sidebarTitle: '第5章 处刑与案件总结',
    sidebarItems: [
      { label: '名义犯人', value: '七海千秋（未来机关新世界程序监视者AI）' },
      { label: '设局真凶', value: '狛枝凪斗（企图借学级裁判规则团灭全员）' },
      { label: '破局关键', value: '相信狛枝的才能 + 七海主动暴露预知日记' },
      { label: '处刑名称', value: '《请投币通关 · 太空侵略者与俄罗斯方块》' }
    ],
    relatedCharacterId: 'chiaki',
    interactiveTrial: {
      trialChapter: 5,
      caseTitle: '第5章：旧仓库剧毒灭火弹与绝对幸运审判',
      speakerName: '七海 千秋',
      speakerPortrait: '/assets/chars/chiaki.jpg',
      mode: 'rebuttal',
      statements: [
        { id: 's1', text: '日向君，既然我们已经推理出投中剧毒灭火弹的人就是叛徒，', isTarget: false },
        { id: 's2', text: '可我们手上真的有能够证明谁是未来机关叛徒的证据吗？', highlightWord: '证明谁是未来机关叛徒的证据', isTarget: true },
        { id: 's3', text: '……不要犹豫了，把你找到的真相说出来吧。', isTarget: false }
      ],
      bullets: [
        { id: 'b5_poison', name: '八角馆的剧毒药瓶', description: '装在单一灭火弹内、一经吸入即刻致死的神经毒气。' },
        { id: 'b5_spear', name: '冈格尼尔之枪', description: '从八角馆取出的长枪，被狛枝悬吊在房梁上刺穿右手。' },
        { id: 'b5_diary', name: '七海千秋的黑白美日志', description: '记载着未来机关监视记录的笔记本，七海故意提及日志中未公开的细节以引导日向指认自己。' }
      ],
      correctBulletId: 'b5_diary',
      breakthroughText: '論破完成……！七海千秋故意说出了只有日记持有者才知道的细节，用自己的牺牲彻底粉碎了狛枝凪斗团灭第77期生的计划！'
    },
    themeAccent: '#F472B6'
  },
  {
    pageNumber: 41,
    sectionId: 'trials',
    sectionLabel: 'SECTION IV · 六大学级裁判卷宗',
    layoutType: 'trial-casefile',
    kicker: 'CASE FILE 06 · 第六章《这就是终幕！再见绝望学园》卷宗',
    title: '世界真相大公开：新世界程序、绝望残党与毕业投票的双重死局',
    subtitle: '乱入嘉宾：苗木诚、雾切响子、十神白夜（本尊） · 终极黑幕：江之岛盾子 AI',
    heroImage: '/assets/cg/library_hero.jpg',
    secondaryImage: '/assets/chars/junko.jpg',
    imageCaption: 'Fig. 41 — 第6章终局卷宗：巨型江之岛盾子AI现身与初代主角团救援介入',
    leadParagraph:
      '第六章不再是针对某一起单一凶杀案的推理，而是对整个贾巴沃克岛世界观的终极清算。化为巨大手机屏幕形态的“江之岛盾子 Alter Ego”高悬于审判庭上空，向五名幸存者揭开了令人窒息的残酷真相：你们每一个人，在现实世界里都是双手沾满鲜血的“超高校级的绝望”！',
    bodyColumns: [
      '【绝望的二选一陷阱】为了救援被困在程序中的苗木诚、雾切响子与十神白夜（真身），未来机关进入了虚拟世界，却同样受制于系统规则。盾子狂笑着给出两个选择：如果按下“毕业”，程序正常结束，死去同伴在现实中的昏迷肉体将被下载进江之岛盾子的人格，全人类变为盾子；如果按下“留级”，全员将永远困在不断重置的自相残杀修学旅行中。',
      '【唯一的第三条路：强制关机】苗木诚提出了唯一的破局法——启动紧急“强制关机（Shutdown）”。然而强制关机的代价是：全员在贾巴沃克岛上的全部记忆将被格式化清零，而日向创更会退回没有才能的消失状态，重新变回冷漠的“神座出流”！'
    ],
    pullQuote: '当“希望”与“绝望”都沦为迫使你放弃自我的枷锁，唯有亲手创造未来才能打破宿命。',
    sidebarTitle: '第6章 终局三大选项后果',
    sidebarItems: [
      { label: '选项 A：毕业', value: '江之岛盾子AI覆写全员现实大脑，世界毁灭' },
      { label: '选项 B：留级', value: '苗木等人被困死，77期生永远循环自相残杀' },
      { label: '选项 C：强制关机', value: '粉碎盾子病毒，但面临失去岛上记忆的风险' },
      { label: '日向创的抉择', value: '与七海残影共鸣，带着信念开启强制关机' }
    ],
    relatedCharacterId: 'hajime',
    themeAccent: '#FF007F'
  },
  {
    pageNumber: 42,
    sectionId: 'trials',
    sectionLabel: 'SECTION IV · 六大学级裁判卷宗',
    layoutType: 'trial-debate',
    kicker: 'CLASS TRIAL 06 · 终局学级裁判实机互动',
    title: '论破模拟 #06：黄金觉醒！将“未来（MIRAI）”化作终极言弹轰碎绝望',
    subtitle: '装填全作最后一发言弹【未来】，击碎江之岛盾子与神座出流的宿命论！',
    heroImage: '/assets/cg/cg_01.jpg',
    secondaryImage: '/assets/chars/hajime.jpg',
    imageCaption: 'Fig. 42 — 第6章终局高潮：日向创白发金瞳超觉醒，连射“未来”言弹',
    leadParagraph:
      '面对盾子的威逼与自身即将消失的恐惧，日向创一度坠入深沉的黑暗。就在此时，本已处刑消失的七海千秋再次出现在他的意识空间：“为什么只能在两个糟糕的选项里挑一个呢？只要我们自己去创造第三个选项就好了呀！”',
    bodyColumns: [
      '刹那间，日向创周身爆发出璀璨的金色气焰，头发化作雪白，双瞳融合了日向创的草绿与神座出流的猩红！他不再逃避自己作为预备学科与绝望残党的过去，而是带领九头龙、左右田、索妮亚、赤音与苗木诚一起，将全部言弹化作两个字——“未来（未来/MIRAI）”！',
      '请在下方终局互动模块中装填【未来（MIRAI）】言弹，向江之岛盾子AI发射最后一击！'
    ],
    pullQuote: '“我既不是神座出流，也不会消失——我就是日向创！我们要亲手去创造属于我们的未来！！”',
    sidebarTitle: '终章强制关机与后续结局',
    sidebarItems: [
      { label: '觉醒形态', value: '日向创 × 神座出流 超高校级的未来觉醒' },
      { label: '处刑黑幕', value: '黑白美持魔法棒将巨型江之岛盾子AI彻底粉碎' },
      { label: '现实尾声', value: '日向等5人在贾巴沃克岛现实设施苏醒，守护昏迷同伴' },
      { label: '动画完结', value: '于《弹丸论破3：希望篇》全员15人奇迹苏醒团聚' }
    ],
    relatedCharacterId: 'hajime',
    interactiveTrial: {
      trialChapter: 6,
      caseTitle: '第6章：新世界程序终局审判 · 毕业投票',
      speakerName: '江之岛 盾子 AI',
      speakerPortrait: '/assets/chars/junko.jpg',
      mode: 'rebuttal',
      statements: [
        { id: 's1', text: '哈哈哈哈！不管是选择毕业毁灭世界，还是选择关机变回空壳，', isTarget: false },
        { id: 's2', text: '你们这群绝望残党早就没有任何未来可言了呀！', highlightWord: '没有任何未来可言', isTarget: true },
        { id: 's3', text: '乖乖在希望与绝望的夹缝里崩溃吧！', isTarget: false }
      ],
      bullets: [
        { id: 'b6_hope', name: '苗木诚的希望言弹', description: '未来机关带来的传统希望理念。' },
        { id: 'b6_mirai', name: '未来（MIRAI）', description: '由日向创与七海千秋共同铸就的终极言弹：超越希望与绝望，由自己亲手创造的无限可能。' },
        { id: 'b6_rules', name: '修学旅行校规手册', description: '兔美制定的新世界程序底层安全守则。' }
      ],
      correctBulletId: 'b6_mirai',
      breakthroughText: '终极論破完成（SORE WA CHIGAU YO）！！日向创以“未来（MIRAI）”言弹彻底轰碎了江之岛盾子的二元死局，五名生还者与苗木诚共同按下强制关机，迎来了真正的黎明！'
    },
    themeAccent: '#10B981'
  },
  {
    pageNumber: 43,
    sectionId: 'systems',
    sectionLabel: 'SECTION V · 高速推理系统剖析',
    layoutType: 'system-breakdown',
    kicker: 'SYSTEM EVOLUTION 01 · 不间断讨论双轨制',
    title: '高速推理动作再进化：从“唯我独尊的驳斥”到“寻找共鸣的赞同言弹”',
    subtitle: '为什么《超级弹丸论破2》在粉色的反驳言弹之外，新增了蓝色的赞同言弹（Agree）？',
    heroImage: '/assets/cg/cg_05.jpg',
    secondaryImage: '/assets/chars/sonia.jpg',
    imageCaption: 'Fig. 43 — 实机系统画面：学级裁判中的高速不间断讨论（Nonstop Debate）与言弹装填',
    leadParagraph:
      '在初代《弹丸论破》中，玩家在“不间断讨论”里的唯一操作就是用粉色言弹击碎别人的谎言（即“那是不对的 / それは違うよ”）。而在《超级弹丸论破2》中，制作组引入了蓝色的“赞同言弹（俺もそう思う / 我也这么认为）”，彻底改变了学级裁判的叙事温度。',
    bodyColumns: [
      '当画面上飘过橙黄色的薄弱发言时，玩家必须用粉色的反驳言弹将其击破；而当同伴提出极具建设性、却缺乏物证支撑的蓝色高光假说时，玩家则需要切换为蓝色言弹，用搜集到的证据去“托举并证实同伴的直觉”。',
      '这一机制不仅让推理维度翻倍，更在潜移默化中强化了第77期生的团队感——日向创不再是一个孤军奋战审判所有人的侦探，而是与七海、索妮亚、九头龙、赤音等人并肩拼凑真相的伙伴。'
    ],
    pullQuote: '推理不再只是冷酷地指责同伴的谎言，更是用证据去回应同伴勇敢提出的直觉。',
    sidebarTitle: '不间断讨论核心机制参数',
    sidebarItems: [
      { label: '反驳言弹（粉）', value: '针对橙黄色矛盾发言，触发“那是不对的！”' },
      { label: '赞同言弹（蓝）', value: '针对天蓝色直觉发言，触发“我也这么认为！”' },
      { label: '杂音消除（消音）', value: '击碎遮挡视线的紫色闲聊弹幕并延长时限' },
      { label: '精神集中（慢放）', value: '消耗专注槽减缓文字飞掠速度以精准瞄准' }
    ],
    relatedCharacterId: 'sonia',
    themeAccent: '#00B4D8'
  },
  {
    pageNumber: 44,
    sectionId: 'systems',
    sectionLabel: 'SECTION V · 高速推理系统剖析',
    layoutType: 'system-breakdown',
    kicker: 'SYSTEM EVOLUTION 02 · 反论对决与逻辑潜行',
    title: '反论 Showdown 刀剑斩击 & Logic Dive 赛博滑板潜行',
    subtitle: '将法庭唇枪舌剑视觉化为格斗游戏般的“一刀两断”与脑内立体跑酷',
    heroImage: '/assets/cg/cg_07.jpg',
    secondaryImage: '/assets/chars/hajime.jpg',
    imageCaption: 'Fig. 44 — 实机系统画面：同伴拍案而起发起“反论Showdown”与刀光斩击演出',
    leadParagraph:
      '如果说初代的法庭辩论还带有传统文字AVG的克制，那么二代新增的“反论 Showdown（Rebuttal Showdown）”与“逻辑潜行（Logic Dive）”则彻底将推理游戏推向了街机动作化的高潮。',
    bodyColumns: [
      '【反论 Showdown】当日向创的推理触及某位同伴的痛处时，对方会高喊着“你给我适可而止！”拍案杀出。此时日向创需要像竹刀格斗一样，通过上、下、左、右及斜向挥砍，把对方源源不断袭来的辩词词条一刀两断，把战线推回对方半场后，在对方露出破绽的瞬间用“真打·言刃”一剑封喉！',
      '【逻辑潜行 Logic Dive】当需要串联复杂的空间或因果链条时，日向创会踩着荧光滑板冲入五彩斑斓的脑内神经管道（这也暗合了本作实为虚拟电子空间的伏笔），在高速躲避深渊与障碍的同时，冲向正确的逻辑分岔口。'
    ],
    pullQuote: '把语言变成具象的刀锋，把思考变成赛博空间的极速冲浪。',
    sidebarTitle: '两大新动作推理模式解析',
    sidebarItems: [
      { label: '反论 Showdown', value: '八方向言刃斩击压制战线 + 真打一刀两断' },
      { label: '代表对决场次', value: '第2章对九头龙/边古山、第4章对左右田/田中' },
      { label: '逻辑潜行', value: '3D管道滑板跑酷 + 关键逻辑三选一分岔跳台' },
      { label: '世界观暗喻', value: '脑内电子管道直接预示了新世界程序的虚拟本质' }
    ],
    relatedCharacterId: 'hajime',
    themeAccent: '#10B981'
  },
  {
    pageNumber: 45,
    sectionId: 'systems',
    sectionLabel: 'SECTION V · 高速推理系统剖析',
    layoutType: 'system-breakdown',
    kicker: 'SYSTEM EVOLUTION 03 · 闪耀字谜2.0与高潮推理',
    title: '闪耀字谜（改良版）、恐慌讨论（P.T.A.）与全语音高潮推理漫画',
    subtitle: '节奏游戏、拼字消除与美式硬派漫画分镜在终局审讯中的完美合流',
    heroImage: '/assets/cg/cg_09.jpg',
    secondaryImage: '/assets/chars/mikan.jpg',
    imageCaption: 'Fig. 45 — 实机系统画面：学级裁判尾声的恐慌讨论（P.T.A.）与高潮推理',
    leadParagraph:
      '在一场长达两小时的学级裁判中，如何让玩家的肾上腺素始终维持在高位？《超级弹丸论破2》通过精密编排五种截然不同的玩法模块，构建出了犹如交响乐般的审判节奏。',
    bodyColumns: [
      '【闪耀字谜（改良版）】相比初代单纯射击字母，二代要求玩家先将同色系的漂浮字母碰撞合体，再按顺序填入关键词槽位，一旦异色字母相撞还会引发爆炸扣血，极大考验了眼手协调。',
      '【恐慌讨论 P.T.A. & 高潮推理】当真凶在最后关头彻底破防、伴随高BPM电音疯狂咆哮时，进入节奏音游式的“Panic Talk Action”，最终在拼齐最后一格“高潮推理（Closing Argument）”漫画分镜后，由高山南全语音演绎罪案全貌：“犯人就是你——！”'
    ],
    pullQuote: '当高潮推理漫画的最后一格拼图嵌入框内，所有的谎言都在高田雅史的电音中灰飞烟灭。',
    sidebarTitle: '学级裁判五段式标准流程',
    sidebarItems: [
      { label: '第一乐章', value: '不间断讨论（反驳与赞同）理清基础事实' },
      { label: '第二乐章', value: '闪耀字谜2.0 + 逻辑潜行 推导核心机关' },
      { label: '第三乐章', value: '反论 Showdown 击溃嫌疑人或包庇者的防线' },
      { label: '终曲高潮', value: '高潮推理漫画重构全案 + P.T.A.节奏处决' }
    ],
    relatedCharacterId: 'mikan',
    themeAccent: '#EC4899'
  },
  {
    pageNumber: 46,
    sectionId: 'systems',
    sectionLabel: 'SECTION V · 高速推理系统剖析',
    layoutType: 'system-breakdown',
    kicker: 'EXTRA MODES · 通关后特典全收录',
    title: '爱岛模式（Island Mode）、魔法少女奇迹★黑白美与电子宠物图鉴',
    subtitle: '假如黑白熊从未篡夺修学旅行——全员存活、收集希望与恋心的IF平行世界',
    heroImage: '/assets/cg/cg_11.jpg',
    secondaryImage: '/assets/chars/monomi.jpg',
    imageCaption: 'Fig. 46 — 官方特典画面：主线通关后解锁的《魔法少女奇迹★黑白美》与爱岛模式',
    leadParagraph:
      '在经历过主线6个章节催人泪下的生离死别后，通关玩家最渴望的莫过于一个“没有任何人死去”的温柔世界。而通关后解锁的《爱岛模式（Island Mode）》，正是官方献给所有玩家与第77期生的最佳治愈礼。',
    bodyColumns: [
      '在爱岛模式中，兔美成功保住了魔法棒，全员16名学生一个不少地在贾巴沃克岛度过50天的和平修学旅行。玩家不仅可以通过打扫采矿制作兔美指定的道具，还能使用“外出券”邀请任意同学前往海滩、游乐园或图书馆约会，解锁全员专属的恋爱/挚友结局！',
      '此外，游戏还内置了爽快的割草动作小游戏《魔法少女奇迹★黑白美》、电子学生手册里的计步器“电子宠物养成”，以及干货满满的伪小说《弹丸论破IF（如果苗木诚在初代抽中逃脱按钮拯救战刃骸的平行世界）》。'
    ],
    pullQuote: '在主线里未能送出的礼物、未能说完的自由行动，都能在那片永远晴朗的“爱岛”上一一弥补。',
    sidebarTitle: '通关特典四大附加内容',
    sidebarItems: [
      { label: '爱岛模式', value: '50天和平修学旅行，解锁15名角色专属告白结局' },
      { label: '奇迹★黑白美', value: '操纵黑白美画圈围剿黑白熊猛兽的动作闯关' },
      { label: '弹丸论破 IF', value: '成田良悟执笔，战刃骸与78期生全员生还官方小说' },
      { label: '电子宠物', value: '随行走步数进化的黑白熊/兔美像素养成器' }
    ],
    relatedCharacterId: 'monomi',
    themeAccent: '#F59E0B'
  },
  {
    pageNumber: 47,
    sectionId: 'staff',
    sectionLabel: 'SECTION VI · 主创访谈与终章',
    layoutType: 'interview',
    kicker: 'STAFF INTERVIEW · 主创核心访谈录',
    title: '小高和刚（剧本）× 小松崎类（人设）× 寺泽善德（制作人）纪念对谈',
    subtitle: '“我们一开始就决定，二代绝对不能只做初代的简单复制品”',
    heroImage: '/assets/cg/cg_01.jpg',
    secondaryImage: '/assets/chars/nagito.jpg',
    imageCaption: 'Fig. 47 — 主创访谈配图：从最初的概念草图到重塑系列高度的《再见绝望学园》',
    leadParagraph:
      '【本刊特约纪念编译】当2010年PSP初代《弹丸论破》凭借口碑逆袭成为现象级黑马后，玩家对续作的期待达到了顶峰。然而剧本主笔小高和刚与角色设计小松崎类却达成了一个大胆的共识：彻底抛弃幽闭教学楼，把舞台搬到最不适合严肃推理的南国度假岛！',
    bodyColumns: [
      '【小高和刚谈狛枝与第五章】“在构思二代时，我想创造一个连黑白熊都感到棘手的‘搅局者’。狛枝凪斗的名字虽然来自苗木诚的字母重组，但他的价值观完全是苗木的反面。到了第五章，我想挑战推理小说的极限——既然超高校级的幸运是真实存在的设定，为什么不能把‘幸运本身’直接作为核心诡计？”',
      '【小松崎类谈第77期生造型】“因为舞台在炎热的南国，角色服装如果像初代那样全是深色校服会显得太沉闷。所以我们大量使用了亮色、夏装、视觉系穿孔（唯吹）、连体工装（左右田）与振袖和服（西园寺），让16个人站在一起就像一盘打翻的热带水果糖。”'
    ],
    pullQuote: '“把‘超高校级的幸运’直接作为第五章杀人诡计的核心，是我们最疯狂也最自豪的尝试。” —— 小高和刚',
    sidebarTitle: '《超级弹丸论破2》开发秘闻',
    sidebarItems: [
      { label: '首发平台与年份', value: '2012年7月26日 PSP首发 / 后移植PS4·PC·NS' },
      { label: '剧本/企划', value: '小高和刚（Kazutaka Kodaka）' },
      { label: '角色设计', value: '小松崎类（Rui Komatsuzaki）' },
      { label: 'Fami通殿堂评分', value: '37/40 白金殿堂入列 · 读者票选最佳AVG' }
    ],
    relatedCharacterId: 'nagito',
    themeAccent: '#FF007F'
  },
  {
    pageNumber: 48,
    sectionId: 'staff',
    sectionLabel: 'SECTION VI · 主创访谈与终章',
    layoutType: 'interview',
    kicker: 'SOUNDTRACK ARCHIVE · 高田雅史原声音乐剖析',
    title: '高田雅史的电音魔术：从海岛漫步〈Beautiful Ruin〉到法庭燃曲〈議論 -HEAT UP-〉',
    subtitle: '将8-Bit复古芯片音色、热带Bossa Nova与高速工业电音熔于一炉的听觉盛宴',
    heroImage: '/assets/cg/cg_03.jpg',
    secondaryImage: '/assets/chars/ibuki.jpg',
    imageCaption: 'Fig. 48 — 音乐特辑：贯穿贾巴沃克岛昼夜探索与学级裁判的经典原声曲目单',
    leadParagraph:
      '提到《超级弹丸论破2》让人瞬间起鸡皮疙瘩的沉浸感，作曲家高田雅史（Masafumi Takada）打造的OST原声带功不可没。他在保留系列标志性主旋律的基础上，为二代注入了浓郁的夏日海风与8-Bit电子脉冲。',
    bodyColumns: [
      '每日清晨伴随8-Bit像素小人横版走过屏幕响起的〈Beautiful Ruin (Summer Salt)〉，用轻快的吉他扫弦与电子合成器瞬间勾勒出贾巴沃克岛悠闲又略带虚幻的氛围；而当玩家踏入第二岛屿古代遗迹或发现尸体时，诡谲的〈Ikoroshia（イコロシア）〉则会瞬间让空气凝固。',
      '而在学级裁判中，从〈議論 -BREAK-〉到反论对决的〈議論 -BLOW BACK-〉，再到第六章日向创黄金觉醒时响起的变奏版〈New World Order〉与高潮推理曲〈クライマックス推理〉，每一首曲目都精准踩在玩家逻辑突破的节拍点上。'
    ],
    pullQuote: '只要〈Beautiful Ruin〉的前奏响起，无数玩家的思绪就会立刻回到那片盛夏的像素沙滩。',
    sidebarTitle: '精选必听原声曲目（OST Top 5）',
    sidebarItems: [
      { label: '01. DANGANRONPA Super Mix', value: '融入热带打击乐的二代开场主题曲' },
      { label: '02. Beautiful Ruin [16bit]', value: '贾巴沃克岛日常探索代表神曲' },
      { label: '03. イコロシア (Ikoroshia)', value: '非日常篇搜查开启时的经典悬疑曲' },
      { label: '04. 議論 -HEAT UP-', value: '学级裁判最终阶段全员高速交锋BGM' },
      { label: '05. 夕暮れの海のテーマ', value: '夕阳海滩与告别时刻的催泪钢琴曲' }
    ],
    relatedCharacterId: 'ibuki',
    themeAccent: '#00B4D8'
  },
  {
    pageNumber: 49,
    sectionId: 'staff',
    sectionLabel: 'SECTION VI · 主创访谈与终章',
    layoutType: 'feature-spread',
    kicker: 'CHRONOLOGY · 希望峰学园宇宙完全时间轴',
    title: '从《绝望篇》到《希望篇》：第77期生全员苏醒的奇迹完结之路',
    subtitle: '在贾巴沃克岛倒下的同伴们，最终如何在现实世界中重逢？',
    heroImage: '/assets/cg/cg_13.jpg',
    secondaryImage: '/assets/chars/chiaki.jpg',
    imageCaption: 'Fig. 49 — 跨媒体时间轴：连接游戏本篇与《弹丸论破3》动画完结篇的命运轨迹',
    leadParagraph:
      '许多初次通关《超级弹丸论破2》的玩家都会悬着一颗心：在第一至第五章新世界程序中死去从而在现实中陷入脑死亡状态的十神（欺诈师）、花村、真昼、佩子、唯吹、日寄子、蜜柑、贰大、田中与狛枝，究竟还有没有醒过来的可能？',
    bodyColumns: [
      '答案在官方正统完结篇《弹丸论破3 -The End of 希望峰学园-》中得到了最圆满的回应！在《绝望篇》里，我们见证了现实中的人类七海千秋如何作为班长把第77期生凝聚成一个温暖的大家庭；而在二代结局之后，同时拥有日向创本心与神座出流全能才华的日向，利用超越常理的医学与神经科学手段，日夜不休地修复同伴们的脑部创伤。',
      '最终在《希望篇》的决战时刻，包括装上义肢的狛枝凪斗、重逢的九头龙与边古山、生龙活虎的贰大与田中在内的第77期生15人全员奇迹苏醒！他们乘船赶赴未来机关总部替苗木诚解围，随后在七海千秋温柔的注视下，扬帆驶向崭新的贾巴沃克岛。'
    ],
    pullQuote: '即使经历过最深沉的绝望，第77期生最终依然兑现了“全员一起迈向未来”的约定。',
    sidebarTitle: '希望峰学园编年史核心顺序',
    sidebarItems: [
      { label: '年代 01', value: '《弹丸论破3：绝望篇》77期生入学日常与神座计划' },
      { label: '年代 02', value: '《弹丸论破 Zero》与初代《希望的学园和绝望的高中生》' },
      { label: '年代 03', value: '《绝对绝望少女》与《超级弹丸论破2：再见绝望学园》' },
      { label: '年代 04', value: '《弹丸论破3：未来篇/希望篇》77期生全员苏醒大团圆' }
    ],
    relatedCharacterId: 'chiaki',
    themeAccent: '#10B981'
  },
  {
    pageNumber: 50,
    sectionId: 'staff',
    sectionLabel: 'BACK COVER · 封底毕业特辑',
    layoutType: 'back-cover',
    kicker: 'FINAL PAGE 50 / 50 · 纪念周刊封底 & 毕业证书',
    title: 'GOODBYE DESPAIR, HELLO FUTURE // 再见绝望学园，向着未来起航',
    subtitle: '感谢阅读全50页《超级弹丸论破2：再见绝望学园》纪念周刊 · 修学旅行全卷完结',
    heroImage: '/assets/cg/header.jpg',
    secondaryImage: '/assets/cg/logo.png',
    imageCaption: 'Fig. 50 — 纪念周刊封底：私立希望峰学园第77期修学旅行完结印章',
    leadParagraph:
      '翻至本刊第50页，这场横跨贾巴沃克群岛五座分岛、16位超高校级伙伴与六场学级裁判的修学旅行纪念特辑正式画上句号。无论你是刚刚揭开新世界程序真相的新读者，还是十年后重温这份感动的系列老玩家，第77期生在盛夏海风中留下的笑与泪都永不褪色。',
    bodyColumns: [
      '您可以通过下方按钮随时打开【互动角色档案（电子学生手册）】继续收集全员希望碎片，或点击任意章节跳转重温六场学级裁判的言弹论破模拟。',
      '“只要还有可能性，就绝对不能放弃通关。”——愿每一位合上这本电子周刊的读者，都能在充满不确定性的现实世界里，像日向创与七海千秋一样，坚定地选择属于自己的未来！'
    ],
    pullQuote: '謹んで卒業を証します —— 私立希望ヶ峰学園 第77期生 修学旅行記念週刊 完。',
    sidebarTitle: '纪念周刊版权与制作铭牌',
    sidebarItems: [
      { label: '原著致敬', value: 'Spike Chunsoft《超级弹丸论破2：再见绝望学园》' },
      { label: '刊物总页数', value: '50 Pages Full Archive (P.01 - P.50)' },
      { label: '收录CG与立绘', value: '官方实机CG 16幅 + 角色立绘 19幅 + 像素精灵' },
      { label: '修学旅行状态', value: '全卷修业达成 · HOPE SHARDS COLLECTED' }
    ],
    relatedCharacterId: 'hajime',
    themeAccent: '#FF007F'
  }
];
