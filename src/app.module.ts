import { Module } from '@nestjs/common';
import { CadastroService } from './services/cadastro.services';
import { SequelizeModule } from '@nestjs/sequelize';
import { CadastroController } from './controller/cadastro.controller';
import { Cadastro } from './model/cadastro.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'database',
      // port: 3306,
      username: 'root',
      password: '',
      database: 'cadastro_medico',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Cadastro]),
  ],
  controllers: [CadastroController],
  providers: [CadastroService],
})
export class AppModule {}
