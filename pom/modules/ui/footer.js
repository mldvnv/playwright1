export class Footer {
  constructor(page) {
    this.page = page;
    this.companySite = page.locator(
      'sm:text-sm md:text-sm lg:text-lg xl:text-lg > text="Automaticity"'
    );
    this.linkedInPage = page.locator(".pi pi-linkedin ml-3");
    this.facebookPage = page.locator(".pi pi-google ml-3");
    this.instagramPage = page.locator(".pi pi-instagram ml-3");
    this.email = page.locator(".pi pi-google ml-3");
  }
}
