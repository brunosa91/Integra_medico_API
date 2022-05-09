import { Table, Model, Column, DataType } from 'sequelize-typescript';
@Table
export class Cadastro extends Model<Cadastro> {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  nome: string;
  @Column({
    type: DataType.NUMBER(),
    allowNull: false,
  })
  crm: number;
  @Column({
    type: DataType.NUMBER(),
    allowNull: false,
  })
  telefone: number;
  @Column({
    type: DataType.NUMBER(),
    allowNull: false,
  })
  celular: number;
  @Column({
    type: DataType.NUMBER(),
    allowNull: false,
  })
  cep: number;
  @Column({
    type: DataType.STRING(),

    allowNull: false,
  })
  especialidade: string;
}
