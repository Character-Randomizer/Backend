//username already exists:
const existingUser = {
    user_id: 1, 
    first_name: 'Testy', 
    last_name: `Subject`, 
    username: `testSubject47`, 
    email: `test47@gmail.com`, 
    terms: true, 
    dob: 9061647
}

//Updated user:
const userUpdate = {
    username: `testy47`,
    email: `testSubject47@gmail.com`
}

//New user:
const newUser = {
    username: `starStruck`,
    password: `J#g9ujd`,
    first_name: `Corey`,
    last_name: `Star`,
    email: `starStruck56@gmail.com`,
    terms: true,
    dob: 10181999
}

const newUserNoUn = {
    password: `J#g9ujd`,
    first_name: `Corey`,
    last_name: `Star`,
    email: `starStruck55@gmail.com`,
    terms: true,
    dob: 10181999
}

const newUserNoPw = {
    username: `starStruck`,
    first_name: `Corey`,
    last_name: `Star`,
    email: `starStruck55@gmail.com`,
    terms: true,
    dob: 10181999
}

const newUserNoFirstName = {
    username: `starStruck`,
    password: `J#g9ujd`,
    last_name: `Star`,
    email: `starStruck55@gmail.com`,
    terms: true,
    dob: 10181999
}

const newUserNoLastName = {
    username: `starStruck`,
    password: `J#g9ujd`,
    first_name: `Corey`,
    email: `starStruck55@gmail.com`,
    terms: true,
    dob: 10181999
}

const newUserNoEmail = {
    username: `starStruck`,
    password: `J#g9ujd`,
    first_name: `Corey`,
    last_name: `Star`,
    terms: true,
    dob: 10181999
}

const newUserTermsFalse = {
    username: `starStruck`,
    password: `J#g9ujd`,
    first_name: `Corey`,
    last_name: `Star`,
    email: `starStruck55@gmail.com`,
    terms: false,
    dob: 10181999
}

const newUserNoDob = {
    username: `starStruck`,
    password: `J#g9ujd`,
    first_name: `Corey`,
    last_name: `Star`,
    email: `starStruck55@gmail.com`,
    terms: true,
}

const newUserExistingUn = {
    username: `testSubject47`,
    password: `J#g9ujd`,
    first_name: `Corey`,
    last_name: `Star`,
    email: `starStruck55@gmail.com`,
    terms: false,
    dob: 10181999
}

//Invalid password:
const invalidPass = {
    username: `testSubject47`,
    password: `12344278`
}

const invalidUsername = {
    username: `testSubject`,
    password: `bardic`
}

//No username:
const noUsername = {
    username: ``, 
    password: `123456`
}

const noUsername2 = {
    password: `uF93fh!`
}

//No password:
const noPass = {
    username: `testSubject47`,
    password: ``
}

const noPass2 = {
    username: `testSubject47`,
}

module.exports = {
    existingUser,
    newUser,
    newUserNoUn,
    newUserNoPw,
    newUserNoFirstName, 
    newUserNoLastName,
    newUserNoEmail,
    newUserTermsFalse,
    newUserNoDob,
    newUserExistingUn,
    invalidPass,
    noUsername,
    noUsername2,
    noPass,
    noPass2,
    userUpdate
}