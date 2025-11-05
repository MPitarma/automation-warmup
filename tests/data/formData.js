export const USERS = [
  {
    scenario: "Gender Male",
    name: "Antonio Silva",
    email: "antoniosilva@gmail.com",
    password: "testPassword",
    country: "Brazil",
    gender: "Male",
    hobbies: [
      "Read books",
      "Travel",
      "Video Games",
      "Sports",
      "Movies",
      "Board Games",
    ],
  },
  {
    scenario: "No Hobbies",
    name: "Manuel Antunes",
    email: "manuelantunes@gmail.com",
    password: "testPassword",
    country: "Canada",
    gender: "Male",
    hobbies: [],
  },
  {
    scenario: "Gender Other",
    name: "Jose Teixeira",
    email: "joseteixeira@gmail.com",
    password: "testPassword",
    country: "United States of America",
    gender: "Other",
    hobbies: [
      "Read Books",
      "Video Games",
      "Sports",
      "Board Games",
    ],
  },
  {
    scenario: "Gender female",
    name: "Maria Manuela",
    email: "mariamanuela@gmail.com",
    password: "testPassword",
    country: "Mexico",
    gender: "Female",
    hobbies: [
      "Read Books",
      "Travel",
    ],
  },
  {
    scenario: "All Hobbies",
    name: "Catia Vanessa",
    email: "catiavanessa@gmail.com",
    password: "testPassword",
    country: "Portugal",
    gender: "Female",
    hobbies: [
      "Board Games",
    ],
  },
];

export const MESSAGES = {
    title: 'Success!',
    description: 'The form has been submitted successfully.',
    nameRequiredMessage: 'The name field is required.',
    emailRequiredMessage: 'The email field is required.',
    passwordRequiredMessage: 'The password field is required.',
    countryRequiredMessage: 'The country field is required.',
    genderRequiredMessage: 'The gender field is required.',
}