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

1. 系统设置 → ui-default → footer_extra_html 另起一行，让每个页面加载字体：

```html
<link rel="stylesheet" href="/fonts/fonts.css">
```

2. 插件会把字体加进 **偏好设置 → Font Family** 下拉框（显示为「站酷快乐体」），每个用户自己选。

想全站强制默认用它（不管用户选什么），把第 1 步那行换成：

```html
<link rel="stylesheet" href="/fonts/fonts.css"><style>body,input,button,select{font-family:"ZCOOL KuaiLe",-apple-system,"PingFang SC","Microsoft YaHei",sans-serif!important}</style>
```

## 换字体

把 ttf/woff2 放进 `public/fonts/`，在 `fonts.css` 里加一段 `@font-face`，再在 `index.ts` 的 `FONTS` 里加一行「字体名: 显示名」，重启后下拉框里就有了。只放许可证允许分发的字体。
