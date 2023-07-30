import { type dataType } from '@/data';

export type methodType = 'POST' | 'GET' | 'DELETE';
export interface urlProps {
  url: string;
  method: methodType;
}

/** https://www.apifox.cn/web/project/2462266 */
const data: dataType<urlProps> = {
  demo: {
    url: 'https://defiprime.com/defiprime.tokenlist.json',
    method: 'GET',
  },

  /**
   *  @account (用户)
   */
  // 查询用户信息：https://www.apifox.cn/link/project/2462266/apis/api-69891884
  accountDetails: {
    url: '/nest/account/details',
    method: 'GET',
  },
  // 修改账户信息（创建+修改）：https://www.apifox.cn/link/project/2462266/apis/api-69865973
  accountRevamp: {
    url: '/nest/account/revamp',
    method: 'POST',
  },

  /**
   * @topic (文章)
   */
  // 查询用户创建的topic列表：https://www.apifox.cn/link/project/2462266/apis/api-70635013
  topicList: {
    url: '/nest/topic/list',
    method: 'GET',
  },
  // 查询文章详情：https://www.apifox.cn/link/project/2462266/apis/api-70641822
  topicDetails: {
    url: '/nest/topic/details',
    method: 'GET',
  },
  // 查询文章回复列表：https://www.apifox.cn/link/project/2462266/apis/api-70680019
  topicReplays: {
    url: '/nest/topic/replays',
    method: 'GET',
  },

  /**
   * @curation (策展)
   */
  // 创建策展: https://www.apifox.cn/link/project/2462266/apis/api-70683241
  curationCreate: {
    url: '/nest/curation/create',
    method: 'POST',
  },
  // 加入策展: https://www.apifox.cn/link/project/2462266/apis/api-70684589
  curationAdd: {
    url: '/nest/curation/add',
    method: 'POST',
  },
  // 查询个人策展列表: https://www.apifox.cn/link/project/2462266/apis/api-70691310
  curationList: {
    url: '/nest/curation/list',
    method: 'GET',
  },
  // 查询策展详情: https://www.apifox.cn/link/project/2462266/apis/api-70698426
  curationDetails: {
    url: '/nest/curation/details',
    method: 'GET',
  },

  /**
   * @follow (追随)
   */
  // 查询是否关注关系: https://www.apifox.cn/link/project/2462266/apis/api-70711196
  followAttention: {
    url: '/nest/follow/attention',
    method: 'GET',
  },
  // 删除追随者: https://www.apifox.cn/link/project/2462266/apis/api-70712458
  followDelete: {
    url: '/nest/follow/delete',
    method: 'DELETE',
  },
  // 查询追随者列表: https://www.apifox.cn/link/project/2462266/apis/api-70711292
  followList: {
    url: '/nest/follow/list',
    method: 'GET',
  },

  /**
   * @home (首页)
   */
  // 搜索全部信息: https://www.apifox.cn/link/project/2462266/apis/api-70735332
  homeSearch: {
    url: '/nest/home/search',
    method: 'GET',
  },
  // 查询最新文章列表: https://www.apifox.cn/link/project/2462266/apis/api-70738522
  homeTopicsNewest: {
    url: '/nest/home/topics/newest',
    method: 'GET',
  },
  // 查询推荐文章: https://www.apifox.cn/link/project/2462266/apis/api-70739039
  homeSpreadTrend: {
    url: '/nest/home/spread/trend',
    method: 'GET',
  },
  // 查询推荐节点: https://www.apifox.cn/link/project/2462266/apis/api-70739763
  homeSpreadNode: {
    url: '/nest/home/spread/node',
    method: 'GET',
  },
  // 查询推荐用户: https://www.apifox.cn/link/project/2462266/apis/api-70740141
  homeSpreadUser: {
    url: '/nest/home/spread/user',
    method: 'GET',
  },
  // 查询通知全部列表: https://www.apifox.cn/link/project/2462266/apis/api-70954183
  homeInform: {
    url: '/nest/home/inform',
    method: 'GET',
  },
  // 查询节点列表: https://www.apifox.cn/link/project/2462266/apis/api-70958694
  homeNode: {
    url: '/nest/home/node',
    method: 'GET',
  },
  // 链接通知webSocket: https://www.apifox.cn/link/project/2462266/apis/api-70959097
  homeSocketPush: {
    url: '/nest/home/socket/push',
    method: 'GET',
  },

  /**
   * 版本Beta1.0.2
   */
  // 签名-获取token
  accountSign: {
    url: '/nest/account/sign',
    method: 'POST',
  },
  // 代发：主题/追加/评论
  accountSend: {
    url: '/nest/account/send',
    method: 'POST',
  },
  // 关注
  followMake: {
    url: '/nest/follow/make',
    method: 'POST',
  },
  // 取消关注
  followMakeUnAttention: {
    url: '/nest/follow/makeUnAttention',
    method: 'POST',
  },
  // 移除
  followRemoveAttention: {
    url: '/nest/follow/removeAttention',
    method: 'POST',
  },

  // // // Config
  // accountConfig: {
  //   url: '/nest/account/config',
  //   method: 'GET',
  // },

  // configType: gas/reward
  // 修改配置
  accountChangeConfig: {
    url: '/nest/account/change/config',
    method: 'POST',
  },
};
export default data;
