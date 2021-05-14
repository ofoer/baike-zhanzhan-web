import { Container, Grid, Typography, Button, Chip } from '@material-ui/core'
import { Map } from '@material-ui/icons'
import LayoutDefault from '../../layout/default'
const z = {
  id: 'sasa',
  short_name: "核聚变",
  full_name: "大型电子游戏嘉年华",
  bn: "http://www.bjeiecc.com/userfiles/image/20210319/20210319165152_81795.png"
}
const Zhan = () =>{
  const a = z
  return (
    <LayoutDefault>
      <Container maxWidth="xl" className='mt-4'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={7}>
            <img src="http://www.bjeiecc.com/userfiles/image/20210319/20210319165152_81795.png" alt="sa" className="w-full h-full object-cover"/>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={5}>
            <Typography gutterBottom className="font-bold" align="center" variant="h4">核聚变</Typography>
            <Typography gutterBottom align="center" variant="subtitle1">大型电子游戏嘉年华</Typography>
            <div className='text-center mb-4'>
              <Button startIcon={<Map/>} color="primary">
                上海市 上海市 徐汇区 光大会展中心
              </Button>
            </div>
            <div className='mb-4'>
              <Button variant="contained" fullWidth color="primary" size='large'> 
                购票
              </Button>
            </div>
            <div className='mb-4'>
              <Typography className='font-bold' gutterBottom variant="subtitle1">开展时间</Typography>
              <div>
                10,11,20
              </div>
            </div>
            <div>
              <Typography className='font-bold' gutterBottom variant="subtitle1">展会特色</Typography>
              <div>
                <Chip className="mr-2 mb-2" label="场地方正" variant="outlined" />
                <Chip className="mr-2 mb-2" label="场地方正" variant="outlined" />
                <Chip className="mr-2 mb-2" label="景区周边" variant="outlined" />
                <Chip className="mr-2 mb-2" label="泳池" variant="outlined" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </LayoutDefault>
  )
}

export default Zhan