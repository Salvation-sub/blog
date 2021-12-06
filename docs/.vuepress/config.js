const routes = ['TIL', 'about'];

const createSidebar = () => {
  const sidebar = {};
  for (const route of routes) {
    Object.assign(sidebar, require('../TIL/'));
  }

  return sidebar;
};

module.exports = {
  title: '기록을 습관처럼',
  description: `Daniel's Personal Blog`,
  base: '/blog/',
  themeConfig: {
    lastUpdated: '최근변경일',
    nav: [
      {
        text: 'TIL',
        link: '/TIL/',
      },
      {
        text: 'Info',
        items: [
          { text: 'About', link: '/about/' },
          {
            text: 'GitHub',
            link: 'https://github.com/Salvation-sub/',
          },
          {
            text: 'Blog',
            link: 'https://velog.io/@kyman19940214',
          },
        ],
      },
    ],
    sidebar: createSidebar(),
  },
  plugins: [['@vuepress/last-updated']],
};
