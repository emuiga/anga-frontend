import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service'; // Import your data service
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  userName: string | undefined;
  numberOfWarehouses: number | undefined;
  // Declare other statistic variables

  constructor(private router: Router, private dataService: DataService, private authService: AuthService) { }

  logout() {
    // Call the logout method from the authentication service
    this.authService.logout();
    // Redirect the user to the login page
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    // Fetch dynamic data from the data service
    this.userName = this.dataService.getUserName();
    this.numberOfWarehouses = this.dataService.getNumberOfWarehouses();
    // Fetch other statistics data
  }
}

