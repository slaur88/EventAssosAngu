import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel,EventModelDTO } from '../../shared/Models/event.model';

@Injectable({providedIn: 'root',})

export class EventService { 

  private readonly _httpClient:HttpClient = inject(HttpClient);
  private readonly base_url ="http://localhost:4200/events";

  getAllEvent(): Observable<EventModelDTO[]> {
    return this._httpClient.get<EventModelDTO[]>(this.base_url);
  }
  getEventById(id:string): Observable<EventModelDTO> {
    return this._httpClient.get<EventModelDTO>(this.base_url + "/" + id);
  }
  deleteEvent(id: string): Observable<void> {
    return this._httpClient.delete<void>(this.base_url + "/" + id);
  }
  createEvent(event:Event): Observable<void> {
    return this._httpClient.post<void>(this.base_url, event);
  }
  modifyEvent(id:string,event:Event): Observable <void>{
    return this._httpClient.put<void>(this.base_url+"/"+id,event);
  }
}
