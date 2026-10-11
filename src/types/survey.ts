export type SurveyStatus = "ongoing" | "completed" | "unconfirmed" | "upcoming";

export interface SurveyForm {
  language: string;
  url: string;
}

export interface SurveyImage {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
}

export interface ExplorationTopic {
  title: string;
  description: string;
  tag?: string;
}

export interface ResearchLink {
  title: string;
  url?: string;
  type?: string;
}

export interface SurveyAboutSection {
  heading?: string;
  paragraphs: string[];
  supportingImage?: SurveyImage;
}

export interface AudienceGroup {
  title: string;
  description?: string;
}

export interface SurveyAudienceSection {
  heading?: string;
  description: string;
  targetGroups: (string | AudienceGroup)[];
}

export interface SurveyExplorationSection {
  heading?: string;
  intro?: string;
  topics: ExplorationTopic[];
  gallery?: SurveyImage[];
}

export interface SurveySignificanceSection {
  heading?: string;
  paragraphs: string[];
  wideImage?: SurveyImage;
}

export interface SurveyParticipationSection {
  status: SurveyStatus;
  formUrl: string | null;
  forms?: SurveyForm[];
  estimatedMinutes?: number;
  instructions?: string;
  unavailableReason?: string;
  privacyNotice?: string;
}

export interface Survey {
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  subtitle?: string;
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
  about?: SurveyAboutSection;
  audience?: SurveyAudienceSection;
  exploration?: SurveyExplorationSection;
  significance?: SurveySignificanceSection;
  closingStatement?: string;
  participation?: SurveyParticipationSection;
  relatedSurveySlugs?: string[];
  relatedLinks?: ResearchLink[];
}
