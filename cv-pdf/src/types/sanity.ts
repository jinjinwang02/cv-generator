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
} from "sanity-codegen";

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
  _type: "cv";

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

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
}

export type MainContentType = {
  _type: "mainContent";
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
  direction: "column" | "row";

  /**
   * Body — `array`
   *
   *
   */
  body: Array<SanityKeyed<RowsType>>;
};

export type RowFragmentType = {
  _type: "rowFragment";
  /**
   * Fragments — `array`
   *
   *
   */
  fragments: Array<
    SanityKeyed<{
      _type: "fragment";
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
      style: "bold" | "default";
    }>
  >;
};

export type RowsType = {
  _type: "rows";
  /**
   * Row — `array`
   *
   *
   */
  row: Array<SanityKeyed<RowFragmentType>>;
};

export type Documents = CvType;
