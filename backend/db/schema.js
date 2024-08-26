const mongoose = require('mongoose');

const personalInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
    
  },
  address: {
    type: String,
    required: true
  }
});

const PersonalInfo = mongoose.model('PersonalInfo', personalInfoSchema);


const complaintDetailsSchema = new mongoose.Schema({
    complaintID: {
      type: String,
      required: true,
      unique: true
    },
    dateOfComplaint: {
      type: Date,
      required: true
    },
    descriptionOfIncident: {
      type: String,
      required: true
    },
    incidentDateTime: {
      type: Date,
      required: true
    }
  });
  
  const ComplaintDetails = mongoose.model('ComplaintDetails', complaintDetailsSchema);

  
  const transactionDetailsSchema = new mongoose.Schema({
    transactionID: {
      type: String,
      required: false // Not all complaints may have a transaction
    },
    amountLost: {
      type: Number,
      required: false
    },
    bankDetails: {
      type: String,
      required: false
    }
  });
  
  const TransactionDetails = mongoose.model('TransactionDetails', transactionDetailsSchema);

  
  const supportingEvidenceSchema = new mongoose.Schema({
    attachments: [{
      fileName: String,
      fileUrl: String
    }],
    fileUploads: [{
      fileName: String,
      fileUrl: String
    }]
  });
  
  const SupportingEvidence = mongoose.model('SupportingEvidence', supportingEvidenceSchema);

  


  
  const additionalInfoSchema = new mongoose.Schema({
    suspectedIndividualsOrEntities: {
      type: String,
      required: false
    },
    desiredAction: {
      type: String,
      required: false
    }
  });
  
  const AdditionalInfo = mongoose.model('AdditionalInfo', additionalInfoSchema);

  
  const consentAndAcknowledgementSchema = new mongoose.Schema({
    consentToProcessData: {
      type: Boolean,
      required: true
    },
    acknowledgementOfTerms: {
      type: Boolean,
      required: true
    }
  });
  
  const ConsentAndAcknowledgement = mongoose.model('ConsentAndAcknowledgement', consentAndAcknowledgementSchema);

  const complaintSchema = new mongoose.Schema({
    personalInfo: personalInfoSchema,
    complaintDetails: complaintDetailsSchema,
    transactionDetails: transactionDetailsSchema,
    supportingEvidence: supportingEvidenceSchema,

    additionalInfo: additionalInfoSchema,
    consentAndAcknowledgement: consentAndAcknowledgementSchema,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  const Complaint = mongoose.model('Complaint', complaintSchema);
  
module.exports = Complaint;