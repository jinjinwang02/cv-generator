import {
  Font,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

import { CvType, RowFragmentType, RowsType } from '../types/sanity';
import Prata from '../public/fonts/Prata-Regular.ttf';
import EurostileBold from '../public/fonts/Eurostile-Bold.ttf';
import EuroStile from '../public/fonts/Eurostile-Regular.ttf';

Font.register({ family: 'Prata', src: Prata });
Font.register({
  family: 'Eurostile',
  fonts: [{ src: EuroStile }, { src: EurostileBold, fontWeight: 700 }],
});

type Props = {
  page: CvType;
};

const MAIN_SECTION_GAP = 12;
const SECTION_VERTICAL_GAP = 8;
const SECTION_HORIZONTAL_GAP = 12;
const CONTACT_DETAIL_GAP = 8;

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
    letterSpacing: 0.4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pageHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
  },
  pageHeaderTitle: {
    fontFamily: 'Prata',
    fontSize: 36,
  },
  pageHeaderContactDetails: {
    maxWidth: 80,
  },
  contactDetailsGap: {
    marginTop: CONTACT_DETAIL_GAP,
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  sectionColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionHeading: {
    flex: 1,
    fontSize: 12,
    letterSpacing: 0,
    fontWeight: 700,
    textTransform: 'uppercase',
    maxWidth: 140,
  },
  sectionBodyFlexColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: MAIN_SECTION_GAP,
  },
  sectionBodyFlexRow: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: MAIN_SECTION_GAP,
  },
  sectionBodyFlexColumnGap: {
    marginBottom: SECTION_VERTICAL_GAP,
  },
  sectionBodyRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionBodyRowTextBold: {
    letterSpacing: 0,
    fontWeight: 700,
  },
  sectionBodyFlexRowColumns: {
    flex: 1,
  },
  sectionBodyFlexRowGap: {
    marginRight: SECTION_HORIZONTAL_GAP,
  },
});

const Row = ({ fragments }: { fragments: RowFragmentType['fragments'] }) => (
  <View style={styles.sectionBodyRow}>
    {fragments.map(({ style, content }) => (
      <Text
        key={content}
        style={style === 'bold' ? styles.sectionBodyRowTextBold : undefined}
      >
        {content}
      </Text>
    ))}
  </View>
);

const VerticalSection = ({ body }: { body: RowsType[] }) => (
  <View style={styles.sectionBodyFlexColumn}>
    {body.map(({ row }, index, array) => (
      <View
        key={index}
        style={
          index + 1 !== array.length
            ? styles.sectionBodyFlexColumnGap
            : undefined
        }
      >
        {row.map(({ fragments }, index) => (
          <Row key={index} fragments={fragments} />
        ))}
      </View>
    ))}
  </View>
);

const HorizontalSection = ({ body }: { body: RowsType[] }) => (
  <View style={styles.sectionBodyFlexRow}>
    {body.map(({ row }, index, array) => (
      <View key={index} style={styles.sectionBodyFlexRowColumns}>
        <View
          style={
            index + 1 !== array.length
              ? styles.sectionBodyFlexRowGap
              : undefined
          }
        >
          {row.map(({ fragments }, index) => (
            <Row key={index} fragments={fragments} />
          ))}
        </View>
      </View>
    ))}
  </View>
);

const PdfDocument = ({ page }: Props): JSX.Element => (
  <PDFViewer style={styles.viewer}>
    <Document
      title='CV_Jane_Doe'
      author='Jane Doe'
      subject='CV'
      creator='Jane Doe'
      producer='Jane Doe'
    >
      <Page size='A4' style={styles.page}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageHeaderTitle}>{page.name}</Text>
          <View style={styles.pageHeaderContactDetails}>
            {page.contactDetails.map((detail) => (
              <Text key={detail} style={styles.contactDetailsGap}>
                {detail}
              </Text>
            ))}
          </View>
        </View>
        <View>
          {page.mainContent.map(({ heading, body, direction }, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionHeading}>{heading}</Text>
              {direction === 'column' ? (
                <VerticalSection body={body} />
              ) : (
                <HorizontalSection body={body} />
              )}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default PdfDocument;
