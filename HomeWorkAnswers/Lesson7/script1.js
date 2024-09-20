// Використання шаблону модуль

const studentGroup = (function() {
  const students = [];

  class Student {
    constructor(firstName, lastName, age, identificationNumber, averageGrade) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.identificationNumber = identificationNumber;
      this.averageGrade = averageGrade;
    }
  }

  function addInitialStudents(studentsData) {
    studentsData.forEach(student => {
      const newStudent = new Student(
        student.firstName,
        student.lastName,
        student.age,
        student.identificationNumber,
        student.averageGrade
      );
      students.push(newStudent);
    });
    updateStudentTable();
  }

  function getPromptValue(message) {
    const value = prompt(message);
    if (value === null) {
      alert('Дію скасовано користувачем');
      throw new Error('Operation cancelled by user');
    }
    return value.trim();
  }

  function getNumberPromptValue(message) {
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

  function getFloatPromptValue(message) {
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

  function addStudent() {
    try {
      const firstName = getPromptValue("Введіть ім'я студента:");
      const lastName = getPromptValue('Введіть прізвище студента:');
      const age = getNumberPromptValue('Введіть вік студента:');
      const identificationNumber = getNumberPromptValue(
        'Введіть ідентифікаційний номер студента:'
      );
      const averageGrade = getFloatPromptValue(
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

        students.push(newStudent);

        alert(`Студента ${firstName} ${lastName} успішно додано`);
      } else {
        alert('Некоректні дані. Спробуйте ще раз');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  function removeStudent() {
    try {
      const id = getNumberPromptValue(
        'Введіть ідентифікаційний номер студента для видалення:'
      );

      const student = searchStudentById(id);

      if (student) {
        const index = students.indexOf(student);
        const removedStudent = students.splice(index, 1);
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

  function showAllStudents() {
    updateStudentTable();
  }

  function searchStudentById(id) {
    return students.find(student => student.identificationNumber === id);
  }

  function findStudentById() {
    try {
      const id = getNumberPromptValue(
        'Введіть ідентифікаційний номер студента для пошуку:'
      );

      const student = searchStudentById(id);

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

  function updateStudentTable() {
    const tableBody = document
      .getElementById('studentTable')
      .getElementsByTagName('tbody')[0];

    tableBody.innerHTML = '';

    students.forEach(student => {
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

  return {
    addInitialStudents,
    addStudent,
    removeStudent,
    showAllStudents,
    findStudentById
  };
})();

studentGroup.addInitialStudents(studentsData);
