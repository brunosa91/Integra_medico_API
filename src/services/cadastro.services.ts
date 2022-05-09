import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cadastro } from 'src/model/cadastro.model';

@Injectable()
export class CadastroService {
  constructor(
    @InjectModel(Cadastro)
    private cadastroModel: typeof Cadastro,
  ) {}
}
