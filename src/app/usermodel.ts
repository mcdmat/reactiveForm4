export class UserModel {
  username = '';
  credentials! : {
    email : '' ,
    password: '' ,
  };
  address!: {
    street: '',
    postalCode: '',
    city: '',
  };
}
