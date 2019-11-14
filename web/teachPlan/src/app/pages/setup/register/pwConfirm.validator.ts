import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';

/***
 * @Description: 密码验证器
 * @Param control: FormControl
 * @author chenjie
 */
export function pwConfirmValidator(control: FormControl): ValidationErrors | null {
  let password = null;
  if (control.parent) {
    password = control.parent.get('password');
    if (control.value !== password.value && control.value) {
      return {pwConfirm: true, error: true};
    }
  }
  return {};
}

