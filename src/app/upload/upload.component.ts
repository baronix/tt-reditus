import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  applyForm = new FormGroup ({
    idImagem: new FormControl(''),
    titulo: new FormControl(''),
    nomeDoFicheiro: new FormControl(''),
    palavrasChave: new FormControl(''),
    preco: new FormControl(''),
    descricao: new FormControl(''),
    dataUpload: new FormControl('')

  })
  imagem = {
    idImagem: 0,
    titulo: '',
    nomeDoFicheiro: '',
    palavrasChave: '',
    preco: '',
    descricao: '',
    dataUpload: ''
  };
  submeterForm(){
    this.imagem = Object.assign(this.imagem, this.applyForm.value)
    this.adicionarImagem(this.imagem)
  }

  adicionarImagem(imagem: any){
    let imagens = [];
    if (localStorage.getItem('session')) {
      imagens = JSON.parse(localStorage.getItem('session') || '[]' );
      imagens = [imagem, ...imagens]
    } else {
      imagens = [imagem]
    }
    this.imagem.idImagem = imagens.length+1;
    localStorage.setItem('session', JSON.stringify(imagens))
  }

  imgUrl = "https://content.hostgator.com/img/weebly_image_sample.png";

  onselectFile(e: any){
    if (e.target.files){
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.imgUrl = event.target.result;
        this.applyForm.patchValue({ nomeDoFicheiro: event.target.result });
      }
    }
    const file = e.target.files[0];
    this.applyForm.patchValue({ nomeDoFicheiro: file.name });
  }


}
