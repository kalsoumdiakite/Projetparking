import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("parkings") // important : nom exact de la table dans la base
export class parkings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  name: string;

  @Column()
  street: string;

  @Column()
  ratePerMinute: number;

  @Column()
  numberOfPlaces: number;

  @Column()
  cityId: number;
}
