import { test, expect } from "@playwright/test";
import { HEADINGS, URLS, utils, VALID_LOGIN_PAYLOAD } from "../../fixtures";
import { LoginPage } from "../../pom/modules/ui/loginPage";
import { Header } from "../../pom/modules/ui/header";
import { Footer } from "../../pom/modules/ui/footer";

test.describe("login tests", () => {
  let loginPage;
  let footer;
  let header;

  test.beforeEach("visit the login page", async ({ page }) => {
    loginPage = new LoginPage(page);
    footer = new Footer(page);
    header = new Header(page);
    await page.goto(URLS["LOGIN"]);
  });

  test("try to log in with an invalid email", async ({}) => {
    await loginPage.heading.waitFor();
    await expect(loginPage.heading).toHaveText(HEADINGS["LOGIN"]);

    loginPage.login(
      utils.generateRandomString(10),
      VALID_LOGIN_PAYLOAD["PASSWORD"]
    );

    await expect(loginPage.loginErrorMessage).toBeVisible();
  });

  test("try to log in with an invalid password", async ({}) => {
    await loginPage.heading.waitFor();
    await expect(loginPage.heading).toHaveText(HEADINGS["LOGIN"]);

    loginPage.login(
      VALID_LOGIN_PAYLOAD["EMAIL"],
      utils.generateRandomString(10)
    );

    await expect(loginPage.loginErrorMessage).toBeVisible();
  });

  test("log in with existing user", async ({ page }) => {
    await loginPage.heading.waitFor();
    await expect(loginPage.heading).toHaveText(HEADINGS["LOGIN"]);

    loginPage.login(
      VALID_LOGIN_PAYLOAD["EMAIL"],
      VALID_LOGIN_PAYLOAD["PASSWORD"]
    );

    await page.waitForURL(URLS["DASHBOARD"]);
    await expect(page).toHaveURL(URLS["DASHBOARD"]);
  });

  test("Expect text form inputs to be editable", async ({}) => {
    await expect(loginPage.emailInput).toBeEditable();
    await expect(loginPage.passwordInput).toBeEditable();
  });

  test("Expect form to have 2 text inputs", async ({ page }) => {
    // >> if element is not direct child
    const inputLocators = page.locator("form >> input");
    await expect(inputLocators).toHaveCount(2);
  });

  test("Expect elements to have class attributes", async ({}) => {
    await expect(loginPage.emailInput).toHaveClass(
      "w-full rounded p-inputtext p-component"
    );
    await expect(loginPage.passwordInput).toHaveClass(
      "w-full rounded p-inputtext p-component"
    );
  });

  test("Expect elements to have id attributes", async ({}) => {
    await expect(loginPage.emailInput).toHaveId("email");
    await expect(loginPage.passwordInput).toHaveId("password");
  });

  test("Expect elements to have attributes", async ({}) => {
    // Check if the attribute exist
    await expect(loginPage.emailInput).toHaveAttribute("placeholder");
    await expect(loginPage.passwordInput).toHaveAttribute("placeholder");

    const emailPlaceholder = "Email address";
    const passwordPlaceholder = "Password";

    // Check if the attribute has expected value
    await expect(loginPage.emailInput).toHaveAttribute(
      "placeholder",
      emailPlaceholder
    );
    await expect(loginPage.passwordInput).toHaveAttribute(
      "placeholder",
      passwordPlaceholder
    );
  });

  test("Expect elements to retain values when typed into", async ({}) => {
    const emailValue = "filip@test.com";
    const passwordValue = "test123";

    await loginPage.emailInput.fill(emailValue);
    await expect(loginPage.emailInput).toHaveValue(emailValue);

    await loginPage.passwordInput.fill(passwordValue);
    await expect(loginPage.passwordInput).toHaveValue(passwordValue);
  });

  test("Expect element to be enabled", async ({}) => {
    await expect(loginPage.submitButton).toBeEnabled();
  });

  test("Expect element to be focused", async ({}) => {
    await loginPage.emailInput.click();
    await expect(loginPage.emailInput).toBeFocused();
  });

  test("Expect element to be empty", async ({}) => {
    await expect(loginPage.emailInput).toBeEmpty();
  });

  test("Expect form with all elements to be in viewport", async ({}) => {
    await expect(page.locator("form")).toBeInViewport();
    await expect(page.locator("form >> input").nth(0)).toBeInViewport();
    await expect(page.locator("form >> input").nth(1)).toBeInViewport();
    await expect(page.locator("form >> button")).toBeInViewport();
  });

  test("Expect element to be visible", async ({}) => {
    await expect(header.cogwheel).toBeVisible();
  });

  test("Except element to be clickable", async ({}) => {
    await expect(footer.instagramPage).toBeClickable();
    await expect(footer.facebookPage).toBeClickable();
    await expect(footer.linkedInPage).toBeClickable();
    await expect(footer.email).toBeClickable();
  });

  test("Expect element to have URL", async ({}) => {
    await expect(header.registerPageRedirect).toHaveURL(
      "https://automaticityacademy.ngrok.app/register"
    );
    await expect(header.loginPageRedirect).toHaveURL(
      "https://automaticityacademy.ngrok.app/login"
    );
    await expect(header.dashboard).toHaveURL(
      "https://automaticityacademy.ngrok.app/dashboard"
    );
    await expect(footer.companySite).toHaveURL("https://www.automaticity.rs/");
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
