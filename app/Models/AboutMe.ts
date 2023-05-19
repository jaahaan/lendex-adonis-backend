import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

export default class AboutMe extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public type: string;
  @column()
  public institute: string;

  @column()
  public degree: string;

  @column()
  public description: string;

  @column()
  public start_date: Date;

  @column()
  public end_date: Date;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
