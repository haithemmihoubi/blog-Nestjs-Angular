import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  name?: string;
  @Column({ unique: true })
  username?: string;
  @Column({ unique: true })
  email?: string;
  @Column({ unique: true })
  password?: string;
  // making email lower case before adding it to the data base
  @BeforeInsert()
  emailToLowerCase() {
    this.email= this.email.toLowerCase();
  }
}
