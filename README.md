# hydro-fonts

Hydro OJ 插件：自托管网页字体。`public/fonts/` 下的文件由 Hydro 以 `/fonts/…` 路径提供，站点不依赖外部 CDN。

自带 **站酷快乐体**（ZCOOL KuaiLe，SIL OFL 许可）。

## 安装

```bash
cd ~/.hydro/addons
git clone https://github.com/hex-chen/hydro-fonts
hydrooj addon add ~/.hydro/addons/hydro-fonts
pm2 restart hydrooj
```

装好后访问 `https://你的站/fonts/fonts.css` 能看到内容即生效。

## 启用

系统设置 → ui-default → footer_extra_html 另起一行：

```html
<link rel="stylesheet" href="/fonts/fonts.css"><style>body,input,button,select{font-family:"ZCOOL KuaiLe",-apple-system,"PingFang SC","Microsoft YaHei",sans-serif!important}pre,code,kbd,samp,.monaco-editor,.monaco-editor *,.CodeMirror,.CodeMirror *,textarea{font-family:Menlo,Consolas,"Courier New",monospace!important}</style>
```

## 换字体

把 ttf/woff2 放进 `public/fonts/`，在 `fonts.css` 里加一段 `@font-face`，再把上面 CSS 里的字体名换掉。只放许可证允许分发的字体。
