export interface PipelineTabs {
  name: string;
  icon?: string;
  path: string;
  nestedtabs?: Array<PipelineTabs>;
}
