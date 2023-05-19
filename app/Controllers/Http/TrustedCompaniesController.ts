import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import TrustedCompany from "App/Models/TrustedCompany";

export default class TrustedCompaniesController {
  public async getTrustedCompany({}: HttpContextContract) {
    const data = TrustedCompany.all();
    return data;
  }

  public async addTrustedCompany({ request, response }: HttpContextContract) {
    const data = request.body();
    const obj = new TrustedCompany();
    await obj.merge(data).save();
    return response.status(201);
  }
  public async getTrustedCompanyDetail({ params }: HttpContextContract) {
    const data = await TrustedCompany.findOrFail(params.id);
    return data;
  }

  public async updateTrustedCompany({
    request,
    response,
  }: HttpContextContract) {
    const req = request.body();
    const data = await TrustedCompany.findOrFail(req.id);
    await data.merge(req).save();
    return response.status(200);
  }
  public async deleteTrustedCompany({ params, response }: HttpContextContract) {
    await (await TrustedCompany.findOrFail(params.id)).delete();
    return response.status(200);
  }
}
