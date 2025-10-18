export const TITLE_CONFIG = Object.freeze({
  HOT_RECOMMEND: 'HOT_RECOMMEND',
  NEW_ALBUM: 'NEW_ALBUM',
  TOP_LIST: 'TOP_LIST',
  PERSONALIZED_RECOMMENDATION: 'PERSONALIZED_RECOMMENDATION'
});

export const titleConfigMap = {
  [TITLE_CONFIG.HOT_RECOMMEND]: {
    showIcon: true,
    title: '热门推荐',
    link: 'recommend/playList',
    showMore: true,
    moreLink: '/recommend/playList'
  },
  [TITLE_CONFIG.PERSONALIZED_RECOMMENDATION]: {
    showIcon: true,
    title: '个性化推荐',
    link: 'recommend/personalized',
    showMore: false,
    moreLink: ""
  },
  [TITLE_CONFIG.NEW_ALBUM]: {
    showIcon: true, 
    title: '新碟上架',
    link: 'recommend/album',
    showMore: true,
    moreLink: '/recommend/album'
  },
  [TITLE_CONFIG.TOP_LIST]: {
    showIcon: true, 
    title: '榜单',
    link: 'recommend/topList',
    showMore: true,
    moreLink: '/recommend/topList'
  }
};
