import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'create' })
  create(data: any) {    
    // return this.appService.createOrder(data);
    console.log('order: create')
  }

  @MessagePattern({ cmd: 'find' })
  find(paramId: string){   
    console.log('order: find') 
    // return this.appService.find(paramId);
  }

  @MessagePattern({ cmd: 'all' })
  all(){
    console.log('order: all')
    // return this.appService.all();
  }

  @MessagePattern({ cmd: 'cancel' })
  cancel(paramId: number){
    console.log('order: cancel')
    // return this.appService.cancel(paramId);
  }
 
  @MessagePattern({ cmd: 'pay' })
  pay(paramId: number){
    console.log('order: pay')
    // return this.appService.pay(paramId);
  }
 
}
