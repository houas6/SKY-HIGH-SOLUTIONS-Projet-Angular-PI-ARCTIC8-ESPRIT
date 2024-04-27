import { Modalite } from "./Modalite";

export interface EventModel {
    id: number;
    name: string;
    description: string;
    location: string;
    startTime: Date;
    endTime: Date;
    status: boolean;
    capacity: number;
    event_img_url: string;
    event_img_name: string;

    modalite: Modalite;
    users?: number[];
}

