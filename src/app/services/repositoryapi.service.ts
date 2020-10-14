import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class RepositoryapiService {

    constructor(private http: HttpClient) { }

    private VERB = {
      get:"GET",
      post:"POST",
      put:"PUT",
      delete:"DELETE"
    }
    public uri:string;

    addData = <T> (obj: T) => {
      let httpOptions = this.buildOptions(this.VERB.post, obj);
      return this.http.post<T>(this.uri, obj, httpOptions);
    }

    getImage = <T> (pokemon:string) =>{return this.http.get<T>(environment.uri + pokemon).toPromise()};

    getDataById = <T> (id:any) => this.http.get<T>(this.uri + id);

    updateData = <T> (id: any, obj: T) => {
      let httpOptions = this.buildOptions(this.VERB.put, obj);
      return this.http.put<T>(this.uri + id, obj, httpOptions);
    }

    deleteData = <T> (id: any) => {
      let httpOptions = this.buildOptions(this.VERB.delete);
      return this.http.delete<T>(this.uri + id, httpOptions);
    }

    private buildOptions(meth:string, obj?:any):any{
      let options = {};

      if (obj !== null && meth !== "DELETE")
      {
        options = {
          method: meth,
          headers: {
            'Content-Type': 'application/json'
            //'Authorization': 'jwt-token'
          },
          body: JSON.stringify(obj)
        }

      }else
      {
        options = {
          method: meth,
          headers: {
            'Content-Type': 'application/json'
            //'Authorization': 'jwt-token'
          }
        }
      }

      return options;
  }

}
