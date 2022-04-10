import { Component, OnInit, Input } from '@angular/core';
import { Posts } from 'src/app/Posts';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  // public posts: Posts[];
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';
  constructor(private dataService: DataService) {
    //this.posts = [];
  }

  ngOnInit(): void {
    // this.posts = this.dataService.getinfo();
  }
}
