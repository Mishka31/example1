export interface ISkill {
    id: number;
    name: string;
}

export interface ICategory {
    id: number;
    categoryName: string;
}

export interface IOwner {
    createdAt: string;
    email: string;
    firstName: string;
    id: number;
    isGoogle: boolean;
    lastName: string;
    phoneNumber: string;
    role: string;
}

export interface IJob {
    id: number;
    title: string;
    description: string;
    price: number;
    timeAvailable: number;
    createdAt: string;
    categoryId: ICategory;
    skills: ISkill[];
    languageLevel: string;
    ownerId: IOwner;
    projectDuration: string;
    isArchived: boolean;
}

export interface IUserProfile {
    id: number;
    profileImage: string | undefined;
    availableHours: number | undefined;
    position: string | undefined;
    english: string | undefined;
    other: string | undefined;
    createdAt: string | undefined;
    updatedAt: string | undefined;
    hourRate: number | undefined;
    categories: ICategory;
    skills: ISkill[];
}

export type JobFormType = Omit<IJob, 'id' | 'createdAt' | 'ownerId'> & {
    ownerId: number;
};
