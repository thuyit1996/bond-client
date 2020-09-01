import { ajax } from 'rxjs/ajax';
import { ENV } from '../../config/Env';
import qs from 'qs';
import { map } from 'rxjs/operators';

export class CallApiService {

  callApiQueryString(url: string, body?: any) {
    ajax({
      method: 'POST',
      url: `${ENV.getEndPoint()}/${url}`,
      body: qs.stringify(body),
    }).pipe(
      map((data: any) => data),
    );
  }

  callApiPost(url: string, body?: any) {
    ajax({
      method: 'POST',
      url: `${ENV.getEndPoint()}/${url}`,
      body,
    }).pipe(
      map((data: any) => data),
    );
  }

  callApiGet(url: string, body?: any) {
    ajax({
      method: 'GET',
      url: `${ENV.getEndPoint()}/${url}`,
      body,
    }).pipe(
      map((data: any) => data),
    );
  }

  callApiPut(url: string, body?: any) {
    ajax({
      method: 'PUT',
      url: `${ENV.getEndPoint()}/${url}`,
      body,
    }).pipe(
      map((data: any) => data),
    );
  }

  callApiDelete(url: string, body?: any) {
    ajax({
      method: 'DELETE',
      url: `${ENV.getEndPoint()}/${url}`,
      body,
    }).pipe(
      map((data: any) => data),
    );
  }
}


