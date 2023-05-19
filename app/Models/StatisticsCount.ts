import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class StatisticsCount extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public happy_clients: string;

  @column()
  public project_complete: string;

  @column()
  public years_of_experience: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
