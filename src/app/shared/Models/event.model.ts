import { DatePipe } from "@angular/common";

export interface EventModel {
    name: string;
    description:string;
    lieu:string;
    start:string ;
    end: string ;
    minUser: number;
    maxUser: number;
    Category:string;
    Statut:string;
    CreationDate:string;
}

export interface EventModelDTO extends EventModel{
    id: string;
}