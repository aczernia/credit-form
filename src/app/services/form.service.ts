import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FormResult } from "../models/form.result";
import { FormRequest } from "../models/form.request";

@Injectable({ providedIn: 'root' })
export class FormService {
    send(formRequest: FormRequest): Observable<FormResult> {
        return new Observable<FormResult>((observer) => {
            setTimeout(() => {
                observer.next({
                    applicationId: '12345',
                    approved: Math.random() > 0.5
                });
                observer.complete();
            }, 1000);
        });
    }

    checkPersonalNumber(personalNumber: string): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            setTimeout(() => {
                const lastDigit = personalNumber[personalNumber.length - 1];

                observer.next(parseInt(lastDigit) % 2 === 0);
                observer.complete();
            }, 500);
        });
    }
}