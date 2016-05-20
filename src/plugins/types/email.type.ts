/**
 * Email object for Opening Email Composer
 */
export interface Email {
  app?: string;
  to: string | Array<string>;
  cc: string | Array<string>;
  bcc: string | Array<string>;
  attachments: Array<any>;
  subject: string;
  body: string;
  isHtml: boolean;
}