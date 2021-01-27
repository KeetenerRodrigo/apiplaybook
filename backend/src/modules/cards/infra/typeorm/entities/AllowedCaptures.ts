import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('allowed_captures')
class AllowedCaptures {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  bin: string;

  @Column()
  name: string;

  @Column()
  code: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}

export default AllowedCaptures;
