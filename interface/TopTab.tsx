
export interface TopTab {
  title: string
  enum: ClassIfication
  key: ClassKey
}
export enum  ClassIfication {
  // 推荐
  Recommended = 0b0000000000000000000000000001,
  // 艺术
  Art = 0b0000000000000000000000000010,
  // 科技
  Tech = 0b0000000000000000000000000100,
  // 环境
  Environmental = 0b0000000000000000000000001000,
  // 工业
  Factory = 0b0000000000000000000000010000,
  // 宠物
  Pet = 0b0000000000000000000000100000,
  // 时尚
  Fashion = 0b0000000000000000000001000000,
}

export enum  ClassKey {
  // 推荐
  Recommended = 'recommend',
  // 艺术
  Art = "art",
  // 科技
  Tech = "tech",
  // 环境
  Environmental='environmental',
  // 工业
  Factory = 'factory',
  // 宠物
  Pet = "pet",
  // 时尚
  Fashion = 'fashion'
}