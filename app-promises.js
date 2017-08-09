// Promises demo
// data
const users = [
  {
    id: 1,
    name: 'Darth',
    schoolId: 101
  },
  {
    id: 2,
    name: 'Leia',
    schoolId: 998
  }
];

const grades = [];

// function
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

// function call
for (var i = 1; i < 4; i++) {
  console.log(`Search results for ${i}:`);

  getUser(i).then((user) => {
    console.log(user);
  }).catch((e) => {
    console.log(e);
  });
}
