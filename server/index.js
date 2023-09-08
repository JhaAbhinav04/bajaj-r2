const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST endpoint
app.post("/bfhl", (req, res) => {
  try {
    // Extract data from the request (assuming it's in JSON format)
    const { full_name, dob } = req.body;

    // Generate the user_id in the specified format
    const user_id = `${full_name}_${dob.replace(/-/g, "")}`;

    // Create the response JSON
    const response = {
      user_id,
      is_success: true,
    };

    // Send the response
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: "Invalid request" });
  }
});

// GET endpoint
app.get("/bfhl", (req, res) => {
  // Hardcoded response for the GET request
  const response = {
    operation_code: 1,
  };
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
