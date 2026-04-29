import { Injectable } from "@angular/core";

export class Gender {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

@Injectable({ providedIn: 'root' })
export class GenderDictionaryService {
    static MALE = { id: 1, name: 'Mężczyzna' };
    static FEMALE = { id: 2, name: 'Kobieta' };
    static OTHER = { id: 3, name: 'Inna' };

    getGenders(): Gender[] {
        return [GenderDictionaryService.MALE, GenderDictionaryService.FEMALE, GenderDictionaryService.OTHER];
    }
}