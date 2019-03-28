import { Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  items = [
  {
    id: 1,
    content: "Was added to your Contacts."
  },
  {
    id: 2,
    content: "Hi Friend!!"
  },
  {
    id: 3,
    content: "<span>Subject : Hey <br>Hi <span><a href='#'>@Black Panther</a></span> ,<br><br>Good Morning<br><br><div class='gifplayer-wrapper' style='width: 135px; height: 135px;'>  <img class='ghiphy_responsive gifPlayer 28882 gifplayer-ready' value='https://media0.giphy.com/media/xM8CKTlDAN5Xa/giphy_s.gif?cid=e1bb72ff5c9c3bd3393277496bbbe058' alt='https://media0.giphy.com/media/xM8CKTlDAN5Xa/giphy.gif?cid=e1bb72ff5c9c3bd3393277496bbbe058&amp;time=0.9942430661151493' src='https://media0.giphy.com/media/xM8CKTlDAN5Xa/giphy_s.gif?cid=e1bb72ff5c9c3bd3393277496bbbe058' width='135' height='135' style='cursor: pointer;'></div>"
  },
  {
    id: 4,
    content: "<div class='col col-sm-7 marg-top3 pad_r0 word_wrap col-lg-8'><div class='hpad1 ng-star-inserted'><div class='text_overlap padl0_s' title='SampleAudio_0.4mb.mp3'>SampleAudio_0.4mb.mp3</div></div><small class='mart-3 marl2'>434 KB</small><br/><audio class='' controls='' preload='metadata' src='https://d3j8c4ired41mc.cloudfront.net/1551160752372-SampleAudio_0.4mb.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Date=20190328T031342Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=600&amp;X-Amz-Credential=AKIAJ2NLTJYNCWKHQIUA%2F20190328%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Signature=869e5a444f638d28e91024cd9155c89b14cda9e5a729ae0739a9ff39f8195f88'></audio></div>"
  },
  {
    id: 5,
    content: "<span>Hey check this out!!!<br><a href='https://youtu.be/TcMBFSGVi1c' target='_blank'>https://youtu.be/TcMBFSGVi1c</a></span><div><span>↓</span><a target='_blank' href='https://youtu.be/TcMBFSGVi1c'>https://youtu.be/TcMBFSGVi1c</a><br> <iframe src='https://www.youtube.com/embed/TcMBFSGVi1c?wmode=transparent&amp;jqoemcache=Vq20M' width='425' height='349' allowfullscreen='true' allowscriptaccess='always' scrolling='no' frameborder='0' style='max-height: 180px; max-width: 350px; width: 350px; height: 180px;'></iframe></div>"
  },
  {
    id: 6,
    content: "<div><div title='1551184482944-videoplayback.mp4'>1551184482944-videoplayback.mp4</div><small>18 MB</small><br/><video preload='auto' width='360' src='http://0.s3.envato.com/h264-video-previews/80fad324-9db4-11e3-bf3d-0050569255a8/490527.mp4'></video></div>"
  },
  {
    id: 7,
    content: "<p> Subject : Images<br /></p><div><div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBLq6oqWI1zbYqa6Bd3OhOAXwPcmt42nYDF0U4AtR16Yv1dYzXA' width='50' height='50' /></div><div><img src='https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg' width='293' height='293' /></div><div><img src='https://i.pinimg.com/originals/20/f1/78/20f178821cf5516f201d8f7eb0774a26.jpg' width='180' height='231' /></div><div><img src='https://cdn.pixabay.com/photo/2017/03/26/12/13/countryside-2175353_960_720.jpg' width='360' height='202.5' /></div></div>"
  },
  {
    id: 8,
    content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.</p> <p>Ex soleat habemus usu, te nec eligendi deserunt vituperata. Natum consulatu vel ea, duo cetero repudiare efficiendi cu. Has at quas nonumy facilisis, enim percipitur mei ad. Mazim possim adipisci sea ei, omnium aeterno platonem mei no.</p> <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Dolorem sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Eligendi deserunt vituperata. Natum consulatu vel ea, duo cetero repudiare efficiendi cu. Has at quas nonumy facilisis, enim percipitur mei ad. Mazim possim adipisci sea ei, omnium aeterno platonem mei no. Ut enim ad minim veniam, quis nostrud exercitation.</p> <p>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in venus.</p>"
  }
];

  @ViewChild('scroll') scroller: VirtualScrollerComponent;

  constructor(private cd: ChangeDetectorRef) {}

  appendData() {
    let appendItem:any = this.items[Math.floor(Math.random() * 6)];
    this.items.push(appendItem);
    this.items = this.items.slice();
    this.scroller.scrollToIndex(this.items.length);
  }

  onVsUpdate(event) {
    console.log('vs update', event);
  }

  onVsChange(event) {
    console.log('vs change', event);
  }

  onVsStart(event) {
    console.log('vs start', event);
  }

  onVsEnd(event) {
    console.log('vs end', event);
  }
}
