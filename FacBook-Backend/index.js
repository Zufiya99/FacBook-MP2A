const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors")

const app = express();
const PORT = 3000;

mongoose.connect("mongodb+srv://Zufiya:FacBook123@facbook.qvsbxgm.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

const FacultySchema = new mongoose.Schema({
  name: String,
  qualification: String,
  research_interests: String
});

const Faculty = mongoose.model('Faculty', FacultySchema);

app.use(cors({ origin: 'http://127.0.0.1:5500' }));
app.use(bodyParser.json()); 


app.post('/faculties', (req, res) => {
  const { name, qualification, research_interests } = req.body;

  const newFaculty = new Faculty({
    name,
    qualification,
    research_interests
  });

  newFaculty.save()
    .then(faculty => res.json(faculty))
    .catch(err => console.error(err));
});

app.get('/faculties', (req, res) => {
  Faculty.find()
    .then(faculties => res.json(faculties))
    .catch(err => console.error(err));
});

app.get('/faculties/:id', (req, res) => {
  Faculty.findById(req.params.id)
    .then(faculty => res.json(faculty))
    .catch(err => console.error(err));
});

app.patch('/faculties/:id', (req, res) => {
  Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(faculty => res.json(faculty))
    .catch(err => console.error(err));
});

app.delete('/faculties/:id', (req, res) => {
  Faculty.findByIdAndRemove(req.params.id)
    .then(() => res.json({ success: true }))
    .catch(err => console.error(err));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
