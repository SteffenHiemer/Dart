import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent {
  id: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getId();
  }

  getId(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || ''; // Falls params.get('id') null ist, wird ein leerer String zugewiesen
    });
  }
}
