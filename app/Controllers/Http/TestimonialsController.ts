import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Testimonial from "App/Models/Testimonial";

export default class TestimonialsController {
  public async getTestimonial({}: HttpContextContract) {
    const data = Testimonial.all();
    return data;
  }

  public async addTestimonial({ request, response }: HttpContextContract) {
    // const req = await request.validate({
    //   schema: schema.create({
    //     title: schema.string(),
    //   }),
    //   messages: {
    //     "title.required": "Title field is required",
    //   },
    // });
    const data = request.body();
    const obj = new Testimonial();
    await obj.merge(data).save();
    return response.status(201);
  }
  public async getTestimonialDetail({ params }: HttpContextContract) {
    const data = await Testimonial.findOrFail(params.id);
    return data;
  }

  public async updateTestimonial({ request, response }: HttpContextContract) {
    const req = request.body();
    const data = await Testimonial.findOrFail(req.id);
    await data.merge(req).save();
    return response.status(200);
  }
  public async deleteTestimonial({ params, response }: HttpContextContract) {
    await (await Testimonial.findOrFail(params.id)).delete();
    return response.status(200);
  }
}
