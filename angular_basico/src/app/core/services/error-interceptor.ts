import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ModalService } from '../../shared/modal-component/modal-service';
import { inject } from '@angular/core';

export const errInterceptor: HttpInterceptorFn = (req, next) => {

    const modal = inject(ModalService);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {

            if (error) {
                modal.exibirErro(error);
            }
                        
            return throwError(() => error);
        })
    );
}