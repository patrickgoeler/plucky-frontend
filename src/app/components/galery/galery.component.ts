import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-galery",
  templateUrl: "./galery.component.html",
  styleUrls: ["./galery.component.scss"]
})
export class GaleryComponent implements OnInit {
  @Input() title: string;
  @Input() galeryItems: { image: string; name: string; url: string }[];
  @Input() findMoreRoute: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToItem(item) {
    this.router.navigateByUrl(item.url);
  }

  onFindMoreClicked() {
    this.router.navigate([this.findMoreRoute]);
  }
}
