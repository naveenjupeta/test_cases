import static org.junit.Assert.assertTrue;

public class MavenWrapperDownloaderTest {

    @Test
    public void testDownloadFileFromURL() throws Exception {
        String url = "https://example.com/maven-wrapper.jar";
        File tempDir = Files.createTempDirectory("maven-wrapper-test").toFile();
        File outputFile = new File(tempDir, "maven-wrapper.jar");
        MavenWrapperDownloader.downloadFileFromURL(url, outputFile);
        assertTrue(outputFile.exists());
    }
