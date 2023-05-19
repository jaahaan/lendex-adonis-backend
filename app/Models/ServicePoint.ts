import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

export default class ServicePoint extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public title_id: number;

  @column()
  public title: number;

  @column()
  public order_no: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
