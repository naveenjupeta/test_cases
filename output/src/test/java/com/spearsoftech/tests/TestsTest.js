import static org.junit.Assert.assertEquals;

public class Tests {

    @Test
    public void testRegisterFunctionality() {
        // Arrange
        String email = "";
        String password = "123";

        // Act
        pageActions.registerUser(email, password);

        // Assert
        assertEquals("Your registration completed", pageObjects.getRegistrationSuccessMsg().getText());
    }

    @Test
    public void testLogoutFunctionality() {
        // Arrange
        String email = "";
        String password = "123";

        // Act
        pageActions.loginUser(email, password);
        pageActions.logOutUser();

        // Assert
        assertEquals(true, pageObjects.getLogInLink().isDisplayed());
    }