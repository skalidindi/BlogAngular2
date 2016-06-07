import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Router, Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { AboutComponent } from './+about';

@Component({
  moduleId: module.id,
  selector: 'blog-app-app',
  templateUrl: 'blog-app.component.html',
  styleUrls: ['blog-app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@Routes([
  {
    path: '/dashboard',
    component: DashboardComponent
  },
  {
    path: '/about',
    component: AboutComponent,
  }
])
export class BlogAppAppComponent implements OnInit {
  title = 'blog-app works!';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/crisis-center']);
  }
}
