import static org.junit.Assert.assertTrue;

public class BasePageTest {
    @Test
    public void testSelectDropdownValue() {
        // Create a mock WebElement for the dropdown
        WebElement dropdown = mock(WebElement.class);

        // Create an instance of the BasePage class
        BasePage basePage = new BasePage(null);

        // Call the selectDropdownValue method
        basePage.selectDropdownValue(dropdown, "January");

        // Verify that the selectByVisibleText method is called with the correct value
        verify(dropdown).selectByVisibleText("January");
    }

    @Test
    public void testGetRandomMonth() {
        // Create an instance of the BasePage class
        BasePage basePage = new BasePage(null);

        // Call the getRandomMonth method
        String randomMonth = basePage.getRandomMonth();

        // Verify that the random month is one of the 12 months
        assertTrue(Arrays.asList(
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
        ).contains(randomMonth));
    }