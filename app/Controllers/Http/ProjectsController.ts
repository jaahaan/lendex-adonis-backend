import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import Project from "App/Models/Project";

export default class ProjectsController {
  public async getProject({}: HttpContextContract) {
    const data = Project.all();
    return data;
  }

  public async addProject({ request, response }: HttpContextContract) {
    // const req = await request.validate({
    //   schema: schema.create({
    //     title: schema.string(),
    //   }),
    //   messages: {
    //     "title.required": "Title field is required",
    //   },
    // });
    const data = request.body();
    const obj = new Project();
    await obj.merge(data).save();
    return response.status(201);
  }
  public async getProjectDetail({ params }: HttpContextContract) {
    const data = await Project.findOrFail(params.id);
    return data;
  }

  public async updateProject({ request, response }: HttpContextContract) {
    const req = request.body();
    const data = await Project.findOrFail(req.id);
    await data.merge(req).save();
    return response.status(200);
  }
  public async deleteProject({ params, response }: HttpContextContract) {
    await (await Project.findOrFail(params.id)).delete();
    return response.status(200);
  }
}
