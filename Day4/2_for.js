const resume = {
    "name": "Venkat",
    "age":23,
    "contact": [
    {
      "email": "venkatesh2210814@gmail.com",
      "phone": "6369414201",
      "address": "5,madurai veeran koil street, tv nagar, pondy"
    },
],
    "summary": "As a self-motivated and responsible person seeking for a professional environment where enhancing professional and development problem-solving skills are well appreciated.",
    "experience": [
      {
        "title": "PoNET developer",
        "company": "Capgemini Engineering",
        "location": "Chennai",
        "dates": "2022 - Present",
        "description": "Working as a developer to train in networking and working under layers"
      },
    ],
    "education": [
      {
        "degree": "Bachelor of Technology",
        "major": "Electronics and Communication Engineering",
        "school": "Pondicherry Engineering College",
        "location": "Pondicherry",
        "dates": "2018 - 2022"
      },
      {
        "degree": "Higher Secondary school",
        "major": "Biology",
        "school": "Petit Seminaire Higher Secondary school",
        "location": "Pondicherry",
        "dates": "2016 - 2018"
      }
    ],
    "skills": [
      {
        "category": "Programming Languages",
        "list": ["Python", "JavaScript", "Java"]
      },
      {
        "category": "Tools & Technologies",
        "list": ["TensorFlow", "PyTorch", "Git"]
      },
      {
        "category": "Skills",
        "list": ["Natural Language Processing", "Machine Learning", "Data Analysis"]
      }
    ],
    "languages": ["English", "Tamil"],
    "interests": ["Artificial Intelligence", "Technology", "Reading"]
  };

// Using a for loop to iterate over the resume object
for (let key in resume) {
    if (resume.hasOwnProperty(key)) {
      if (Array.isArray(resume[key])) {
        console.log(key + ":");
        for (let i = 0; i < resume[key].length; i++) {
          if (typeof resume[key][i] === 'object') {
            console.log(`  ${key} ${i + 1}:`);
            for (let innerKey in resume[key][i]) {
              console.log(`    ${innerKey}: ${resume[key][i][innerKey]}`);
            }
          } else {
            console.log(`  ${resume[key][i]}`);
          }
        }
      } else if (typeof resume[key] === 'object') {
        console.log(key + ":");
        for (let innerKey in resume[key]) {
          console.log(`  ${innerKey}: ${resume[key][innerKey]}`);
        }
      } else {
        console.log(`${key}: ${resume[key]}`);
      }
    }
  }