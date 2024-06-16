import { Component, OnInit, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item-shop',
  templateUrl: './item-shop.component.html',
  styleUrls: ['./item-shop.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatMenuModule]
})
export class ItemShopComponent  implements OnInit {
  
  @Input() item!: Item;

  constructor() { }

  ngOnInit() {}

  firstAction() {
    alert("Editar")
  }

  secondAction() {
    alert("Eliminar")
  }


}
