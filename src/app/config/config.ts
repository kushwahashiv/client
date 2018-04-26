import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class Config {
  getHost(): string {
    return environment.serverURI;
  }
}
