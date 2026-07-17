import type { DefaultTheme } from "vitepress";

const route = (...segments: string[]): string =>
  encodeURI(`/bluebook/${segments.map((segment) => segment.trim()).join("/")}/`);

const part1 = "第一篇 使用手册：先把 WorkBuddy 用起来";
const part2 = "第二篇 案例篇：从一项任务到一支 AI 团队";
const part3 = "第三篇 进阶篇：把案例变成自己的工作系统";
const part4 = "第四篇 岗位与行业落地";
const appendix = "附录";

const item = (directory: string, text = directory): DefaultTheme.SidebarItem => ({
  text,
  link: route(directory),
});

const child = (
  parent: string,
  directory: string,
  text = directory,
): DefaultTheme.SidebarItem => ({
  text,
  link: route(parent, directory),
});

export const bluebookSidebar: DefaultTheme.Sidebar = {
  "/bluebook/": [
    { text: "蓝皮书总览", link: "/bluebook/" },
    {
      text: "第一篇 · 使用手册",
      collapsed: false,
      items: [
        item(part1, "本篇导读"),
        child(part1, "第 1 章 初识 WorkBuddy"),
        child(part1, "第 2 章 WorkBuddy的下载、安装、登录与更新"),
        child(part1, "第 3 章 WorkBuddy 的主界面、任务与工作区"),
        child(part1, "第 4 章 快速完成第一个 WorkBuddy 任务"),
        child(part1, "第 5 章 WorkBuddy加载一个真正用得上的 Skill"),
        child(part1, "第 6 章 WorkBuddy的专家和专家团"),
        child(part1, "第 7 章 WorkBuddy 使用连接器"),
        child(part1, "第 8 章 WorkBuddy 接入小程序与 IM 助理"),
        child(part1, "第 9 章 如何接入外部 API"),
        child(part1, "第 10 章 WorkBuddy 自动化任务"),
        child(part1, "课外阅读：一章看懂 AI 工作系统"),
      ],
    },
    {
      text: "第二篇 · 通用办公实战",
      collapsed: false,
      items: [
        item(part2, "本篇导读"),
        child(part2, "第 11 章 办公三件套：Word、Excel、PPT", "第 11 章 办公交付与格式检查"),
        child(part2, "第 12 章 从整理桌面文件这些小事做起", "第 12 章 文件、版本与归档治理"),
        child(part2, "第 13 章 远程控制你的电脑，不用发愁不在电脑前", "第 13 章 安全远程协作与排障"),
        child(part2, "第 14 章 生活助手的价值，是减少琐碎", "第 14 章 把需求变成可验收任务"),
        child(part2, "第 15 章 资讯整合：把信息流变成每日通知", "第 15 章 信息筛选、复核与发布"),
        child(part2, "第 16 章 收藏不是知识管理，能再次用起来才是", "第 16 章 可复用知识资产"),
        child(part2, "第 17 章 会议结束不是终点，工作才刚刚开始", "第 17 章 数据分析与可视化"),
        child(part2, "第 18 章 公文编制"),
        child(part2, "第 19 章 会议与待办"),
        child(part2, "第 20 章 制度与知识管理"),
        child(part2, "第 21 章 项目研判分析"),
      ],
    },
    {
      text: "第三篇 · 进阶系统",
      collapsed: false,
      items: [
        item(part3, "本篇导读"),
        child(part3, "第 22 章 打造skill：将书和视频蒸馏为可执行 Skill", "第 22 章 把方法制作成 Skill"),
        child(part3, "第 23 章 其他用法补充：WorkBuddy 实操案例集", "第 23 章 通用任务方法库"),
        child(part3, "第 24 章 如何进行多 Agent 系统设计", "第 24 章 多 Agent 分工与复核"),
        child(part3, "第 25 章 自动化工作流的可靠性", "第 25 章 可靠自动化"),
      ],
    },
    {
      text: "第四篇 · 任务与成果落地",
      collapsed: false,
      items: [
        item(part4, "本篇导读"),
        child(part4, "第 26 章 岗位路线图：不同岗位如何把 WorkBuddy 用深", "第 26 章 按任务责任选择用法"),
        child(part4, "第 27 章 行业路线图：从通用能力到行业工作流", "第 27 章 通用成果工作流"),
      ],
    },
    {
      text: "附录",
      collapsed: false,
      items: [
        item(appendix, "附录导读"),
        child(appendix, "附录 A 常用指令模板"),
        child(appendix, "附录 B 场景速查表"),
        child(appendix, "附录 C 历史踩坑与故障排查"),
        child(appendix, "附录 D 脱敏与公开检查表"),
        child(appendix, "附录 E 从成果到可复用资产"),
        child(appendix, "附录 F 备份、校验与恢复演练"),
      ],
    },
  ],
};
