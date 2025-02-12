export type TBlogPost = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  image: string;
  title: string;
  userName: string;
  __v: number;
  category: string;
  userEmail: string;
};

export type TProject = {
  _id: string;
  title: string;
  description: string;
  projectFeatures: string;
  technologies: string;
  fronEndGithub: string;
  backendEndGithub: string;
  projectLiveLink: string;
  image: string;
  userEmail: string;
};

export type TContactMessage = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  message: string;
  name: string;
  __v: number;
};
