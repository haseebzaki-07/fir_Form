import { useState } from "react";

export default function Form () {

  const [name, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [name, setfullname] = useState("");
  const [name, setfullname] = useState("");
  const [name, setfullname] = useState("");
  const [name, setfullname] = useState("");


  const submithandler = async ()=>{ 
      await axios.post("http://localhost:3000/submit-complaint", name  )
      .then((response) => {
        console.log(response);
      })
  }


    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            
          <h2 className="text-2xl font-bold mb-4">Cybercrime Complaint Form</h2>
          
          {/* Personal Information */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input onClick={submithandler} type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Full Name" />
              </div>
              <div>
                <label className="block font-medium mb-1">Email Address</label>
                <input type="email" className="w-full px-3 py-2 border rounded-lg" placeholder="Email Address" />
              </div>
              <div>
                <label className="block font-medium mb-1">Phone Number</label>
                <input type="tel" className="w-full px-3 py-2 border rounded-lg" placeholder="Phone Number" />
              </div>
              <div>
                <label className="block font-medium mb-1">Address</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Residential Address" />
              </div>
            </div>
          </section>
    
          {/* Complaint Details */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Complaint Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Complaint ID</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Complaint ID" />
              </div>
              <div>
                <label className="block font-medium mb-1">Date of Complaint</label>
                <input type="date" className="w-full px-3 py-2 border rounded-lg" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block font-medium mb-1">Description of Incident</label>
              <textarea className="w-full px-3 py-2 border rounded-lg" placeholder="Detailed description of the incident" rows="4"></textarea>
            </div>
            <div className="mt-4">
              <label className="block font-medium mb-1">Incident Date and Time</label>
              <input type="datetime-local" className="w-full px-3 py-2 border rounded-lg" />
            </div>
          </section>
    
          {/* Transaction Details */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Transaction Details (if applicable)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Transaction ID</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Transaction ID" />
              </div>
              <div>
                <label className="block font-medium mb-1">Amount Lost</label>
                <input type="number" className="w-full px-3 py-2 border rounded-lg" placeholder="Amount Lost" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block font-medium mb-1">Bank Details</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Bank Details" />
            </div>
          </section>
    
          {/* Supporting Evidence */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Supporting Evidence</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block font-medium mb-1">Attachments</label>
                <input type="file" className="w-full px-3 py-2 border rounded-lg" multiple />
              </div>
              <div>
                <label className="block font-medium mb-1">File Uploads</label>
                <input type="file" className="w-full px-3 py-2 border rounded-lg" multiple />
              </div>
            </div>
          </section>
    

          {/* Additional Information */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Additional Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block font-medium mb-1">Suspected Individuals or Entities</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Suspected Individuals or Entities" />
              </div>
              <div>
                <label className="block font-medium mb-1">Desired Action</label>
                <textarea className="w-full px-3 py-2 border rounded-lg" placeholder="What action are you seeking?" rows="3"></textarea>
              </div>
            </div>
          </section>
    
          {/* Consent and Acknowledgement */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Consent and Acknowledgement</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="font-medium">I consent to the processing of my data according to relevant laws and policies.</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="font-medium">I acknowledge and agree to the terms and conditions of the complaint registration process.</label>
              </div>
            </div>
          </section>
    
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Submit Complaint
          </button>
        </div>
      );
}