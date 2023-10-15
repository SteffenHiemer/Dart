import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

    sendUser(user: any) {
      const body = JSON.stringify(user)
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.post(
        "https://dart-9e5e0-default-rtdb.europe-west1.firebasedatabase.app/users.json",
        body,
        { headers: headers },
      )
    }

    fetchUser() {
      return this.http.get( "https://dart-9e5e0-default-rtdb.europe-west1.firebasedatabase.app/users.json")
    }


}


