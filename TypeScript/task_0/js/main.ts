interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Sarah',
  lastName: 'Alkhubaizy',
  age: 22,
  location: 'Riyadh',
};

const student2: Student = {
  firstName: 'Lama',
  lastName: 'Almazroa',
  age: 23,
  location: 'Jeddah',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const nameCell: HTMLTableCellElement = row.insertCell();
  const locationCell: HTMLTableCellElement = row.insertCell();

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

table.appendChild(tbody);
document.body.appendChild(table);
