export type LabOption = {
  key: string;
  label: string;
  type: "number" | "text" | "select";
  default?: string | number;
  choices?: string[];
};

export interface LabTool {
  id: string;
  options?: LabOption[];
  run(input: string, options?: Record<string, string>): string | Promise<string>;
}

