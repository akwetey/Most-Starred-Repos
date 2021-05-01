export interface BreadcrumbItems {
  name: string;
  to?: string;
  isActive: boolean;
}

interface Owner {
  avatar_url: string;
  login: string;
}
export interface Items {
  name: string;
  description: string;
  stargazers_count: number;
  open_issues_count: number;
  created_at: string;
  owner: Owner;
}
