import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { DynamicTableComponent } from './dynamic/dynamic-table/dynamic-table.component';
import { DynamicFormComponent } from './dynamic/dynamic-form/dynamic-form.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading.component';
import { filter } from 'rxjs/internal/operators/filter';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DynamicTableComponent,DynamicFormComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Inslab';




  constructor(private router: Router) {
   
  }

  ngOnInit(): void {
    
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)  // Only respond to NavigationEnd events
      )
      .subscribe(() => {
        // Scroll to the top of the page on route change
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
      });
  }

}
