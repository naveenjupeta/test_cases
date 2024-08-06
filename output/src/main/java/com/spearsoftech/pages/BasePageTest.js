import org.junit.Test;
import static org.junit.Assert.assertTrue;

public class BasePageTest {
    @Test
    public void testSelectDropdownValue() {
        // Create a mock WebElement for testing
        WebElement mockWebElement = new MockWebElement();

        BasePage basePage = new BasePage(null);
        basePage.selectDropdownValue(mockWebElement, "January");

        assertTrue(mockWebElement.isSelected("January"));
    }

    @Test
    public void testCreateRetryPolicy() {
        RetryPolicy<Object> retryPolicy = BasePage.createRetryPolicy(3, 5);

        assertTrue(retryPolicy.getMaxRetries() == 3);
        assertTrue(retryPolicy.getDelay().getSeconds() == 5);
    }
}

class MockWebElement {
    private String selectedValue;

    public void select(String value) {
        this.selectedValue = value;
    }

    public boolean isSelected(String value) {
        return this.selectedValue == value;
    }