import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { GitService, IProfileDataDTO } from './git.service';

describe('GitService', () => {
  let service: GitService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GitService]
    });

    service = TestBed.get(GitService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get profile data of user', () => {
    const expectedOutput = {
      login: 'blacksonic',
      id: 602571,
      name: 'Gábor Soós'
    };

    let profileResponse;
    service.getProfile('blacksonic').subscribe(response => {
      profileResponse = response;
    });

    http
      .expectOne('https://api.github.com/users/blacksonic')
      .flush(expectedOutput);

    expect(profileResponse).toEqual(expectedOutput);
  });
});
