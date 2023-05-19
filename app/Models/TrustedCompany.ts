import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

export default class TrustedCompany extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public image: string;

  @column()
  public hoverImage: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
