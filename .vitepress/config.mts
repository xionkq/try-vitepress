import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/try-vitepress/',
  title: "Software Department Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/posts/markdown-examples' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xionkq/try-vitepress' }
    ]
  }
})
