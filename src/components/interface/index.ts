import { VedioType } from '../VedioType/index'
export interface tag {
  name: string
  spid: string
  value: string
}
export interface searchdata {
  arcurl: string
  author: string
  bvid: string
  description: string
  pic: string
  title: string
  tag: string
  upic: string
  video_review: Number
  like: Number
}
export interface ActivityItem {
  id_str: string
  modules: modules
  type: string
}
export interface modules {
  module_author: module_author
  module_dynamic: module_dynamic
  module_stat: module_stat
}
export interface module_stat {
  comment: {
    count: Number
  }
  like: {
    count: Number
  }
}
interface drawItem {
  height: Number
  width: Number
  url: string
}
export interface module_dynamic {
  desc: {
    text: string
    topic: {
      id: Number
      jump_url: string
      name: string
    }
  }
  major: {
    archive: {
      bvid: string
      cover: string
      desc: string
      jump_url: string
      stat: {
        danmaku: string
        play: string
      }
      title: string
    }
    draw?: {
      items: drawItem[]
    }
  }
}
export interface module_author {
  avatar: string
  decorate: decorate
  face: string
  following: Boolean
  mid: Number
  name: string
  pub_time: string
  type: string
  jump_url: string
}
export interface decorate {
  card_url: string
  jump_url: string
  name: string
}
export interface stat {
  danmaku: Number
  like: Number
  view: Number
  vt: Number
}
export interface owner {
  name: string
  face: string
}
export interface UpdateItem {
  bvid: string
  dislike_switch: Number
  dislike_switch_pc: Number
  duration: Number
  enable_vt: Number
  goto: 'av'
  pic: string
  cuttedPic?: string | null
  title: string
  uri: string
  is_followed: Number
  is_stock: Number
  id: Number
  owner: owner
  pic_4_3: string
  pubdate: Number
  track_id: string
  stat: stat
}
