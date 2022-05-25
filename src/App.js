import { useRef } from 'react';
import { Button, Container, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

import { tableOptions1, tableOptions2, tableOptions3, tableOptions4, tableOptions5, tableOptions6, tableOptions7, textOptions } from './generalOptions';
import { tableData1, tableData2, tableData3, tableData4, tableData5, tableData6, tableData7 } from './data';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

// Styling
import './App.css';




const App = () => {
  const generatePDF = () => {
    var doc = new jsPDF(1, "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function(pdf) {
        pdf.save("mypdf.pdf");
      }
    })
  }

  const generateAutoTable = () => {
    var pdfsize = "a3"
    var pdf = new jsPDF("1", "pt", pdfsize)
    
    // Table 1
    // pdf.text("Testing Report")
    pdf.autoTable({
      startY: pdf.autoTableEndPosY() + 70,
      head: [['User Input']],
      ...textOptions,
    })
    pdf.autoTable({
      startY: pdf.autoTableEndPosY() + 0,
      body: tableData1,
      ...tableOptions1,
    })
    // let finalY = pdf.lastAutoTable.finalY // The y position on the page
    // pdf.text(50, finalY, "Hello!")

    // Table 2
    pdf.autoTable({
      startY: pdf.autoTableEndPosY() + 50,
      head: [['OCR Result']],
      ...textOptions,
    })
    pdf.autoTable({
      startY: pdf.autoTableEndPosY() + 0,
      body: tableData2,
      ...tableOptions2
    })


    // Table 3
    pdf.autoTable({
      startY: pdf.autoTableEndPosY() + 50,
      head: [['Authenticator information and transaction types']],
      ...textOptions,
    })
    pdf.autoTable({
      startY: pdf.autoTableEndPosY() + 0,
      body: tableData3,
      ...tableOptions3
    })


    // Table 4
    pdf.autoTable({
      startY: pdf.autoTableEndPosY() + 50,
      head: [['Policy information']],
      ...textOptions,
    })
    pdf.autoTable({
      startY: pdf.autoTableEndPosY() + 0,
      body: tableData4,
      ...tableOptions4
    })


    // Table 5
    pdf.autoTable({
      startY: pdf.autoTableEndPosY() + 50,
      body: tableData5,
      ...tableOptions5
    })


    // Table 6
    pdf.autoTable({
      startY: pdf.autoTableEndPosY() + 50,
      head: [['Identify Verification Results (e-KYC)']],
      ...textOptions,
    })
    pdf.autoTable({
      startY: pdf.autoTableEndPosY() + 0,
      body: tableData6,
      ...tableOptions6
    })


    // Table 7
    pdf.autoTable({
      startY: pdf.autoTableEndPosY() + 50,
      head: [['ID card verification']],
      ...textOptions,
    })
    pdf.autoTable({
      startY: pdf.autoTableEndPosY() + 0,
      body: tableData7,
      ...tableOptions7
    })

  //pdf.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
    // pdf.text("Testing Report");

    pdf.save("output.pdf")
  }

  const pdfExportComponent = useRef(null);
  const handleExport = (event) => {
    pdfExportComponent.current.save();
  }

  return (
    <>
    <PDFExport ref={pdfExportComponent} paperSize="A4">
      <Container id="content">
        <p>React app</p>
        <Table id="table1" responsive bordered style={{width: "100%"}}>
          <thead>
          </thead>
          <tbody>
            <tr>
              <td className="cellHeading">Prefix</td>
              <td>Title</td>
              <td className="cellHeading">Firstname</td>
              <td>firstname</td>
              <td className="cellHeading">Lastname</td>
              <td>lastname</td>
            </tr>
            <tr>
              <td className="cellHeading">ID Number</td>
              <td align="center" colSpan={5}>citizen id</td>
            </tr>
          </tbody>
          <div className='extraSpacing'></div>
          <tbody>
            <tr>
              <td className="cellHeading">Prefix</td>
              <td>Title</td>
              <td className="cellHeading">Firstname</td>
              <td>firstname</td>
              <td className="cellHeading">Lastname</td>
              <td>lastname</td>
            </tr>
            <tr>
              <td className="cellHeading">date of birth</td>
              <td>date/month/year</td>
              <td className="cellHeading">ID Number</td>
              <td colSpan={3}>citizen id</td>
            </tr>
            <tr>
              <td className="cellHeading">Address according to Id card</td>
              <td colSpan={5}>address</td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Button onClick={generatePDF}>Generage PDF</Button>
    </PDFExport>

    <Button primary={true} onClick={handleExport}>Kendo Button</Button>
   
    <Button primary="true" onClick={generateAutoTable}>Auto table</Button>
 
    </>
  );
}

export default App;
