const express = require('express');
const bodyParser = require('body-parser');
const Complaint = require('./db/schema');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(express.json());


const dbUrl = "mongodb+srv://haseebzaki:hzaki123@cluster0.k7v9clo.mongodb.net/fir_form";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 50000, // Increase timeout
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

app.get("/home", (req, res) => {
  res.send("Welcome to the Complaint Form API!");
})
app.post('/submit-complaint', async function(req, res){
    try {
        // Extract data from the request body
        const {
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
          acknowledgementOfTerms
        } = req.body;
    
        // Create a new complaint object using the extracted data
        const newComplaint = new Complaint({
          personalInfo: {
            name,
            email,
            phoneNumber,
            address,
          },
          complaintDetails: {
            complaintID,
            dateOfComplaint,
            descriptionOfIncident,
            incidentDateTime,
          },
          transactionDetails: {
            transactionID,
            amountLost,
            bankDetails,
          },
          supportingEvidence: {
            attachments,
            fileUploads,
          },
          additionalInfo: {
            suspectedIndividualsOrEntities,
            desiredAction,
          },
          consentAndAcknowledgement: {
            consentToProcessData,
            acknowledgementOfTerms,
          },
        });
    
        // Save the complaint to the database
        console.log(newComplaint);

        await newComplaint.save();
    
        // Send a success response
        res.status(201).json({ message: 'Complaint submitted successfully!' });
      } catch (err) {
        console.error('Error saving complaint:', err);
        res.status(500).json({ message: 'An error occurred while submitting the complaint.' });
      }
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
