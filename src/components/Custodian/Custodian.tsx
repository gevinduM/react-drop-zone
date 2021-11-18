import { CustodianWrapper,SectionWrapper,PrgressWrapper,SubmitSectionWrapper } from './Custodian.style'

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
            {selectedFiles.map((file:any) =>
              <SectionWrapper key={file.name}>
                <p>{file.name}</p>
                {
                  file.perc ? <PrgressWrapper value={file.perc} max="100"></PrgressWrapper> : null
                }
                <p>{file.perc && (`${file.perc}%`  || '')} </p>
              </SectionWrapper>

            )}
            <SubmitSectionWrapper>
              <input type='text' placeholder='Custodian Name' onChange={e => setcustodianName(e.target.value)} />
              <button onClick={submitClickHandler} disabled={!custodianName}> submit </button>
            </SubmitSectionWrapper>
        </CustodianWrapper>
    )
}

export default Custodian;

