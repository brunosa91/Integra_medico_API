/* eslint-disable prettier/prettier */
import { Table, Model, Column, DataType } from 'sequelize-typescript';
@Table
export class Cadastro extends Model<Cadastro> {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  nome: string;
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  crm: string;
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  telefone: string;
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  celular: string;
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  cep: string;
  @Column({
    type: DataType.STRING(),

    allowNull: false,
  })
  logradouro: string;
  @Column({
    type: DataType.STRING(),

    allowNull: false,
  })
  numero: string;
  @Column({
    type: DataType.STRING(),

    allowNull: false,
  })
  complemento: string;
  @Column({
    type: DataType.STRING(),

    allowNull: false,
  })
  cidade: string;
  @Column({
    type: DataType.STRING(),

    allowNull: false,
  })
  estado: string;
  @Column({
    type: DataType.STRING(),

    allowNull: false,
  })
  especialidade: string;
}
