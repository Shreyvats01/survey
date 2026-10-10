export type SurveyStatus = "upcoming" | "ongoing" | "completed";

export interface SurveyForm {
  language: string;
  url: string;
}

export interface Survey {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  status: SurveyStatus;
  formUrl: string | null;
  forms?: SurveyForm[];
  coverImage: string;
  coverImageAlt: string;
  estimatedMinutes?: number;
  startDate?: string;
  endDate?: string;
  languages: string[];
  featured: boolean;
  tags: string[];
  objective?: string;
  targetAudience?: string;
  privacyNote?: string;
}
