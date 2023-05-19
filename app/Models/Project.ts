import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public image: string;

  @column()
  public title: string;

  @column()
  public subtitle: string;

  @column()
  public projectName: string;

  @column()
  public clients: string;

  @column()
  public description: string;

  @column()
  public budget: string;

  @column()
  public duration: string;

  @column()
  public date: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
