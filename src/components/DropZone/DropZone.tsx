import { DragEvent, useRef, useState } from "react";
import { Wrapper, DropZoneWrapper } from "./DropZone.style";
import Custodian from "../Custodian/Custodian";

interface dropZoneType {
  updateDropZones: () => void;
}

interface FileType {
  perc?: number;
  name?: string;
  size?: number[];
}

const DropZone = (props: dropZoneType) => {
  const { updateDropZones } = props;

  const [selectedFiles, setSelectedFiles] = useState<Object[]>([]);
  const [custodianName, setcustodianName] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    inputRef?.current?.click();
  };

  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer?.files;
    filesHandler(files || []);
  };

  const inputOnChangeHandler = () => {
    const files = inputRef?.current?.files || [];
    filesHandler(files);
  };

  const filesHandler = (files: FileList | never[]) => {
    if (files?.length) {
      const filesArray: FileType[] = Object.keys(files).map(
        //@ts-ignore
        (key) => files[key]
      );
      setSelectedFiles(filesArray);
    }
  };

  const submitClickHandler = () => {
    updateDropZones();
    const files = [...selectedFiles] as FileType[];
    files.forEach((file) => {
      let percent = 10;
      let funcInter = setInterval(() => {
        if (percent < 100) {
          percent = percent + 10;
          const index = selectedFiles
            .map((i: FileType) => i.name)
            .indexOf(file.name);
          const filesCopy: FileType[] = [...selectedFiles];
          if (index > -1) {
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
