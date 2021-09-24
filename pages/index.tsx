import React from 'react'
import { Container, Grid } from "@material-ui/core"
// import TopNav from "../components/TopNav"
import CardEntry from "../components/CardEntry"
import LayoutDefault from '../layout/default'

const items:any = [
  {
    id: 'sasa',
    short_name: "核聚变",
    full_name: "大型电子游戏嘉年华",
    bn: "http://www.bjeiecc.com/userfiles/image/20210319/20210319165152_81795.png"
  },
  {
    id: 'sasa',
    short_name: "爱与光的未来",
    full_name: "《小王子》75周年新版绘本画展",
    bn: "http://www.bjeiecc.com/userfiles/image/20210319/20210319165152_81795.png"
  },
  {
    id: 'sasa',
    short_name: "苍穹",
    full_name: "沉浸式VR体验",
    bn: "http://www.bjeiecc.com/userfiles/image/20210319/20210319165152_81795.png"
  },
  {
    id: 'sasa',
    short_name: "北京国际花园节",
    full_name: "花卉艺术展",
    bn: "http://www.bjeiecc.com/userfiles/image/20210319/20210319165152_81795.png"
  },
  {
    id: 'sasa',
    short_name: "核聚变",
    full_name: "大型电子游戏嘉年华",
    bn: "http://www.bjeiecc.com/userfiles/image/20210319/20210319165152_81795.png"
  },
  {
    id: 'sasa',
    short_name: "爱与光的未来",
    full_name: "《小王子》75周年新版绘本画展",
    bn: "http://www.bjeiecc.com/userfiles/image/20210319/20210319165152_81795.png"
  },
  {
    id: 'sasa',
    short_name: "苍穹",
    full_name: "沉浸式VR体验",
    bn: "http://www.bjeiecc.com/userfiles/image/20210319/20210319165152_81795.png"
  },
  {
    id: 'sasa',
    short_name: "北京国际花园节",
    full_name: "花卉艺术展",
    bn: "http://www.bjeiecc.com/userfiles/image/20210319/20210319165152_81795.png"
  }
]

export default function Index() {
  const isLoading = false
  return (
    <LayoutDefault>
      <audio src="https://www.w3school.com.cn/i/horse.ogg" controls></audio>
      <Container maxWidth="xl" className='mt-4'>
        <div className="flex items-center justify-between mb-2">
          <h2 className="my-0 text-3xl">
            <b className="w-1 h-5 mr-2 bg-primary inline-block align-middle rounded"></b>
            <span className="align-middle">热展中</span>
          </h2>
        </div>
        <Grid container spacing={2} className='mt-2'>
          {items.map((it:any,idx:number)=>{
            return (
              <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                <CardEntry  item={it} key={idx} isLoading={isLoading} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
      <Container maxWidth="xl" className='mt-4'>
        <div className="flex items-center justify-between mb-2">
          <h2 className="my-0 text-3xl">
            <b className="w-1 h-5 mr-2 bg-primary inline-block align-middle rounded"></b>
            <span className="align-middle">即将开展</span>
          </h2>
        </div>
        <Grid container spacing={2} className='mt-2'>
          {items.map((it:any,idx:number)=>{
            return (
              <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                <CardEntry  item={it} key={idx} isLoading={isLoading} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </LayoutDefault>
  );
}
