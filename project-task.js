/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", 
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
   • What was wrong?
     Missing comma after "checkInDate": "2024-05-15"
   • Why is it a problem in JSON?
     JSON requires commas between key-value pairs.
   • What did you change to fix it?
     Added a comma after the checkInDate value.

    • What was wrong?
     "name" was not in quotes
    • Why is it a problem in JSON?
      JSON requires all property names to be enclosed in double quotes.
    • What did you change to fix it?
      Changed name to "name".


    • What was wrong?
      "age": undefined
    • Why is it a problem in JSON?
      undefined is not a valid JSON value. JSON only supports strings, numbers, objects, arrays, true, false, and null.
    • What did you change to fix it?
      Replaced undefined with null.


    • What was wrong?
      Trailing comma after "Parking"
    • Why is it a problem in JSON?
      JSON does not allow trailing commas in arrays or objects.
    • What did you change to fix it?
      Removed the extra comma after "Parking".



    


  

*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
I used the code editor's syntax highlighting and reviewed the JSON carefully. I also used a JSON validator (such as JSONLint) to identify syntax errors.

2️⃣ How did you confirm that your corrected JSON file was valid?
I pasted the corrected JSON into a JSON validator, which confirmed that the file had valid syntax.

3️⃣ Which errors were the most difficult to spot? Why?
The missing comma after the checkInDate field was the hardest to spot because it is easy to overlook in a large JSON file

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
   i.Use syntax highlighting in a code editor.
   ii.Validate JSON with a linter or JSON validator.
   iii.Format the JSON with proper indentation.
   iv.Double-check commas, quotation marks, and brackets before saving the file.
*/
