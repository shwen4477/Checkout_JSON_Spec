{
  "status": "success",
  "formType": "russia", // тип формы, например "russia_post", "couirer", "usa" - уточнить у Элен
  // поля, соответствующие данному типу формы, уточнить у Элен
  "data": {
    // ключом является имя поля 
    "addressTail": {
      "name": "AddressTail",
      "isRequired": false, // обязательно ли данное поля
      "specialValidation": false, // требуется ли специальная валидация
      "isReadOnly": false,
      "language": "rus" // язык, на котором допускается ввод
    },
    "apartment": {
      "name": "Apartment",
      "isRequired": false,
      "specialValidation": false,
      "isReadOnly": true,
      "language": "rus"
    },
    "city": {
      "name": "City",
      "isRequired": false,
      "specialValidation": false,
      "isReadOnly": true,
      "language": "rus"
    },
    "comment": {
      "name": "Comment",
      "isRequired": false,
      "specialValidation": false,
      "isReadOnly": false,
      "language": "rus"
    },
    "country": {
      "name": "Country",
      "isRequired": false,
      "specialValidation": false,
      "isReadOnly": true,
      "language": "rus"
    },
    "district": {
      "name": "District",
      "isRequired": false,
      "specialValidation": false,
      "isReadOnly": true,
      "language": "rus"
    },
    "entrance": {
      "name": "Entrance",
      "isRequired": false,
      "specialValidation": false,
      "isReadOnly": true,
      "language": "rus"
    },
    "firstName": {
      "name": "FirstName",
      "isRequired": true,
      "specialValidation": false,
      "isReadOnly": false,
      "language": "rus"
    },
    "floor": {
      "name": "Floor",
      "isRequired": false,
      "specialValidation": false,
      "isReadOnly": true,
      "language": "rus"
    },
    "house": {
      "name": "House",
      "isRequired": false,
      "specialValidation": false,
      "isReadOnly": true,
      "language": "rus"
    },
    "intercom": {
      "name": "Intercom",
      "isRequired": false,
      "specialValidation": false,
      "isReadOnly": true,
      "language": "rus"
    },
    "lastName": {
      "name": "LastName",
      "isRequired": true,
      "specialValidation": false,
      "isReadOnly": false,
      "language": "rus"
    },
    "middleName": {
      "name": "MiddleName",
      "isRequired": false,
      "specialValidation": false,
      "isReadOnly": false,
      "language": "rus"
    },
    "mobilePhone": {
      "name": "MobilePhone",
      "isRequired": true,
      "mask": "+7XXXXXXXXXX", // маска на поле ввода
      "specialValidation": false,
      "isReadOnly": false,
      "language": "rus"
    },
    "region": {
      "name": "Region",
      "isRequired": false,
      "specialValidation": false,
      "isReadOnly": true,
      "language": "rus"
    },
    "street": {
      "name": "Street",
      "isRequired": false,
      "specialValidation": false,
      "isReadOnly": true,
      "language": "rus"
    },
    "zipCode": {
      "name": "ZipCode",
      "isRequired": false,
      "specialValidation": false,
      "isReadOnly": false,
      "language": "rus"
    }
  }
}
