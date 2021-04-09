import { Component, OnInit } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';
import { DialogService } from 'src/app/servicios/dialog.service';
import { GlobalService } from 'src/app/servicios/global.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private globalService: GlobalService, private persistenceService: PersistenceService, private dialog: DialogService) {

    this.globalService.toggleSidebarVisibility()

    console.log('Se crea el menu de D Q ' + this.globalService.isSidebarVisible)


  }


  refresh() {


    if (this.persistenceService.get("user", StorageType.LOCAL) != undefined) {
      var loader = this.persistenceService.get("loader", StorageType.LOCAL)
      console.log('Async operation has ended ' + loader);
      if (loader == undefined) {

        this.persistenceService.set("loader", true, { type: StorageType.LOCAL })
        console.log('Begin async operation ' + this.persistenceService.get("loaded", StorageType.LOCAL));
        window.location.reload();

      } else {
        console.log('No es undefined')
      }
    } else {
      this.dialog.navegar('')
    }



  }

  ngOnInit() {

    this.refresh()

  }


}
