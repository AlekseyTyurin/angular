import {Injectable} from '@angular/core';
import {PaginationApiService} from '../../../services/index';



@Injectable()
export class PaginationResolver {

  constructor(private paginationApiService: PaginationApiService) {
  }

  resolve(): any {
    return this.paginationApiService.fetchPaginationInfo();
  }

}
