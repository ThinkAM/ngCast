import * as tslib_1 from "tslib";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCastComponent } from './ng-cast.component';
import { NgCastService } from './shared/ng-cast.service';
let NgCastModule = class NgCastModule {
};
NgCastModule = tslib_1.__decorate([
    NgModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [
            CommonModule
        ],
        exports: [NgCastComponent],
        providers: [NgCastService],
        declarations: [NgCastComponent]
    })
], NgCastModule);
export { NgCastModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcuY2FzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdGhpbmtlci9kZXYvdGhpbmthbS9uZ0Nhc3QvIiwic291cmNlcyI6WyJuZy5jYXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVl6RCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0NBQUksQ0FBQTtBQUFoQixZQUFZO0lBVHhCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFFLHNCQUFzQixDQUFFO1FBQ25DLE9BQU8sRUFBRTtZQUNQLFlBQVk7U0FDYjtRQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUMxQixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDMUIsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO0tBQ2hDLENBQUM7R0FDVyxZQUFZLENBQUk7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdDYXN0Q29tcG9uZW50IH0gZnJvbSAnLi9uZy1jYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0Nhc3RTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvbmctY2FzdC5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTmdDYXN0Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbTmdDYXN0U2VydmljZV0sXG4gIGRlY2xhcmF0aW9uczogW05nQ2FzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdDYXN0TW9kdWxlIHsgfVxuIl19