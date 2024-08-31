import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [name, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [complaintID, setComplaintID] = useState("");
  const [dateOfComplaint, setDateOfComplaint] = useState("");
  const [descriptionOfIncident, setDescriptionOfIncident] = useState("");
  const [incidentDateTime, setIncidentDateTime] = useState("");
  const [transactionID, setTransactionID] = useState("");
  const [amountLost, setAmountLost] = useState("");
  const [bankDetails, setBankDetails] = useState("");
  const [attachments, setAttachments] = useState("");
  const [fileUploads, setFileUploads] = useState("");
  const [suspectedIndividualsOrEntities, setSuspectedIndividualsOrEntities] =
    useState("");
  const [desiredAction, setDesiredAction] = useState("");
  const [consentToProcessData, setConsentToProcessData] = useState(false);
  const [acknowledgementOfTerms, setAcknowledgementOfTerms] = useState(false);

  const submithandler = async () => {
    const complaintData = {
      name,
      email,
      phoneNumber,
      address,
      complaintID,
      dateOfComplaint,
      descriptionOfIncident,
      incidentDateTime,
      transactionID,
      amountLost,
      bankDetails,
      attachments,
      fileUploads,
      suspectedIndividualsOrEntities,
      desiredAction,
      consentToProcessData,
      acknowledgementOfTerms,
    };

    console.log(complaintData);
    try {
      const response = await axios.post(
        "http://localhost:3000/submit-complaint",
        complaintData
      );
      console.log(response);
    } catch (error) {
      console.error("There was an error submitting the complaint!", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Cybercrime Complaint Form</h2>

      {/* Personal Information */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Email Address"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Address</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Residential Address"
            />
          </div>
        </div>
      </section>

      {/* Complaint Details */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Complaint Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Complaint ID</label>
            <input
              onChange={(e) => setComplaintID(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Complaint ID"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Date of Complaint</label>
            <input
              onChange={(e) => setDateOfComplaint(e.target.value)}
              type="date"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block font-medium mb-1">
            Description of Incident
          </label>
          <textarea
            onChange={(e) => setDescriptionOfIncident(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Detailed description of the incident"
            rows="4"
          ></textarea>
        </div>
        <div className="mt-4">
          <label className="block font-medium mb-1">
            Incident Date and Time
          </label>
          <input
            onChange={(e) => setIncidentDateTime(e.target.value)}
            type="datetime-local"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
      </section>

      {/* Transaction Details */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Transaction Details (if applicable)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Transaction ID</label>
            <input
              onChange={(e) => setTransactionID(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Transaction ID"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Amount Lost</label>
            <input
              onChange={(e) => setAmountLost(e.target.value)}
              type="number"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Amount Lost"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block font-medium mb-1">Bank Details</label>
          <input
            onChange={(e) => setBankDetails(e.target.value)}
            type="text"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Bank Details"
          />
        </div>
      </section>

      {/* Supporting Evidence */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Supporting Evidence</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block font-medium mb-1">Attachments</label>
            <input
              onChange={(e) => setAttachments(e.target.files)}
              type="file"
              className="w-full px-3 py-2 border rounded-lg"
              multiple
            />
          </div>
          <div>
            <label className="block font-medium mb-1">File Uploads</label>
            <input
              onChange={(e) => setFileUploads(e.target.files)}
              type="file"
              className="w-full px-3 py-2 border rounded-lg"
              multiple
            />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Additional Information</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block font-medium mb-1">
              Suspected Individuals or Entities
            </label>
            <input
              onChange={(e) =>
                setSuspectedIndividualsOrEntities(e.target.value)
              }
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Suspected Individuals or Entities"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Desired Action</label>
            <textarea
              onChange={(e) => setDesiredAction(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="What action are you seeking?"
              rows="3"
            ></textarea>
          </div>
        </div>
      </section>

      {/* Consent and Acknowledgement */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Consent and Acknowledgement
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={consentToProcessData}
              onChange={(e) => setConsentToProcessData(e.target.checked)}
              className="mr-2"
            />
            <label className="font-medium">
              I consent to the processing of my data according to relevant laws
              and policies.
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={acknowledgementOfTerms}
              onChange={(e) => setAcknowledgementOfTerms(e.target.checked)}
              className="mr-2"
            />
            <label className="font-medium">
              I acknowledge and agree to the terms and conditions of the
              complaint registration process.
            </label>
          </div>
        </div>
      </section>

      <button
        onClick={submithandler}
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Submit Complaint
      </button>
    </div>
  );
}
