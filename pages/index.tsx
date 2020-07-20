import React from 'react'
import { Container, Button } from "@material-ui/core"
import TopNav from "../components/TopNav"
import TopTab from "../components/TopTab"
import TopBanner from "../components/TopBanner"
import TypeExample from "../components/TypeExample"
import TOPTABS from "../constant/TOPTABS"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const items = [
  {
    title: "世环会",
    banner: "/"
  },
  {
    title: "世环会",
    banner: "/"
  },
  {
    title: "世环会",
    banner: "/"
  },
  {
    title: "世环会",
    banner: "/"
  },
  {
    title: "世环会",
    banner: "/"
  },
  {
    title: "世环会",
    banner: "/"
  }
]

export default function Index() {
  return (
    <>
      <TopNav />
      <TopTab items={TOPTABS} />
      <Container maxWidth="xl">
        <TopBanner isLoading={true} items={items} />
        <TypeExample isLoading={false} isReady={true} title="艺术" actionRight={<Button endIcon={<ArrowForwardIosIcon fontSize="small" />}>更多</Button>} />
      </Container>
    </>
  );
}
