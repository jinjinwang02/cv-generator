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

type SpacingKey = keyof Omit<CvType['spacing'], '_type'>;
type Spacing = { [key in SpacingKey]: number };

type SectionProps = { body: RowsType[]; spacing: Spacing };

const DEFAULT_DOCUMENT_HORIZONTAL_PADDING = 30;
const DEFAULT_DOCUMENT_VERTICAL_PADDING = 30;
const DEFAULT_MAIN_SECTION_GAP = 12;
const DEFAULT_SECTION_HORIZONTAL_GAP = 12;
const DEFAULT_SECTION_VERTICAL_GAP = 8;

const Row = ({ fragments }: { fragments: RowFragmentType['fragments'] }) => {
  const styles = StyleSheet.create({
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
  });
  return (
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
};

const VerticalSection = ({ body, spacing }: SectionProps) => {
  const styles = StyleSheet.create({
    sectionBodyFlexColumn: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: spacing.mainSectionGap,
      marginVertical: -spacing.sectionVerticalGap / 2,
    },
    sectionBodyFlexColumnGap: {
      marginVertical: spacing.sectionVerticalGap / 2,
    },
  });

  return (
    <View style={styles.sectionBodyFlexColumn}>
      {body.map(({ row }, index) => (
        <View key={index} style={styles.sectionBodyFlexColumnGap}>
          {row.map(({ fragments }, index) => (
            <Row key={index} fragments={fragments} />
          ))}
        </View>
      ))}
    </View>
  );
};

const HorizontalSection = ({ body, spacing }: SectionProps) => {
  const styles = StyleSheet.create({
    sectionBodyFlexRow: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: spacing.mainSectionGap,
      marginHorizontal: -spacing.sectionHorizontalGap / 2,
    },
    sectionBodyFlexRowColumns: {
      flex: 1,
    },
    sectionBodyFlexRowGap: {
      marginHorizontal: spacing.sectionHorizontalGap / 2,
    },
  });
  return (
    <View style={styles.sectionBodyFlexRow}>
      {body.map(({ row }, index) => (
        <View key={index} style={styles.sectionBodyFlexRowColumns}>
          <View style={styles.sectionBodyFlexRowGap}>
            {row.map(({ fragments }, index) => (
              <Row key={index} fragments={fragments} />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

const PdfDocument = ({ page }: Props): JSX.Element => {
  const { name, contactDetails, mainContent } = page;
  const spacing = {
    documentHorizontalPadding:
      page?.spacing?.documentHorizontalPadding ??
      DEFAULT_DOCUMENT_HORIZONTAL_PADDING,
    documentVerticalPadding:
      page?.spacing?.documentVerticalPadding ??
      DEFAULT_DOCUMENT_VERTICAL_PADDING,
    mainSectionGap: page?.spacing?.mainSectionGap ?? DEFAULT_MAIN_SECTION_GAP,
    sectionHorizontalGap:
      page?.spacing?.sectionHorizontalGap ?? DEFAULT_SECTION_HORIZONTAL_GAP,
    sectionVerticalGap:
      page?.spacing?.sectionVerticalGap ?? DEFAULT_SECTION_VERTICAL_GAP,
  };

  const styles = StyleSheet.create({
    viewer: {
      height: '100vh',
      width: '100vw',
      borderWidth: 0,
    },
    page: {
      paddingHorizontal: spacing.documentHorizontalPadding,
      paddingVertical: spacing.documentVerticalPadding,
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
      paddingBottom: spacing.mainSectionGap,
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
      marginTop: 8,
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
  });
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
                  <VerticalSection body={body} spacing={spacing} />
                ) : (
                  <HorizontalSection body={body} spacing={spacing} />
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

export default PdfDocument;
