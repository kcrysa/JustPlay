import { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import doc from "../assets/VOIS_Raffle_Rules.pdf";
import "../App.css";

export const Rules = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>();

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  };

  return (
    <Document file={doc} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} />
      <div className="page-controls">
        <button
          type="button"
          disabled={pageNumber === 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          {"<"}
        </button>
        <span>
          {pageNumber} of {numPages}
        </span>
        <button
          type="button"
          disabled={pageNumber === numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          {">"}
        </button>
      </div>
    </Document>
  );
};
