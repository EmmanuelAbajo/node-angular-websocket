import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { UserService } from '../services/user/user.service';


/**
 * @whatItDoes Conditionally includes an HTML elment if current user has
 * any of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *    <some-element *appUserRole="'ROLE_ADMIN'">...</some-element>
 *    <some-element *appUserRole="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
@Directive({
  selector: '[appUserRole]'
})
export class RoleDirective {

    private roles: Array<string> = [];
    private userRoles: Array<string> = [];

    constructor(private userService: UserService,
                private templateRef: TemplateRef<any>,
                private viewContainerRef: ViewContainerRef,
        ) { }


    @Input()
    set appUserRole(value: string | string[]) {
        this.roles = typeof value === 'string' ? [value] : value;
        this.updateView();
    }

    private updateView(): void {
        const userData = this.userService.getUserInfo();
        this.userRoles =  userData.roleName;

        const hasAuthority = this.checkRole(this.roles, this.userRoles);
        console.log('Has authority::: ' + hasAuthority);
        if (hasAuthority) {
         this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }
      }


    private checkRole(roles: string[], currentRoles: string[]): boolean {
        if (!currentRoles || currentRoles == null) {
            return false;
        }
        return currentRoles.some((role: string) => roles.includes(role));
    }

}
