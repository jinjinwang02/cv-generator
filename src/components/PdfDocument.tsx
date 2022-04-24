import {
  Font,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

import { data } from '../data';
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
    padding: 30,
    fontFamily: 'Eurostile',
    fontSize: 10,
    letterSpacing: 0.5,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Prata',
    fontSize: 36,
  },
  contactDetail: {
    maxWidth: 80,
    paddingTop: 8,
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
        <View style={styles.header}>
          <Text style={styles.title}>{data.title}</Text>
          <View>
            {data.contactDetails.map((detail) => (
              <Text key={detail} style={styles.contactDetail}>
                {detail}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default PdfDocument;
