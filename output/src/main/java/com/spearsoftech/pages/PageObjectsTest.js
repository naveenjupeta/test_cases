import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import static org.junit.Assert.assertTrue;

public class PageObjectsTest {
    @Test
    public void testPageObjects() {
        WebDriver driver = null;
        PageObjects pageObjects = new PageObjects(driver);
        WebElement registerLink = pageObjects.getRegisterLink();
        WebElement registerBtn = pageObjects.getRegisterBtn();
        WebElement logInLink = pageObjects.getLogInLink();
        WebElement firstNameTxt = pageObjects.getFirstNameTxt();
        WebElement genderMale = pageObjects.getGenderMale();
        WebElement lastNameTxt = pageObjects.getLastNameTxt();
        WebElement dobDay = pageObjects.getDobDay();
        WebElement dobMonth = pageObjects.getDobMonth();
        WebElement dobYear = pageObjects.getDobYear();
        WebElement emailTxt = pageObjects.getEmailTxt();
        WebElement computersLink = pageObjects.getComputersLink();
        WebElement companyTxt = pageObjects.getCompanyTxt();
        WebElement passwordTxt = pageObjects.getPasswordTxt();
        WebElement confirmPasswordTxt = pageObjects.getConfirmPasswordTxt();
        WebElement registrationSuccessMsg = pageObjects.getRegistrationSuccessMsg();
        WebElement continueBtn = pageObjects.getContinueBtn();
        WebElement logOutLink = pageObjects.getLogOutLink();
        WebElement emailLoginTxt = pageObjects.getEmailLoginTxt();
        WebElement loginBtn = pageObjects.getLoginBtn();
        assertTrue(registerLink!= null);
        assertTrue(registerBtn!= null);
        assertTrue(logInLink!= null);
        assertTrue(firstNameTxt!= null);
        assertTrue(genderMale!= null);
        assertTrue(lastNameTxt!= null);
        assertTrue(dobDay!= null);
        assertTrue(dobMonth!= null);
        assertTrue(dobYear!= null);
        assertTrue(emailTxt!= null);
        assertTrue(computersLink!= null);
        assertTrue(companyTxt!= null);
        assertTrue(passwordTxt!= null);
        assertTrue(confirmPasswordTxt!= null);
        assertTrue(registrationSuccessMsg!= null);
        assertTrue(continueBtn!= null);
        assertTrue(logOutLink!= null);
        assertTrue(emailLoginTxt!= null);
        assertTrue(loginBtn!= null);
    }