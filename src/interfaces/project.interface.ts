export interface Project {
  id: number;
  pretitle: string;
  title: string;
  thumbnail: string;
  modalImage: string;
  description: string;
  technology: string;
  path: string;
  githubFront: string | null;
  githubBack: string | null;
}
