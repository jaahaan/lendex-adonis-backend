import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ServicePoint from "App/Models/ServicePoint";
import ServiceTitle from "App/Models/ServiceTitle";

export default class ServicesController {
  public async getService({ request }: HttpContextContract) {
    const data = request.all();
    console.log(data);
    if (data.id == 0) {
      return await ServiceTitle.query();
    } else {
      return await ServicePoint.query().where("title_id", data.id);
    }
  }

  public async addServiceTitle({ request, response }: HttpContextContract) {
    // const req = await request.validate({
    //   schema: schema.create({
    //     title: schema.string(),
    //   }),
    //   messages: {
    //     "title.required": "Title field is required",
    //   },
    // });
    const data = request.body();
    const obj = new ServiceTitle();
    await obj.merge(data).save();
    return response.status(201);
  }

  public async getServiceTitleDetail({ params }: HttpContextContract) {
    const data = await ServiceTitle.findOrFail(params.id);
    return data;
  }

  public async updateServiceTitle({ request, response }: HttpContextContract) {
    const req = request.body();
    const data = await ServiceTitle.findOrFail(req.id);
    await data.merge(req).save();
    return response.status(200);
  }
  public async deleteServiceTitle({ params, response }: HttpContextContract) {
    await (await ServiceTitle.findOrFail(params.id)).delete();
    return response.status(200);
  }

  // public async getParentService({ params, response }) {
  //   const service = await Service.query().where("id", params.id);
  //   console.log(service);
  //   console.log(service["title_id"]);

  //   if (service["title_id"]) {
  //     const data = Service.query().where("title_id", service["title_id"]);
  //     return response.json({ data: data, title_id: service["title_id"] });
  //   } else {
  //     const data = Service.query().andWhereNull("title_id");
  //     return response.json({ data: data, title_id: service["title_id"] });
  //   }
  // }
  public async getServiceD({}) {
    return await ServiceTitle.query();
  }
  //   public async getParentService({params}: HttpContextContract){
  //     const data = await Service.findOrFail(params.id);
  //     if($Service->title_id){
  //         $data = Service::where('title_id',$Service->title_id)->orderby('order_no','asc')->get();
  //         return response()->json([
  //              'data'=>$data,
  //             'title_id'=>$Service->title_id
  //         ]);
  //     }
  //     $data = Service::where('title_id',null)->orderby('order_no','asc')->get();
  //     return response()->json([
  //        'data'=>$data,
  //        'title_id'=>$Service->title_id
  //    ]);
  // }

  public async addServicePoint({ request, response }: HttpContextContract) {
    const data = request.body();
    const obj = new ServicePoint();
    await obj.merge(data).save();
    return response.status(201);
  }
  public async getServicePointDetail({ params }: HttpContextContract) {
    const data = await ServicePoint.findOrFail(params.id);
    return data;
  }
  public async updateServicePoint({ request, response }: HttpContextContract) {
    const req = request.body();
    const data = await ServicePoint.findOrFail(req.id);
    await data.merge(req).save();
    return response.status(200);
  }
  public async deleteServicePoint({ params, response }: HttpContextContract) {
    await (await ServicePoint.findOrFail(params.id)).delete();
    return response.status(200);
  }
}
