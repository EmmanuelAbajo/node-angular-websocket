import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';
import { UserService } from './services/user/user.service';


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
export class RoleDirective implements OnInit {
    @Input() appUserRole: string | string[];
    private roles: Array<string> = [];
    private userRoles: Array<string> = [];

    constructor(private userService: UserService,
                private templateRef: TemplateRef<any>,
                private viewContainerRef: ViewContainerRef,
        ) { }


    ngOnInit(): void {
        this.roles = typeof this.appUserRole === 'string' ? [this.appUserRole] : this.appUserRole;
        this.updateView();
    }


    private updateView(): void {
        const userData = this.userService.getUserInfo();
        this.userRoles =  userData.roleName;

        const hasAuthority = this.checkRole(this.roles, this.userRoles);
        console.log('Has authority::: ' + hasAuthority);
        this.viewContainerRef.clear();
        if (hasAuthority) {
         this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
      }


    private checkRole(roles: string[], currentRoles: string[]): boolean {
        if (!currentRoles || currentRoles == null) {
            return false;
        }
        return currentRoles.some((role: string) => roles.includes(role));
    }

}
