export interface BreadcrumbProps {
  classNameRoot?: string;
  classNameListRoot?: string;
  crumbsList: TCrumbItem[];
}

export type TCrumbItem = {
  text: string;
  onClick?: () => void;
  active?: boolean;
};
