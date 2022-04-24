import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  viewer: {
    height: '100vh',
    width: '80vw',
    borderWidth: 0,
  },
  page: {
    padding: '30px',
  },
});

const PdfDocument = () => (
  <PDFViewer style={styles.viewer}>
    <Document
      title='CV_Jane_Doe'
      author='Jane Doe'
      subject='CV'
      creator='Jane Doe'
      producer='Jane Doe'
    >
      <Page size='A4' style={styles.page}>
        <View>
          <Text>Jane Doe</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default PdfDocument;
