import { RegisterPage } from "../../pom/modules/ui/registerPage";
import { LoginPage } from "../../pom/modules/ui/loginPage";

export class Header {
  constructor(page) {
    this.page = page;
    this.dashboard = page.locator(
      "m1-4 > md:ml-4 md:text-xl sm:text-lg bg-gray-200 text-primary hover:bg-indigo-300 hover:text-white py-1 sm:w-12 px-4 border border-indigo-700 rounded semibold"
    );
    this.cogwheel = page.locator(".md:ml-4 sm:ml-2  h-14 w-14 py-1");
    this.registerPageRedirect = page.locator('text ="Register"');
    this.loginPageRedirect = page.locator(".loginBtn");
  }

  async appeareanceChangeLogin(page) {
    const loginPage = new LoginPage();
    loginPage.login(
      VALID_LOGIN_PAYLOAD["EMAIL"],
      VALID_LOGIN_PAYLOAD["PASSWORD"]
    );
    await page.registerPageRedirect.toBeHidden();
    await page.loginPageRedirect.toBeHidden();

    this.cart = page.locator(
      ".inline-flex items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-primary hover:text-gray-600 focus:outline-none transition ease-in-out duration-150 p-button p-component"
    );
    this.dropDown = page.locator(
      ".inline-flex items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-primary hover:text-gray-600 focus:outline-none transition ease-in-out duration-150 p-button p-component"
    );
  }

  async appeareanceChangeRegister(page) {
    const registerPage = new RegisterPage();
    await registerPage.register(username, email, password);
    await page.registerPageRedirect.toBeHidden();
    await page.loginPageRedirect.toBeHidden();

    this.cart = page.locator(
      ".inline-flex items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-primary hover:text-gray-600 focus:outline-none transition ease-in-out duration-150 p-button p-component"
    );
    this.dropDown = page.locator(
      ".inline-flex items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-primary hover:text-gray-600 focus:outline-none transition ease-in-out duration-150 p-button p-component"
    );
  }
}
