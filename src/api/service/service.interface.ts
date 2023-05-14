export interface ServiceList {
  data: {
    title: string;
    description: string;
    sidebar_text: string;
    items: ServiceItems;
  };
}

export type ServiceItems = {
  title: string;
  description: string;
}[];
