# Jiatong Guo Personal Website

这是 Jiatong Guo 个人学术网站的源码仓库。

- 网站地址：https://jiatongguo.top
- GitHub 仓库：`guojiatong/guojiatong.github.io`
- 当前主分支：`master`
- 技术栈：Jekyll，基于 Academic Pages / Minimal Mistakes 模板定制
- 部署方式：GitHub Pages，`CNAME` 提供自定义域名

## 网站结构

| 路径 | 作用 |
| --- | --- |
| `_config.yml` | 全站配置：标题、域名、作者资料、collections、插件、Sass、permalink 等。修改后需要重启 Jekyll 服务。 |
| `CNAME` | GitHub Pages 自定义域名，目前是 `jiatongguo.top`。 |
| `_data/navigation.yml` | 顶部导航栏配置。目前包含 Publications、Research、News、Blog、MyLife、Contact。 |
| `_pages/` | 主要页面目录。首页是 `_pages/about.md`，因为它设置了 `permalink: /`。 |
| `_posts/` | Blog 文章目录。Blog 列表页路径是 `/posts/`。 |
| `_publications/` | 论文 collection，由 `_pages/publications.html` 渲染。 |
| `_talks/` 和 `_teaching/` | 演讲和教学 collection，保留自 Academic Pages。 |
| `files/` | 对外下载文件，例如 `cv.pdf`、论文 PDF、BibTeX。 |
| `images/` | 头像、favicon、项目图片和站点通用图片。 |
| `images/blog/` | Blog 文章专用图片，部署时会随站点发布。 |
| `_layouts/` 和 `_includes/` | Jekyll / Liquid 页面布局和可复用 HTML 片段。 |
| `_sass/` 和 `assets/` | 样式、JavaScript、字体和前端静态资源。 |
| `markdown_generator/` | 可选脚本和 notebook，用于从 TSV 等数据生成 publications 或 talks。 |
| `talkmap/` 和 `talkmap.ipynb` | 演讲地图相关输出和生成 notebook。 |

## 常见修改位置

个人信息、网站标题、侧边栏资料：`_config.yml`

首页内容：`_pages/about.md`

顶部导航：`_data/navigation.yml`

Research 页面：`_pages/research.md`

News 页面：`_pages/news.md`

Contact 页面：`_pages/contact.md`

论文条目：`_publications/*.md`

Blog 文章：`_posts/*.md`

可下载文件：`files/`

图片资源：`images/`

不要在 Markdown 中引用 `/Users/...` 这类本机绝对路径。部署到 GitHub Pages 后，这些路径会失效。文章图片应复制到 `images/` 下，再用站内路径引用。

## Blog 写作流程

Blog 文章使用 Jekyll 标准命名：

```text
_posts/YYYY-MM-DD-post-title.md
```

推荐 front matter：

```yaml
---
title: "Post Title"
date: YYYY-MM-DD
permalink: /posts/YYYY/MM/post-slug/
published: false
tags:
  - tag-one
  - tag-two
---
```

写草稿时保留：

```yaml
published: false
```

准备发布时，删除这一行或改成：

```yaml
published: true
```

可复用 Blog 模板在：

```text
_posts/2026-05-01-BLOG-TEMPLATE.md
```

Blog 图片建议放在：

```text
images/blog/post-slug/image-name.png
```

Markdown 中这样引用：

```markdown
![Alt text](/images/blog/post-slug/image-name.png)
```

## 本地开发

项目依赖来自 `Gemfile`。macOS 自带 Ruby 版本通常偏旧，建议使用 Homebrew 的 Ruby 3.3。

安装 Ruby 3.3：

```bash
brew install ruby@3.3
```

安装依赖：

```bash
PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH" bundle install
```

启动本地预览：

```bash
PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH" bundle exec jekyll serve -l -H localhost
```

打开：

```text
http://localhost:4000
```

一次性构建：

```bash
PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH" bundle exec jekyll build
```

如果只想验证构建、不想把生成结果写入仓库目录：

```bash
PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH" bundle exec jekyll build --destination /tmp/mywebsite-site
```

## Docker 方式

如果本机安装了 Docker，可以使用仓库中的 `Dockerfile` 和 `docker-compose.yaml`：

```bash
docker compose up
```

然后打开：

```text
http://localhost:4000
```

## JavaScript 资源

主要脚本已编译到 `assets/js/main.min.js`。如果修改了 `assets/js/` 下的源码，重新构建压缩文件：

```bash
npm install
npm run build:js
```

## 发布前检查

发布到 GitHub Pages 前建议检查：

- `bundle exec jekyll build` 能成功。
- 文章图片没有引用本机绝对路径。
- 草稿文章保留 `published: false`。
- 准备发布的文章有正确的 `date`、`permalink` 和 `tags`。
- `_config.yml` 中的网站 URL 和作者信息符合当前状态。
- `CNAME` 仍然是目标自定义域名。

## 模板来源

本网站基于 Academic Pages 定制。Academic Pages 派生自 Minimal Mistakes Jekyll Theme。本仓库 README 已改为当前个人网站的维护说明，不再是上游模板的通用创建指南。
