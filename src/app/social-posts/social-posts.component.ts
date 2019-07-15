import { Component, OnInit } from '@angular/core';

interface song {
  name: string;
  artist: string;
  album: string;
}
@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  show : boolean;
  
  playlist: song[];
  constructor() {
    let playlist = [
      {
        name: "Coffee",
        artist: "Sylvan Esso",
        album: "---",
      },
      {
        name: "Diddy Bop (x Louis the Child)",
        artist: "Jacob Banks",
        album: "Fifty Shades of Freedom",
      },
      {
        name: "Harvest Moon",
        artist: "Neil Young",
        album: "Harvest Moon",
      },
      {
        name: "Under Control",
        artist: "The Internet",
        album: "Ego Death",
      }
    ]
    this.playlist = playlist;
  }

  onSubmit(event){
    this.playlist.splice(0, 0, event);
  }

  ngOnInit() {
  }



}
