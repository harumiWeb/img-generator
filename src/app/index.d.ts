export interface altTexts {
  altTexts: {
    img1?: {
      altText1: string;
      altText2: string;
      altText3: string;
    };
    img2?: {
      altText1: string;
      altText2: string;
      altText3: string;
    };
    img3?: {
      altText1: string;
      altText2: string;
      altText3: string;
    };
    img4?: {
      altText1: string;
      altText2: string;
      altText3: string;
    };
    img5?: {
      altText1: string;
      altText2: string;
      altText3: string;
    };
  };
}

export interface GeneratedAltJson {
  [key: string]: { altText1: string; altText2: string; altText3: string };
}

export interface SettingsType {
  src: string;
  loading: string;
  fetchPriority: string;
  decoding: string;
}
