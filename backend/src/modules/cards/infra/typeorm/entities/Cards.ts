import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cards')
class Cards {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  bin: string;

  @Column()
  issuer: string;

  @Column()
  product: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}

export default Cards;
