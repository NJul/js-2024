class Student {
  constructor(firstName, lastName, age, identificationNumber, averageGrade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.identificationNumber = identificationNumber;
    this.averageGrade = averageGrade;
  }
}

const studentsData = [
  {
    firstName: 'Іван',
    lastName: 'Лисиця',
    age: 20,
    identificationNumber: 7465382901,
    averageGrade: 70.5
  },
  {
    firstName: 'Марія',
    lastName: 'Зелена',
    age: 22,
    identificationNumber: 6543216767,
    averageGrade: 85.3
  },
  {
    firstName: 'Юлія',
    lastName: 'Литвиненко',
    age: 20,
    identificationNumber: 1234567890,
    averageGrade: 90.5
  }
];
class StudentGroup {
  #students = [];

  addInitialStudents(studentsData) {
    studentsData.forEach(student => {
      const newStudent = new Student(
        student.firstName,
        student.lastName,
        student.age,
        student.identificationNumber,
        student.averageGrade
      );
      this.#students.push(newStudent);
    });
    this.updateStudentTable();
  }

  getPromptValue(message) {
    const value = prompt(message);
    if (value === null) {
      alert('Дію скасовано користувачем');
      throw new Error('Operation cancelled by user');
    }
    return value.trim();
  }

  getNumberPromptValue(message) {
    while (true) {
      let value = prompt(message);
      if (value === null) {
        alert('Дію скасовано користувачем');
        throw new Error('Operation cancelled by user');
      }
      let isValid = !isNaN(value) && value.trim() !== '' && Number(value) > 0;
      if (isValid) return Number(value);
      alert('Будь ласка, введіть позитивне ненульове число');
    }
  }

  getFloatPromptValue(message) {
    while (true) {
      let value = prompt(message);
      if (value === null) {
        alert('Дію скасовано користувачем');
        throw new Error('Operation cancelled by user');
      }
      value = value.replace(',', '.');
      let isValid = !isNaN(value) && value.trim() !== '' && parseFloat(value) > 0;
      if (isValid) return parseFloat(value).toFixed(1);
      alert('Будь ласка, введіть позитивне ненульове число');
    }
  }

  addStudent() {
    try {
      const firstName = this.getPromptValue("Введіть ім'я студента:");
      const lastName = this.getPromptValue('Введіть прізвище студента:');
      const age = this.getNumberPromptValue('Введіть вік студента:');
      const identificationNumber = this.getNumberPromptValue(
        'Введіть ідентифікаційний номер студента:'
      );
      const averageGrade = this.getFloatPromptValue(
        'Введіть середній бал студента:'
      );

      if (
        firstName &&
        lastName &&
        !isNaN(age) &&
        !isNaN(identificationNumber) &&
        !isNaN(averageGrade)
      ) {
        const newStudent = new Student(
          firstName,
          lastName,
          age,
          identificationNumber,
          averageGrade
        );

        this.#students.push(newStudent);

        alert(`Студента ${firstName} ${lastName} успішно додано`);
      } else {
        alert('Некоректні дані. Спробуйте ще раз');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  removeStudent() {
    try {
      const id = this.getNumberPromptValue(
        'Введіть ідентифікаційний номер студента для видалення:'
      );

      const student = this.searchStudentById(id);

      if (student) {
        const index = this.#students.indexOf(student);
        const removedStudent = this.#students.splice(index, 1);
        alert(
          `Студента ${removedStudent[0].firstName} ${removedStudent[0].lastName} видалено`
        );
      } else {
        alert(`Студента з ID ${id} не знайдено`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  showAllStudents() {
    this.updateStudentTable();
  }

  searchStudentById(id) {
    return this.#students.find(student => student.identificationNumber === id);
  }

  findStudentById() {
    try {
      const id = this.getNumberPromptValue(
        'Введіть ідентифікаційний номер студента для пошуку:'
      );

      const student = this.searchStudentById(id);

      if (student) {
        alert(`
          Знайдено студента:
          Ім'я: ${student.firstName}
          Прізвище: ${student.lastName}
          Вік: ${student.age}
          Середній бал: ${student.averageGrade}
        `);
      } else {
        alert(`Студента з ID ${id} не знайдено`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  updateStudentTable() {
    const tableBody = document
      .getElementById('studentTable')
      .getElementsByTagName('tbody')[0];

    tableBody.innerHTML = '';

    this.#students.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="studentData__item added">${student.identificationNumber}</td>
        <td class="studentData__item added">${student.firstName}</td>
        <td class="studentData__item added">${student.lastName}</td>
        <td class="studentData__item added">${student.age}</td>
        <td class="studentData__item added">${student.averageGrade}</td>
      `;

      tableBody.appendChild(row);
    });
  }
}

const studentGroup = new StudentGroup();
studentGroup.addInitialStudents(studentsData);
