import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control : AbstractControl): ValidationErrors | null {
  const emailValid = RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  const valid = emailValid.test(control.value);

  const errors = {
    email:{
      rules: 'format : exemple@exemple.com'
    }
  };
  return !valid ? errors : null;
}