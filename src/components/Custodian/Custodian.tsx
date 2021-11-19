import {
  CustodianWrapper,
  SectionWrapper,
  PrgressWrapper,
  SubmitSectionWrapper,
  TextInput,
  SubmitBtm,
} from "./Custodian.style";
import { Box, Grid, Card, CardContent } from "@mui/material";
import { useState } from "react";

type custodianType = {
  custodianName: string;
  selectedFiles: any;
  setcustodianName: (name: string) => void;
  submitClickHandler: () => void;
};

const Custodian = (props: custodianType) => {
  const { custodianName, selectedFiles, setcustodianName, submitClickHandler } =
    props;
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  return (
    <CustodianWrapper>
      <Box>
        <Card variant="outlined">
          <CardContent>
            {selectedFiles.map((file: any) => (
              <SectionWrapper key={file.name}>
                <Grid
                  container
                  spacing={0}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item xs={6}>
                    {file.name}
                  </Grid>
                  {file.perc ? (
                    <Grid item xs={4}>
                      <PrgressWrapper
                        value={file.perc}
                        max="100"
                      ></PrgressWrapper>
                    </Grid>
                  ) : null}
                  <Grid item xs={2}>
                    <p>{file.perc && (`${file.perc}%` || "")} </p>
                  </Grid>
                </Grid>
              </SectionWrapper>
            ))}
            <SubmitSectionWrapper>
              <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <TextInput
                    disabled={isSubmit}
                    id="outlined-basic"
                    type="text"
                    size="small"
                    label="Custodian Name"
                    variant="outlined"
                    onChange={(e) => setcustodianName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <SubmitBtm
                    variant="outlined"
                    size="small"
                    onClick={() => {
                      setIsSubmit(true);
                      submitClickHandler();
                    }}
                    disabled={!custodianName || isSubmit}
                  >
                    submit
                  </SubmitBtm>
                </Grid>
              </Grid>
            </SubmitSectionWrapper>
          </CardContent>
        </Card>
      </Box>
    </CustodianWrapper>
  );
};

export default Custodian;
