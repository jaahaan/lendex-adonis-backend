import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import SpecialSkill from "App/Models/SpecialSkill";

export default class SpecialSkillsController {
  public async getSkills({}: HttpContextContract) {
    const data = SpecialSkill.all();
    return data;
  }

  public async addSkill({ request, response }: HttpContextContract) {
    // const req = await request.validate({
    //   schema: schema.create({
    //     title: schema.string(),
    //   }),
    //   messages: {
    //     "title.required": "Title field is required",
    //   },
    // });
    const data = request.body();
    const obj = new SpecialSkill();
    await obj.merge(data).save();
    return response.status(201);
  }
  public async getSkillDetail({ params }: HttpContextContract) {
    const data = await SpecialSkill.findOrFail(params.id);
    return data;
  }

  public async updateSkill({ request, response }: HttpContextContract) {
    const req = request.body();
    const data = await SpecialSkill.findOrFail(req.id);
    await data.merge(req).save();
    return response.status(200);
  }
  public async deleteSkill({ params, response }: HttpContextContract) {
    await (await SpecialSkill.findOrFail(params.id)).delete();
    return response.status(200);
  }
}
