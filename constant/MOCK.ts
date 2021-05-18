interface MOCKTYPE {
    id: string,
    short_name: string,
    full_name: string,
    bn: string,
    desc: string,
    coordinates: {
      lng: number,
      lat: number
    },
    open: Array<{start: number, end: number}>
    openText: Array<string>,
    addressText: string
}

const MOCK:Array<MOCKTYPE> = [
   {
        id: 'sasa',
        short_name: "核聚变",
        full_name: "大型电子游戏嘉年华",
        bn: "http://www.bjeiecc.com/userfiles/image/20210319/20210319165152_81795.png",
        desc: '多年来，核聚变电子游戏嘉年华一直以“Tour”为目标，希望通过“旅行”般的松弛，在游戏中给人与人传递快乐。本次核聚变广州站设置了数个游戏挑战环节，并且每一个环节都经过严格的设计与测试，既保证拥有极高的可玩性，又保证关卡的难度。对于热爱游戏热爱挑战的你是不可多得的良机哦！',
        coordinates: {
          lng: 116.261833,
          lat: 39.907132
        },
        openText: ["05/21 - 05/30"],
        open: [
          {
            start: 1621094400000,
            end: 1621267200000
          }
        ],
        addressText: "上海市 上海市 徐汇区 光大会展中心"
    }
]
export default MOCK