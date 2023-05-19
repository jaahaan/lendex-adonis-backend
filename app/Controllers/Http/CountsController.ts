import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Count from "App/Models/Count";

export default class CountsController {
    public async getCount({}: HttpContextContract) {
      const data = Count.all();
      return data;
    }
  
    public async addCount({ request, response }: HttpContextContract) {
      // const req = await request.validate({
      //   schema: schema.create({
      //     title: schema.string(),
      //   }),
      //   messages: {
      //     "title.required": "Title field is required",
      //   },
      // });
      const data = request.body();
      const obj = new Count();
      await obj.merge(data).save();
      return response.status(201);
    }
    public async getCountDetail({ params }: HttpContextContract) {
      const data = await Count.findOrFail(params.id);
      return data;
    }
  
    public async updateCount({ request, response }: HttpContextContract) {
      const req = request.body();
      const data = await Count.findOrFail(req.id);
      await data.merge(req).save();
      return response.status(200);
    }
    public async deleteCount({ params, response }: HttpContextContract) {
      await (await Count.findOrFail(params.id)).delete();
      return response.status(200);
    }
  }
  