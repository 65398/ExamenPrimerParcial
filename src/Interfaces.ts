export interface Isoftware{
    id: number;
    name: string;
    price: number;
    detail: string;
    requirements: Irequirement[];
}

export interface Irequirement{
    id: number;
    description: string;
    cost: number;
    effort: number;
    softwareId: number;
}
