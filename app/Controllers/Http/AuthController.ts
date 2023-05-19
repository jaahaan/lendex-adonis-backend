import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { rules, schema } from "@ioc:Adonis/Core/Validator";
import User from "App/Models/User";
export default class AuthController {
  public async register({ request, response, auth }: HttpContextContract) {
    const req = await request.validate({
      schema: schema.create({
        name: schema.string(),

        email: schema.string({ trim: true }, [
          rules.email(),
          rules.unique({
            table: "users",
            column: "email",
            caseInsensitive: true,
          }),
        ]),
        password: schema.string({}, [rules.confirmed()]),
      }),
      messages: {
        "name.required": "Name field is required",
        "email.required": "Email field is required",
        "password.required": "Password field is required",
        "password.minLength": "Password must be at least 8 characters",
      },
    });

    // const user = new User();
    // user.name = req.name;
    // user.username = req.username;
    // user.email = req.email;
    // user.password = req.password;
    // await user.save();
    const user = await User.create(req);
    await auth.login(user);
    return response.status(200);
  }

  public async login({
    auth,
    request,
    response,
    session,
  }: HttpContextContract) {
    // const req = await request.validate({
    //   schema: schema.create({
    //     username: schema.string(),
    //     password: schema.string(),
    //   }),
    //   messages: {
    //     "username.required": "Username field is required",
    //     "password.required": "Password field is required",
    //     "password.minLength": "Password must be at least 8 characters",
    //   },
    // });
    const { uid, password } = request.only(["uid", "password"]);
    try {
      const token = await auth.attempt(uid, password);
      const check = await auth.check();
      console.log(check);
      return token;
    } catch (error) {
      console.log(error);
      return response.unauthorized("Invalid credentials");
    }
    // Lookup user manually
    // const user = await User.findBy("username", req.username);
    // // Verify password
    // if (user) {
    //   // if (!(await Hash.verify(user.password, req.password))) {
    //   //   return response.unauthorized("Invalid credentials");
    //   // }
    //   const { username, password } = request.all();
    //   const token = await auth.attempt(username, password);
    //   // const jwt = await auth.use("jwt").generate(user);

    //   return token;
    //   //   return response.status(200).json({ token: token, user: user });
    // }

    // Generate token
  }

  public async authUser({ auth, response }: HttpContextContract) {
    try {
      const check = await auth.check();
      console.log(check);
      const user = await auth.user; // this.auth.user will give you anything you want
      console.log(user);
      if (user) {
        const a = await User.findBy("username", user.username);
        console.log(user);
        return a;
      }
    } catch (error) {
      response.send("Missing or invalid api token");
    }
  }
}
