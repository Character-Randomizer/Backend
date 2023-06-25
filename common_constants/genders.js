const test_genders = [
    {
      gender: `Female`
    },
    {
      gender: `Male`
    },
    {
      gender: `Non-Binary`
    }
  ]

const expected_genders = [
    {
        gender_id: 1,
        gender: `Female`
    },
    {
        gender_id: 2, 
        gender: `Male`
    },
    {
        gender_id: 3, 
        gender: `Non-Binary`
    }
  ]

  module.exports = {
    test_genders,
    expected_genders
  }