import { Container, Grid, Typography, Button, Chip } from '@material-ui/core'
import { Map } from '@material-ui/icons'
import LayoutDefault from '../../layout/default'
import OpenDate from '../../components/OpenDateText'
import MOCK from '../../constant/MOCK'
const Zhan = () =>{
  const item = MOCK[0]
  const { openText } = item
  return (
    <LayoutDefault>
      <Container maxWidth="xl" className='mt-4'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={7}>
            <img src={item.bn} alt={item.full_name} className="w-full h-full object-cover rounded-md"/>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={5}>
            <Typography gutterBottom className="font-bold" align="center" variant="h4">{item.short_name}</Typography>
            <Typography className='mb-4' gutterBottom align="center" variant="subtitle1">{item.full_name}</Typography>
            <Typography gutterBottom align="center" variant="caption">{item.desc}</Typography>
            <div className='mt-4'>
              {/* <Button variant="contained" fullWidth color="primary" size='large'> 
                购票
              </Button> */}
            </div>
            <div className='mb-4'>
              <Typography className='font-bold' gutterBottom variant="subtitle1">开展时间</Typography>
              <OpenDate items={openText} />
            </div>
            <div className='mb-2'>
              <Typography className='font-bold' gutterBottom variant="subtitle1">展会特色</Typography>
              <div>
                <Chip className="mr-2 mb-2" label="场地方正" variant="outlined" />
                <Chip className="mr-2 mb-2" label="场地方正" variant="outlined" />
                <Chip className="mr-2 mb-2" label="景区周边" variant="outlined" />
                <Chip className="mr-2 mb-2" label="泳池" variant="outlined" />
              </div>
            </div>
            <div>
              <Typography className='font-bold' gutterBottom variant="subtitle1">地点</Typography>
              <Button startIcon={<Map/>} color="primary">
                {item.addressText}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </LayoutDefault>
  )
}

export default Zhan