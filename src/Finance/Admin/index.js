import React, { useEffect, useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import jsPDF from "jspdf";

const Admin = () => {
    const [adminData, setAdminData] = useState({});
    const [loanData, setLoanData] = useState([]);
    const [viewLoanDatas, setViewLoanDatas] = useState(false);
    const [selectedLoan, setSelectedLoan] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchLoanData = async () => {
        try {
            const q = query(
                collection(db, "securedLoans"),
                where("loanType", "==", adminData.SelectLoanType),
                where("grade", "==", adminData.selectGrade),
                limit(adminData.dataCount)
            );
            const docSnap = await getDocs(q);
            const table = docSnap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setLoanData(table);
        } catch (error) {
            console.error("Error fetching loan data: ", error);
        }
    };

    const handleSubmit = () => {
        const requiredFields = ["SelectLoanType", "selectGrade", "dataCount"];
        if (requiredFields.some((field) => !adminData[field])) {
            alert("Please fill in all fields");
        } else {
            setViewLoanDatas(true);
            fetchLoanData();
        }
    };

    const handleAdminData = (e) => {
        setAdminData({ ...adminData, [e.target.name]: e.target.value });
    };

    const handleRowClick = (loan) => {
        setSelectedLoan(loan);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();

        // Define the text content
        const title = "Loan Details";
        const loanType = `Loan Type: ${selectedLoan.loanType}`;
        const employmentType = `Employment Type: ${selectedLoan.employmentType}`;
        const jobTitle = `Job Title: ${selectedLoan.jobTitle}`;
        const placeOfWork = `Place of Work: ${selectedLoan.placeOfWork}`;
        const propertyStatus = `Property Status: ${selectedLoan.propertyStatus}`;
        const addressProof = `Address Proof: ${selectedLoan.addressProof}`;

        // Center the text horizontally
        doc.text(title, pageWidth / 2, 10, { align: 'center' });
        doc.text(loanType, pageWidth / 2, 20, { align: 'center' });
        doc.text(employmentType, pageWidth / 2, 30, { align: 'center' });
        doc.text(jobTitle, pageWidth / 2, 40, { align: 'center' });
        doc.text(placeOfWork, pageWidth / 2, 50, { align: 'center' });
        doc.text(propertyStatus, pageWidth / 2, 60, { align: 'center' });
        doc.text(addressProof, pageWidth / 2, 70, { align: 'center' });

        doc.save(`${selectedLoan.id}.pdf`);
    };


    return (
        <>
            {JSON.stringify(adminData)}
            <h1>Welcome to Admin Page</h1>
        
            <div>
                <label>SelectLoanType</label>
                <select name="SelectLoanType" type="dropdown" defaultValue="" onChange={handleAdminData}>
                    <option>SelectLoanType</option>
                    <option value="personalloan">personalloan</option>
                    <option value="businessloan">businessloan</option>
                    <option value="homeloan">homeloan</option>
                    <option value="vehicleloan">vehicleloan</option>
                </select>
            </div>
            <div>
                <label>Choose the Grade</label>
                <select name="selectGrade" type="dropdown" defaultValue="" onChange={handleAdminData}>
                    <option>selectGrade</option>
                    <option value="A">Grade A</option>
                    <option value="B">Grade B</option>
                    <option value="C">Grade C</option>
                </select>
            </div>
            <div>
                <label>Datas</label>
                <input type="number" defaultValue="" name="dataCount" min="10" placeholder="no Of datas" onChange={handleAdminData} required></input>
            </div>
        
            <div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </div>
            <center>
                {viewLoanDatas && (
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <h4>User Loan Data Table</h4>
                            <button type="button" onClick={() => setViewLoanDatas(false)}>Hide table</button>
                        </div>
                        <Table striped bordered hover variant="dark" size="sm">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Loan Type</th>
                                    <th>Loan Amount</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loanData.map((loan, i) => (
                                    <tr key={i} onClick={() => handleRowClick(loan)}>
                                        <td>{loan.jobTitle}</td>
                                        <td>{loan.loanType}</td>
                                        <td>{loan.loanAmount}</td>
                                        <td>{loan.grade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                )}
            </center>

            {selectedLoan && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <center>
                    <Modal.Header closeButton>
                        <Modal.Title>Loan Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>Loan Type:</strong> {selectedLoan.loanType}</p>
                        <p><strong>Employment Type:</strong> {selectedLoan.employmentType}</p>
                        <p><strong>Job Title:</strong> {selectedLoan.jobTitle}</p>
                        <p><strong>Place of Work:</strong> {selectedLoan.placeOfWork}</p>
                        <p><strong>property Status:</strong> {selectedLoan.propertyStatus}</p>
                        <p><strong>Address Proof:</strong> {selectedLoan.addressProof}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleDownloadPDF}>
                            Download as PDF
                        </Button>
                    </Modal.Footer>
                    </center>
                </Modal>
            )}
        </>
    );
};

export default Admin;
