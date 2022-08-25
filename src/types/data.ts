export interface FeaturesDataItem {
  id: number;
  title: string;
  body: string;
  icon: any;
}

export interface FeaturesData {
  title: string;
  description: string;
  items: FeaturesDataItem[];
}

export interface DataMenuLinkItem {
  text: string;
  url: string;
}

export interface FooterDataMenuItem {
  id: number;
  groupTitle: string;
  links: DataMenuLinkItem[];
}

interface FooterDataSocialsItem {
  id: number;
  image: any;
  url: string;
  alt: string;
}

export interface FooterData {
  menu: FooterDataMenuItem[];
  socials: FooterDataSocialsItem[];
}
