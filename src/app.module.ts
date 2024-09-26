import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `${process.cwd()}/.env`,
    isGlobal: true,
  }), 
  MongooseModule.forRoot(`${process.env.MONGODB_URI}`), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 

  constructor(){
    console.log(process.env.MONGODB_URI, 'MONGODB_URI')
  }
}
