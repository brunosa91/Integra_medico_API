import { Controller, Get } from '@nestjs/common';
@Controller('cadastro')
export class CadastroController {
  @Get()
  buscaTodos(): string {
    return 'todos os médicos';
  }
}
