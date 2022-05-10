/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cadastro } from 'src/model/cadastro.model';

@Injectable()
export class CadastroService {
  constructor(
    @InjectModel(Cadastro)
    private cadastroModel: typeof Cadastro,
  ) {}
  async buscaTodos(): Promise<Cadastro[]> {
    return this.cadastroModel.findAll();
  }

  async buscaId(id: number): Promise<Cadastro> {
    return this.cadastroModel.findByPk(id);
  }

  async buscaNome(nome: string): Promise<Cadastro> {
    return this.cadastroModel.findOne({
      where: {
        nome,
      },
    });
  }

  async buscaCrm(crm: number): Promise<Cadastro> {
    return this.cadastroModel.findOne({
      where: {
        crm,
      },
    });
  }

  async buscaTelefone(telefone: number): Promise<Cadastro> {
    return this.cadastroModel.findOne({
      where: {
        telefone,
      },
    });
  }

  async buscaCelular(celular: number): Promise<Cadastro> {
    return this.cadastroModel.findOne({
      where: {
        celular,
      },
    });
  }

  async buscaCep(cep: number): Promise<Cadastro> {
    return this.cadastroModel.findOne({
      where: {
        cep,
      },
    });
  }

  async buscaEspecialidade(especialidade: string): Promise<Cadastro> {
    return this.cadastroModel.findOne({
      where: {
        especialidade,
      },
    });
  }

  async cadastra(cadastro: Cadastro) {
    this.cadastroModel.create(cadastro);
  }

  async atualizaCadastro({
    cadastro,
  }: {
    cadastro: Cadastro;
  }): Promise<[number, Cadastro[]]> {
    return newFunction();

    function newFunction():
      | [number, Cadastro[]]
      | PromiseLike<[number, Cadastro[]]> {
      return this.cadastroModel.update(cadastro, {
        where: {
          id: cadastro.id,
        },
      });
    }
  }

  async deletaCadastro(id: number) {
    const cadastro: Cadastro = await this.buscaId(id);
    cadastro.destroy();
  }
}
