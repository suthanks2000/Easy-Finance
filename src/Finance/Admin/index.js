import React, { useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import { collection, getDocs, query, where, getDoc, doc, limit } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import jsPDF from "jspdf";

const Admin = () => {
    const [adminData, setAdminData] = useState({});   //Stores form data entered by the admin.
    const [loanData, setLoanData] = useState([]);    //Stores the fetched loan data.
    const [viewLoanDatas, setViewLoanDatas] = useState(false);    //Toggles the visibility of the loan data table
    const [modalData, setModalData] = useState({ loanData: {}, personalData: {} });      //Stores data to be displayed in the modal (both loan and personal details)
    const [showModal, setShowModal] = useState(false);     //Toggles the visibility of the modal

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

    const handleRowClick = async (loan) => {
        const data = await fetchLoanAndPersonalData(loan.id, loan.uId);
        setModalData(data);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const fetchLoanAndPersonalData = async (loanId, userId) => {
        try {
            const loanDoc = await getDoc(doc(db, "securedLoans", loanId));
            const personalDetailsQuery = query(
                collection(db, "personalDetails"),
                where("uid", "==", userId)
            );
            const personalDetailsSnapshot = await getDocs(personalDetailsQuery);

            const personalDetails = personalDetailsSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))[0];

            return { loanData: loanDoc.data(), personalData: personalDetails };
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };


    const handleDownloadPDF = () => {
        const { loanData, personalData } = modalData;
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const lineHeight = 10;
    
        const title = "Loan and Personal Details";
        const loanDetails = [
            `Loan Type: ${loanData.loanType}`,
            `Employment Type: ${loanData.employmentType}`,
            `Job Title: ${loanData.jobTitle}`,
            `Place of Work: ${loanData.placeOfWork}`,
            `Property Status: ${loanData.propertyStatus}`,
            `Address Proof: ${loanData.addressProof}`
        ];
        const personalDetails = [
            `Name: ${personalData.firstName} ${personalData.lastName}`,
            `Father's Name: ${personalData.fatherName}`,
            `Age: ${personalData.Age}`,
            `Marital Status: ${personalData.maritalStatus}`,
            `Gender: ${personalData.Gender}`,
            `Email: ${personalData.Email}`,
            `District: ${personalData.District}`,
            `City: ${personalData.City}`,
            `Pincode: ${personalData.pinCode}`,
            `Contact: ${personalData.Contact}`
        ];
    
        // Helper function to calculate the x-coordinate for center alignment
        const getCenterX = (text) => {
            const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
            return (pageWidth - textWidth) / 2;
        };
    
        // Center align the title
        doc.text(title, getCenterX(title), lineHeight);
    
        // Add spacing before loan details
        doc.text("Loan Details:", getCenterX("Loan Details:"), lineHeight * 3);
    
        // Center-align each line of loan details
        loanDetails.forEach((line, index) => {
            doc.text(line, getCenterX(line), lineHeight * (4 + index));
        });
    
        // Add spacing before personal details
        doc.text("Personal Details:", getCenterX("Personal Details:"), lineHeight * (4 + loanDetails.length + 2));
    
        // Center-align each line of personal details
        personalDetails.forEach((line, index) => {
            doc.text(line, getCenterX(line), lineHeight * (5 + loanDetails.length + 2 + index));
        });
    
        const filename = `${personalData.firstName}_${personalData.lastName}_${loanData.loanType}.pdf`;
        doc.save(filename);
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
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>loanType</th>
                                   
                                    <th>jobTitle</th>
                                    <th>loan amount</th>
                                    <th>Grade</th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {loanData.map((loan) => (
                                    <tr key={loan.id} onClick={() => handleRowClick(loan)}>
                                        <td>{loan.loanType}</td>
                                        <td>{loan.jobTitle}</td>
                                        <td>{loan.loanAmount}</td>
                                        <td>{loan.grade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                )}
            </center>
            <Modal show={showModal} onHide={handleCloseModal}>
                <center>
                <Modal.Header closeButton>
                    <Modal.Title>Loan and Personal Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Loan Details:</h5>
                    <p>Loan Type: {modalData.loanData.loanType}</p>
                    <p>Employment Type: {modalData.loanData.employmentType}</p>
                    <p>Job Title: {modalData.loanData.jobTitle}</p>
                    <p>Place of Work: {modalData.loanData.placeOfWork}</p>
                    <p>Property Status: {modalData.loanData.propertyStatus}</p>
                    <p>Address Proof: {modalData.loanData.addressProof}</p>
                    <h5>Personal Details:</h5>
                    <p>Name: {modalData.personalData.firstName} {modalData.personalData.lastName}</p>
                    <p>Father's Name: {modalData.personalData.fatherName}</p>
                    <p>Age: {modalData.personalData.Age}</p>
                    <p>Marital Status: {modalData.personalData.maritalStatus}</p>
                    <p>Gender: {modalData.personalData.Gender}</p>
                    <p>Email: {modalData.personalData.Email}</p>
                    <p>District: {modalData.personalData.District}</p>
                    <p>City: {modalData.personalData.City}</p>
                    <p>Pincode: {modalData.personalData.pinCode}</p>
                    <p>Contact: {modalData.personalData.Contact}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary" onClick={handleDownloadPDF}>Download PDF</Button>
                </Modal.Footer>
                </center>
            </Modal>
        </>
    );
};

export default Admin;

