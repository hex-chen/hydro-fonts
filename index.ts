import { Context, SettingModel } from 'hydrooj';

// public/fonts/* 由 Hydro 以 /fonts/* 路径提供。
// 这里把自托管字体加进 偏好设置 → Font Family 的下拉选项里（改的是 ui-default 已注册的那个设置项的 range）。
// 字体名 → 显示名；字体名要与 fonts.css 里 @font-face 的 font-family 一致。
export const FONTS: Record<string, string> = {
    'ZCOOL KuaiLe': '站酷快乐体',
};

export function apply(ctx: Context) {
    const patch = () => {
        for (const key of ['fontFamily']) {
            const s = (SettingModel as any).SETTINGS_BY_KEY?.[key];
            if (!s?.range) continue;
            for (const [family, label] of Object.entries(FONTS)) s.range[family] = label;
        }
    };
    patch();
    ctx.on('app/started' as any, patch);
    ctx.on('dispose', () => {
        const s = (SettingModel as any).SETTINGS_BY_KEY?.fontFamily;
        if (s?.range) for (const family of Object.keys(FONTS)) delete s.range[family];
    });
}
