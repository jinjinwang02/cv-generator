import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen';

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * CV
 *
 *
 */
export interface CvType extends SanityDocument {
  _type: 'cv';

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: 'slug'; current: string };

  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Contact details — `array`
   *
   *
   */
  contactDetails: Array<SanityKeyed<string>>;

  /**
   * Main content — `array`
   *
   *
   */
  mainContent: Array<SanityKeyed<MainContentType>>;

  /**
   * Spacing — `object`
   *
   *
   */
  spacing: {
    _type: 'spacing';
    /**
     * Document horizontal padding — `number`
     *
     * Default: 30(px)
     */
    documentHorizontalPadding?: number;

    /**
     * Document vertical padding — `number`
     *
     * Default: 30(px)
     */
    documentVerticalPadding?: number;

    /**
     * Main section gap — `number`
     *
     * Gap between each section, e.g. between Profile and Employment. Default: 12(px)
     */
    mainSectionGap?: number;

    /**
     * Section horizontal gap — `number`
     *
     * Gap within each section with horizontal layout, e.g. between skills. Default: 12(px)
     */
    sectionHorizontalGap?: number;

    /**
     * Section vertical gap — `number`
     *
     * Gap within each section with vertical layout, e.g. between employment history . Default: 8(px)
     */
    sectionVerticalGap?: number;
  };
}

export type MainContentType = {
  _type: 'mainContent';
  /**
   * Heading — `string`
   *
   *
   */
  heading: string;

  /**
   * Direction — `string`
   *
   *
   */
  direction: 'column' | 'row';

  /**
   * Body — `array`
   *
   *
   */
  body: Array<SanityKeyed<RowsType>>;
};

export type RowFragmentType = {
  _type: 'rowFragment';
  /**
   * Fragments — `array`
   *
   *
   */
  fragments: Array<
    SanityKeyed<{
      _type: 'fragment';
      /**
       * Content — `text`
       *
       *
       */
      content: string;

      /**
       * Style — `string`
       *
       *
       */
      style: 'bold' | 'default';
    }>
  >;
};

export type RowsType = {
  _type: 'rows';
  /**
   * Row — `array`
   *
   *
   */
  row: Array<SanityKeyed<RowFragmentType>>;
};

export type Documents = CvType;
