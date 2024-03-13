import { Component, OnInit } from '@angular/core';
import { ApiOwServiceService } from 'src/app/services/api-ow-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

    heroes:any = [];
    data: any = [];
    heroesRol: number = 0;
    
    constructor(private apiOwSvc: ApiOwServiceService) {}

    ngOnInit() {
        this.getAllHeroes();
    }    

    filterHeroes(parameter: number) {
        switch(parameter) {
            case 0:
                this.heroes = this.data;
                break;

            case 1:
                if(this.data.length != 0)
                    this.heroes = this.data.filter((element: any) => element.role == "tank");
                break;

            case 2:
                this.heroes = this.data.filter((element: any) => element.role == "damage");
                break;

            case 3:
                this.heroes = this.data.filter((element: any) => element.role == "support");
                break;

            default:
                break;
        }
        this.heroesRol = parameter;
    }

    getAllHeroes() {
        this.apiOwSvc.getAllHeroes().subscribe((data: any) => {
            if(data) {
                this.data = JSON.parse(data);
                this.heroes = this.data;
            }
        })
    }
}
