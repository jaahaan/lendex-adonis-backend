/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.group(() => {
  Route.get("/app/getUser", "HomeController.getUser");
  Route.post("/app/updateInfo", "HomeController.updateInfo");

  //Attachment
  Route.post("/upload_attachment", "HomeController.uploadAttachment");
  Route.post("/delete_attachment", "HomeController.deleteAttachment");
  //image
  Route.post("/app/delete_image", "HomeController.deleteImage");
  Route.post("/app/upload", "HomeController.upload");

  //About Me
  Route.get("/app/get_education", "AboutMesController.getEducation");
  Route.get("/app/get_experience", "AboutMesController.getExperience");
  Route.post("/app/add_aboutMe", "AboutMesController.addAboutMe");
  Route.put("/app/update_aboutMe", "AboutMesController.updateAboutMe");
  Route.delete("/app/delete_aboutMe/:id", "AboutMesController.deleteAboutMe");
  Route.get("/app/get_aboutMe/:id", "AboutMesController.getAboutMeDetail");

  //Experience
  Route.get("/app/get_testimonials", "TestimonialsController.getTestimonial");
  Route.post("/app/add_testimonials", "TestimonialsController.addTestimonial");
  Route.put(
    "/app/update_testimonials",
    "TestimonialsController.updateTestimonial"
  );
  Route.delete(
    "/app/delete_testimonials/:id",
    "TestimonialsController.deleteTestimonial"
  );
  Route.get(
    "/app/get_testimonials/:id",
    "TestimonialsController.getTestimonialDetail"
  );

  //StatisticsCount
  Route.get("/app/get_count", "StatisticsCountsController.getStatisticsCount");
  Route.post("/app/add_count", "StatisticsCountsController.addStatisticsCount");
  Route.put(
    "/app/update_count",
    "StatisticsCountsController.updateStatisticsCount"
  );
  Route.delete(
    "/app/delete_count/:id",
    "StatisticsCountsController.deleteStatisticsCount"
  );
  Route.get(
    "/app/get_count/:id",
    "StatisticsCountsController.getStatisticsCountDetail"
  );

  //Project
  Route.get("/app/get_project", "ProjectsController.getProject");
  Route.post("/app/add_project", "ProjectsController.addProject");
  Route.put("/app/update_project", "ProjectsController.updateProject");
  Route.delete("/app/delete_project/:id", "ProjectsController.deleteProject");
  Route.get("/app/get_project/:id", "ProjectsController.getProjectDetail");

  //Special Skills
  Route.get("/app/get_skills", "SpecialSkillsController.getSkills");
  Route.post("/app/add_skill", "SpecialSkillsController.addSkill");
  Route.put("/app/update_skill", "SpecialSkillsController.updateSkill");
  Route.delete("/app/delete_skill/:id", "SpecialSkillsController.deleteSkill");
  Route.get("/app/get_skill/:id", "SpecialSkillsController.getSkillDetail");
  Route.put(
    "/app/resetSkillPosition",
    "SpecialSkillsController.resetSkillPosition"
  );

  //Service
  Route.get("/app/get_service", "ServicesController.getService");
  Route.post("/app/add_service_title", "ServicesController.addServiceTitle");
  Route.put(
    "/app/update_service_title",
    "ServicesController.updateServiceTitle"
  );
  Route.delete(
    "/app/delete_service_title/:id",
    "ServicesController.deleteServiceTitle"
  );
  Route.get(
    "/app/get_service_title_details/:id",
    "ServicesController.getServiceTitleDetail"
  );

  Route.get("/app/get_service_point", "ServicesController.getServiceTitle");
  Route.post("/app/add_service_point", "ServicesController.addServicePoint");
  Route.put(
    "/app/update_service_point",
    "ServicesController.updateServicePoint"
  );
  Route.delete(
    "/app/delete_service_point/:id",
    "ServicesController.deleteServicePoint"
  );
  Route.get(
    "/app/get_service_point_details/:id",
    "ServicesController.getServicePointDetail"
  );

  // Route.get("/app/parentService/:id", "ServicesController.getParentService");
  // Route.put(
  //   "/app/resetServicePosition",
  //   "ServicesController.resetServicePosition"
  // );
  Route.get("/app/getServiceTitle", "ServicesController.getServiceD");

  //TrustedCompany
  Route.get(
    "/app/get_trusted_company",
    "TrustedCompaniesController.getTrustedCompany"
  );
  Route.post(
    "/app/add_trusted_company",
    "TrustedCompaniesController.addTrustedCompany"
  );
  Route.put(
    "/app/update_trusted_company",
    "TrustedCompaniesController.updateTrustedCompany"
  );
  Route.delete(
    "/app/delete_trusted_company/:id",
    "TrustedCompaniesController.deleteTrustedCompany"
  );
  Route.get(
    "/app/get_trusted_company/:id",
    "TrustedCompaniesController.getTrustedCompanyDetail"
  );

  //ContactMe
  Route.get("/app/get_contact_me", "ContactMesController.getContactMe");
  Route.post("/app/add_contact_me", "ContactMesController.addContactMe");
  Route.delete(
    "/app/delete_contact_me/:id",
    "ContactMesController.deleteContactMe"
  );
});

Route.post("/app/register", "AuthController.register");
Route.post("/app/login", "AuthController.login");
Route.get("/app/auth_user", "AuthController.authUser");

// Route.on("/").render("/index").middleware("auth");

//   //authenticate() example
//   Route.get('/dashboard', async ({ auth }:HttpContextContract) => {
//     await auth.use("jwt").authenticate();
//     const userModel = auth.use("jwt").user!;
//     const userPayloadFromJwt = auth.use("jwt").payload!;
// });

// //refresh token usage example:
// Route.post('/refresh', async ({ auth, request }:HttpContextContract) => {
//     const refreshToken = request.input("refresh_token");
//     const jwt = await auth.use("jwt").loginViaRefreshToken(refreshToken);
// });

// Route.post('/logout', async ({ auth, response }:HttpContextContract) => {
//   await auth.use('jwt').revoke()
//   return {
//     revoked: true
//   }
// })
