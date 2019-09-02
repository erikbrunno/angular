import { Component } from '@angular/core'

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo-component.css']
    //template: `<p>Componente Topo2</p>`
    //styles:[` .exemplo { color:red } `]
})
export class TopoComponent {
    public titulo: string = "Aprendendo Inglês"
}