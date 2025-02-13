export class Dashboard {
  constructor(page) {
    this.page = page;
    this.searchBar = page.locator("flex flex-col >> .search");
    this.applyFilter = page.locator('text ="Apply filters"');
    this.deselectFilter = page.locator('text="Deselect all');
    this.gpu = page.locator(' text="GPUs" ');
    this.cpu = page.locator(' text="CPUs"');
    this.laptopPC = page.locator(' text="Laptops & PCs"');
    this.phoneTables = page.locator(' text="Phones & Tablets"');
    this.peripherals = page.locator(' text="Peripherals"');
    this.computerCase = page.locator('text="Computer Cases"');
    this.motherBoard = page.locator('text = "Motherboards"');
    this.productList = page.locator("#products-container");
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
    this.cartItemList = page.locator(".flex-1 overflow-y-auto px-2 py-2");
    this.cartItemRemove = page.locator(".p-button-icon p-c pi pi-times");
    this.cartClear = page.locator(".ml-2");
    this.cartCheckOut = page.locator(".p-button-label p-c");
    this.addCartItem = page.locator(".px-1 ml-auto p-button p-component");
    this.cartTotal = page.locator(".text-lg mb-4");
  }
}
