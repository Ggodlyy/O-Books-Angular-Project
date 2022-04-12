import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!/^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/.test(value)) {
        return {
            email: true
        }
    }

    return null;
}