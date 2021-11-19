import styled from "styled-components";
import { TextField, Button } from "@mui/material";

export const CustodianWrapper = styled.div`
  margin-top: 50px;
  padding-bottom: 25px;
  margin: auto;
  border-bottom: 1px solid #0288d1;
  width: fit-content;
  overflow: auto;
  min-width: 600px;
`;

export const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const ProgressWrapper = styled.progress`
  width: 100px;
`;

export const SubmitSectionWrapper = styled.div`
  margin-top: 40px;
`;

export const TextInput = styled(TextField)`
  width: 250px;
`;

export const SubmitBtm = styled(Button)`
  height: 40px;
`;

export const HeaderText = styled.text`
  color: #01579b;
  margin: 0px;
  font-size: 25px;
  text-transform: capitalize;
  font-weight: 400;
`;
