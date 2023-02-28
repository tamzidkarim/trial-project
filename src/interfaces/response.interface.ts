export interface HttpResponse {
  success: boolean;
  errors: string[] | null;
  data: any;
}
