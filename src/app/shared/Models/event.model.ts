import { DatePipe } from "@angular/common";

export interface EventModel {
    name: string;
    description:string;
    lieu:string;
    start:DatePipe ;
    end: DatePipe ;
    minUser: number;
    maxUser: number;
    Category:string;
    Statut:string;
    CreationDate:DatePipe;
}

export interface EventModelDTO extends EventModel{
    id: string;
}