import React, { useState } from "react";
import EInvoiceTemplate from "./EInvoiceTemplate.jsx";
import { PDFViewer } from "@react-pdf/renderer";
import moment from 'moment';

const App = () => {
  const [pdfData, setPdfData] = useState({});
  const [isPdfView, setIsPdfView] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const rawDate = formData.get("ackDate");

    const formattedDate = moment(rawDate).format('DD-MMM-YY');
    
    setPdfData({
      irn: formData.get("irn"),
      ackNo: formData.get("ackNo"),
      ackDate: formattedDate,
    });
    setIsPdfView(true);
  };

  return (
    <div className="App d-flex justify-content-center align-items-start vh-100">
      {isPdfView ? (
        <>
        <button className="btn btn-primary btn-sm m-2" onClick={()=>setIsPdfView(false)}>Close</button>
        <PDFViewer height={760} width={1200}>
          <EInvoiceTemplate pdfData={pdfData} />
        </PDFViewer>
        </>
      ) : (
        <div className="container">
          <h4 className="text-center mb-4">TAX INVOICE</h4>
          <form onSubmit={handleSubmit} className="w-100 p-3 border rounded">
            <div className="form-group mb-2">
              <label htmlFor="irn" className="mb-1 text-start">
                IRN
              </label>
              <input
                type="text"
                className="form-control form-control-sm w-50"
                id="irn"
                name="irn"
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
              />
            </div>

            <div className="form-group mb-0">
              <button className="btn btn-primary btn-sm" type="submit">
                Generate
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
