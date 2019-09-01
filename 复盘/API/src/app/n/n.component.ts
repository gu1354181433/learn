// /* entryComponents: NzModalCustomComponent */
//
// import { Component, Input, TemplateRef } from '@angular/core';
// import { NzModalRef, NzModalService } from 'ng-zorro-antd';
//
// @Component({
//   selector: 'app-n',
//   templateUrl: './n.component.html',
//   styleUrls: ['./n.component.css']
// })
// export class NComponent {
//   tplModal: NzModalRef;
//   tplModalButtonLoading = false;
//   htmlModalVisible = false;
//   disabled = false;
//
//   constructor(private modalService: NzModalService) {}
//
//   createModal(): void {
//     this.modalService.create({
//       nzTitle: '',
//       nzContent: 'string, will close after 1 sec',
//       nzClosable: false,
//       nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000))
//     });
//   }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//   createComponentModal(): void {
//     const modal = this.modalService.create({
//       nzTitle: 'Modal Title',
//       nzContent: NzModalCustomComponent,
//       nzComponentParams: {
//         title: 'title in component',
//         subtitle: 'component sub title，will be changed after 2 sec'
//       },
//       nzFooter: [
//         {
//           label: 'change component tilte from outside',
//           onClick: componentInstance => {
//             componentInstance!.title = 'title in inner component is changed';
//           }
//         }
//       ]
//     });
//
//     modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
//
//     // Return a result when closed
//     modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
//
//     // delay until modal instance created
//     setTimeout(() => {
//       const instance = modal.getContentComponent();
//       instance.subtitle = 'sub title is changed';
//     }, 2000);
//   }
//
//   createCustomButtonModal(): void {
//     const modal: NzModalRef = this.modalService.create({
//       nzTitle: 'custom button demo',
//       nzContent: 'pass array of button config to nzFooter to create multiple buttons',
//       nzFooter: [
//         {
//           label: 'Close',
//           shape: 'default',
//           onClick: () => modal.destroy()
//         },
//         {
//           label: 'Confirm',
//           type: 'primary',
//           onClick: () =>
//             this.modalService.confirm({ nzTitle: 'Confirm Modal Title', nzContent: 'Confirm Modal Content' })
//         },
//         {
//           label: 'Change Button Status',
//           type: 'danger',
//           loading: false,
//           onClick(): void {
//             this.loading = true;
//             setTimeout(() => (this.loading = false), 1000);
//             setTimeout(() => {
//               this.loading = false;
//               this.disabled = true;
//               this.label = 'can not be clicked！';
//             }, 2000);
//           }
//         },
//         {
//           label: 'async load',
//           type: 'dashed',
//           onClick: () => new Promise(resolve => setTimeout(resolve, 2000))
//         }
//       ]
//     });
//   }
//
//   openAndCloseAll(): void {
//     let pos = 0;
//
//     ['create', 'info', 'success', 'error'].forEach(method =>
//       // @ts-ignore
//       this.modalService[method]({
//         nzMask: false,
//         nzTitle: `Test ${method} title`,
//         nzContent: `Test content: <b>${method}</b>`,
//         nzStyle: { position: 'absolute', top: `${pos * 70}px`, left: `${pos++ * 300}px` }
//       })
//     );
//
//     this.htmlModalVisible = true;
//
//     this.modalService.afterAllClose.subscribe(() => console.log('afterAllClose emitted!'));
//
//     setTimeout(() => this.modalService.closeAll(), 2000);
//   }
// }
//
// @Component({
//   selector: 'nz-modal-custom-component',
//   template: `
//     <div>
//       <h2>{{ title }}</h2>
//       <h4>{{ subtitle }}</h4>
//       <p>
//         <span>Get Modal instance in component</span>
//         <button nz-button [nzType]="'primary'" (click)="destroyModal()">destroy modal in the component</button>
//       </p>
//     </div>
//   `
// })
// export class NzModalCustomComponent {
//   @Input() title: string;
//   @Input() subtitle: string;
//
//   constructor(private modal: NzModalRef) {}
//
//   destroyModal(): void {
//     this.modal.destroy({ data: 'this the result data' });
//   }
// }
