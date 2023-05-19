import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import AboutMe from "App/Models/AboutMe";

export default class AboutMesController {
  public async getEducation({}: HttpContextContract) {
    const data = await AboutMe.query()
      .where("type", "education")
      .orderBy("start_date", "desc");
    return data;
  }

  public async getExperience({}: HttpContextContract) {
    const data = await AboutMe.query()
      .where("type", "experience")
      .orderBy("start_date", "desc");
    return data;
  }

  public async addAboutMe({ request, response }: HttpContextContract) {
    // const req = await request.validate({
    //   schema: schema.create({
    //     title: schema.string(),
    //   }),
    //   messages: {
    //     "title.required": "Title field is required",
    //   },
    // });
    const data = request.body();
    const obj = new AboutMe();
    await obj.merge(data).save();
    return response.status(201);
  }
  public async getAboutMeDetail({ params }: HttpContextContract) {
    const data = await AboutMe.findOrFail(params.id);
    return data;
  }

  public async updateAboutMe({ request, response }: HttpContextContract) {
    const req = request.body();
    const data = await AboutMe.findOrFail(req.id);
    await data.merge(req).save();
    return response.status(200);
  }
  public async deleteAboutMe({ params, response }: HttpContextContract) {
    await (await AboutMe.findOrFail(params.id)).delete();
    return response.status(200);
  }
}
