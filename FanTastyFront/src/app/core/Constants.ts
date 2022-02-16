import {HttpHeaders} from "@angular/common/http";

export class Constants {
  public static URL_BACK: string = 'http://localhost:60599';
  public static HTTP_HEADERS_OPTIONS: object = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };


}
