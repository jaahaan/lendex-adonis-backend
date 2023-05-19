import { slugify } from "@ioc:Adonis/Addons/LucidSlugify";
import Hash from "@ioc:Adonis/Core/Hash";
import { BaseModel, beforeSave, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;
  @column()
  @slugify({
    strategy: "dbIncrement",
    fields: ["name"],
  })
  public username: string;
  @column()
  public email: string;
  @column({ serializeAs: null })
  public password: string;

  @column()
  public image: string;

  @column()
  public designation: string;

  @column()
  public bio: string;

  @column()
  public resume: string;

  @column()
  public video: string;

  @column()
  public contact: string;

  @column()
  public facebook: string;

  @column()
  public website: string;

  @column()
  public linkedin: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
