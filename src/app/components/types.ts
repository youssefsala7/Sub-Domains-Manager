export interface Link {
  title: string;
  url: string;
  icon: string;
  displayTitle?: string;
}

export interface ClientData {
  name: string;
  logo: string;
  description?: string;
  links: Link[];
  customization?: {
    backgroundColor?: string;
    textColor?: string;
    buttonStyle?: string;
    font?: string;
    accentColor?: string;
  };
}
