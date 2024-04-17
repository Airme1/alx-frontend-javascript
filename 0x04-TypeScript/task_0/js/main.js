var student1 = {
    firstName: "Jeremy",
    lastName: "Taylor",
    age: 5,
    location: "Kamazou"
};
var student2 = {
    firstName: "Patrick",
    lastName: "Mbbape",
    age: 15,
    location: "Maraba"
};
var studentList = [student1, student2];
var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement('tbody');
// Append the table header row
var headRow = document.createElement("tr");
headRow.innerHTML = "\n<th>First Name</th>\n<th>Last Name</th>\n<th>Age</th>\n<th>Location</th>\n";
thead.appendChild(headRow);
// Append thead to the table
table.appendChild(thead);
// Append tbody to the table
table.appendChild(tbody);
// Append the table to the document body
document.body.appendChild(table);
studentList.forEach(function (item) {
    var row = document.createElement("tr");
    row.innerHTML = "\n    <td>".concat(item.firstName, "</td>\n    <td>").concat(item.lastName, "</td>\n    <td>").concat(item.age, "</td>\n    <td>").concat(item.location, "</td>\n    ");
    tbody.appendChild(row);
});
