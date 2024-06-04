import React from "react";

const inputInfo1 = [
  {
    id: 1,
    inputName: "employmentType",
    inputType: "radio",
    loanType: ["personalloan", "homeloan", "businessloan", "vehicleloan"],
    inputValue: "Salaried",
  },
  {
    id: 2,
    inputName: "employmentType",
    inputType: "radio",
    loanType: ["personalloan", "homeloan", "businessloan", "vehicleloan"],
    inputValue: "SelfEmployed",
  },
  {
    id: 3,
    inputLabel: "Address Proof",
    inputName: "addressProof",
    inputType: "dropdown",
    inputPlaceholder: "Enter address proof",
    loanType: ["personalloan", "homeloan", "businessloan", "vehicleloan"],
    dropValue: [
      "select One",
      "aadharcard",
      "passport",
      "voterId",
      "driving license",
      "bank statement",
      "electricity bill",
      "gas bill",
      "water bill",
    ],
  },
  {
    id: 4,
    inputLabel: "Vehicle Type",
    inputName: "vehicleType",
    inputType: "dropdown",
    dropValue: [
      { select: "select", value: 0 },
      { select: "bike", value: 1 },
      { select: "car", value: 2 },
      { dropdownValue: ["select", "usedCar", "newCar"] },
    ],
    loanType: ["vehicleloan"],
    child: [
      {
        parId: 4,
        inputLabel: "Car Type",
        inputName: "carType",
        inputType: "dropdown",
        parent: "vehicleType",
        parentValue: "car",
        loanType: ["vehicleloan"],
        dropValue: ["select", "usedCar", "newCar"],
        child1: [
          {
            par_childId: 1,
            inputLabel: "Second car condition",
            inputName: "secondCarCondition",
            inputType: "dropdown",
            hidden: true,
            parent: "carType",
            parentValue: "usedCar",
            dropValue: ["select", "good", "average", "poor"],
            loanType: ["vehicleloan"],
          },
          {
            inputLabel: "Registered Month",
            inputName: "registeredMonth",
            inputType: "number",
            inputPlaceholder: "Enter registered month",
            parentValue: "usedCar",
            inputValue: null,
            loanType: ["vehicleloan"],
          },
          {
            inputLabel: "Registered Year",
            inputName: "registeredYear",
            inputType: "number",
            inputPlaceholder: "Enter registered year",
            parentValue: "usedCar",
            inputValue: null,
            loanType: ["vehicleloan"],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    inputLabel: "Make & Model",
    inputName: "makeAndModel",
    inputType: "text",
    inputPlaceholder: "Enter make and model",
    inputValue: "",
    loanType: ["vehicleloan"],
  },
  {
    id: 6,
    inputLabel: "Variant",
    inputName: "variant",
    inputType: "text",
    inputPlaceholder: "Enter variant",
    inputValue: "",
    loanType: ["vehicleloan"],
  },
];

const vehicleType = [
  { id: 1, label: "car" },
  { id: 2, label: "bike" },
];

const childOneTypes = [
  { id: 1, label: "newcar", vehId: 1 },
  { id: 2, label: "newcar", vehId: 1 },
  { id: 3, label: "newcar", vehId: 2 },
  { id: 4, label: "usedcar", vehId: 2 },
];

const childTwoTypes = [
  { id: 1, label: "good", CarId: 1 },
  { id: 1, label: "bad", CarId: 1 },
];

export { vehicleType, childOneTypes, childTwoTypes, inputInfo1 };
