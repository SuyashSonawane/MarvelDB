import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-character",
  templateUrl: "./character.page.html",
  styleUrls: ["./character.page.scss"]
})
export class CharacterPage implements OnInit {
  public routeSub: Subscription;
  public character_name: any;
  goHome() {
    this.router.navigate(["/"]);
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.character_name = params["id"];
      // console.log(params['id'])
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
