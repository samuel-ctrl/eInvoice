import React, { useState } from "react";
import EInvoiceTemplate from "./EInvoiceTemplate.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button, Spinner } from "react-bootstrap";
import backgroundImage from "./asset/image/taxTime.png";

const App = () => {
  const [pdfData, setPdfData] = useState({});
  const [loader, setLoader] = useState(false);
  // const [isPdfView, setIsPdfView] = useState(false);

  return (
    <div className="App d-flex justify-content-center align-items-start vh-100">
      {/* {isPdfView ? (
        <>
          <Button className="m-2" size="sm" onClick={() => setIsPdfView(false)}>
            Back
          </Button>
          <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <EInvoiceTemplate pdfData={pdfData} />
          </PDFViewer>
        </>
      ) : ( */}
      <div
        className="container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <h4 className="text-center mb-4">TAX INVOICE</h4>
        <div
          className="w-100 p-3 border rounded"
          style={{
            backgroundColor: "#f0f0f0",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2",
          }}
        >
          <div className="form-group mb-2">
            <label htmlFor="irn" className="mb-1 text-start">
              IRN
            </label>
            <input
              type="text"
              className="form-control form-control-sm w-50"
              id="irn"
              name="irn"
              value={pdfData?.irn || ""}
              onChange={(e) =>
                setPdfData((prevVal) => ({
                  ...prevVal,
                  irn: e?.target?.value,
                }))
              }
            />
          </div>

          <div className="form-group mb-2">
            <label htmlFor="ackNo" className="mb-1 text-start">
              Ack.No
            </label>
            <input
              type="number"
              className="form-control form-control-sm w-50"
              id="ackNo"
              name="ackNo"
              value={pdfData?.ackNo || ""}
              onChange={(e) =>
                setPdfData((prevVal) => ({
                  ...prevVal,
                  ackNo: e?.target?.value,
                }))
              }
            />
          </div>

          <div className="form-group mb-2">
            <label htmlFor="ackDate" className="mb-1 text-start">
              Ack.Date
            </label>
            <input
              type="date"
              className="form-control form-control-sm w-50"
              id="ackDate"
              name="ackDate"
              value={pdfData?.ackDate || ""}
              onChange={(e) => {
                setPdfData((prevVal) => ({
                  ...prevVal,
                  ackDate: e?.target?.value,
                }));
              }}
            />
          </div>

          <div className="form-group mb-0 ">
            <Button
              size="sm"
              varient="secondary"
              className="me-2"
              onClick={() => setPdfData({})}
            >
              Clear
            </Button>
            {/* <Button size="sm" onClick={() => setIsPdfView(true)}>
                Generate
              </Button> */}
            <PDFDownloadLink
              document={<EInvoiceTemplate pdfData={pdfData} />}
              fileName="testdirectdownload.pdf"
            >
              {({ loading }) => {
                if (loading) {
                  setLoader(false);
                } else {
                  // After loading is complete, set a timeout to update state and show the message
                  setTimeout(() => {
                    setLoader(true);
                  }, 1000);

                  // Display message based on state
                  return loader ? (
                    "Download now!"
                  ) : (
                    <Spinner size="sm" animation="border" variant="secondary" />
                  );
                }
              }}
            </PDFDownloadLink>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default App;
