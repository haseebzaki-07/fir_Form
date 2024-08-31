const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Complaint = require('./db/schema');

// Load environment variables
dotenv.config({ path: './.env' });

// Create Express app
const app = express();

// Apply CORS middleware
app.use(cors({
  origin: '*'
}));

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 50000, // Increase timeout
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

// Define routes
app.get('/home', (req, res) => {
  res.send('Welcome to the Complaint Form API!');
});

app.post('/submit-complaint', async (req, res) => {
  try {
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

    await newComplaint.save();

    res.status(201).json({ message: 'Complaint submitted successfully!' });
  } catch (err) {
    console.error('Error saving complaint:', err);
    res.status(500).json({ message: 'An error occurred while submitting the complaint.' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
