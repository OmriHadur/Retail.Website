import { catchError, tap } from "rxjs/internal/operators";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { BadInputError } from '../models/bad-input-error';
import { UnauthorizedError } from '../models/unauthorized-error';
import { NotFoundError } from '../models/not-found-error';
import { AppError } from '../models/app.error';

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((data) => console.log(data)),
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error("An error occurred:", error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
              `body was: ${JSON.stringify(error.error)}`
          );
          if (error.status == 400) return throwError(new BadInputError(error));
          if (error.status === 401)
            return throwError(new UnauthorizedError(error));
          if (error.status == 404) return throwError(new NotFoundError(error));
          return throwError(new AppError());
        }
        // return an observable with a user-facing error message
        return throwError("Something bad happened; please try again later.");
      })
    );
  }
}
