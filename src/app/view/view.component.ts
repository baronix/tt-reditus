import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {
  session: any;

  loadData(){
    let data: any = localStorage.getItem('session');
    this.session = JSON.parse(data);
  }

  deleteImagem(id: number){
    for (let i = 0; i < this.session.length; i++){
      if(this.session[i].idImagem == id) {
        this.session.splice(i, 1);
      }
      localStorage.setItem('session', JSON.stringify(this.session))
    }
  }

  

  ngOnInit() {
    this.loadData();
}
}
