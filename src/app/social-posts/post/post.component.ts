import { Component, OnInit, Input } from '@angular/core';

interface song {
  name: string;
  artist: string;
  album: string;
}


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() playlist: song[];
  
  ngOnInit() {
  }

}
