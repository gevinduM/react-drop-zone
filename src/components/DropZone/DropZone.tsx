import { useRef, useState } from "react";
import { Wrapper, DropZoneWrapper } from "./DropZone.style";
import Custodian from "../Custodian/Custodian";

type dropZoneType = {
  updateDropZones: () => void;
};

const DropZone = (props: dropZoneType) => {
  const { updateDropZones } = props;

  const [selectedFiles, setSelectedFiles] = useState<Object[]>([]);
  const [custodianName, setcustodianName] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    inputRef?.current?.click();
  };

  const onDropHandler = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer?.files;
    filesHandler(files);
  };

  const inputOnChangeHandler = () => {
    const files = inputRef?.current?.files || [];
    filesHandler(files);
  };

  const filesHandler = (files: any) => {
    if (files.length) {
      const filesArray = Object.keys(files).map((key) => files[key]);
      setSelectedFiles(filesArray);
    }
  };

  const submitClickHandler = () => {
    updateDropZones();
    const files = [...selectedFiles];
    files.forEach((file) => {
      let percent = 10;
      let funcInter = setInterval(() => {
        if (percent < 100) {
          percent = percent + 10;
          //@ts-ignore
          const index = selectedFiles.map((i) => i.name).indexOf(file.name);
          const filesCopy = [...selectedFiles];
          if (index > -1) {
            //@ts-ignore
            filesCopy[index].perc = percent;
            setSelectedFiles(filesCopy);
          }
        } else {
          clearTimeout(funcInter);
        }
      }, 1000);
    });
  };

  return (
    <Wrapper>
      {!selectedFiles.length ? (
        <DropZoneWrapper
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDragEnter={(e) => {
            e.preventDefault();
          }}
          onDragLeave={(e) => {
            e.preventDefault();
          }}
          onDrop={onDropHandler}
          onClick={onClickHandler}
        >
          <p>drop or select files</p>
          <input
            ref={inputRef}
            type="file"
            multiple
            onChange={inputOnChangeHandler}
            style={{ display: "none" }}
          />
        </DropZoneWrapper>
      ) : (
        <Custodian
          custodianName={custodianName}
          selectedFiles={selectedFiles}
          setcustodianName={setcustodianName}
          submitClickHandler={submitClickHandler}
        />
      )}
    </Wrapper>
  );
};

export default DropZone;
