import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { YakaroulerAppComponent } from '../app/yakarouler.component';

beforeEachProviders(() => [YakaroulerAppComponent]);

describe('App: Yakarouler', () => {
  it('should create the app',
      inject([YakaroulerAppComponent], (app: YakaroulerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'yakarouler works!\'',
      inject([YakaroulerAppComponent], (app: YakaroulerAppComponent) => {
    expect(app.title).toEqual('yakarouler works!');
  }));
});
