import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cmp-main-sidenav-menu',
  templateUrl: './main-sidenav-menu.component.html',
  styleUrls: ['./main-sidenav-menu.component.scss']
})
export class MainSidenavMenuComponent {

  /**
   * Emite evento de cerrar el sidenav
   */
  @Output() closeSidenav: EventEmitter<boolean> = new EventEmitter()

  /**
   * Data para los expansion panel
   */
  expansionPanelData: any[] = [
    {
      header: 'Ropa',
      items: [
        'Camisas',
        'Jeans',
        'Chaquetas',
        'Pantalones',
        'Vestidos',
        'Jumpsuits',
        'Faldas',
        'Todo',
      ]
    },
    {
      header: 'Zapatos',
      items: [
        'Mocasines',
        'Botas',
        'Sneakers',
        'Sandalias',
      ]
    },
    {
      header: 'Bolsos',
      items: [
        'Bandoleras',
        'Morrales',
        'Monederos/billeteras',
        'Riñoneras',
        'Sobres',
      ]
    },
    {
      header: 'Accesorios',
      items: [
        'Sombreros/Caps',
        'Correas',
        'Pulseras',
        'Relojes',
        'Sobres',
      ]
    },
    {
      header: 'Underwear',
      items: [
        'Ropa interior',
        'Traje de baño',
        'Pijamas',
        'Sandalias',
        'Medias',
      ]
    },
    {
      header: 'Activewear',
      items: [
        'Sudaderas',
        'Hoodies',
        'Guarda camisas',
        'Conjuntos',
      ]
    },
  ]

  /**
   * Index del panele expandido
   */
  panelExpanded!: number

}
