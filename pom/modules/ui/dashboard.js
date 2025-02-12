export class Dashboard {
  constructor(page) {
    this.page = page;
    this.searchBar = page.locator("flex flex-col >> .search");
    this.applyFilter = page.locator(
      'layout-menu sm:w-48 md:w-72 bg-gray-200 rounded h-max >> text ="Apply filters"'
    );
    this.deselectFilter = page.locator(
      'layout-menu sm:w-48 md:w-72 bg-gray-200 rounded h-max >> text="Deselect all'
    );
    this.gpu = page.locator('layout-root-menuitem >> text="GPUs" ');
    this.cpu = page.locator('layout-root-menuitem >> text="CPUs"');
    this.laptopPC = page.locator(
      'layout-root-menuitem >> text="Laptops & PCs"'
    );
    this.phoneTables = page.locator(
      'layout-root-menuitem >> text="Phones & Tablets"'
    );
    this.peripherals = page.locator(
      'layout-root-menuitem >> text="Peripherals"'
    );
    this.computerCase = page.locator(
      'layout-root-menuitem >> text="Computer Cases"'
    );
    this.motherBoard = page.locator(
      'layout-root-menuitem >> text = "Motherboards"'
    );
    this.products = page.locator("#products-container");
    this.pageOne = page.locator(
      "paginated w-full flex justify-center > text=1"
    );
    this.pageTwo = page.locator(
      "paginated w-full flex justify-center >> text=2"
    );
    this.pageThree = page.locator(
      "paginated w-full flex justify-center >> text=3"
    );
    this.pageFour = page.locator(
      "paginated w-full flex justify-center >> text=4"
    );
  }
}
