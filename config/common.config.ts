// 配置 <head> 里的额外脚本，数组项为字符串或对象。
export const headScripts = [
  {
    async: true,
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    'data-ad-client': 'ca-pub-3900191310640369',
  },
  {
    async: true,
    src: 'https://www.googletagmanager.com/gtag/js?id=G-CL22EGH0JS',
  },
  {
    content: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-CL22EGH0JS');`,
  },
];

// 配置额外的 meta 标签。数组中可以配置key:value形式的对象。
export const metas = [
  {
    name: 'keywords',
    content: 'umi, umijs',
  },
  {
    name: 'description',
    content: '博客',
  },
  {
    name: 'blog',
    content: '博客',
  },
];
