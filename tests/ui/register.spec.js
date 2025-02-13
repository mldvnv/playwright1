import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pom/modules/ui/registerPage";
import { Header } from "../../pom/modules/ui/header";
import { Footer } from "../../pom/modules/ui/footer";
import {
  HEADINGS,
  URLS,
  generateUserCredentials,
  VALID_LOGIN_PAYLOAD,
} from "../../fixtures";

test.describe("register tests", () => {
  let registerPage;
  let footer;
  let header;
  const { username, email, password } = generateUserCredentials(5);

  test.beforeEach("visit the register page", async ({ page }) => {
    registerPage = new RegisterPage(page);
    header = new Header(page);
    footer = new Footer(page);

    await page.goto(URLS["REGISTER"]);
  });

  test("try to register without username data", async ({}) => {
    await registerPage.heading.waitFor();
    await expect(registerPage.heading).toHaveText(HEADINGS["REGISTER"]);

    await registerPage.register("", email, password);

    await expect(registerPage.registerErrorMessage).toBeVisible();
  });

  test("try to register with already registered credentials", async ({}) => {
    await registerPage.heading.waitFor();
    await expect(registerPage.heading).toHaveText(HEADINGS["REGISTER"]);

    await registerPage.register(
      username,
      VALID_LOGIN_PAYLOAD["EMAIL"],
      VALID_LOGIN_PAYLOAD["PASSWORD"]
    );

    await expect(registerPage.registerErrorMessage).toBeVisible();
  });

  test("register with valid data", async ({ page }) => {
    await registerPage.heading.waitFor();
    await expect(registerPage.heading).toHaveText(HEADINGS["REGISTER"]);
    //Turn on event listener
    const responsePromise = await page.waitForResponse(/register*/);
    await registerPage.register(username, email, password);
    //Wait for response
    const response = await responsePromise;
    const responseJSON = await response.json();
    //Assert response status
    expect(await responseJSON.status).toBe("Sucess");
    await page.waitForURL(URLS["DASHBOARD"]);
    await expect(page).toHaveURL(URLS["DASHBOARD"]);
  });

  test("Expect form to have 3 text inputs", async ({ page }) => {
    const inputLocators = page.locator("form >> input");
    await expect(inputLocators).toHaveCount(3);
  });

  test("Expect elements to have ID", async ({}) => {
    await expect(registerPage.usernameInput).toHaveId("username");
    await expect(registerPage.emailInput).toHaveId("email");
    await expect(registerPage.passwordInput).toHaveId("password");
  });

  test("Except element to be clickable", async ({}) => {
    await expect(registerPage.submitButton).toBeClickable();
  });

  test("Except element to be visible", async ({}) => {
    await expect(header.cogwheel).toBeVisible();
  });

  test("Except element to be clickable", async ({}) => {
    await expect(footer.instagramPage).toBeClickable();
    await expect(footer.faceboookPage).toBeClickable();
    await expect(footer.linkedInPage).toBeClickable();
    await expect(footer.email).toBeClickable();
  });

  test("Expect element to have URL", async ({}) => {
    await expect(header.registerPageRedirect).toHaveURL(REGISTER);
    await expect(header.loginPageRedirect).toHaveURL(LOGIN);
    await expect(header.dashboard).toHaveURL(DASHBOARD);
    await expect(footer.companySite).toHaveURL(Automaticity);
  });

  test("Expect element to have text", async ({}) => {
    await expect(footer.companySite).toHaveText("Automaticity");
    await expect(header.registerPageRedirect).toHaveText("Register");
    await expect(header.loginPageRedirect).toHaveText("Log in");
    await expect(header.dashboard).toHaveText("Dashboard");
  });

  test("Expect element to have ID", async ({}) => {
    await expect(header.loginPageRedirect).toHaveId("loginbtn");
  });

  test("Expect element to have class", async ({}) => {
    await expect(footer.facebookPage).toHaveClass("pi pi-google ml-3");
    await expect(footer.linkedInPage).toHaveClass("pi pi-linkedin ml-3");
    await expect(footer.instagramPage).toHaveClass("pi pi-instagram ml-3");
    await expect(footer.email).toHaveClass("pi pi-google ml-3");
    await expect(header.cogwheel).toHaveClass(
      "md:ml-4 sm:ml-2  h-14 w-14 py-1"
    );
  });
});
