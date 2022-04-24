import {
  Font,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

import Prata from '../public/fonts/Prata-Regular.ttf';

Font.register({
  family: 'Prata',
  src: Prata,
});

const styles = StyleSheet.create({
  viewer: {
    height: '100vh',
    width: '80vw',
    borderWidth: 0,
  },
  page: {
    padding: '30px',
  },
  title: {
    fontFamily: 'Prata',
    fontSize: '27px',
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
          <Text style={styles.title}>Jane Doe</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default PdfDocument;
