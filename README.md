# 《超级弹丸论破2：再见绝望学园》完全纪念周刊 (50页互动电子杂志)

> **WEEKLY HOPE’S PEAK ARCHIVE · ISSUE NO.77-B**  
> 一部以日本游戏纪念周刊（如《Fami通》《电击PlayStation》周年特刊）视觉规格打造的 **50页全彩互动式 HTML 电子杂志**。收录官方实机高清 CG、私立希望峰学园第77期生 **18人互动式电子学生手册（e-Handbook）**、**六大学级裁判言弹实演系统** 以及 **群岛全境建筑地理志**。

---

## 核心特性

1. **真实周刊杂志版式与50页完整内容（P.01 – P.50）**
   - 支持 **双页跨页（Spread View）** 与 **单页精读（Single Page）** 随时切换，还原实体周刊中缝书脊阴影、象牙白杂志纸张肌理、首字下沉（Drop Cap）、双栏正文排版与底部名言引述（Pull Quote）。
   - 支持键盘 `←` / `→` 方向键翻页、顶部 1–50 页下拉跳页、底部 **50页页码直达轨（Quick Scrubber）**、书签夹藏及阅读探索度实时统计。

2. **第77期生互动式电子学生手册（Interactive Character Dossier）**
   - 完整收录 **第77期生16名超高校级学生**（日向创、狛枝凪斗、七海千秋、澪田唯吹、罪木蜜柑、九头龙冬彦、边古山佩子、田中眼蛇梦、索尼娅、左右田和一、小泉真昼、西园寺日寄子、终里赤音、贰大猫丸、花村辉辉、十神白夜）及 **黑白熊、黑白美（Usami）** 共 18 份档案。
   - **五维能力雷达图（SVG）**：直观展示推理、精神、行动、幸运、共情五维数值与杂志编辑部深度人物评述。
   - **自由行动与希望碎片（Hope Shards）**：点击「进行自由行动 (+1)」逐级解锁每位角色 5 阶段通信簿隐藏深度档案，并可模拟赠送黑白熊扭蛋礼物测试好感度反馈。
   - **专属言弹实演**：针对每位角色在学级裁判中的核心矛盾发言，一键发射专属言弹触发「論破 / 賛同（BREAK!!）」动画演出。
   - **中配 / 日配声优原音台词检视** 与 **8-bit 动态像素小人（Pixel Sprite Parade）**。

3. **六大学级裁判「不间断讨论（Nonstop Debate）」互动解谜**
   - 在第 32、34、36、38、40、42 页内嵌可游玩的 **学级裁判言弹装填与射击系统**。
   - 读者需从左轮弹巢（Truth Bullet Cylinder）中选择正确证物言弹，瞄准证言中的高光矛盾词句发射「反驳言弹（粉色）」或「赞同言弹（蓝色）」，重现全六章核心推理突破瞬间。

4. **官方高清实机 CG 典藏馆与全屏检视灯箱（Lightbox）**
   - 本地化收录 **16 幅官方高清实机 CG 与宣传原画** 及 **19 幅角色立绘**（存放于 `public/assets/`），零跨域问题，支持离线或纯静态托管秒开浏览。

---

## 全50页纪念周刊目录结构

| 特辑卷号 | 页码范围 | 专题内容概要 |
| :--- | :--- | :--- |
| **VOL.01 卷首与世界观** | `P.01 – P.06` | 封面主视觉、跨页导言、全50页互动总目录、贾巴沃克岛修学旅行企划书、黑白熊篡权事变、Psycho-Tropical（迷幻热带）色彩美学解析 |
| **VOL.02 群岛全境地理志** | `P.07 – P.12` | 中央岛与第一岛屿（旅馆旧馆/十神案现场）、第二岛屿（海之家/图书馆/黄昏症候群街机）、第三岛屿（医院/Titty Typhoon音乐厅）、第四岛屿（惊奇屋草莓屋与葡萄屋双塔机关）、第五岛屿（军事基地/旧仓库）与新世界程序底层架构 |
| **VOL.03 77期生独占档案** | `P.13 – P.30` | 第77期生16名超高校级学生 + 黑白熊 & 黑白美 **每人独立一页深度专题**（均带一键直达互动电子手册按钮） |
| **VOL.04 六大学级裁判卷宗** | `P.31 – P.42` | 第1章至第6章完整案件搜查卷宗（奇数页）+ **可互动游玩的学级裁判言弹论破实演（偶数页）** |
| **VOL.05 高速推理系统剖析** | `P.43 – P.46` | 不间断讨论与同意言弹机制、反论 Showdown 与逻辑潜行（Logic Dive）、恐慌讨论（P.T.A.）与闪耀字谜 2.0、通关特典（弹丸岛模式/魔法少女黑白美/小说《弹丸论破IF》） |
| **VOL.06 主创访谈与终章** | `P.47 – P.50` | 小高和刚剧本架构访谈、小松崎类 2.5D 角色与处刑美术手记、高田雅史配乐赏析、封底修学旅行毕业证书互动盖章与完结寄语 |

---

## 部署为 GitHub Pages 静态网站指南

本项目已完成 **纯静态网站（Static SPA）** 适配：
- `vite.config.ts` 已配置 `base: './'`（相对路径打包），同时通过 `resolveAssetUrl()` 处理所有图片资源路径，无论部署在根域名还是 GitHub Pages 子路径（如 `https://<你的用户名>.github.io/<仓库名>/`）均可完美加载所有 CG 与角色立绘。
- 已内置 `.github/workflows/deploy.yml` 自动化构建与发布工作流，以及 `public/.nojekyll` 防拦截配置。

### 方式一：通过 GitHub Actions 自动发布到 GitHub Pages（推荐）

当你将代码推送到 GitHub 仓库（`main` 或 `master` 分支）后，只需在 GitHub 网页端开启 Pages 权限即可自动发布：

1. 打开你的 GitHub 仓库页面，点击顶部导航栏的 **Settings（设置）**。
2. 在左侧菜单栏找到并点击 **Pages**。
3. 在 **Build and deployment** -> **Source** 下拉菜单中，将默认的 `Deploy from a branch` 切换为 **`GitHub Actions`**。
4. 点击顶部导航栏的 **Actions** 标签页：
   - 如果推送时已触发 **Deploy Static Magazine to GitHub Pages** 工作流，等待约 1 分钟即可完成测试、构建与发布。
   - 你也可以随时点击左侧 **Deploy Static Magazine to GitHub Pages** -> 右侧 **Run workflow** 手动触发部署。
5. 部署完成后，在 **Settings -> Pages** 页面顶部即可看到生成的静态网站访问链接：
   ```text
   https://<你的GitHub用户名>.github.io/<你的仓库名>/
   ```

### 方式二：同步至 Vercel / Netlify / Cloudflare Pages

如果你希望绑定自定义域名或使用第三方静态托管平台，可直接导入你的 GitHub 仓库并按以下参数配置：
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: `20.x` 或 `22.x`

---

## 本地开发与构建命令

确保本地已安装 **Node.js (v20+ 或 v22+)**，在项目根目录下执行：

```bash
# 1. 安装项目依赖
npm install

# 2. 启动本地开发服务器 (默认运行于 http://localhost:3000)
npm run dev

# 3. 运行单元测试 (校验50页完整数据、18名角色档案及翻页/言弹判定逻辑)
npm test

# 4. 打包生成生产环境静态网站 (输出至 ./dist 目录)
npm run build

# 5. 本地预览打包后的静态网站
npm run preview
```

---

## 项目目录结构

```text
├── .github/
│   └── workflows/
│       └── deploy.yml                  # GitHub Pages 自动测试、构建与部署工作流
├── public/
│   ├── .nojekyll                       # 禁用 GitHub Pages 默认 Jekyll 处理以加速静态资源托管
│   └── assets/
│       ├── cg/                         # 16幅官方高清实机CG、主视觉图与Logo
│       └── chars/                      # 19幅第77期生、黑白熊、黑白美、神座出流等角色立绘
├── src/
│   ├── components/
│   │   ├── MagazinePageRenderer.tsx    # 全50页周刊版式渲染器（封面/目录/跨页/角色专页/法庭实演/封底）
│   │   ├── CharacterDossierModal.tsx   # 18人互动式电子学生手册（五维雷达图/希望碎片/礼物测试/言弹实演）
│   │   ├── FiftyPageIndexModal.tsx     # 全50页版面缩略图矩阵、分类筛选与关键词检索
│   │   ├── CgGalleryView.tsx           # 官方实机CG典藏画廊与高分辨率全屏检视灯箱（Lightbox）
│   │   └── PixelSpriteIcon.tsx         # 8-bit 动态像素角色图标与杂志图版裁切框组件
│   ├── data/
│   │   ├── magazinePages.ts            # 全50页纪念周刊完整专栏文稿、配图、侧边栏与学级裁判互动题库
│   │   └── charactersData.ts           # 18名角色完整电子手册数据、五维数值、声优台词与希望碎片文本
│   ├── utils/
│   │   ├── magazineLogic.ts            # 跨页计算、页码检索、言弹命中判定与 GitHub Pages 相对路径转换纯函数
│   │   └── magazineLogic.test.ts       # Node.js 原生单元测试套件（8项核心断言）
│   ├── App.tsx                         # 主应用工作台、顶部导航、翻页控制栏与50页快速直达轨
│   ├── index.css                       # 杂志排版字体栈、纸张肌理、中缝书脊阴影与高性能动画样式
│   └── main.tsx                        # React 应用挂载入口
├── index.html                          # 静态网页入口与 Google Fonts 印刷体引入
├── vite.config.ts                      # Vite 静态相对路径（base: './'）构建配置
└── README.md                           # 项目说明与静态网站发布文档
```

---

## 版权与致谢声明

- 本项目所引用的《超级弹丸论破2：再见绝望学园》（*Super Danganronpa 2: Goodbye Despair*）官方实机截图、宣传主视觉图、角色立绘及世界观设定版权均归 **Spike Chunsoft Co., Ltd.** 所有。
- 本项目仅作为非商业性质的粉丝向互动式电子纪念周刊排版与前端工程展示。
