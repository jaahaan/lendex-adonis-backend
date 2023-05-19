import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("name");
      table.string("username");
      table.string("email");
      table.string("image");
      table.string("bio");
      table.string("resume");
      table.string("video");
      table.string("contact");
      table.string("facebook");
      table.string("website");
      table.string("linkedin");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
