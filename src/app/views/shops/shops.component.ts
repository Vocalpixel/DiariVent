import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ItemShopComponent } from 'src/app/shared/item-shop/item-shop.component';
import { Item } from 'src/app/interfaces/item';


@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatMenuModule, CommonModule, ItemShopComponent]
})
export class ShopsComponent implements OnInit {

  items: Item[] = [
    {
      nombre: 'Tamales',
      descripcion: 'Deliciosos tamales hechos a mano.',
      urlImagen: 'https://api.teamsi.app/views/admin/main-container/file?fileKey=8160112f-65f0-4c2d-9412-2d8537280f0b'
    },
    {
      nombre: 'Pizzeria',
      descripcion: 'Pizza recién horneada con ingredientes frescos.',
      urlImagen: 'https://api.teamsi.app/views/admin/main-container/file?fileKey=cdfd8eb8-67c5-4ae0-8706-850fdf8c1649'
    },
    {
      nombre: 'Wafleria',
      descripcion: 'Wafles con fruta fresca con una variedad muy grande.',
      urlImagen: 'https://api.teamsi.app/views/admin/main-container/file?fileKey=1c2acf70-5f9f-452d-a651-88ecf7dc2258'
    },
    {
      nombre: 'Wafleria',
      descripcion: 'Wafles con fruta fresca con una variedad muy grande.',
      urlImagen: 'https://api.teamsi.app/views/admin/main-container/file?fileKey=1c2acf70-5f9f-452d-a651-88ecf7dc2258'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
