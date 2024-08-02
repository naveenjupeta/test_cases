import static org.junit.Assert.assertTrue;

public class MavenWrapperDownloaderTest {

    @Test
    public void testDownloadFile() throws Exception {
        MavenWrapperDownloader.main(new String[] { "." });
        File file = new File(MavenWrapperDownloader.MAVEN_WRAPPER_JAR_PATH);
        assertTrue(file.exists());
    }