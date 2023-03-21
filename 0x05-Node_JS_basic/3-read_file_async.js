const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data.split('\n').filter(line => line !== '');
        const countByField = {};

        students.forEach(student => {
          const fields = student.split(',');
          if (fields.length !== 4) return;

          fields.forEach((field, index) => {
            if (!countByField[index]) {
              countByField[index] = {};
            }
            if (!countByField[index][field]) {
              countByField[index][field] = { count: 0, names: [] };
            }
            countByField[index][field].count++;
            countByField[index][field].names.push(fields[0]);
          });
        });

        Object.keys(countByField).forEach(index => {
          Object.keys(countByField[index]).forEach(field => {
            const count = countByField[index][field].count;
            const names = countByField[index][field].names.join(', ');
            console.log(`Number of students in field ${index}: ${count}. List: ${names}`);
          });
        });

        console.log(`Number of students: ${students.length}`);
        resolve(students.length);
      }
    });
  });
}

module.exports = countStudents;
