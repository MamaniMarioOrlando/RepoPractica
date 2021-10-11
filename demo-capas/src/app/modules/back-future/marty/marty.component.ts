import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OfiTelegrafoService } from '../sevices/ofi-telegrafo.service';

@Component({
  selector: 'app-marty',
  templateUrl: './marty.component.html',
  styleUrls: ['./marty.component.css']
})
export class MartyComponent implements OnInit {
  
  public menssageToDoc:string;
  public form: FormGroup;

  constructor(private formBiulder : FormBuilder, private ofiTelegrafoService:OfiTelegrafoService) { }

  ngOnInit(): void {
    this.form = this.formBiulder.group({
      control : new FormControl()
    });
  }
  sendMenssage(event){
    this.ofiTelegrafoService.send(event);
    this.form.reset();
  }
  viewMenssage(){
    this.ofiTelegrafoService.telegrafista$
                            .subscribe(msj=>{
                              this.menssageToDoc=msj;
                            })
  }

}
