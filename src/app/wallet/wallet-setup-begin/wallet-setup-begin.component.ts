import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-setup-begin',
  templateUrl: './wallet-setup-begin.component.html',
  styleUrls: ['./wallet-setup-begin.component.scss']
})
export class WalletSetupBeginComponent implements OnInit {

  // TODO: remove hard-coded value
  public wallet_address: String = '0x177b46f8fCf57C5CA32747ecf57ed359481b16eD';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  conditionalClose($event) {
    // only close if clicking on the backdrop
    if ($event.target.classList.contains('routed-modal-container')) {
      this.router.navigate(['', {outlets: {modal: null}}]);
    }
  }

}
