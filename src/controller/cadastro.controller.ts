/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Cadastro } from 'src/model/cadastro.model';
import { CadastroService } from 'src/services/cadastro.services';

@Controller('cadastro')
// eslint-disable-next-line prettier/prettier
export class CadastroController {
  constructor(private cadastroService: CadastroService) {}
  @Get()
  async buscaTodos(): Promise<Cadastro[]> {
    return this.cadastroService.buscaTodos();
  }
  @Get(':id')
  async buscaId(@Param() params): Promise<Cadastro> {
    return this.cadastroService.buscaId(params.id);
  }

  @Get(':nome')
  async buscaNome(@Param() params): Promise<Cadastro> {
    return this.cadastroService.buscaNome(params.nome);
  }
  @Get(':crm')
  async buscaCrm(@Param() params): Promise<Cadastro> {
    return this.cadastroService.buscaCrm(params.crm);
  }

  @Get(':telefone')
  async buscaTelefone(@Param() params): Promise<Cadastro> {
    return this.cadastroService.buscaTelefone(params.telefone);
  }

  @Get(':celular')
  async buscaCelular(@Param() params): Promise<Cadastro> {
    return this.cadastroService.buscaCelular(params.celular);
  }

  @Get(':cep')
  async buscaCep(@Param() params): Promise<Cadastro> {
    return this.cadastroService.buscaCep(params.cep);
  }

  @Get(':especialidade')
  async buscaEspecialidade(@Param() params): Promise<Cadastro> {
    return this.cadastroService.buscaEspecialidade(params.especialidade);
  }

  @Post()
  async cadastra(@Body() cadastro: Cadastro) {
    return this.cadastroService.cadastra(cadastro);
  }

  @Put()
  async atualizaCadastro(
    @Body() cadastro: Cadastro,
  ): Promise<[number, Cadastro[]]> {
    return this.cadastroService.atualizaCadastro({ cadastro });
  }

  @Delete(':id')
  async deletaCadastro(@Param() params) {
    return this.cadastroService.deletaCadastro(params.id);
  }
}
