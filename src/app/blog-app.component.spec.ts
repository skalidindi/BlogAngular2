import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BlogAppAppComponent } from '../app/blog-app.component';

beforeEachProviders(() => [BlogAppAppComponent]);

describe('App: BlogApp', () => {
  it('should create the app',
      inject([BlogAppAppComponent], (app: BlogAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'blog-app works!\'',
    inject([BlogAppAppComponent], (app: BlogAppAppComponent) => {
      expect(app.title).toEqual('blog-app works!');
    }));
});
