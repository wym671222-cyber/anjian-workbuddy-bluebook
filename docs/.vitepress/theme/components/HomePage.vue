<script setup lang="ts">
import { withBase } from "vitepress";

import PixelIcon from "./PixelIcon.vue";
import PixelIconSprite from "./PixelIconSprite.vue";
</script>

<template>
  <main class="wb-home">
    <PixelIconSprite />
    <section class="wb-hero" aria-labelledby="wb-hero-title">
      <div class="wb-hero__stage">
        <div class="wb-hero__copy">
          <h1 id="wb-hero-title" class="wb-hero__title--bluebook">
            安居建业 WorkBuddy <span>蓝皮书</span>
          </h1>
          <p class="wb-hero__summary">
            从第一项真实工作，到可复用的 AI 工作系统。
          </p>
          <div class="wb-hero__actions">
            <a class="wb-button wb-button--primary" :href="withBase('/bluebook/')">
              <span>开始阅读</span>
              <PixelIcon name="arrow-right" />
            </a>
            <a class="wb-button wb-button--outline" :href="withBase('/reading-guide')">查看阅读路线</a>
          </div>
        </div>

        <div class="wb-hero__art" aria-label="安居建业 WorkBuddy 能力图标组合">
          <span class="wb-hero__monogram">WORK_SYSTEM_</span>
          <span class="wb-icon-card wb-icon-card--buddy">
            <PixelIcon name="face-grin" />
          </span>
          <span class="wb-icon-card wb-icon-card--book">
            <PixelIcon name="book" />
          </span>
          <span class="wb-icon-card wb-icon-card--flow">
            <PixelIcon name="sitemap" />
          </span>
          <span class="wb-icon-card wb-icon-card--work">
            <PixelIcon name="briefcase" />
          </span>
        </div>
      </div>

      <div class="wb-value-strip" aria-label="蓝皮书价值">
        <div class="wb-value-strip__item">
          <PixelIcon name="check-box" />
          <span><b>真实任务</b><small>REAL TASKS</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="refresh" />
          <span><b>可复现</b><small>REPRODUCIBLE</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="check-box" />
          <span><b>安全合规</b><small>SAFE &amp; COMPLIANT</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="grid" />
          <span><b>系统沉淀</b><small>WORK SYSTEM</small></span>
        </div>
      </div>
    </section>

    <section class="wb-section wb-reading" aria-labelledby="wb-reading-title">
      <div class="wb-section__heading">
        <div>
          <p class="wb-pixel-label">READING PATH / 01—04</p>
          <h2 id="wb-reading-title">四段路径，按你的目标进入</h2>
        </div>
        <p>从基础使用到岗位落地，循序渐进，服务安居建业真实工作。</p>
      </div>

      <div class="wb-reading-grid">
        <a class="wb-reading-card" :href="withBase('/bluebook/第一篇%20使用手册：先把%20WorkBuddy%20用起来/')">
          <span class="wb-reading-card__icon"><PixelIcon name="user" /></span>
          <span class="wb-reading-card__content">
            <small>01</small>
            <strong>基础使用：先把 WorkBuddy 用起来</strong>
            <span>安装、界面、第一个任务、Skill、连接器、API 与自动化。</span>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" :href="withBase('/bluebook/第二篇%20案例篇：从一项任务到一支%20AI%20团队/')">
          <span class="wb-reading-card__icon"><PixelIcon name="briefcase" /></span>
          <span class="wb-reading-card__content">
            <small>02</small>
            <strong>实战案例：解决安居建业真实任务</strong>
            <span>从公司真实场景出发，逐章筛选、复现并沉淀可验收成果。</span>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" :href="withBase('/bluebook/第三篇%20进阶篇：把案例变成自己的工作系统/')">
          <span class="wb-reading-card__icon"><PixelIcon name="sitemap" /></span>
          <span class="wb-reading-card__content">
            <small>03</small>
            <strong>进阶系统：沉淀可复用工作流</strong>
            <span>把有效案例变成 Skill、多 Agent 协作和可靠自动化。</span>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" :href="withBase('/bluebook/第四篇%20岗位与行业落地/')">
          <span class="wb-reading-card__icon"><PixelIcon name="users" /></span>
          <span class="wb-reading-card__content">
            <small>04</small>
            <strong>岗位落地：服务公司核心业务</strong>
            <span>让通用能力匹配岗位职责、业务场景和人工审批边界。</span>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>
      </div>
    </section>

    <section class="wb-section wb-task-index" aria-labelledby="wb-task-index-title">
      <div class="wb-section__heading wb-section__heading--compact">
        <div>
          <p class="wb-pixel-label">START WITH A REAL TASK</p>
          <h2 id="wb-task-index-title">你现在想让 AI 帮你做什么？</h2>
        </div>
        <p>不必从头读。带着问题进来，先跑通一个能验收的结果。</p>
      </div>

      <div class="wb-task-grid">
        <a :href="withBase('/bluebook/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2018%20章%20公文编制/')">
          <PixelIcon name="book" /><strong>公文编制</strong><span>模板 · 审核 · 正式交付</span>
        </a>
        <a :href="withBase('/bluebook/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2019%20章%20会议与待办/')">
          <PixelIcon name="users" /><strong>会议与待办</strong><span>纪要 · 任务 · 跟踪</span>
        </a>
        <a :href="withBase('/bluebook/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2020%20章%20制度与知识管理/')">
          <PixelIcon name="folder-open" /><strong>制度与知识管理</strong><span>比对 · 检索 · 复用</span>
        </a>
        <a :href="withBase('/bluebook/第二篇%20案例篇：从一项任务到一支%20AI%20团队/第%2021%20章%20项目研判分析/')">
          <PixelIcon name="sitemap" /><strong>项目研判分析</strong><span>资料 · 尽调 · 风险</span>
        </a>
      </div>
    </section>

    <section class="wb-section wb-system" aria-labelledby="wb-system-title">
      <div class="wb-system__intro">
        <p class="wb-pixel-label">FROM TASK TO TEAM</p>
        <h2 id="wb-system-title">一次成功，不该只发生一次。</h2>
        <p>蓝皮书真正关心的不是“AI 会什么”，而是如何把一个结果沉淀成稳定、可协作、可复用的工作系统。</p>
      </div>
      <ol class="wb-system__steps">
        <li><b>01</b><strong>真实任务</strong><span>明确目标、输入与责任边界</span></li>
        <li><b>02</b><strong>实战案例</strong><span>复盘过程并形成验收方法</span></li>
        <li><b>03</b><strong>工作流</strong><span>沉淀 Skill、模板与自动化</span></li>
        <li><b>04</b><strong>岗位应用</strong><span>匹配职责并持续改进</span></li>
      </ol>
    </section>

    <section class="wb-community" aria-labelledby="wb-community-title">
      <div>
        <p class="wb-pixel-label">WORKBUDDY BLUEBOOK · CO-CREATION · 2026</p>
        <h2 id="wb-community-title">这本蓝皮书，由安居建业的真实工作共同写成。</h2>
        <p class="wb-community__summary">每个案例都经过筛选、复现与边界检查，再沉淀为可复用的方法。</p>
      </div>
      <div class="wb-community__actions">
        <a class="wb-button wb-button--acid" :href="withBase('/community/contributing#提交案例')">提交案例</a>
        <a class="wb-button wb-button--dark-outline" :href="withBase('/community/contributing')">查看共创规范</a>
      </div>
      <PixelIcon name="book" class="wb-community__icon" />
    </section>
  </main>
</template>
