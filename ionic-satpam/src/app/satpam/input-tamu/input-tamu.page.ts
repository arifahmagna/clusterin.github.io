import { Component, OnInit } from '@angular/core';
// yang ditambahin

 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ModalController } from '@ionic/angular'

@Component({
  standalone: false,
  selector: 'app-input-tamu',
  templateUrl: './input-tamu.page.html',
  styleUrls: ['./input-tamu.page.scss'],
})
// export class InputTamuPage implements OnInit {
  // yg ditambahin



 
//   constructor() { }

//   ngOnInit() {
//   }

// }

 export class InputTamuPage {
   tamuForm: FormGroup;

   constructor(private fb: FormBuilder) {
     this.tamuForm = this.fb.group({
       nama: ['', Validators.required],
       alamat: ['', Validators.required],
       telepon: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       tujuan: ['', Validators.required],
       alamattujuan: ['', Validators.required],
       estimasi: ['', Validators.required],
       waktumasuk: ['', Validators.required],
       waktukeluar: ['', Validators.required],
       keterangan: ['', Validators.required],
     });
   }

  submitForm() {
     console.log(this.tamuForm.value);
   }
 }
    //  export class InputTamuPage{
    //    isModalOpen = false;
    //    tamu = {
    //      nama: '',
    //      alamat: '',
    //      email : '',
    //      noTelp : '',
    //      tujuan : '',
    //      alamatTujuan: '',
    //      estimasi : '',
    //      waktuMasuk : '',
    //      waktuKeluar : '',
    //      keterangan : '',
    //    };

//       constructor(private modalController: ModalController) {}
//   openModal() {
//     this.isModalOpen = true;
//   }
//   closeModal() {
//     this.isModalOpen = false;
//   }

//   submitForm(){
//     console.log('form submitted:',this.tamu);
//     this.closeModal();

//     //reset form
//      this.tamu = {
//       nama: '',
//       alamat: '',
//       email: '',
//       noTelp: '',
//       tujuan: '',
//       alamatTujuan: '',
//       estimasi: '',
//       waktuMasuk: '',
//       waktuKeluar: '',
//       keterangan: ''
//     };
//   }
  
//     }
