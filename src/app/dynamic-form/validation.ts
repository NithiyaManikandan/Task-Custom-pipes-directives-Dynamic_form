import { AbstractControl } from "@angular/forms";

export function nameValidation(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
        const regex1 = new RegExp('^[[A-Z]{1}[a-z]{5,10}$')
        if (!regex1.test(control.value)) {
            return {
                isFirstNameError: true
            }
        }
    }
    return null;
}

export function lastNameValidation(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
        const regex2 = new RegExp('^[[A-Z]{1}[a-z]{3,10}$')
        if(!regex2.test(control.value)) {
            return {
                isLastNameError: true
            }
        }
    }
    return null;
}

export function skillValidation(control: AbstractControl) {
    console.log(control.value,control.errors);
    if (control && (control.value !== null || control.value !== undefined)) {
        const regex3 = new RegExp('^[[A-Za-z]$')
        if(!regex3.test(control.value)) {
            return {
                isSkillError: true
            }
        }
    }
    return null;
}
