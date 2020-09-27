import { HttpHeaders } from "@angular/common/http";

export class httpOptions {
  headers: HttpHeaders;

  constructor(token?: string) {
    this.headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": token
    });
  }
}
