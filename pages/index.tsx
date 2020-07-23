import React from 'react'
import { Container, Button } from "@material-ui/core"
import TopNav from "../components/TopNav"
import TopTab from "../components/TopTab"
import TopBanner from "../components/TopBanner"
import TypeExample from "../components/TypeExample"
import TOPTABS from "../constant/TOPTABS"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const items:any = {
  isLoading: false,
  isReady: true,
  top: [
    
  ],
  topRight: [
    {
      title: "有赞996员工 enjoy有赞996员工 enjoy有赞996员工 enjoy",
      bn: "https://pic3.zhimg.com/v2-e2b50bf7d0a6d677c7ed48cb4da459c7_b.jpg"
    },
    {
      title: "马老师说996是福报",
      bn: "https://pic3.zhimg.com/v2-e2b50bf7d0a6d677c7ed48cb4da459c7_b.jpg"
    },
    {
      title: "七牛云公然招聘995",
      bn: "https://pic3.zhimg.com/v2-e2b50bf7d0a6d677c7ed48cb4da459c7_b.jpg"
    },
    {
      title: "每日优鲜大肆鼓吹996",
      bn: "https://pic3.zhimg.com/v2-e2b50bf7d0a6d677c7ed48cb4da459c7_b.jpg"
    },
    {
      title: "有赞996员工 enjoy",
      bn: "https://pic3.zhimg.com/v2-e2b50bf7d0a6d677c7ed48cb4da459c7_b.jpg"
    },
    {
      title: "有赞996员工 enjoy",
      bn: "https://pic3.zhimg.com/v2-e2b50bf7d0a6d677c7ed48cb4da459c7_b.jpg"
    }
  ],
  kj: [
    {
      title: "有赞996员工 enjoy有赞996员工 enjoy有赞996员工 enjoy",
      bn: "https://pic3.zhimg.com/v2-e2b50bf7d0a6d677c7ed48cb4da459c7_b.jpg"
    },
    {
      title: "有赞996员工 enjoy",
      bn: "https://pic3.zhimg.com/v2-e2b50bf7d0a6d677c7ed48cb4da459c7_b.jpg"
    },
    {
      title: "有赞996员工 enjoy",
      bn: "https://pic3.zhimg.com/v2-e2b50bf7d0a6d677c7ed48cb4da459c7_b.jpg"
    },
    {
      title: "有赞996员工 enjoy",
      bn: "https://pic3.zhimg.com/v2-e2b50bf7d0a6d677c7ed48cb4da459c7_b.jpg"
    },
    {
      title: "华为",
      bn: "https://pic3.zhimg.com/v2-e2b50bf7d0a6d677c7ed48cb4da459c7_b.jpg"
    }
  ]
}

export default function Index() {
  return (
    <>
      <TopNav />
      <TopTab items={TOPTABS} />
      <Container maxWidth="xl">
        <TopBanner isLoading={items.isLoading} items={items.top} rightItems={items.topRight} />
        {TOPTABS.map((item, idx:number)=>{
          return <TypeExample key={idx} items={items.kj} isLoading={items.isLoading} isReady={items.isReady} title={item.title} actionRight={<Button endIcon={<ArrowForwardIosIcon fontSize="small" />}>更多</Button>} />
        })}
      </Container>
    </>
  );
}
