import Application from "@ioc:Adonis/Core/Application";
import Drive from "@ioc:Adonis/Core/Drive";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import User from "App/Models/User";

export default class HomeController {
  public async getUser({}: HttpContextContract) {
    const user = await User.findBy("id", 1);
    return user;
  }
  public async updateInfo({ request, response }: HttpContextContract) {
    const req = request.body();
    const data = await User.findOrFail(1);
    await data.merge(req).save();
    return response.status(200);
  }

  public async upload({ request }: HttpContextContract) {
    const postSchema = schema.create({
      file: schema.file({
        size: "2mb",
        extnames: ["jpg", "gif", "png", "pdf"],
      }),
    });

    const payload = await request.validate({ schema: postSchema });
    const filename = payload.file.clientName;
    console.log(filename);

    await payload.file.move(Application.tmpPath("uploads"));
    // $fileName = time() . '_' . $request->file->getClientOriginalName();
    // $request->file->move('attachments', $fileName);
    return filename;
  }
  public async deleteImage({ request }: HttpContextContract) {
    const postSchema = schema.create({
      imageName: schema.string(),
    });
    const payload = await request.validate({ schema: postSchema });
    await Drive.delete(payload.imageName);
    return "done";
  }
}
