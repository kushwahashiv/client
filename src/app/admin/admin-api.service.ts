import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Config} from "../config/config";
import {User} from "../common/user";

@Injectable()
export class AdminApiService {
  private BASE_URI: string;

  constructor(private http: HttpClient, private config: Config) {
    this.BASE_URI = config.getHost();
  }

  getUsers() {
    return this.http.get(`${this.BASE_URI}/user`);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.BASE_URI}/user/${id}`);
  }

  addUser(user: User) {
    return this.http.post(`${this.BASE_URI}/user`, user);

  }

  assignRoles(user: User) {
    // TODO: impelement a backend api for role and user here
    // return this.http.post(`${this.BASE_URI}/user/${user.id}`, roles);
  }
}
