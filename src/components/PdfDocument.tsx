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
import EurostileBold from '../public/fonts/Eurostile-Bold.ttf';
import EuroStile from '../public/fonts/Eurostile-Regular.ttf';

Font.register({ family: 'Prata', src: Prata });
Font.register({
  family: 'Eurostile',
  fonts: [{ src: EuroStile }, { src: EurostileBold, fontWeight: 700 }],
});

const styles = StyleSheet.create({
  viewer: {
    height: '100vh',
    width: '80vw',
    borderWidth: 0,
  },
  page: {
    padding: '30px',
    fontFamily: 'Eurostile',
    fontSize: '14px',
  },
  title: {
    fontFamily: 'Prata',
    fontSize: '36px',
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
          <Text>Hello!</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default PdfDocument;
