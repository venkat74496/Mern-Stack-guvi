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
  
  // Using for...of loop to iterate over arrays
  for (let experience of resume.contact) {
    console.log("Experience:");
    for (let key in experience) {
      if (experience.hasOwnProperty(key)) {
        console.log(key, ":", experience[key]);
      }
    }
  }
  for (let experience of resume.experience) {
    console.log("Experience:");
    for (let key in experience) {
      if (experience.hasOwnProperty(key)) {
        console.log(key, ":", experience[key]);
      }
    }
  }
  
  for (let education of resume.education) {
    console.log("Education:");
    for (let key in education) {
      if (education.hasOwnProperty(key)) {
        console.log(key, ":", education[key]);
      }
    }
  }
  
  for (let skill of resume.skills) {
    console.log("Skill Category:", skill.category);
    console.log("Skills:");
    for (let item of skill.list) {
      console.log("-", item);
    }
  }
  
  // Iterating over languages and interests using for...of
  console.log("Languages:");
  for (let language of resume.languages) {
    console.log("-", language);
  }
  
  console.log("Interests:");
  for (let interest of resume.interests) {
    console.log("-", interest);
  }
  


  
  