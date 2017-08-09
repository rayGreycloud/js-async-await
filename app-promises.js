// Promises demo
// data
const users = [
  {
    id: 1,
    name: 'Harry',
    schoolId: 101
  },
  {
    id: 2,
    name: 'Hermione',
    schoolId: 998
  }
];

const grades = [
  {
    id: 1,
    schoolId: 101,
    grade: 86
  },
  {
    id: 2,
    schoolId: 998,
    grade: 100
  },
  {
    id: 3,
    schoolId: 101,
    grade: 80
  },
  {
    id: 4,
    schoolId: 998,
    grade: 94
  }
];

// function with promise
const getUser = id => {
  return new Promise((resolve, reject) => {
    // Match found when cb returns true
    const user = users.find((user) => user.id === id);
    // If match, return user
    if (user) {
      resolve(user);
    // If none, return error message
    } else {
      reject(`Unable to find user with id of ${id}.`);
    }
  });
};

// function with async
const getGrades = (schoolId) => {
  return new Promise((resolve, reject) => {
    resolve(grades.filter((grade) => grade.schoolId === schoolId));
  });
};

// Test fetching grades
  getGrades(11).then((grades) => {
    console.log(grades);
  }).catch((e) => {
    console.log(e);
  });

  // Test fetching user
  // getUser(2).then((user) => {
  //   console.log(user);
  // }).catch((e) => {
  //   console.log(e);
  // });
