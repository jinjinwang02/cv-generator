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

type Props = {
  page: CvType;
};

const MAIN_SECTION_GAP = 12;
const SECTION_VERTICAL_GAP = 8;
const SECTION_HORIZONTAL_GAP = 12;
const CONTACT_DETAIL_GAP = 8;

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

const PdfDocument = ({ page }: Props): JSX.Element => {
  const { name, contactDetails, mainContent } = page;
  return (
    <PDFViewer style={styles.viewer}>
      <Document
        title={`${name} CV`}
        author={name}
        subject='CV'
        creator={name}
        producer={name}
      >
        <Page size='A4' style={styles.page}>
          <View style={styles.pageHeader}>
            <Text style={styles.pageHeaderTitle}>{name}</Text>
            <View style={styles.pageHeaderContactDetails}>
              {contactDetails.map((detail) => (
                <Text key={detail} style={styles.contactDetailsGap}>
                  {detail}
                </Text>
              ))}
            </View>
          </View>
          <View>
            {mainContent.map(({ heading, body, direction }, index) => (
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
};

Font.register({ family: 'Prata', src: Prata });
Font.register({
  family: 'Eurostile',
  fonts: [{ src: EuroStile }, { src: EurostileBold, fontWeight: 700 }],
});

const styles = StyleSheet.create({
  viewer: {
    height: '100vh',
    width: '100vw',
    borderWidth: 0,
  },
  page: {
    padding: '30px 30px 22px',
    fontFamily: 'Eurostile',
    fontSize: 9.5,
    letterSpacing: 0.3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pageHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: MAIN_SECTION_GAP,
  },
  pageHeaderTitle: {
    fontFamily: 'Prata',
    fontSize: 36,
  },
  pageHeaderContactDetails: {
    maxWidth: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
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
    lineHeight: 1.15,
  },
  sectionBodyFlexRowColumns: {
    flex: 1,
  },
  sectionBodyFlexRowGap: {
    marginRight: SECTION_HORIZONTAL_GAP,
  },
});

export default PdfDocument;
