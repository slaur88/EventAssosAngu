import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel,EventModelDTO } from '../../shared/models/event.model';

@Injectable({providedIn: 'root',})

export class EventService { 

  private readonly _httpClient:HttpClient = inject(HttpClient);
  private readonly base_url ="https://localhost:7262/api/event";

  getAllEvent(): Observable<EventModelDTO[]> {
    return this._httpClient.get<EventModelDTO[]>(this.base_url);
  }
  getEventById(id:string): Observable<EventModelDTO> {
    return this._httpClient.get<EventModelDTO>(this.base_url + "/" + id);
  }
  deleteEvent(id: string): Observable<void> {
    return this._httpClient.delete<void>(this.base_url + "/" + id);
  }
  createEvent(event:EventModel): Observable<void> {
    return this._httpClient.post<void>(this.base_url, event);
  }
  modifyEvent(id:string,event:Event): Observable <void>{
    return this._httpClient.patch<void>(this.base_url+"/"+id,event);
  }
}
