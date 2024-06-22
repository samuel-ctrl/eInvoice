import React from "react";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

// CSS equivalent styles
const cssStyles = {
  container: {
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    fontFamily: "Helvetica",
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "12px",
    marginBottom: "10px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "5px",
  },
  col: {
    fontSize: "8px",
  },
};

const EInvoiceTemplate = ({ pdfData }) => {
  return (
    <Document title="E-Invoice">
      <Page size="A4">
        <View style={cssStyles.container}>
          <Text style={{ textAlign: "right", fontSize: "8px" }}>
            (ORIGINAL FOR RECIPIENT)
          </Text>
          <Text style={cssStyles.header}>TAX INVOICE</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{}}>
              <View style={cssStyles.row}>
                <Text style={{ fontSize: "8px" }}>{"IRN"}</Text>
                <Text style={{ fontSize: "8px", marginLeft: "32px" }}>
                  {":"}
                </Text>
                <Text
                  style={{
                    fontSize: "8px",
                    marginLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {pdfData?.irn || ""}
                </Text>
              </View>
              <View style={cssStyles.row}>
                <Text style={{ fontSize: "8px" }}>{"Ack.No"}</Text>
                <Text style={{ fontSize: "8px", marginLeft: "20px" }}>
                  {":"}
                </Text>
                <Text
                  style={{
                    fontSize: "8px",
                    marginLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {pdfData?.ackNo || ""}
                </Text>
              </View>
              <View style={cssStyles.row}>
                <Text style={{ fontSize: "8px" }}>{"Ack.Date"}</Text>
                <Text style={{ fontSize: "8px", marginLeft: "14px" }}>
                  {":"}
                </Text>
                <Text
                  style={{
                    fontSize: "8px",
                    marginLeft: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {pdfData?.ackDate || ""}
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Text style={{ fontSize: "8px" }}>e-Invoice</Text>
            </View>
          </View>
          <View
            style={{
              border: 1,
              borderColor: "#000",
              textAlign: "center",
              paddingTop: "4px",
            }}
          >
            <Text
              style={{ fontSize: 10, fontWeight: 900, marginBottom: "2px" }}
            >
              Shree Abirami Enggineering Works 2022-23
            </Text>
            <Text style={{ fontSize: "8px", marginBottom: "2px" }}>
              Office : No.56,Arunachalam Main Road, Ambal Nagar, Porur, Chennai
              - 600116
            </Text>
            <Text style={{ fontSize: "8px", marginBottom: "2px" }}>
              Factory : UNIT-I : Plot No,9 , Palani Nagar ,
              Moulivakkam,Porur,Chennai - 600116
            </Text>
            <Text style={{ fontSize: "8px", marginBottom: "2px" }}>
              Factory : UNIT-II : Plot No:SF No,22/1 & 22/2,Sriperumbudur to
              Kundrathur Main Road , Near THV SVAYA
              Apartments,Vengad,Sriperumbudur - 602105
            </Text>
            <Text style={{ fontSize: 10, fontWeight: 900, marginBottom: 2 }}>
              GSTIN: 33AABFS8828D1ZA PAN No: AABFS8828D
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default EInvoiceTemplate;

// <View>
// <View style={styles.row}>
//   <Text style={styles.leftColumn}>Invoice No:</Text>
//   <Text style={styles.rightColumn}>SFL-103/2022-23</Text>
// </View>
// <View style={styles.row}>
//   <Text style={styles.leftColumn}>Invoice Date:</Text>
//   <Text style={styles.rightColumn}>24-12-2022</Text>
// </View>
// <View style={styles.row}>
//   <Text style={styles.leftColumn}>State:</Text>
//   <Text style={styles.rightColumn}>Tamil Nadu (33)</Text>
// </View>
// <View style={styles.row}>
//   <Text style={styles.leftColumn}>Date of Supply:</Text>
//   <Text style={styles.rightColumn}>24-Dec-22</Text>
// </View>
// <View style={styles.row}>
//   <Text style={styles.leftColumn}>Place of Supply:</Text>
//   <Text style={styles.rightColumn}>Madhya Pradesh</Text>
// </View>
// <View style={styles.row}>
//   <Text style={styles.leftColumn}>Buyer:</Text>
//   <Text style={styles.rightColumn}>
//     M.P. Power Generating Company Limited
//   </Text>
// </View>
// <View style={styles.row}>
//   <Text style={styles.leftColumn}>GSTIN:</Text>
//   <Text style={styles.rightColumn}>23AADCM4472A1ZZ</Text>
// </View>
// {/* Add more rows as needed */}
// <View style={styles.row}>
//   <Text style={styles.leftColumn}>Total Invoice Amount:</Text>
//   <Text style={styles.rightColumn}>₹4,24,800.00</Text>
// </View>
// {/* Bank details */}
// <View style={styles.row}>
//   <Text style={styles.leftColumn}>Bank Name:</Text>
//   <Text style={styles.rightColumn}>
//     Indian Bank A/c.No.471536567 - OCC
//   </Text>
// </View>
// <View style={styles.row}>
//   <Text style={styles.leftColumn}>Branch:</Text>
//   <Text style={styles.rightColumn}>PORUR, CHENNAI</Text>
// </View>
// <View style={styles.row}>
//   <Text style={styles.leftColumn}>IFSC Code:</Text>
//   <Text style={styles.rightColumn}>IDIB000P047</Text>
// </View>
// {/* Invoice total amount in words */}
// <View style={styles.row}>
//   <Text style={styles.leftColumn}>
//     Total Invoice Amount (in words):
//   </Text>
//   <Text style={styles.rightColumn}>
//     Four Lakh Twenty Four Thousand Eight Hundred Only
//   </Text>
// </View>
// </View>

{
  /* <div class="container">
<div class="invoice-header">
  <h1>TAX INVOICE</h1>
</div>
<table class="invoice-table">
  <tbody>
    <tr>
      <th>IRN</th>
      <td>
        0603cb4a83f4590a55dc69f19a06952ee7d1cea577bf46cfcfd-7960ad11d73e2
      </td>
    </tr>
    <tr>
      <th>Ack.No</th>
      <td>152213540339585</td>
    </tr>
    <tr>
      <th>Ack.Date</th>
      <td>24-Dec-22</td>
    </tr>
  </tbody>
</table>
<div class="invoice-total">
  <p>
    Total Invoice Amount in Words: Four Lakh Twenty Four Thousand
    Eight Hundred Only
  </p>
</div>
<div>
  <p>For Shree Abirami Engineering Works 2022-23</p>
  <p>Authorised Signatory</p>
</div>
</div> */
}
