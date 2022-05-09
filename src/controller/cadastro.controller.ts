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

@Controller('cadastro')
// eslint-disable-next-line prettier/prettier
export class CadastroController {
  @Get()
  buscaTodos(): string {
    return 'todos os médicos';
  }
  @Get(':id')
  buscaId(@Param() params): string {
    return `id do médico ${params.id}`;
  }

  @Get(':nome')
  buscaNome(@Param() params): string {
    return `nome do médico ${params.nome}`;
  }
  @Get(':crm')
  buscaCrm(@Param() params): string {
    return `retorna crm ${params.crm}`;
  }

  @Get(':telefone')
  buscaTelefone(@Param() params): string {
    return `retorna telefone do médico' ${params.telefone}`;
  }

  @Get(':celular')
  buscaCelular(@Param() params): string {
    return `retorna celular do médico ${params.celular}`;
  }

  @Get(':cep')
  buscaCep(@Param() params): string {
    return `retorna cep do médico${params.cep}`;
  }

  @Get(':especialidade')
  buscaEspecialidade(@Param() params): string {
    return `retorna especialidade do médico ${params.especialidade}`;
  }

  @Post()
  cadastra(@Body() cadastro): string {
    console.log(cadastro);
    return 'cadastro criado';
  }

  @Put()
  atualizaCadastro(@Body() cadastro): string {
    console.log(cadastro);
    return 'cadastro atualizado';
  }

  @Delete(':id')
  deletaCadastro(@Param() params): string {
    console.log(params);
    return ' deletado cadastro';
  }
}
