import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import "./Bank.css";
import "../Education/education.css";
import { db } from "../../../../firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Bank() {
  const [state, setStateInput] = useState({
    bankname: "",
    accno: "",
    ifsc: "",
    branch: "",
    acctype: "",
    paymentmode: "",
  });
  const handleInput = (event) => {
    const { name, value } = event.target;
    setStateInput({
      ...state,
      [name]: value,
    });
  };
  console.log(state);
  const handlesubmit = async (event) => {
    event.preventDefault();
    if (state.accno && state.bankname) {
      try {
        await setDoc(doc(db, "bankDetails", "bankID1"), state);
        console.log("Added");
        toast.success("Updated Successfully");
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Enter Required Feilds");
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const docRef = doc(db, "bankDetails", "bankID1");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          let dbData = docSnap.data();
          setStateInput(dbData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h3>Bank Account Details</h3>
      <form onSubmit={handlesubmit}>
        <div className="bank-input-container">
          <label htmlFor="" className="bank-label">
            Name of Bank
            <span className="valid-check">*</span>
          </label>
          <input
            type="text"
            name="bankname"
            className="bank-input"
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <div className="bank-input-container">
          <label htmlFor="" className="bank-label">
            Account No
            <span className="valid-check">*</span>
          </label>
          <input
            type="text"
            name="accno"
            className="bank-input"
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <div className="bank-input-container">
          <label htmlFor="" className="bank-label">
            IFSC Code
          </label>
          <input
            type="text"
            name="ifsc"
            className="bank-input"
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <div className="bank-input-container">
          <label htmlFor="" className="bank-label">
            Branch Adress
          </label>
          <input
            type="text"
            name="branch"
            className="bank-input"
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <div className="bank-input-container">
          <label htmlFor="" className="bank-label">
            Account Type
          </label>
          <input
            type="text"
            name="acctype"
            className="bank-input"
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <div className="bank-input-container">
          <label htmlFor="" className="bank-label">
            Payment Mode
          </label>
          <input
            type="text"
            name="paymentmode"
            className="bank-input"
            onChange={handleInput}
            placeholder=""
          />
        </div>
        <button className="bank-btn">
          <BiEdit />
          Update Details
        </button>
      </form>

      <div className="data-container">
        <div className="data-header-container">
          <div className="data-details-header">Name of Bank</div>
          <div className="data-details-header">Account No</div>
          <div className="data-details-header">IFSC No</div>
          <div className="data-details-header">Branch Adress</div>
          <div className="data-details-header">Account Type</div>
          <div className="data-details-header">Payment Mode</div>
        </div>

        {
          <div className="data-content">
            <div className="data-details">{state.bankname}</div>
            <div className="data-details">{state.accno}</div>
            <div className="data-details">{state.ifsc}</div>
            <div className="data-details">{state.branch}</div>
            <div className="data-details">{state.acctype}</div>
            <div className="data-details">{state.paymentmode}</div>
          </div>
        }
      </div>
    </div>
  );
}
