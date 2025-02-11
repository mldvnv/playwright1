export class Header {
  constructor(page) {
    this.page = page;
    this.dashboard = page.locator(
      "m1-4 > md:ml-4 md:text-xl sm:text-lg bg-gray-200 text-primary hover:bg-indigo-300 hover:text-white py-1 sm:w-12 px-4 border border-indigo-700 rounded semibold"
    );
    this.cogwheel = page.locator(".md:ml-4 sm:ml-2  h-14 w-14 py-1");
    this.registerPageRedirect = page.locator('text ="Register"');
    this.loginPageRedirect = page.locator('text = "Log in');
  }
}
