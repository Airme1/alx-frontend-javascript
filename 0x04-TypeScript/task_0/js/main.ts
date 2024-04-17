interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Jeremy",
    lastName: "Taylor",
    age: 5,
    location: "Kamazou"
}

const student2: Student = {
    firstName: "Patrick",
    lastName: "Mbbape",
    age: 15,
    location: "Maraba"
}

const studentList = [student1, student2]

const table = document.createElement("table");

const thead = document.createElement("thead");
const tbody = document.createElement('tbody');

// Append the table header row
const headRow = document.createElement("tr");
headRow.innerHTML = `
<th>First Name</th>
<th>Last Name</th>
<th>Age</th>
<th>Location</th>
`;
thead.appendChild(headRow);

// Append thead to the table
table.appendChild(thead);

// Append tbody to the table
table.appendChild(tbody);

// Append the table to the document body
document.body.appendChild(table);

studentList.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${item.firstName}</td>
    <td>${item.lastName}</td>
    <td>${item.age}</td>
    <td>${item.location}</td>
    `;
    tbody.appendChild(row);
});
