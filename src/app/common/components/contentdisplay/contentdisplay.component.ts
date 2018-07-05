import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { SLASH, HOME_PATH, TOP_STORY, SPECIAL_STORY, NEWS_PATH, POLITICAL_STORY, CINEMA_PATH, CINEMA_STORY, GOSSIPS_PATH, GOSSIP_STORY } from '../../utility/app-contants';

@Component({
  selector: 'app-contentdisplay',
  templateUrl: './contentdisplay.component.html',
  styleUrls: ['./contentdisplay.component.scss']
})
export class ContentdisplayComponent implements OnInit {
  content: string;
  path_trace = {};
  constructor(private _sharedService: SharedService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      let storyId = params['id'];
      this.route.queryParams.subscribe((queryParams)=>{
        let contentType = queryParams['type'];
        if(contentType == 'top'){
          let story = this._sharedService.top_stories.filter(topStory => topStory.id == storyId)[0] ;
          this.content = story.content;
          this.path_trace['current_path'] = SLASH+HOME_PATH;
          this.path_trace['curret_path_name'] = TOP_STORY;
        } else if (contentType == 'special') {
          let story = this._sharedService.special_story.filter(story => story.id == storyId)[0] ;
          this.content = story.content;
          this.path_trace['current_path'] = SLASH+HOME_PATH;
          this.path_trace['curret_path_name'] = SPECIAL_STORY;
        } else if (contentType == 'news') {
          let story = this._sharedService.news.filter(story => story.id == storyId)[0] ;
          this.content = story.content;
          this.path_trace['current_path'] = SLASH+NEWS_PATH;
          this.path_trace['curret_path_name'] = POLITICAL_STORY;
        } else if (contentType == 'cinema') {
          let story = this._sharedService.cinema.filter(story => story.id == storyId)[0] ;
          this.content = story.content;
          this.path_trace['current_path'] = SLASH+CINEMA_PATH;
          this.path_trace['curret_path_name'] = CINEMA_STORY;
        } else if (contentType == 'gossip') {
          let story = this._sharedService.gossips.filter(story => story.id == storyId)[0] ;
          this.content = story.content;
          this.path_trace['current_path'] = SLASH+GOSSIPS_PATH;
          this.path_trace['curret_path_name'] = GOSSIP_STORY;
        }
      });
    });
  }

}
