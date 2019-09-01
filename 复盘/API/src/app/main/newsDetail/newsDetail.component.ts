import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from '../../services/http/http.service'
import { response } from '../../services/common/common.namespec';
import { CommonService } from '../../services/common/common.service';

@Component({
    selector: 'news-detail',
    templateUrl: './newsDetail.component.html',
    styleUrls: ['./newsDetail.component.scss']
})

export class newsDetailComponent implements OnInit {
    data:any
    time:any
    constructor(private route: Router, private http: HttpService,private routerParams: ActivatedRoute, ) { }
    dateil(id:number): void {
        this.http.articlesDateil(id).subscribe((resp: response) => {
            if (resp.code == 0) {
                this.data = resp.data.article
                this.data.content = JSON.parse(this.data.content) 
                console.log(this.data.content)
                // this.time= new Date(+resp.data.article.createAt)
            }
        })
    }
    ngOnInit(): void {
        const id = Number(this.routerParams.snapshot.paramMap.get('id'))
        this.dateil(id)
    }
}