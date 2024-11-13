const { User } = require('./models/users');

async function testFindAll() {
  try {
    const users = await User.findAll();
    console.log(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

testFindAll();