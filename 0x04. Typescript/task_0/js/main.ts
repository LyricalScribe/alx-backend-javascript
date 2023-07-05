interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Ishmael',
    lastName: 'Sibiya',
    age: 31,
    location: 'Joburg'
}

const student2: Student = {
    firstName: 'Thui',
    lastName: 'Sibiya',
    age: 31,
    location: 'Joburg'
}

const studentList = [student1, student2];

studentList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
