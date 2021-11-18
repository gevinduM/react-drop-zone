import { CustodianWrapper,SectionWrapper,PrgressWrapper,SubmitSectionWrapper } from './Custodian.style'
import { Box, Grid, Card, CardContent  } from '@mui/material';

type custodianType = {
    custodianName:string,
    selectedFiles:any,
    setcustodianName : (name:string) =>void,
    submitClickHandler: () => void
}

const Custodian = (props:custodianType) => {
    const {custodianName,selectedFiles,setcustodianName,submitClickHandler} = props
    return(
        <CustodianWrapper>
          <Box>
            <Card variant="outlined">
              <CardContent>
                {selectedFiles.map((file:any) =>
                  <SectionWrapper key={file.name}>
                    <Grid container 
                      spacing={0}  
                      direction="row" 
                      justifyContent="space-between" 
                      alignItems="center"   
                    >
                      <Grid item >
                        {file.name}
                      </Grid>
                      { file.perc ? <Grid item>
                        <PrgressWrapper value={file.perc} max="100"></PrgressWrapper>
                        </Grid> : null
                      } 
                      <Grid item>
                        <p>{file.perc && (`${file.perc}%`  || '')} </p>
                      </Grid>
                    </Grid>
                  </SectionWrapper>
                )}
            <SubmitSectionWrapper>
              <input type='text' placeholder='Custodian Name' onChange={e => setcustodianName(e.target.value)} />
              <button onClick={submitClickHandler} disabled={!custodianName}> submit </button>
            </SubmitSectionWrapper>
            </CardContent>
            </Card>
          </Box>
        </CustodianWrapper>
    )
}

export default Custodian;

