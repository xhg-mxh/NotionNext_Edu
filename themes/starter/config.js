/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '点亮学生求知路，实习职场新征途', // 英雄区文字
  STARTER_HERO_TITLE_2: '知识滋养，就业保障', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '策划案例查看', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '',
  STARTER_NAV_BUTTON_1_URL: '',

  STARTER_NAV_BUTTON_2_TEXT: '',
  STARTER_NAV_BUTTON_2_URL: '',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '崇远教育', // 特性
  STARTER_FEATURE_TEXT_1: '崇远教育服务', // 特性
  STARTER_FEATURE_TEXT_2:
    '新氧气的愿景是帮助您提供专业、准确的问题解答和就业指导、解决方案。 ', // 特性

  STARTER_FEATURE_1_TITLE_1: '专业性', // 特性1
  STARTER_FEATURE_1_TEXT_1: '拥有一支专业的团队，涵盖教育、职业规划、人力资源等多领域的专家，能够为学生提供专业、准确的问题解答和就业指导', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '', // 特性1

  STARTER_FEATURE_2_TITLE_1: '创新性', // 特性2
  STARTER_FEATURE_2_TEXT_1: '运用先进的科技手段，如在线学习平台、智能匹配系统等，创新服务模式，提高服务效率和质量，满足学生多样化的需求。', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    '', // 特性2

  STARTER_FEATURE_3_TITLE_1: '全面性', // 特性3
  STARTER_FEATURE_3_TEXT_1: '不仅帮助学生解答学习、生活中的各种问题，还提供从职业规划、简历制作、面试辅导到岗位推荐等一站式的就业服务，全方位助力学生发展。', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '', // 特性3

  STARTER_FEATURE_4_TITLE_1: '个性化', // 特性4
  STARTER_FEATURE_4_TEXT_1: '注重学生的个体差异，根据每个学生的兴趣、特长、能力和职业目标，制定个性化的解决方案，实现精准帮扶。', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '资源丰富、服务贴心',
  STARTER_ABOUT_TEXT:
    '秉持以学生为中心的服务理念，关注学生的需求和反馈，提供贴心、周到的服务，让学生感受到温暖和支持。 <br /> <br /> 与众多高校、企业建立了广泛的合作关系，拥有丰富的教育资源和就业渠道，能够为学生提供更多的学习机会和优质的就业岗位。',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: '',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '500+',
  STARTER_ABOUT_TIPS_2: '学生就业',
  STARTER_ABOUT_TIPS_3: '优质就业',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '个人规划',
  STARTER_PRICING_TEXT_1: '很棒的规划方案',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的规划模式，适合各类需求。',

  STARTER_PRICING_1_TITLE: '免费方案',
  STARTER_PRICING_1_PRICE: '0',
  STARTER_PRICING_1_PRICE_CURRENCY: '￥',
  STARTER_PRICING_1_PRICE_PERIOD: '单次咨询',
  STARTER_PRICING_1_HEADER: '服务内容',
  STARTER_PRICING_1_FEATURES: '职业测评,资讯推送,基础咨询,简历分析', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '联系我们',
  STARTER_PRICING_1_BUTTON_URL:
    '',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '初级方案',
  STARTER_PRICING_2_PRICE: '咨询客服',
  STARTER_PRICING_2_PRICE_CURRENCY: ' ',
  STARTER_PRICING_2_PRICE_PERIOD: '短期计划',
  STARTER_PRICING_2_HEADER: '服务内容',
  STARTER_PRICING_2_FEATURES: '包含免费方案内容,一对一咨询,简历优化,面试辅导,课程学习', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '联系我们',
  STARTER_PRICING_2_BUTTON_URL:
    '',

  STARTER_PRICING_3_TITLE: '高级方案',
  STARTER_PRICING_3_PRICE: '咨询客服',
  STARTER_PRICING_3_PRICE_CURRENCY: ' ',
  STARTER_PRICING_3_PRICE_PERIOD: '全程',
  STARTER_PRICING_3_HEADER: '服务内容',
  STARTER_PRICING_3_FEATURES: '专属顾问、深度职业规划、定制化培训、内推机会、面试陪练、全面保障', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '联系我们',
  STARTER_PRICING_3_BUTTON_URL:
    '',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '帮助众多学生解决求职、职业规划的困惑。',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '作为一名计算机专业的应届毕业生，求职路上困难重重。这家机构的就业辅导老师针对计算机岗位需求，帮我优化项目经历，突出技术优势，让简历在众多竞争者中脱颖而出。在模拟面试中，老师对技术问题的深入剖析和回答思路的指导，让我信心大增。最终，我成功拿到一家知名互联网企业的软件开发岗 offer，太感谢他们了！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '用户',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '崇远教育',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '还在读大二的我，对计算机领域的未来发展方向感到迷茫。机构的职业规划导师通过详细的性格和能力测试，结合计算机行业的细分领域，为我制定了专属职业规划。从当下该学习哪些编程语言，到寒暑假适合参加的实践项目，都给出了清晰建议。现在我目标明确，学习也更有动力了，相信未来就业定能水到渠成。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '用户',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '崇远教育',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '这家机构的就业辅导团队详细分析各企业招聘偏好，为我精准匹配岗位。在毕设辅助方面，导师帮我优化算法设计，提升项目完成度。在他们帮助下，我成功入职一家金融科技公司，从事算法开发工作。( •̀ ω •́ )y ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '用户',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '崇远教育',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '计算机专业在校生，一直纠结于前端开发和后端开发该选哪条路。机构的职业规划老师邀请行业资深人士进行分享，并通过实际案例分析，让我清晰了解两者区别与发展前景。老师还为我规划学习路径，现在我按照规划稳步前行，已经在相关实践中取得不错成果，对未来就业充满期待。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '用户',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '崇远教育',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '临近毕业，我投出的简历大多没有回音。机构的就业辅导老师从简历排版、技术关键词运用等细节入手，对我的简历进行全方位改造。同时，针对面试中的技术问答和场景模拟，进行高强度训练。最终，我成功被一家游戏开发公司录用，负责程序开发，真的多亏了他们的专业指导。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '用户',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '崇远教育',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: '你们机构的就业辅导和毕设辅助服务费用高吗？',
  STARTER_FAQ_1_ANSWER:
    '我们的服务费用是综合考虑服务内容、市场行情以及为学员创造的价值来定价的。相比同行，我们提供的是高性价比服务。例如在就业辅导中，从简历优化、面试技巧培训到岗位精准匹配，全程多对一指导；毕设辅助涵盖选题策划、技术难题攻克等。我们还会不定期推出优惠活动和奖学金计划，帮助学员减轻经济压力，让更多人能享受到专业服务。',

  STARTER_FAQ_2_QUESTION: '如何保障辅导服务能切实提升我的就业竞争力和学习质量？',
  STARTER_FAQ_2_ANSWER:
    '我们采用个性化辅导模式，针对每位学员的基础和目标定制方案。就业辅导中，通过模拟面试、简历优化前后对比等方式直观展现效果；我们还与众多企业建立合作关系，了解最新招聘动态，及时调整辅导内容；同时，过往学员的高就业率和优秀毕设成果就是我们服务效果的有力证明。',

  STARTER_FAQ_3_QUESTION: '服务时间是怎样安排的，会不会和我的课程或工作冲突？',
  STARTER_FAQ_3_ANSWER:
    '我们充分考虑学员实际情况，提供灵活服务时间。线上辅导可根据学员空闲时段预约，线下课程也设有多个班次供选择。对于在校学员，会避开上课高峰期；在职学员则利用晚上或周末时间进行辅导。此外，我们还提供 24 小时在线答疑服务，方便学员随时解决遇到的问题，确保服务与学员日程完美适配。',

  STARTER_FAQ_4_QUESTION: '如果在服务结束后，我还有相关问题，能得到后续支持吗？',
  STARTER_FAQ_4_ANSWER:
    '我们的服务并非一锤子买卖。服务结束后，我们依然为学员提供售后支持。设立专门的校友交流群，学员可在群内交流经验、探讨问题；对于就业后遇到职场困惑，或是毕设后续改进需求，我们会安排专业老师提供一定期限内的免费咨询服务，帮助学员持续成长，真正做到对学员负责到底。',

  // 团队成员区块
  STARTER_TEAM_ENABLE: false, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2:
    '新氧气由众多开源技术爱好者们共同合作完成，感谢每一位贡献者',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。Team介绍
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        '',
      STARTER_TEAM_ITEM_NICKNAME: '',
      STARTER_TEAM_ITEM_DESCRIPTION: ''
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '',
      STARTER_TEAM_ITEM_NICKNAME: '',
      STARTER_TEAM_ITEM_DESCRIPTION: ''
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '',
      STARTER_TEAM_ITEM_NICKNAME: '',
      STARTER_TEAM_ITEM_DESCRIPTION: ''
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '',
      STARTER_TEAM_ITEM_NICKNAME: '',
      STARTER_TEAM_ITEM_DESCRIPTION: ''
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于新氧气的最新动态，包括新的动向、新的未来计划，以及新的服务支持',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，河北，石家庄',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'XXXX',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: '', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标，最上方
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '',
      IMAGE_WHITE: '',
      URL: '',
      TITLE: ''
    },
    {
      IMAGE: '',
      IMAGE_WHITE: '',
      URL: '',
      TITLE: ''
    },
    {
      IMAGE: '',
      IMAGE_WHITE: '',
      URL: '',
      TITLE: ''
    },
    {
      IMAGE: '',
      IMAGE_WHITE: '',
      URL: '',
      TITLE: ''
    },
    {
      IMAGE: '',
      IMAGE_WHITE: '',
      URL: '',
      TITLE: ''
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '',
      LINK_GROUP: [
        { TITLE: '', URL: '/#home' },
        { TITLE: '', URL: '' },
        {
          TITLE: '',
          URL: ''
        },
        {
          TITLE: '',
          URL: ''
        }
      ]
    },
    {
      TITLE: '',
      LINK_GROUP: [
        {
          TITLE: '',
          URL: ''
        },
        {
          TITLE: '',
          URL: ''
        },
        { TITLE: '', URL: '' }
      ]
    },
    {
      TITLE: '',
      LINK_GROUP: [
        {
          TITLE: '',
          URL: ''
        },
        {
          TITLE: '',
          URL: ''
        },
        {
          TITLE: '',
          URL: ''
        }
      ]
    }
  ],
//隐私政策等链接
  STARTER_FOOTER_BLOG_LATEST_TITLE: '',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '你还在等待什么呢？',
  STARTER_CTA_TITLE_2: '现在开始吧',
  STARTER_CTA_DESCRIPTION:
    '崇远教育',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    '',
  STARTER_CTA_BUTTON_TEXT: '开始体验',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://www.career.newoxygenit.tech', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
