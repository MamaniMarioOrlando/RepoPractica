import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OfiTelegrafoService } from '../sevices/ofi-telegrafo.service';

@Component({
  selector: 'app-doc-brow',
  templateUrl: './doc-brow.component.html',
  styleUrls: ['./doc-brow.component.css']
})
export class DocBrowComponent implements OnInit {

  public menssageToMarty : string;
  public form : FormGroup;

  constructor(private formBuilder : FormBuilder, private ofiTelegrafoService:OfiTelegrafoService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      controlDoc : new FormControl()
    });
    this.form.controls["control"]
  }

  sendMenssage(event){
    this.ofiTelegrafoService.send(event);
    this.form.reset();
  }

  viewMenssage(){
    this.ofiTelegrafoService.telegrafista$.subscribe(msj=>{
      this.menssageToMarty=msj;
    });
  }

}
