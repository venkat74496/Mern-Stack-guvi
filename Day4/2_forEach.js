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
  
  // Using forEach method to iterate over arrays
  resume.contact.forEach((contact) => {
    console.log("Contact:");
    Object.keys(contact).forEach((key) => {
      console.log(key, ":", contact[key]);
    });
  });

  resume.experience.forEach((experience) => {
    console.log("Experience:");
    Object.keys(experience).forEach((key) => {
      console.log(key, ":", experience[key]);
    });
  });
  
  resume.education.forEach((education) => {
    console.log("Education:");
    Object.keys(education).forEach((key) => {
      console.log(key, ":", education[key]);
    });
  });
  
  resume.skills.forEach((skill) => {
    console.log("Skill Category:", skill.category);
    console.log("Skills:");
    skill.list.forEach((item) => {
      console.log("-", item);
    });
  });
  
  // Iterating over languages and interests using forEach
  console.log("Languages:");
  resume.languages.forEach((language) => {
    console.log("-", language);
  });
  
  console.log("Interests:");
  resume.interests.forEach((interest) => {
    console.log("-", interest);
  });
  


  
  