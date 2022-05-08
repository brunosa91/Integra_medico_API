import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import sequelize from 'sequelize';
import { CadastroController } from './controller/cadastro.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cadastro_medico',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, CadastroController],
  providers: [AppService],
})
export class AppModule {}
