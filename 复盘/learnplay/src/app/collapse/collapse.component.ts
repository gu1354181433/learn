import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls  : ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  panels = [
    {
      active: false,
      name  : '用户管理',
      icon  : 'home',
      sorts : [
        {name:'用户列表', url:'/'}
      ]
    },
    {
      active: false,
      name  : '文章管理',
      icon  : 'tool',
      sorts : [
        {name:'文章列表', url:'/'}
      ]
    },
    {
      active: false,
      name  : '视频管理',
      icon  : 'tool',
      sorts : [
        {name:'视频列表', url:'./video'}
      ]
    },
    {
      active: false,
      name  : '评论管理',
      icon  : 'tool',
      sorts : [
        {name:'评论列表', url:'/'}
      ]
    },
    {
      active: false,
      name  : '订单管理',
      icon  : 'tool',
      sorts : [
        {name:'订单列表', url:'/'}
      ]
    },
    {
      active: false,
      name  : '内容管理',
      icon  : 'tool',
      sorts : [
        {name:'内容列表', url:'/'},
        {name:'banner列表', url:'/'}
      ]
    },
    {
      active: false,
      name  : '账户管理',
      icon  : 'tool',
      sorts : [
        {name:'账户列表', url:'./account'}
      ]
    },
    {
      active: false,
      name  : '角色管理',
      icon  : 'tool',
      sorts : [
        {name:'角色列表', url:'/'}
      ]
    }
  ];
}
