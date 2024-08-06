
import static org.testng.Assert.assertNotNull;

public class BaseFactoryTest {

    @Test
    public void testInitializeDriver() {
        WebDriver driver = BaseFactory.initializeDriver();
        assertNotNull(driver);
    }