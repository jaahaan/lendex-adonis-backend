import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import StatisticsCount from "App/Models/StatisticsCount";

export default class StatisticsCountsController {
  public async getStatisticsCount({}: HttpContextContract) {
    const data = StatisticsCount.all();
    return data;
  }

  public async addStatisticsCount({ request, response }: HttpContextContract) {
    // const req = await request.validate({
    //   schema: schema.create({
    //     title: schema.string(),
    //   }),
    //   messages: {
    //     "title.required": "Title field is required",
    //   },
    // });
    const data = request.body();
    const obj = new StatisticsCount();
    await obj.merge(data).save();
    return response.status(201);
  }
  public async getStatisticsCountDetail({ params }: HttpContextContract) {
    const data = await StatisticsCount.findOrFail(params.id);
    return data;
  }

  public async updateStatisticsCount({
    request,
    response,
  }: HttpContextContract) {
    const req = request.body();
    const data = await StatisticsCount.findOrFail(req.id);
    await data.merge(req).save();
    return response.status(200);
  }
  public async deleteStatisticsCount({
    params,
    response,
  }: HttpContextContract) {
    await (await StatisticsCount.findOrFail(params.id)).delete();
    return response.status(200);
  }
}
