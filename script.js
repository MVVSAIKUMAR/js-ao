let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  
  //Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
  //['JOHN', 'BABA', 'YAGA', 'WICK']
  let names = [];
  studentRecords.forEach((student) => {
    names.push(student.name.toUpperCase());
  });
  console.log(names);
  //Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
  //[{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]
  let names2 = studentRecords.filter((high) => high.marks > 50);
  console.log(names2);
  //Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
  //[ { name: 'John', id: 123, marks: 98 } ]
  let names3 = studentRecords.filter((high) => high.marks > 50 && high.id > 120);
  console.log(names3);
  //Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
  //98+23+45+75=241
  let totalMarks = studentRecords.reduce((s, m) => s + m.marks, 0);
  console.log(totalMarks);
  //Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
  //[ 'John', 'Wick' ]
  let names4 = studentRecords
    .filter((low) => low.marks > 50)
    .map((low) => low.name);
  console.log(names4);
  //Question 6: This time we are required to print the sum of marks of the students with id > 120.
  //98+45=143
  let totalMarks2 = studentRecords
    .filter((high) => high.id > 120)
    .reduce((a, b) => a + b.marks, 0);
  console.log(totalMarks2);
  
  //Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
  //233
  let totalMarks3 = studentRecords
    .map(function (low) {
      if (low.marks < 50) {
        low.marks += 15;
      }
      return low;
    })
    .filter((high) => high.marks > 50)
    .reduce((a, b) => a + b.marks, 0);
  console.log(totalMarks3);
  
  //Question 8:Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.
  let obj1 = { name: "Sai", class: "X", rollno: "31" };
  let obj2 = { name: "Vjay", class: "X", rollno: "32" };
  let obj3 = { name: "Arvind", class: "X", rollno: "33" };
  let obj4 = { name: "Kumar", class: "X", rollno: "34" };
  let obj5 = { name: "Soni", class: "X", rollno: "35" };
  let obj6 = { name: "Riyaz", class: "X", rollno: "36" };
  
  let students = [
    { name: "Sai", class: "X", rollno: "31" },
    { name: "Vjay", class: "X", rollno: "32" },
    { name: "Arvind", class: "X", rollno: "33" },
    { name: "Kumar", class: "X", rollno: "34" },
    { name: "Soni", class: "X", rollno: "35" },
    { name: "Riyaz", class: "X", rollno: "36" },
  ];
  console.log(students);