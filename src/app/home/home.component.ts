import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubEntity } from '../core/models/github.entity';
import { GithubService } from '../core/services/github.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule],
  providers: [GithubService]
})
export class HomeComponent implements OnInit {
  user!: GithubEntity;

  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000)
  });

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getGithubRepos('nguyenphatit').subscribe(user => this.user = user);
  }
}
