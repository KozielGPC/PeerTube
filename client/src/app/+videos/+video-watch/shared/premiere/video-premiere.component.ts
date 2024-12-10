import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ComponentPagination } from "@app/core";
import { GlobalIconComponent } from "../../../../shared/shared-icons/global-icon.component";
import { InfiniteScrollerDirective } from "../../../../shared/shared-main/common/infinite-scroller.directive";
import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";
import { NgIf, NgClass, NgFor } from "@angular/common";
import { VideoDetails } from "@app/shared/shared-main/video/video-details.model";
import { PTDatePipe } from "@app/shared/shared-main/common/date.pipe";

@Component({
  selector: "my-video-premiere",
  templateUrl: "./video-premiere.component.html",
  styleUrls: ["./video-premiere.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    InfiniteScrollerDirective,
    NgClass,
    NgbTooltip,
    GlobalIconComponent,
    NgFor,
    PTDatePipe,
  ],
})
export class VideoPremiereComponent {
  @Input() video: VideoDetails;
  autoPlayNextPremiere: boolean;
  autoPlayNextPremiereSwitchText = "";

  loopPremiere: boolean;
  loopPremiereSwitchText = "";

  notificationAdded = false;
  currentPremierePosition: number;

  // constructor(
  //   private hooks: HooksService,
  //   private userService: UserService,
  //   private auth: AuthService,
  //   private notifier: Notifier,
  //   private premiereService: VideoPremiereService,
  //   private sessionStorage: SessionStorageService,
  //   private router: Router
  // ) {

  // }

  addNotification() {
    // this.notifier.notify("warning", message);
    console.log("addNotification");
  }
}
