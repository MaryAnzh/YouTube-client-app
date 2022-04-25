import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export class CustomValidators {

  passwordsValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const controlValue = control.value;

      const result = {
        numberTest: /[0-9]+/.test(controlValue),
        letterTest: /[A-Za-z]+/.test(controlValue),
        upperCaseTest: /[A-Z]+/.test(controlValue),
        lowerCaseTest: /[a-z]+/.test(controlValue),
        specSymbolTest: /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(controlValue),
      }

      const isValid = result.numberTest
        && result.letterTest
        && result.upperCaseTest
        && result.lowerCaseTest
        && result.specSymbolTest

      return isValid ? result : null
    };
  }

}

